import { Component, OnInit, OnDestroy,ViewChild, ElementRef, ViewContainerRef } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TextField } from 'tns-core-modules/ui/text-field';
import { DropDown, SelectedIndexChangedEventData}  from "nativescript-drop-down"
import { EventData } from "tns-core-modules/ui/page/page";
import { Switch } from "tns-core-modules/ui/switch/switch";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { ModalDialogService } from 'nativescript-angular/modal-dialog';
import { AdvertListPickerComponent } from "../advert-listpicker/advert-listpicker.component";
import { AdvertService } from "../advert.service";
import * as appSettings from "tns-core-modules/application-settings";
import * as camera from "nativescript-camera";
import { Image } from "tns-core-modules/ui/image";
import * as imagepicker from "nativescript-imagepicker";
import { ImageSource } from "tns-core-modules/image-source/image-source";
import { ImageAsset } from "tns-core-modules/image-asset/image-asset";
import { BehaviorSubject, Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";

@Component({
    selector: 'ns-add-advert',
    templateUrl: './add-advert.component.html',
    moduleId: module.id
})
  


export class AddAdvertComponent implements OnInit, OnDestroy {
    form: FormGroup;
    public advertTypes; accomodationTypes; institutionTypes : Array<string>;
    public selectedIndex = 0;
    public isSelling; textbookCapture; accomodationCapture; tutorCapture; noteCapture: boolean;
    public advertType; accomodationType; institutionType; acdTypeBind; instTypeBind; myImg: string;

    constructor(private modalDialog: ModalDialogService, private vcRef: ViewContainerRef, private advertServ : AdvertService) {
        this.myImg = "";
        this.acdTypeBind = "";
        this.instTypeBind = "";
        this.advertTypes = new Array<string>("Textbook", "Accomodation", "Tutor", "Note");
        this.accomodationTypes = new Array<string>("Apartement", "Commune", "House", "Garden Cottage");
        this.institutionTypes = new Array<string>("University Of Pretoria","University Of Johannesburg");
        this.isSelling = true;
        this.textbookCapture = false;
        this.accomodationCapture = false;
        this.tutorCapture = false;
        this.noteCapture = false;
    }

    @ViewChild('priceEl', {static:false}) priceEl: ElementRef<TextField>;
    @ViewChild('descriptionEl', {static:false}) descriptionEl: ElementRef<TextField>;
    @ViewChild('locationEl', {static:false}) locationEl: ElementRef<TextField>;
    @ViewChild('distanceEl', {static:false}) distanceEl: ElementRef<TextField>;
    @ViewChild('acdTypeEl', {static:false}) acdTypeEl: ElementRef<TextField>;
    @ViewChild('instTypeEl', {static:false}) instTypeEl: ElementRef<TextField>;
   
    ngOnInit(){
        
        

        this.form = new FormGroup({
            description: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                   
                }
            ),
            price: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                }
            ),
            location: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                    
                }
            ),
            instType: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                   
                }
            ),
            distance: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                   
                }
            ),
            acdType: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                   
                }
            )
        });
            /*this.form.get('description').statusChanges.subscribe(status => {
                //this.usernameControlIsValid = status === 'VALID';
            });
            this.form.get('price').statusChanges.subscribe(status => {
                //this.passwordControlIsValid = status === 'VALID';
            });
            this.form.get('location').statusChanges.subscribe(status => {
                //this.passwordControlIsValid = status === 'VALID';
            });
            this.form.get('distance').statusChanges.subscribe(status => {
                //this.passwordControlIsValid = status === 'VALID';
            });
            this.form.get('advertType').statusChanges.subscribe(status => {
                //this.passwordControlIsValid = status === 'VALID';
            });*/
    }

    ngOnDestroy(){

    }

   
    uploadPic(){
        let context = imagepicker.create({
            mode: "single" // use "multiple" for multiple selection
        });
        
        context.authorize().then(function() {
            return context.present();
        }).then(selection => {
            selection.forEach(selected => {
                let source = new ImageSource();
                source.fromAsset(selected).then((imgSource: ImageSource) => {
                    this.myImg = imgSource.toBase64String("png");
                    this.myImg = "data:image/png;base64," + this.myImg;
                });
            });  
        }).catch(function (e) {
            // process error
        }); 
    }

    /*On Rest Till I can fogure out how to access this. inside source then
    takePic(){
       camera.requestPermissions().then(
            function success() {
                // permission request accepted or already granted 
                camera.takePicture()
                .then((imageAsset) => {
                    let source = new ImageSource();
                    source.fromAsset(imageAsset).then((imgSource: ImageSource) => {
                        

                    })
                }).catch((err) => {
                    console.log("Error -> " + err.message);
                });
            }, 
            function failure() {
                // permission request rejected
                // ... tell the user ...
            }
        );
    }*/

    generateUUIDv4() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
    };

    

    onPostTap() {

        console.log("Start");
        this.priceEl.nativeElement.focus();
        this.descriptionEl.nativeElement.focus();
        this.locationEl.nativeElement.focus();
        this.distanceEl.nativeElement.focus();
        this.acdTypeEl.nativeElement.focus();
        this.instTypeEl.nativeElement.focus();

        
        if(!this.form.valid){
            return;
        }
        const userid = appSettings.getString('userid');
        const price = this.form.get('price').value;
        const description = this.form.get('description').value;
        const location = this.form.get('location').value;
        const distance = this.form.get('distance').value;
        var acdType = this.form.get('acdType').value;
        const instType = this.form.get('instType').value;
        const accomodationID = this.generateUUIDv4();

        switch (acdType){
            case "Apartement": {
                acdType = "APT";
                break;
            }
            case "Commune": {
                acdType = "COM";
                break;
            }
            case "House": {
                acdType = "HSE";
                break;
            }
            case "Garden Cottage": {
                acdType = "GDC";
                break;
            }
            default: {

            }
        }
        //this.isLoading = true;
        //Timeout to give loading bar time to appear
       /* console.log("UserID: " + userid +
                    "\n Selling: " + this.isSelling + 
                    "\n advertType: " + this.advertType + 
                    "\n Price: " + price + 
                    "\n description: " + description + 
                    "\n AccomodationID: " + accomodationID +
                    "\n AccomodationType: " + acdType + 
                    "\n Location: " + location +
                    "\n Distance: " + distance +
                    "\n InstitutionType: " + instType)*/
        setTimeout(() =>{
            //Call the service with captured information
            this.advertServ.AddNewAccomodationAdvertisement(userid, this.isSelling.toString(), this.advertType, price, description, accomodationID, acdType, location, distance, instType);
        },100);
    }

    onAccomodationTypeTap(){
        this.modalDialog.showModal(AdvertListPickerComponent, {viewContainerRef: this.vcRef, 
            animated: true,
            fullscreen: true,
            context: {string: "AccomodationType" } }).then((selection: string) => {
                this.acdTypeBind=selection;
            });
    }

    onInstitutionTypeTap(){
        this.modalDialog.showModal(AdvertListPickerComponent, {viewContainerRef: this.vcRef,
            animated: true,
            fullscreen: true,
            context: {string: "InstitutionType" } }).then((selection:string) => {
                this.instTypeBind=selection;
            });
    }

   /* onadvertTypeTap(){
        this.modalDialog.showModal(AdvertListPickerComponent, {viewContainerRef: this.vcRef,  animated: true, fullscreen: true, context: {string: "AdvertType" } });
    }*/


    onCheckedChange(args: EventData){
        let sw = args.object as Switch;
        this.isSelling = sw.checked;
    }

    //------------------------------------------
    // CODE USED FOR DROPDOWN MENU
    //------------------------------------------
   /* public onchange(args: SelectedIndexChangedEventData) {
    this.selectedIndex = args.newIndex;

    switch (this.selectedIndex){
        case 0:
            this.advertType = "TXB";
            break;
        case 1:
            this.advertType = "ACD";
            break;
        case 2:
            this.advertType = "TUT";
            break;
        case 3:
            this.advertType = "NTS";
            break;
    }
    }
    
     /*public onopen() {
        console.log("Drop Down opened.");
    }
 
    public onclose() {
        console.log("Drop Down closed.");
    }*/

    onSelectedIndexAdvertTypeChanged(args: EventData){
        const picker = <ListPicker>args.object;
        switch (picker.selectedIndex){
            case 0:
                this.advertType = "TXB";
                this.textbookCapture = true;
                this.accomodationCapture = false;
                this.tutorCapture = false;
                this.noteCapture = false;
                break;
            case 1:
                this.advertType = "ACD";
                this.textbookCapture = false;
                this.accomodationCapture = true;
                this.tutorCapture = false;
                this.noteCapture = false;
                break;
            case 2:
                this.advertType = "TUT";
                this.textbookCapture = false;
                this.accomodationCapture = false;
                this.tutorCapture = true;
                this.noteCapture = false;
                break;
            case 3:
                this.advertType = "NTS";
                this.textbookCapture = false;
                this.accomodationCapture = false;
                this.tutorCapture = false;
                this.noteCapture = true;
                break;
        }
    }

}