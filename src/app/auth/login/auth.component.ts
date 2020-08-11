import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TextField } from 'tns-core-modules/ui/text-field';
import { RouterExtensions } from "nativescript-angular/router";
import { AuthService, } from "../auth.service";
import { AdvertService, } from "../../../app/advert/advert.service";
import { Subscription } from "rxjs";
import { LoginResult } from "../auth.model";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { UIService } from "../../shared/ui/ui.service"
//Import for config file
import * as appSettings from "tns-core-modules/application-settings";

//Below imports are for "remember me switch"
import { Switch } from "tns-core-modules/ui/switch";
import { EventData } from "tns-core-modules/data/observable";
import {WebView, LoadEventData} from "tns-core-modules/ui/web-view";
import { Page, isAndroid } from "tns-core-modules/ui/page";
import {Observable} from "tns-core-modules/data/observable";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { getString, setString } from "tns-core-modules/application-settings";


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
    //set username variable for messaging 
    username = "";

    @ViewChild('passwordEl', {static:false}) passwordEl: ElementRef<TextField>;
    @ViewChild('usernameEl', {static:false}) usernameEl: ElementRef<TextField>;

    loginResultSub: Subscription;
    login: LoginResult;

    get android() {
        return isAndroid;
    }

    constructor(private uiService : UIService ,private router: RouterExtensions, private authServ: AuthService, private advertServ: AdvertService) {
        console.log("Constructing Auth Component");
        console.log("Closing SideDrawer");
        this.uiService.toggleDrawer();
        this.uiService.toggleDrawer();
        this.uiService.toggleDrawer();
        appSettings.setBoolean("mainAdvertSelling", true);
        appSettings.setBoolean("myAdvertsSelling", true);
        appSettings.setBoolean("isAndroid", isAndroid);

    constructor(private router: RouterExtensions, private authServ: AuthService, private advertServ: AdvertService) {

        setString("sm-service-cred-manager-host", "http://192.168.1.187:9952");
        setString("sm-service-ratings-host", "http://192.168.1.188:9957");
        setString("sm-service-advert-manager-host", "http://192.168.1.188:9953");
        setString("sm-service-file-manager-host", "http://192.168.1.188:9955");
        setString("sm-service-messages-host", "http://192.168.1.188:9956");
        setString("sm-service-scim-manager-host", "http://192.168.1.187:9961");
        setString("sm-service-apim-host", "http://192.168.1.187:8243");
        setString("sm-service-is-host", "http://192.168.1.187:9959");
        setString("sm-service-ratings-host", "http://10.10.100.147:9957");
        setString("sm-service-advert-manager-host", "http://10.10.100.147:9953");
        setString("sm-service-file-manager-host", "http://10.10.100.147:9955");
        setString("sm-service-messages-host", "http://10.10.100.147:9956");
        console.log("Constructing Auth Component");
        appSettings.setBoolean("mainAdvertSelling", true); 
        appSettings.setBoolean("myAdvertsSelling", true);
        appSettings.setBoolean("isAndroid", isAndroid);
        console.log("I am an android device: " + appSettings.getBoolean("isAndroid"));
        appSettings.setString("clientkey", "VEo4NDJjTmdMV3AzWEpKQ05hSnltNTJYYU5zYTpvSmxkakdtd1FNamZmeFRpZHdJZ1JWQm5TVzBh");
        appSettings.setString("basicauth", "YWRtaW46YWRtaW4=");

        //TODO: REmove before committing
        //appSettings.setString("userid", this.login.loginUser.id);
       /* appSettings.setBoolean("rememberme", true);
        appSettings.setBoolean("loggedIn", true);*/

        //Check if remember me was enabled, if so, navigate to appropriate page
        if(appSettings.getBoolean("rememberme") && appSettings.getBoolean("loggedIn")) {
            this.advertServ.UnreadChats();
            this.advertServ.OutstandingRatings();
            this.router.navigate(['/advert/home'], {clearHistory: true});
            this.authServ.RememberMe();
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
                    if(this.login.responseStatusCode === 200){
                        //Check if login details were correct
                        if(this.login.loginUser.id != ""){
                            //Save user details and rememberme info
                            appSettings.setString("userid", this.login.loginUser.id);
                            appSettings.setString("defaultInstitution", this.login.loginUser.defaultInstitution);
                            //Save username for messaging purposes
                            appSettings.setString("username", this.login.loginUser.username);
                            appSettings.setBoolean("rememberme", this.rememberMe);
                            appSettings.setBoolean("loggedIn", true);
                            this.authServ.clearAllObjects();
                            this.advertServ.UnreadChats();
                            this.advertServ.OutstandingRatings();
                            this.router.navigate(['/advert/home'], {clearHistory: true});
                        }
                        else {
                            TNSFancyAlert.showError("Login Error", "Incorrect username and password combination.", "Dismiss");
                        }
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
    onForgotpassword() {
        this.router.navigate(['/forgotpassword']);
    }
    onHelp() {
        this.router.navigate(['/help']);
    }


    onRememberMeChanged(args: EventData) {
        let mySwitch = args.object as Switch;
        this.rememberMe = mySwitch.checked;
    }

}