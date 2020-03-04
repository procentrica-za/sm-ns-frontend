import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TextField } from 'tns-core-modules/ui/text-field';
import { RouterExtensions } from "nativescript-angular/router";
import { AuthService } from "../auth.service";
import { Subscription } from "rxjs";
import { GetUserResult, UpdatePasswordResult } from "../auth.model";
import { TNSFancyAlert } from "nativescript-fancyalert";

//Import for config file
import * as appSettings from "tns-core-modules/application-settings";

@Component({
    selector: 'ns-newpassword',
    templateUrl: './newpassword.component.html',
    styleUrls: ['./newpassword.component.scss'],
    moduleId: module.id
})

export class NewpasswordComponent implements OnInit {
//set user variable
    userid = "";
    getuserResultSub: Subscription;
    public getuser: GetUserResult;
    public userFound: boolean;

    updateResultSub: Subscription;
    update: UpdatePasswordResult;

    //form
    form: FormGroup;
    idControlIsValid = true;
    passwordControlIsValid = true;
    isLoading = false;
 

    @ViewChild('idEl', {static:false}) idEl: ElementRef<TextField>;
    @ViewChild('passwordEl', {static:false}) passwordEl: ElementRef<TextField>;


    constructor(private authServ: AuthService) {
            
    }
    ngOnInit() {
//form controls
        this.form = new FormGroup({
            id: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                }
            ),
            password: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                }
            )
        });
        this.form.get('id').statusChanges.subscribe(status => {
            this.idControlIsValid = status === 'VALID';
        });
        this.form.get('password').statusChanges.subscribe(status => {
            this.passwordControlIsValid = status === 'VALID';
        });

        this.updateResultSub = this.authServ.currentUpdatePassword.subscribe(
            updateresult => {
                if(updateresult){
                    this.isLoading = false;
                    this.update = updateresult;
                    
                    if(this.update.responseStatusCode === 200 && this.update.PasswordUpdated === true){
    
                       TNSFancyAlert.showError("Update Success", this.update.Message, "Dismiss")
                       this.authServ.clearAllObjects();
                    } else {
                        TNSFancyAlert.showError("Update Error", this.update.Message, "Dismiss");
                    }
                }
            }
        );

        //find User from app settings
        this.userFound = false;
        const id = appSettings.getString("userid");



        //subscribe to Get User result
        this.getuserResultSub = this.authServ.currentGetUser.subscribe(
        userResult => {
            if(userResult) {
                this.getuser = userResult
                if(this.getuser.responseStatusCode === 200){
                    console.log(this.getuser);
                    this.userFound = true;
                } else {
                    TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                 }
                }
             }
        );

    //Send User ID from app settings
        this.authServ.GetUser(id);
    }

ngOnDestroy() {
    if(this.getuserResultSub && this.updateResultSub){
        this.getuserResultSub.unsubscribe();
        this.updateResultSub.unsubscribe();
    }
    }

    onUpdatePassword() {
        this.idEl.nativeElement.focus();
        this.passwordEl.nativeElement.focus();
        this.passwordEl.nativeElement.dismissSoftInput();

        if(!this.form.valid){
            return;
        }
        const id = this.form.get('id').value;
        const password = this.form.get('password').value;

        this.isLoading = true;
        //Timeout to give loading bar time to appear
        setTimeout(() =>{
            //Update Password
            this.authServ.UpdatePassword(id, password);
        },100);
    }
 }