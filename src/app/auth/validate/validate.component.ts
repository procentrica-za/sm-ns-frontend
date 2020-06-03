import { Component, OnInit, ViewChild, ElementRef, OnDestroy, ViewContainerRef } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TextField } from 'tns-core-modules/ui/text-field';
import { RouterExtensions } from "nativescript-angular/router";
import { AuthService } from "../auth.service";
import { Subscription } from "rxjs";
import { ValidateOTPResult, GetNewOTPResult } from "../auth.model";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { ModalDialogService } from 'nativescript-angular/modal-dialog';
import * as appSettings from "tns-core-modules/application-settings";
import { OtpComponent } from "../otp/otp.component";
@Component({
    selector: 'ns-validate',
    templateUrl: './validate.component.html',
    styleUrls: ['./validate.component.scss'], 
    moduleId: module.id
})
export class ValidateComponent implements OnInit, OnDestroy {
    form: FormGroup;
    phonenumberControlIsValid = true;
    otpControlIsValid = true;
    isLoading = false;

    

    @ViewChild('hiddenEl', {static:false}) hiddenEl: ElementRef<TextField>;
    @ViewChild('otpEl', {static:false}) otpEl: ElementRef<TextField>;
//Subscribe from auth service

    getnewotpResultSub: Subscription;
    getnewotp: GetNewOTPResult;

    validateotpResultSub: Subscription;
    validateotp: ValidateOTPResult;
    constructor(private router: RouterExtensions, private authServ: AuthService, private modalDialog: ModalDialogService,  private vcRef: ViewContainerRef) {
    }
    ngOnInit() {
        this.form = new FormGroup({
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
        this.form.get('otp').statusChanges.subscribe(status => {
            this.otpControlIsValid = status === 'VALID';
        });

        this.modalDialog.showModal(OtpComponent, {viewContainerRef: this.vcRef,
            animated: true,
            fullscreen: false,
            context: {string: "OTP"} } ).then(( selection: boolean) => {
             
            });
        //Subscribe to result in auth service

        this.getnewotpResultSub = this.authServ.currentGetnewotp.subscribe(
            getnewotpresult => {
                if(getnewotpresult){
                    this.isLoading = false;
                    this.getnewotp = getnewotpresult;
                    if(this.getnewotp.responseStatusCode === 200 && this.getnewotp.Sent == true){
                        TNSFancyAlert.showSuccess("Success", this.getnewotp.Message, "Dismiss").then( t => {
                       this.authServ.clearNewOTPObject();
                    });
                    } else if(this.getnewotp.responseStatusCode === 200 && this.getnewotp.Sent == false) {
                        TNSFancyAlert.showError("Error", this.getnewotp.Message, "Dismiss");
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
                    console.log("Hit Validation"); 
                    if(this.validateotp.responseStatusCode === 200 && this.validateotp.validated == true){
                        TNSFancyAlert.showSuccess("Success", this.validateotp.message, "Dismiss").then( t => {    

                       this.authServ.clearValidateOTPObject()
                       this.router.navigate(['/updateuser'], {clearHistory: true});
                       const id = appSettings.getString("userid");
                       this.authServ.GetUser(id);
                       this.authServ.VerificationStatus();;
                    });
                    } else if(this.validateotp.responseStatusCode === 200 && this.validateotp.validated == false) {
                        TNSFancyAlert.showError("Error", this.validateotp.message, "Dismiss");
                    } else if(this.validateotp.responseStatusCode === 500) {
                        TNSFancyAlert.showError("Connection error", "A Connection cannot be established at this time", "Dismiss");

                    }
                    else if(this.validateotp.responseStatusCode === 400) {
                        TNSFancyAlert.showError("Error", this.validateotp.message, "Dismiss");
     
                    }
                    else {
                        TNSFancyAlert.showError("Error", this.validateotp.message, "Dismiss");
   
                    }
                }
            }
        );
    }

    onValidateOTP() {
        this.hiddenEl.nativeElement.focus();
        this.otpEl.nativeElement.focus();
        this.otpEl.nativeElement.dismissSoftInput();
        
        const otp = this.form.get('otp').value;
        
        this.isLoading = true;
        //Timeout to give loading bar time to appear
        setTimeout(() =>{
            //Verify Login Credentials
            this.authServ.ValidateOtp(otp);
        },100);
    }

    onRequestNewOTP() {
            this.authServ.GetNewOtp();
    }

    ngOnDestroy() {
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