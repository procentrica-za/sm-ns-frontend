import { Component, OnInit, ViewChild, ElementRef, OnDestroy  } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TextField } from 'tns-core-modules/ui/text-field';
import { RouterExtensions } from "nativescript-angular/router";
import { AuthService } from "../auth.service";
import { Subscription } from "rxjs";
import { ForgotPasswordResult } from "../auth.model";
import { TNSFancyAlert } from "nativescript-fancyalert";
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
    @ViewChild('hiddenEl', {static:false}) hiddenEl: ElementRef<TextField>;
//Subscribe from auth service
    forgotpasswordResultSub: Subscription;
    forgotpassword: ForgotPasswordResult;
    constructor(private router: RouterExtensions, private authServ: AuthService) {
    }
    ngOnInit() {
        this.form = new FormGroup({
            email: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required,
                        Validators.email
                    ]
                }
            )
        });
        //subscribe to status changes of form
        this.form.get('email').statusChanges.subscribe(status => {
            this.emailControlIsValid = status === 'VALID';
        });
        //Subscribe to result in auth service
        this.forgotpasswordResultSub = this.authServ.currentForgotPassword.subscribe(
            forgotpasswordresult => {
                if(forgotpasswordresult){
                    this.isLoading = false;
                    this.forgotpassword = forgotpasswordresult;
     
                    if(this.forgotpassword.responseStatusCode === 200 && this.forgotpassword.msg != "A new password cannot be granted at this time as an appropriate email address has not been provided"){
                        TNSFancyAlert.showSuccess("Success", this.forgotpassword.msg, "Dismiss").then( t => {
                       this.authServ.clearRegistration();
                       this.router.navigate([''], {clearHistory: true});
                    });
                    } else if(this.forgotpassword.responseStatusCode === 500) {
                        TNSFancyAlert.showError("Connection error", "A Connection cannot be established at this time", "Dismiss");
                    }
                    else if(this.forgotpassword.responseStatusCode === 400) {
                        TNSFancyAlert.showError("Error", this.forgotpassword.msg, "Dismiss");
                    }
                    else {
                        TNSFancyAlert.showError("Error", this.forgotpassword.msg, "Dismiss");
                    }
                }
            }
        );
    }
    ngOnDestroy() {
        if(this.forgotpasswordResultSub){
            //unsubscribe from Result of forgot password
            this.forgotpasswordResultSub.unsubscribe();
        }
    }
    onForgotPassword() {
        this.hiddenEl.nativeElement.focus();
        this.emailEl.nativeElement.focus();
        this.emailEl.nativeElement.dismissSoftInput();
        
       if(!this.form.valid){
           return;
       }
        const email = this.form.get('email').value;
        
        this.isLoading = true;
        //Timeout to give loading bar time to appear
        setTimeout(() =>{
            //Verify Login Credentials
            this.authServ.ResetPassword(email);
        },100);
    }
}