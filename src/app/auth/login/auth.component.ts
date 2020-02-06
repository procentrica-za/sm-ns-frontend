import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TextField } from 'tns-core-modules/ui/text-field';
import { RouterExtensions } from "nativescript-angular/router";
import { AuthService } from "../auth.service";
import { Subscription } from "rxjs";
import { LoginResult } from "../auth.model";
import { alert } from "tns-core-modules/ui/dialogs";

@Component({
    selector: 'ns-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    moduleId: module.id
})

export class AuthComponent implements OnInit, OnDestroy {
    form: FormGroup;
    usernameControlIsValid = true;
    passwordControlIsValid = true;

    @ViewChild('passwordEl', {static:false}) passwordEl: ElementRef<TextField>;
    @ViewChild('usernameEl', {static:false}) usernameEl: ElementRef<TextField>;

    loginResultSub: Subscription;
    login: LoginResult;

    constructor(private router: RouterExtensions, private authServ: AuthService) {}


    ngOnInit() { 
        //check if remember == true?
        //{
        // navigate home
        //} else {}
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
            password: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required,
                        Validators.minLength(6)
                    ]
                }
            )
        });

        this.form.get('username').statusChanges.subscribe(status => {
            this.usernameControlIsValid = status === 'VALID';
        });

        this.form.get('password').statusChanges.subscribe(status => {
            this.passwordControlIsValid = status === 'VALID';
        });

        this.loginResultSub = this.authServ.currentLogin.subscribe(
            login => {                
                if(login){
                    this.login = login;
                    // TODO : Need to validate if this is a valid login
                    if(this.login.responseStatusCode === 200){
                        alert(this.login.loginAttemptMessage);
                        //set rememberme
                        //set userid
                        //set username
                    } else {
                        alert({
                            title: "Login",
                            message: this.login.loginAttemptMessage,
                            okButtonText: "OK"
                        }).then(() =>{
                        });
                    }
                }
            }
        );
    }

    ngOnDestroy() {
        if(this.loginResultSub){
            this.loginResultSub.unsubscribe();
        }
    }

    onSignIn() {
        this.usernameEl.nativeElement.focus();
        this.passwordEl.nativeElement.focus();
        this.passwordEl.nativeElement.dismissSoftInput();

        if(!this.form.valid){
            return;
        }

        const username = this.form.get('username').value;
        const password = this.form.get('password').value;

        //Verify Login Credentials
        this.authServ.validateCredentials(username, password);
    }

    onRegister() {
        //this.router.navigate(['/register']);
    }
}