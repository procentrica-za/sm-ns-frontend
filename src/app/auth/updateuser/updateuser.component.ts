import { Component, OnInit, ViewChild, ElementRef, OnDestroy, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TextField } from 'tns-core-modules/ui/text-field';
import { RouterExtensions } from "nativescript-angular/router";
import { AuthService } from "../auth.service";
import { Subscription } from "rxjs";
import { GetUserResult, UpdateUserResult, IsVerifiedResult } from "../auth.model";
import { InstitutionListPickerComponent } from "../institution-listpicker/institution-listpicker.component";
import { ModalDialogService } from 'nativescript-angular/modal-dialog';
import { TNSFancyAlert } from "nativescript-fancyalert";
import { OtpComponent } from "../otp/otp.component";

//Import for config file
import * as appSettings from "tns-core-modules/application-settings";

@Component({
    selector: 'ns-updateuser',
    templateUrl: './updateuser.component.html',
    styleUrls: ['./updateuser.component.scss'],
    moduleId: module.id
})

export class UpdateuserComponent implements OnInit {
//set user variable
    userid = "";
    getuserResultSub: Subscription;
    public getuser: GetUserResult;
    public userFound: boolean;

    updateResultSub: Subscription;
    update: UpdateUserResult;

    isverifiedResultSub: Subscription;
    isverified: IsVerifiedResult;
    public isVerified: boolean;
    //form
    form: FormGroup;
    idControlIsValid = true;
    usernameControlIsValid = true;

    nameControlIsValid = true;
    surnameControlIsValid = true;
    emailControlIsValid = true;
    isLoading = false;
    public institutionNameBind;
 

    @ViewChild('idEl', {static:false}) idEl: ElementRef<TextField>;
    @ViewChild('usernameEl', {static:false}) usernameEl: ElementRef<TextField>;
    @ViewChild('nameEl', {static:false}) nameEl: ElementRef<TextField>;
    @ViewChild('surnameEl', {static:false}) surnameEl: ElementRef<TextField>;
    @ViewChild('emailEl', {static:false}) emailEl: ElementRef<TextField>;
    @ViewChild('institutionnameEl', {static:false}) institutionnameEl: ElementRef<TextField>;


    constructor(private authServ: AuthService, private router: RouterExtensions,  private modalDialog: ModalDialogService,  private vcRef: ViewContainerRef) {
            
    }
    ngOnInit() {
//form controls
const id = appSettings.getString("userid");
this.authServ.GetUser(id);
        this.form = new FormGroup({
            username: new FormControl(
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
                        Validators.required
                    ]
                }
            ),
            surname: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                }
            ),
            email: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                }
            ),
            institutionname: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                   
                }
            )
        });
        this.form.get('username').statusChanges.subscribe(status => {
            this.usernameControlIsValid = status === 'VALID';
        });
        this.form.get('name').statusChanges.subscribe(status => {
            this.nameControlIsValid = status === 'VALID';
        });
        this.form.get('surname').statusChanges.subscribe(status => {
            this.surnameControlIsValid = status === 'VALID';
        });
        this.form.get('email').statusChanges.subscribe(status => {
            this.emailControlIsValid = status === 'VALID';
        });


        //find User from app settings
        this.userFound = false;
        this.isVerified = false;


        //subscribe to Get User result
        this.getuserResultSub = this.authServ.currentGetUser.subscribe(
        userResult => {
            if(userResult) {
                this.getuser = userResult
                if(this.getuser.responseStatusCode === 200){
                    this.userFound = true;
                } else {
                    TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                 }
                }
             }
        );
        this.authServ.VerificationStatus();
        this.isverifiedResultSub = this.authServ.currentIsVerified.subscribe(
            isverifiedResult => {
                if(isverifiedResult) {
                    this.isverified = isverifiedResult
                    if(this.isverified.responseStatusCode === 200 && this.isverified.isverified == true){
                        this.isVerified = false;
                    } else {
                        this.isVerified = true;
                     }
                    }
                 }
            );

    //Send User ID from app settings
    }

    onInstitutionNameTap(){
        this.modalDialog.showModal(InstitutionListPickerComponent, {viewContainerRef: this.vcRef,
            animated: true,
            fullscreen: true,
            context: {string: "ModuleCodeType" } }).then((selection:string) => {
                this.institutionNameBind=selection;
            });      
    }

    onPassword(): void {
        this.router.navigate(['/newpassword'],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });

    }

    onOTP(): void {
        this.router.navigate(['/validate'],
        {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });

    }

    onUpdateUser() {
        this.usernameEl.nativeElement.focus();
        this.nameEl.nativeElement.focus();
        this.surnameEl.nativeElement.focus();
        this.emailEl.nativeElement.focus();
        this.institutionnameEl.nativeElement.focus();
        this.institutionnameEl.nativeElement.dismissSoftInput();
        if(!this.form.valid){
            return;
        }
        const id = appSettings.getString("userid");
        const username = this.form.get('username').value;
        const name = this.form.get('name').value;
        const surname = this.form.get('surname').value;
        const email = this.form.get('email').value;
         //institutions
         const institutionname = this.form.get('institutionname').value;

        this.isLoading = true;
        //Timeout to give loading bar time to appear
        setTimeout(() =>{
            //Verify register Credentials
            this.authServ.UpdateUser(id, username, name, surname, email, institutionname);
        },100);

        this.updateResultSub = this.authServ.currentUpdateUser.subscribe(
            updateresult => {
                if(updateresult){
                    this.isLoading = false;
                    this.update = updateresult;
 
                    if(this.update.responseStatusCode === 200 && this.update.UserUpdated === true){
                        TNSFancyAlert.showSuccess("Update Success", "Your details have been updated", "Dismiss").then( t => {
                       this.authServ.clearUserDetails();
                       this.router.navigate(['/advert/home'],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });
        });
                    } else if (this.update.responseStatusCode === 500 ){
                        TNSFancyAlert.showError("Error Updating", this.update.Message, "Dismiss");
                        this.authServ.clearUserDetails();
                    }
                    else if (this.update.responseStatusCode === 400 ){
                        TNSFancyAlert.showError("Error Updating", this.update.Message, "Dismiss");
                        this.authServ.clearUserDetails();
                    }
                    else {
                        TNSFancyAlert.showError("Error Updating", this.update.Message, "Dismiss");
                    }
                }
            }
            
        );

    }
    ngOnDestroy() {
        if(this.getuserResultSub){
            this.getuserResultSub.unsubscribe();
        }
        
        if(this.updateResultSub){
            this.updateResultSub.unsubscribe();
        }

        if(this.isverifiedResultSub){
            this.isverifiedResultSub.unsubscribe();
        }
        }
 }