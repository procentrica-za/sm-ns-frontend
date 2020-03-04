import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TextField } from 'tns-core-modules/ui/text-field';
import { RouterExtensions } from "nativescript-angular/router";
import { AuthService } from "../auth.service";
import { Subscription } from "rxjs";
import { GetUserResult, UpdateUserResult } from "../auth.model";
import { TNSFancyAlert } from "nativescript-fancyalert";

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

    //form
    form: FormGroup;
    idControlIsValid = true;
    usernameControlIsValid = true;

    nameControlIsValid = true;
    surnameControlIsValid = true;
    emailControlIsValid = true;
    isLoading = false;
 

    @ViewChild('idEl', {static:false}) idEl: ElementRef<TextField>;
    @ViewChild('usernameEl', {static:false}) usernameEl: ElementRef<TextField>;
    @ViewChild('nameEl', {static:false}) nameEl: ElementRef<TextField>;
    @ViewChild('surnameEl', {static:false}) surnameEl: ElementRef<TextField>;
    @ViewChild('emailEl', {static:false}) emailEl: ElementRef<TextField>;


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
            )
        });
        this.form.get('id').statusChanges.subscribe(status => {
            this.idControlIsValid = status === 'VALID';
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

        this.updateResultSub = this.authServ.currentUpdateUser.subscribe(
            updateresult => {
                if(updateresult){
                    this.isLoading = false;
                    this.update = updateresult;
                    // TODO : Need to validate if this is a valid register
 
                    if(this.update.responseStatusCode === 200 && this.update.UserUpdated === true){
                       //Save user details and rememberme info
                       TNSFancyAlert.showError("Update Success", this.update.Message, "Dismiss")
                       this.authServ.clearAllObjects();
                    } else {
                        TNSFancyAlert.showError("Register Error", this.update.Message, "Dismiss");
                    }
                }
            }
        );

        //find User from app settings
        this.userFound = false;
        const id = appSettings.getString("userid");
        console.log(appSettings.getString("userid"));


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

    onUpdateUser() {
        this.idEl.nativeElement.focus();
        this.usernameEl.nativeElement.focus();
        this.nameEl.nativeElement.focus();
        this.surnameEl.nativeElement.focus();
        this.emailEl.nativeElement.focus();
        this.emailEl.nativeElement.dismissSoftInput();

        if(!this.form.valid){
            return;
        }
        const id = this.form.get('id').value;
        const username = this.form.get('username').value;
        const name = this.form.get('name').value;
        const surname = this.form.get('surname').value;
        const email = this.form.get('email').value;

        this.isLoading = true;
        //Timeout to give loading bar time to appear
        setTimeout(() =>{
            //Verify register Credentials
            this.authServ.UpdateUser(id, username, name, surname, email);
        },100);
    }
 }