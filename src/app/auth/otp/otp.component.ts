import { Component, OnInit, ViewChild, ElementRef, OnDestroy  } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TextField } from 'tns-core-modules/ui/text-field';
import { RouterExtensions } from "nativescript-angular/router";
import { AuthService } from "../auth.service";
import { Subscription } from "rxjs";
import { GetOTPResult, ValidateOTPResult, GetNewOTPResult } from "../auth.model";
import { TNSFancyAlert } from "nativescript-fancyalert";
@Component({
    selector: 'ns-otp',
    templateUrl: './otp.component.html',
    styleUrls: ['./otp.component.scss'],
    moduleId: module.id
})
export class OtpComponent implements OnInit, OnDestroy {
    form: FormGroup;
    phonenumberControlIsValid = true;
    otpControlIsValid = true;
    isLoading = false;
    @ViewChild('phonenumberEl', {static:false}) phonenumberEl: ElementRef<TextField>;
    @ViewChild('hiddenEl', {static:false}) hiddenEl: ElementRef<TextField>;
    @ViewChild('otpEl', {static:false}) otpEl: ElementRef<TextField>;
//Subscribe from auth service
    getotpResultSub: Subscription;
    getotp: GetOTPResult;

    getnewotpResultSub: Subscription;
    getnewotp: GetNewOTPResult;

    validateotpResultSub: Subscription;
    validateotp: ValidateOTPResult;
    constructor(private router: RouterExtensions, private authServ: AuthService) {
    }
    ngOnInit() {
        this.form = new FormGroup({
            phonenumber: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                }
            ),
            otp: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                }
            )
        });
        
        //subscribe to status changes of form
        this.form.get('phonenumber').statusChanges.subscribe(status => {
            this.phonenumberControlIsValid = status === 'VALID';
        });
        this.form.get('otp').statusChanges.subscribe(status => {
            this.otpControlIsValid = status === 'VALID';
        });
        //Subscribe to result in auth service
        this.getotpResultSub = this.authServ.currentGetotp.subscribe(
            getotpresult => {
                if(getotpresult){
                    this.isLoading = false;
                    this.getotp = getotpresult;
     
                    if(this.getotp.responseStatusCode === 200 && this.getotp.Sent == true){
                        TNSFancyAlert.showSuccess("Success", this.getotp.Message, "Dismiss").then( t => {
                       this.authServ.clearOTPObject();
                       //this.router.navigate([''], {clearHistory: true});
                    });
                    } else if(this.getotp.responseStatusCode === 200 && this.getotp.Sent == false) {
                        TNSFancyAlert.showError("Error", this.validateotp.Message, "Dismiss").then( t => {
                        this.authServ.clearOTPObject();
                    });
                    } else if(this.getotp.responseStatusCode === 500) {
                        TNSFancyAlert.showError("Connection error", "A Connection cannot be established at this time", "Dismiss");
                    }
                    else if(this.getotp.responseStatusCode === 400) {
                        TNSFancyAlert.showError("Error", this.getotp.Message, "Dismiss");
                    }
                    else {
                        TNSFancyAlert.showError("Error", this.getotp.Message, "Dismiss");
                    }
                }
            }
        );

        this.getnewotpResultSub = this.authServ.currentGetnewotp.subscribe(
            getnewotpresult => {
                if(getnewotpresult){
                    this.isLoading = false;
                    this.getnewotp = getnewotpresult;
     
                    if(this.getnewotp.responseStatusCode === 200 && this.getnewotp.Sent == true){
                        TNSFancyAlert.showSuccess("Success", this.getnewotp.Message, "Dismiss").then( t => {
                       this.authServ.clearNewOTPObject();
                       //this.router.navigate([''], {clearHistory: true});
                    });
                    } else if(this.getnewotp.responseStatusCode === 200 && this.getnewotp.Sent == false) {
                        TNSFancyAlert.showError("Error", this.validateotp.Message, "Dismiss").then( t => {
                        this.authServ.clearNewOTPObject();
                    });
                    } else if(this.getnewotp.responseStatusCode === 500) {
                        TNSFancyAlert.showError("Connection error", "A Connection cannot be established at this time", "Dismiss");
                    }
                    else if(this.getnewotp.responseStatusCode === 400) {
                        TNSFancyAlert.showError("Error", this.getnewotp.Message, "Dismiss");
                    }
                    else {
                        TNSFancyAlert.showError("Error", this.getnewotp.Message, "Dismiss");
                    }
                }
            }
        );

        this.validateotpResultSub = this.authServ.currentValidateotp.subscribe(
            validateotpresult => {
                if(validateotpresult){
                    this.isLoading = false;
                    this.validateotp = validateotpresult;
     
                    if(this.validateotp.responseStatusCode === 200 && this.validateotp.Validated == true){
                        TNSFancyAlert.showSuccess("Success", this.validateotp.Message, "Dismiss").then( t => {
                       this.authServ.clearValidateOTPObject();
                       //this.router.navigate([''], {clearHistory: true});
                    });
                    } else if(this.validateotp.responseStatusCode === 200 && this.validateotp.Validated == false) {
                        TNSFancyAlert.showError("Error", this.validateotp.Message, "Dismiss").then( t => {
                        this.authServ.clearValidateOTPObject();
                    });
                    } else if(this.validateotp.responseStatusCode === 500) {
                        TNSFancyAlert.showError("Connection error", "A Connection cannot be established at this time", "Dismiss");
                    }
                    else if(this.validateotp.responseStatusCode === 400) {
                        TNSFancyAlert.showError("Error", this.validateotp.Message, "Dismiss");
                    }
                    else {
                        TNSFancyAlert.showError("Error", this.validateotp.Message, "Dismiss");
                    }
                }
            }
        );
    }
    onRequestOTP() {
        this.hiddenEl.nativeElement.focus();
        this.phonenumberEl.nativeElement.focus();
        this.phonenumberEl.nativeElement.dismissSoftInput();
        
      
        const phonenumber = this.form.get('phonenumber').value;
        
        this.isLoading = true;
        //Timeout to give loading bar time to appear
        setTimeout(() =>{
            //Verify Login Credentials
            this.authServ.GetNewOtp(phonenumber);
        },100);
    }

    onValidateOTP() {
        this.hiddenEl.nativeElement.focus();
        this.otpEl.nativeElement.focus();
        this.otpEl.nativeElement.dismissSoftInput();
        
       if(!this.form.valid){
           return;
       }
        const otp = this.form.get('otp').value;
        
        this.isLoading = true;
        //Timeout to give loading bar time to appear
        setTimeout(() =>{
            //Verify Login Credentials
            this.authServ.ValidateOtp(otp);
        },100);
    }

    onRequestNewOTP() {
        this.hiddenEl.nativeElement.focus();
        this.phonenumberEl.nativeElement.focus();
        this.phonenumberEl.nativeElement.dismissSoftInput();
        
       if(!this.form.valid){
           return;
       }
        const phonenumber = this.form.get('phonenumber').value;
        
        this.isLoading = true;
        //Timeout to give loading bar time to appear
        setTimeout(() =>{
            //Verify Login Credentials
            this.authServ.GetNewOtp(phonenumber);
        },100);
    }

    ngOnDestroy() {
        if(this.getotpResultSub){
            //unsubscribe from Result of forgot password
            this.getotpResultSub.unsubscribe();
        }
        if(this.getnewotpResultSub){
            //unsubscribe from Result of forgot password
            this.getnewotpResultSub.unsubscribe();
        }
        if(this.validateotpResultSub){
            //unsubscribe from Result of forgot password
            this.validateotpResultSub.unsubscribe();
        }
    }
}