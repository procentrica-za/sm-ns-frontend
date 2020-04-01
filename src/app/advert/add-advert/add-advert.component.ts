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
import { AddAdvertisementResult, Textbook } from "../advert.model";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
@Component({
    selector: 'ns-add-advert',
    templateUrl: './add-advert.component.html',
    moduleId: module.id
})
  


export class AddAdvertComponent implements OnInit, OnDestroy {
    form: FormGroup;
    public advertTypes; accomodationTypes; institutionTypes : Array<string>;
    public selectedIndex = 0;
    public isSelling; textbookCapture; accomodationCapture; tutorCapture; noteCapture; TextbookType: boolean;
    public advertType; accomodationType; institutionType; acdTypeBind; instTypeBind; yearTypeBind; venueTypeBind; noteTypeBind; termTypeBind; moduleCodeTypeBindTutor; moduleCodeTypeBindNote; myImg; base64ImageString: string;
    public advertPostedSub; textbookSub : Subscription;
    public addTextbook : Textbook;
    private advertPosted: AddAdvertisementResult;
    

    constructor(private modalDialog: ModalDialogService, private vcRef: ViewContainerRef, private advertServ : AdvertService, private router: RouterExtensions) {
        
        this.TextbookType = false;
        this.myImg = "";
        this.acdTypeBind = "";
        this.instTypeBind = "";
        this.yearTypeBind = "";
        this.venueTypeBind = "";
        this.noteTypeBind = "";
        this.termTypeBind = "";
        this.moduleCodeTypeBindTutor = "";
        this.moduleCodeTypeBindNote = "";
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
    @ViewChild('subjectEl', {static:false}) subjectEl: ElementRef<TextField>;
    @ViewChild('yearTypeEl', {static:false}) yearTypeEl: ElementRef<TextField>;
    @ViewChild('venueTypeEl', {static:false}) venueTypeEl: ElementRef<TextField>;
    @ViewChild('noteTypeEl', {static:false}) noteTypeEl: ElementRef<TextField>;
    @ViewChild('termTypeEl', {static:false}) termTypeEl: ElementRef<TextField>;
    @ViewChild('moduleCodeTutorTypeEl', {static:false}) moduleCodeTutorTypeEl: ElementRef<TextField>;
    @ViewChild('moduleCodeNoteTypeEl', {static:false}) moduleCodeNoteTypeEl: ElementRef<TextField>;
   
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
            ),
            subject: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                   
                }
            ),
            yearType: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                   
                }
            ),
            venueType: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                   
                }
            ),
            noteType: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                   
                }
            ),
            termType: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                   
                }
            ),
            moduleCodeTutorType: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                   
                }
            ),
            moduleCodeNoteType: new FormControl(
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
        if(this.advertPostedSub){
            this.advertPostedSub.unsubscribe();
        }
       
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
                    this.base64ImageString = imgSource.toBase64String("png"); 
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

    delay(ms: number) { 
        return new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired")); 
    }

    async onPostTap() {
        
        this.priceEl.nativeElement.focus();
        this.descriptionEl.nativeElement.focus();

        const entityID = this.generateUUIDv4();
        const userid = appSettings.getString('userid');
        const price = this.form.get('price').value;
        const description = this.form.get('description').value;
            if(this.advertType == "ACD"){
                console.log("Hello There ACD");
                this.locationEl.nativeElement.focus();
                this.distanceEl.nativeElement.focus();
                this.acdTypeEl.nativeElement.focus();
                this.instTypeEl.nativeElement.focus();

                const location = this.form.get('location').value;
                const distance = this.form.get('distance').value;
                var acdType = this.form.get('acdType').value;
                const instType = this.form.get('instType').value;

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
                }
                setTimeout(() =>{
                    //Call the service with captured information
                    this.advertServ.AddNewAccomodationAdvertisement(userid, this.isSelling.toString(), this.advertType, price, description, entityID, acdType, location, distance, instType);
                },100);
        
                await this.delay(1000);
        
                this.advertPostedSub = this.advertServ.currentAddAdvertisement.subscribe(
                    advertResult => {
                        if(advertResult.advertisementposted) {
                            this.advertPosted = advertResult;
                            this.advertServ.AddNewImage(this.advertPosted.id, true, this.base64ImageString);
                            TNSFancyAlert.showSuccess("Success!", "Advertisement Successfully Posted!", "Close").then( t => {
                                this.advertServ.initializeUserAdvertisements(appSettings.getString("userid"), appSettings.getBoolean("myAdvertsSelling"));
                                this.router.backToPreviousPage(),
                                {
                                    animated: true,
                                    transition: {
                                        name: "slide",
                                        duration: 200,
                                        curve: "ease"  
                                    }
                                }
                                }
                            );
                        }else{
                            TNSFancyAlert.showError("Error!", "Advertisement Could not be Posted\n Message: " + advertResult.message,"Close");
                        }
                    }
                );
        
                if (this.advertPostedSub){
                    this.advertPostedSub.unsubscribe();
                }
            }
                

            if(this.advertType == "TXB"){
                //console.log("Hello There TXB");;
                setTimeout(() =>{
                    //Call the service with captured information
                    this.advertServ.AddNewTextbookAdvertisement(userid, this.isSelling.toString(), this.advertType, price, description, this.addTextbook.ID);
                },100);
        
                await this.delay(1000);
        
                this.advertPostedSub = this.advertServ.currentAddAdvertisement.subscribe(
                    advertResult => {
                        if(advertResult.advertisementposted) {
                            this.advertPosted = advertResult;
                            this.advertServ.AddNewImage(this.advertPosted.id, true, this.base64ImageString);
                            TNSFancyAlert.showSuccess("Success!", "Advertisement Successfully Posted!", "Close").then( t => {
                                this.advertServ.initializeUserAdvertisements(appSettings.getString("userid"), appSettings.getBoolean("myAdvertsSelling"));
                                this.router.backToPreviousPage(),
                                {
                                    animated: true,
                                    transition: {
                                        name: "slide",
                                        duration: 200,
                                        curve: "ease"  
                                    }
                                }
                                }
                            );
                        }else{
                            TNSFancyAlert.showError("Error!", "Advertisement Could not be Posted\n Message: " + advertResult.message,"Close");
                        }
                    }
                );
        
                if (this.advertPostedSub){
                    this.advertPostedSub.unsubscribe();
                }
            }
                
           
            if(this.advertType == "TUT"){
                console.log("Hello There TUT");
                this.subjectEl.nativeElement.focus();
                this.yearTypeEl.nativeElement.focus();
                this.venueTypeEl.nativeElement.focus();
                this.noteTypeEl.nativeElement.focus();
                this.termTypeEl.nativeElement.focus();
                this.moduleCodeTutorTypeEl.nativeElement.focus();
                
                const subject = this.form.get('subject').value;
                const yearType = this.form.get('yearType').value;
                const venueType = this.form.get('venueType').value;
                var noteType = this.form.get('noteType').value;
                const termType = this.form.get('termType').value;
                const moduleCodeTutorType = this.form.get('moduleCodeTutorType').value;

                if(noteType == "Yes"){
                    noteType = "True";
                }else{
                    noteType = "False";
                }
               
                setTimeout(() =>{
                    //Call the service with captured information
                    this.advertServ.AddNewTutorAdvertisement(userid, this.isSelling.toString(), this.advertType, price, description, entityID, subject, yearType,venueType,noteType,termType,moduleCodeTutorType);
                },100);
        
                await this.delay(1000);
        
                this.advertPostedSub = this.advertServ.currentAddAdvertisement.subscribe(
                    advertResult => {
                        if(advertResult.advertisementposted) {
                            this.advertPosted = advertResult;
                            this.advertServ.AddNewImage(this.advertPosted.id, true, this.base64ImageString);
                            TNSFancyAlert.showSuccess("Success!", "Advertisement Successfully Posted!", "Close").then( t => {
                                this.advertServ.initializeUserAdvertisements(appSettings.getString("userid"), appSettings.getBoolean("myAdvertsSelling"));
                                this.router.backToPreviousPage(),
                                {
                                    animated: true,
                                    transition: {
                                        name: "slide",
                                        duration: 200,
                                        curve: "ease"  
                                    }
                                }
                                }
                            );
                        }else{
                            TNSFancyAlert.showError("Error!", "Advertisement Could not be Posted\n Message: " + advertResult.message,"Close");
                        }
                    }
                );
        
                if (this.advertPostedSub){
                    this.advertPostedSub.unsubscribe();
                }
            }
            
            if(this.advertType == "NTS"){
                console.log("Hello There NTS");
                this.moduleCodeNoteTypeEl.nativeElement.focus();

                const moduleCodeNoteType = this.form.get('moduleCodeNoteType').value;

                setTimeout(() =>{
                    //Call the service with captured information
                    this.advertServ.AddNewNoteAdvertisement(userid, this.isSelling.toString(), this.advertType, price, description, entityID, moduleCodeNoteType);
                },100);
        
                await this.delay(1000);
        
                this.advertPostedSub = this.advertServ.currentAddAdvertisement.subscribe(
                    advertResult => {
                        if(advertResult.advertisementposted) {
                            this.advertPosted = advertResult;
                            this.advertServ.AddNewImage(this.advertPosted.id, true, this.base64ImageString);
                            TNSFancyAlert.showSuccess("Success!", "Advertisement Successfully Posted!", "Close").then( t => {
                                this.advertServ.initializeUserAdvertisements(appSettings.getString("userid"), appSettings.getBoolean("myAdvertsSelling"));
                                this.router.backToPreviousPage(),
                                {
                                    animated: true,
                                    transition: {
                                        name: "slide",
                                        duration: 200,
                                        curve: "ease"  
                                    }
                                }
                                }
                            );
                        }else{
                            TNSFancyAlert.showError("Error!", "Advertisement Could not be Posted\n Message: " + advertResult.message,"Close");
                        }
                    }
                );
        
                if (this.advertPostedSub){
                    this.advertPostedSub.unsubscribe();
                }
            }
    }

    onTextbookSelectTap(){
        this.modalDialog.showModal(AdvertListPickerComponent, {viewContainerRef: this.vcRef, 
            animated: true,
            fullscreen: true,
            context: {string: "TextbookType" } }).then((selection: boolean) => {
                this.TextbookType=selection;
                if(this.TextbookType){
                    this.textbookSub = this.advertServ.currentAddTextbook.subscribe(
                        (textbookResult) => {
                            this.addTextbook = textbookResult;
                        }
                    )
                }
            });

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

    onYearTypeTap(){
        this.modalDialog.showModal(AdvertListPickerComponent, {viewContainerRef: this.vcRef,
            animated: true,
            fullscreen: true,
            context: {string: "YearCompletedType" } }).then((selection:string) => {
                this.yearTypeBind=selection;
            });
    }

    onVenueTypeTap(){
        this.modalDialog.showModal(AdvertListPickerComponent, {viewContainerRef: this.vcRef,
            animated: true,
            fullscreen: true,
            context: {string: "VenueType" } }).then((selection:string) => {
                this.venueTypeBind=selection;
            });    
    }

    onTermsTypeTap(){
        this.modalDialog.showModal(AdvertListPickerComponent, {viewContainerRef: this.vcRef,
            animated: true,
            fullscreen: true,
            context: {string: "TermType" } }).then((selection:string) => {
                this.termTypeBind=selection;
            });      
    }

    onNoteTypeTap(){
        this.modalDialog.showModal(AdvertListPickerComponent, {viewContainerRef: this.vcRef,
            animated: true,
            fullscreen: true,
            context: {string: "NoteType" } }).then((selection:string) => {
                this.noteTypeBind=selection;
            });    
    }

    onTutorModuleCodeTypeTap(){
        this.modalDialog.showModal(AdvertListPickerComponent, {viewContainerRef: this.vcRef,
            animated: true,
            fullscreen: true,
            context: {string: "ModuleCodeType" } }).then((selection:string) => {
                this.moduleCodeTypeBindTutor=selection;
            });      
    }

    onNoteModuleCodeTypeTap(){
        this.modalDialog.showModal(AdvertListPickerComponent, {viewContainerRef: this.vcRef,
            animated: true,
            fullscreen: true,
            context: {string: "ModuleCodeType" } }).then((selection:string) => {
                this.moduleCodeTypeBindNote=selection;
            });      
    }

  


    onCheckedChange(args: EventData){
        let sw = args.object as Switch;
        this.isSelling = sw.checked;
    }

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