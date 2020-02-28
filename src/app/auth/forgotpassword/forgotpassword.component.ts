import { Component, OnInit, ViewChild, ElementRef, OnDestroy  } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TextField } from 'tns-core-modules/ui/text-field';
import { RouterExtensions } from "nativescript-angular/router";
import { AuthService } from "../auth.service";
import { Subscription } from "rxjs";
import { ForgotPasswordResult } from "../auth.model";
import { TNSFancyAlert } from "nativescript-fancyalert";

//Import for config file
import * as appSettings from "tns-core-modules/application-settings";

//Below imports are for "remember me switch"
import { Switch } from "tns-core-modules/ui/switch";
import { EventData } from "tns-core-modules/data/observable";

@Component({
    selector: 'ns-forgotpassword',
    templateUrl: './forgotpassword.component.html',
    styleUrls: ['./forgotpassword.component.scss'],
    moduleId: module.id
})

export class ForgotpasswordComponent implements OnInit, OnDestroy {
    form: FormGroup;
    emailControlIsValid = true;
    
    isLoading = false;
    
   

    @ViewChild('emailEl', {static:false}) emailEl: ElementRef<TextField>;

    forgotpasswordResultSub: Subscription;
    forgotpassword: ForgotPasswordResult;

    constructor(private router: RouterExtensions, private authServ: AuthService) {
        //Check if remember me was enabled, if so, navigate to appropriate page
       
    }


    ngOnInit() {
        this.form = new FormGroup({
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

        this.form.get('email').statusChanges.subscribe(status => {
            this.emailControlIsValid = status === 'VALID';
        });


        this.forgotpasswordResultSub = this.authServ.currentForgotPassword.subscribe(
            forgotpassword => {                
                if(forgotpassword){
                    this.isLoading = false;
                    this.forgotpassword = forgotpassword;
                    // TODO : Need to validate if this is a valid forgotpassword
                    if(this.forgotpassword.responseStatusCode === 200){
                       //Save user details and rememberme info
                       this.authServ.clearAllObjects();
                       this.router.navigate(['auth'], {clearHistory: true});
                    } else {
                        TNSFancyAlert.showError("Forgot Password Error", this.forgotpassword.forgotpasswordAttemptMessage, "Dismiss");
                    }
                }
            }
        );
    }

    ngOnDestroy() {
        if(this.forgotpasswordResultSub){
            this.forgotpasswordResultSub.unsubscribe();
        }
    }

    onForgotPassword() {

        this.emailEl.nativeElement.dismissSoftInput();

        if(!this.form.valid){
            return;
        }

        const email = this.form.get('email').value;


        this.isLoading = true;

        //Timeout to give loading bar time to appear
        setTimeout(() =>{
            //Verify Login Credentials
            this.authServ. ResetPassword(email);
        },100);        
    }
}