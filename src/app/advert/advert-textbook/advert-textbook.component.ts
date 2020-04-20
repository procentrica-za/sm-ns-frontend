import { Component, OnInit, OnDestroy, ViewContainerRef, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AdvertService } from "../advert.service";
import { GetBookResult, UploadTextbookResult} from '../advert.model';
import { Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { AdvertListPickerComponent } from "../advert-listpicker/advert-listpicker.component";
import { RadListView, ListViewEventData } from "nativescript-ui-listview";
import { RouterExtensions } from "nativescript-angular/router";
import { EventData } from "tns-core-modules/ui/page/page";
import { Switch } from "tns-core-modules/ui/switch/switch";
import { ObservableArray, ChangedData } from "tns-core-modules/data/observable-array";
import * as appSettings from "tns-core-modules/application-settings";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { BarcodeScanner } from 'nativescript-barcodescanner';


import { TextField } from 'tns-core-modules/ui/text-field';
@Component({
    selector: 'ns-advert-textbook',
    templateUrl: './advert-textbook.component.html',
    styleUrls: ['./advert-textbook.component.scss'],
    moduleId: module.id
})

export class AdvertTextbookComponent implements OnInit, OnDestroy {
    form: FormGroup;
    //new textbook
    isbnControlIsValid = true;
    nameControlIsValid = true;
    editionControlIsValid = true;
    qualityControlIsValid = true;
    authorControlIsValid = true;
    public moduleCodeTypeBindNote; qualitytypeBind;
    
    bookResultSub: Subscription;
    book: GetBookResult;

    uploadResultSub: Subscription;
    upload: UploadTextbookResult;

    public Gotbook: boolean;
    public GotScan: boolean;
    public Author: string;
    public Title: string;
    //Add new textbook
@ViewChild('nameEl', {static:false}) nameEl: ElementRef<TextField>;
@ViewChild('modulecodeEl', {static:false}) modulecodeEl: ElementRef<TextField>;
@ViewChild('editionEl', {static:false}) editionEl: ElementRef<TextField>;
@ViewChild('qualityEl', {static:false}) qualityEl: ElementRef<TextField>;
@ViewChild('authorEl', {static:false}) authorEl: ElementRef<TextField>;

    constructor(private advertServ: AdvertService, private router: RouterExtensions, private modalDialog: ModalDialogService, private vcRef: ViewContainerRef, private barcodeScanner: BarcodeScanner) {

    }

  

       
    ngOnInit() {
            
        this.Author = "";
        this.Title = "";
        
        
        this.bookResultSub = this.advertServ.currentGetBook.subscribe(
            bookresult => {
                if(bookresult){

                    this.book = bookresult;
 
                    if(this.book.responseStatusCode === 200 && this.book.Title != ""){
                    this.Gotbook = true;    

                    var oldstr = this.book.Author;
                    var newstr =oldstr.toString().replace("["," ");
                    this.Author = newstr.toString().replace("]"," ");    
                    this.Title = this.book.Title;
                       this.advertServ.clearBook();
                    
                    } else if (this.book.responseStatusCode === 500 ){
                        TNSFancyAlert.showError("No Book", "We unfortunately could not find the book you are looking for", "Dismiss");
                        this.Gotbook = true;
                      
      
                    }
                    else if (this.book.responseStatusCode === 400){
                        TNSFancyAlert.showError("Error", "Unfortunately we do not have knowledge of this textbook", "Dismiss");
                        this.Gotbook = true;
              
                    }
                    else {
                        TNSFancyAlert.showError("Error", "Unfortunately we do not have knowledge of this textbook", "Dismiss");
                        this.Gotbook = true;
                        this.Title = this.book.Title;
                        this.Author = this.book.Author;  
                        this.advertServ.clearBook();
   
                    }
                    
                }
            }
        );

        this.uploadResultSub = this.advertServ.currentUploadTextbook.subscribe(
            uploadresult => {
                if(uploadresult){
                    this.upload = uploadresult;
 
                    if(this.upload.responseCode === 200 && this.upload.ID != '00000000-0000-0000-0000-000000000000'){
                    TNSFancyAlert.showSuccess("Book success","Your textbook has been successfully uploaded", "Dismiss");
                    this.advertServ.setAddTextbook(uploadresult);
                    this.advertServ.clearUpload();
                    this.router.back();
                       
                    
                    } else if (this.upload.responseCode === 500 ){
                        TNSFancyAlert.showError("Connection Error", "An internal error has occured.", "Dismiss");
                 
      
                    }
                    else if (this.upload.responseCode === 400){
                        TNSFancyAlert.showError("Error", "An Error has been recieved, please contact support.", "Dismiss");
              
              
                    }
                    else {
                        TNSFancyAlert.showError("Error", "An Error has been recieved, please contact support.", "Dismiss");
                        this.advertServ.clearUpload();
             
   
                    }
                    
                }
            }
        );

        this.form = new FormGroup({
            modulecode: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                }
            ),
            name: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required,
                    ]
                }
            ),
            edition: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                }
            ),
            quality: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                }
            ),
            author: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                }
            ),
        });
        this.form.get('name').statusChanges.subscribe(status => {
            this.nameControlIsValid = status === 'VALID';
        });
        this.form.get('edition').statusChanges.subscribe(status => {
            this.editionControlIsValid = status === 'VALID';
        });
        this.form.get('quality').statusChanges.subscribe(status => {
            this.qualityControlIsValid = status === 'VALID';
        });
        this.form.get('author').statusChanges.subscribe(status => {
            this.authorControlIsValid = status === 'VALID';
        });

        




    }
    
    onItemSelected(args :ListViewEventData): void {
        const tappedAdvertItem = args.view.bindingContext;
        this.advertServ.setAdvert(tappedAdvertItem.advertisementtype, tappedAdvertItem.advertisementid);
        appSettings.setString("sellerid", tappedAdvertItem.userid);
        appSettings.setString("advertisementtype", tappedAdvertItem.advertisementtype);
        appSettings.setString("advertisementid", tappedAdvertItem.advertisementid);
        this.router.navigate(['/advert/details'],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });
    }

    onTextbookModuleCodeTypeTap(){
        this.modalDialog.showModal(AdvertListPickerComponent, {viewContainerRef: this.vcRef,
            animated: true,
            fullscreen: true,
            context: {string: "ModuleCodeType" } }).then((selection:string) => {
                this.moduleCodeTypeBindNote=selection;
            });      
    }

    onQualityTypeTap(){
        this.modalDialog.showModal(AdvertListPickerComponent, {viewContainerRef: this.vcRef,
            animated: true,
            fullscreen: true,
            context: {string: "QualityType" } }).then((selection:string) => {
                this.qualitytypeBind=selection;
            });      
    }


    public onScan() {
        this.barcodeScanner.scan({
            formats: "QR_CODE, EAN_13",
            showFlipCameraButton: true,   
            preferFrontCamera: false,     
            showTorchButton: true,        
            beepOnScan: true,             
            torchOn: false,               
            resultDisplayDuration: 500,       
            openSettingsIfPermissionWasPreviouslyDenied: true //ios only 
        }).then((result) => {
            alert({
                title: "You Scanned ",
                message: "Format: " + result.format + ",\nContent: " + result.text,
                okButtonText: "OK"
            });
            this.advertServ.GetBook(result.text);

            }, (errorMessage) => {
                console.log("Error when scanning " + errorMessage);
            }
        );
    }

    onPostNewTextbook () {
        this.modulecodeEl.nativeElement.focus();
        this.nameEl.nativeElement.focus();
        this.editionEl.nativeElement.focus();
        this.qualityEl.nativeElement.focus();
        this.authorEl.nativeElement.focus();
        this.authorEl.nativeElement.dismissSoftInput();

        if(!this.form.valid){
            return;
        }
 
        const modulecode = this.form.get('modulecode').value;
        const name = this.form.get('name').value;
        const edition = this.form.get('edition').value;
        const quality = this.form.get('quality').value;
        const author = this.form.get('author').value;

        this.advertServ.UploadNewTextbook(modulecode, name, edition, quality, author);
    }

  

    ngOnDestroy() {
        if(this.bookResultSub){
            this.bookResultSub.unsubscribe();
        }
        if(this.uploadResultSub){
            this.uploadResultSub.unsubscribe();
        }
        }
    }

