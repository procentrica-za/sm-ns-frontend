import { Component, OnInit, ViewChild, ElementRef, OnDestroy, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TextField } from 'tns-core-modules/ui/text-field';
import { RouterExtensions } from "nativescript-angular/router";
import { AuthService } from "../auth.service";
import { Subscription } from "rxjs";
import { RegisterResult, GetBookResult } from "../auth.model";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { InstitutionListPickerComponent } from "../institution-listpicker/institution-listpicker.component";
import { ModalDialogService } from 'nativescript-angular/modal-dialog';
import { BarcodeScanner } from 'nativescript-barcodescanner';

@Component({
    selector: 'ns-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    moduleId: module.id
})
export class RegisterComponent implements OnInit, OnDestroy {
    form: FormGroup;
    isbnControlIsValid = true;
    titleControlIsValid = true;
    isLoading = false;
    public institutionNameBind;
    public Gotbook: boolean;
 


    @ViewChild('isbnEl', {static:false}) isbnEl: ElementRef<TextField>;
    @ViewChild('hiddenEl', {static:false}) hiddenEl: ElementRef<TextField>;

    bookResultSub: Subscription;
    book: GetBookResult;

    constructor(private router: RouterExtensions, private authServ: AuthService, private barcodeScanner: BarcodeScanner) {
        this.institutionNameBind = "";

    }
    ngOnInit() {
        this.form = new FormGroup({
            isbn: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                }
            ),

        });
        this.form.get('isbn').statusChanges.subscribe(status => {
            this.isbnControlIsValid = status === 'VALID';
        });

        
        this.bookResultSub = this.authServ.currentGetBook.subscribe(
            bookresult => {
                if(bookresult){
                    this.isLoading = false;
                    this.book = bookresult;
 
                    if(this.book.responseStatusCode === 200 && this.book.Title != ""){
                        this.Gotbook = true;                  
                       
                    
                    } else if (this.book.responseStatusCode === 200 && this.book.Title == ""){
                        TNSFancyAlert.showError("No Book", "We unfortunately could not find the book you are looking for", "Dismiss");
                        this.authServ.clearRegistration();
                    }
                    else if (this.book.responseStatusCode === 400){
                        TNSFancyAlert.showError("Error", "this.book.Message", "Dismiss");
                        this.authServ.clearRegistration();
                    }
                    else {
                        TNSFancyAlert.showError("Error", "this.book.Message", "Dismiss");
                        this.authServ.clearRegistration();
                    }
                    
                }
            }
        );
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
            }, (errorMessage) => {
                console.log("Error when scanning " + errorMessage);
            }
        );
    }
  
    onRegisterUser() {
        this.hiddenEl.nativeElement.focus();
        this.isbnEl.nativeElement.focus();
        this.isbnEl.nativeElement.dismissSoftInput();
        
        if(!this.form.valid){
            return;
        }
        const isbn = this.form.get('isbn').value;

        //Timeout to give loading bar time to appear
        this.authServ.GetBook(isbn);
            //Verify book Credentials
            

    }

      ngOnDestroy() {
        if(this.bookResultSub){
            this.bookResultSub.unsubscribe();
        }
    }
}