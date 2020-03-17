import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TextField } from 'tns-core-modules/ui/text-field';
import { RouterExtensions } from "nativescript-angular/router";
import { AuthService } from "../auth.service";
import { Subscription } from "rxjs";
import { LoginResult } from "../auth.model";
import { TNSFancyAlert } from "nativescript-fancyalert";

//Import for config file
import * as appSettings from "tns-core-modules/application-settings";

//Below imports are for "remember me switch"
import { Switch } from "tns-core-modules/ui/switch";
import { EventData } from "tns-core-modules/data/observable";


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

    isLoading = false;
    rememberMe = false;
    userid = "";

    @ViewChild('passwordEl', {static:false}) passwordEl: ElementRef<TextField>;
    @ViewChild('usernameEl', {static:false}) usernameEl: ElementRef<TextField>;

    loginResultSub: Subscription;
    login: LoginResult;

    constructor(private router: RouterExtensions, private authServ: AuthService) {
        appSettings.setBoolean("mainAdvertSelling", true);
        appSettings.setBoolean("myAdvertsSelling", true);

        //TODO: REmove before committing
        //appSettings.setString("userid", this.login.loginUser.id);
       /* appSettings.setBoolean("rememberme", true);
        appSettings.setBoolean("loggedIn", true);*/

        //Check if remember me was enabled, if so, navigate to appropriate page
        if(appSettings.getBoolean("rememberme") && appSettings.getBoolean("loggedIn")) {
            
            this.router.navigate(['/advert/home'], {clearHistory: true});
        } 
    }


    ngOnInit() {
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
                    this.isLoading = false;
                    this.login = login;
                    // TODO : Need to validate if this is a valid login
                    if(this.login.responseStatusCode === 200){
                       //Save user details and rememberme info
                       appSettings.setString("userid", this.login.loginUser.id);
                       appSettings.setBoolean("rememberme", this.rememberMe);
                       appSettings.setBoolean("loggedIn", true);
                       this.authServ.clearAllObjects();
                       this.router.navigate(['/advert/home'], {clearHistory: true});
                    } else {
                        TNSFancyAlert.showError("Login Error", this.login.loginAttemptMessage, "Dismiss");
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


        this.isLoading = true;

        //Timeout to give loading bar time to appear
        setTimeout(() =>{
            //Verify Login Credentials
            this.authServ.validateCredentials(username, password);
        },100);        
    }

    onRegister() {
        this.router.navigate(['/register']);
    }

    onRememberMeChanged(args: EventData) {
        let mySwitch = args.object as Switch;
        this.rememberMe = mySwitch.checked;
    }
}