import { Component, OnInit, ViewChild, ElementRef, OnDestroy, ViewContainerRef  } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TextField } from 'tns-core-modules/ui/text-field';
import { RouterExtensions } from "nativescript-angular/router";
import { AuthService } from "../auth.service";
import { Subscription } from "rxjs";
import { GetOTPResult, ValidateOTPResult, GetNewOTPResult } from "../auth.model";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { ModalDialogParams,ModalDialogService } from "nativescript-angular/modal-dialog";
import * as appSettings from "tns-core-modules/application-settings";
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
//Subscribe from auth service
    getotpResultSub: Subscription;
    getotp: GetOTPResult;


    validateotpResultSub: Subscription;
    validateotp: ValidateOTPResult;
    constructor(private modalParams: ModalDialogParams, private router: RouterExtensions, private authServ: AuthService, private modalDialog: ModalDialogService, private vcRef: ViewContainerRef) {
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
        });
        
        //subscribe to status changes of form
        this.form.get('phonenumber').statusChanges.subscribe(status => {
            this.phonenumberControlIsValid = status === 'VALID'; 
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
                       this.modalParams.closeCallback(true);
                        
                    });
                    } else if(this.getotp.responseStatusCode === 200 && this.getotp.Sent == false) {
                        TNSFancyAlert.showError("Error", this.getotp.Message, "Dismiss");
                        this.modalParams.closeCallback(true);
   
                    } else if(this.getotp.responseStatusCode === 500) {
                        TNSFancyAlert.showError("Connection error", "A Connection cannot be established at this time", "Dismiss");
                        this.modalParams.closeCallback(true);
                    }
                    else if(this.getotp.responseStatusCode === 400) {
                        TNSFancyAlert.showError("Error", this.getotp.Message, "Dismiss");
                        this.modalParams.closeCallback(true);
                    }
                    else {
                        TNSFancyAlert.showError("Error", this.getotp.Message, "Dismiss");
                        this.modalParams.closeCallback(true);
                    }
                }
            }
        );

    }
    onRequestOTP() {
        this.hiddenEl.nativeElement.focus();
        this.phonenumberEl.nativeElement.focus();
        this.phonenumberEl.nativeElement.dismissSoftInput();
        
      
        const number = this.form.get('phonenumber').value;
        appSettings.setString("phonenumber", number);
        
        this.isLoading = true;
      this.authServ.GetOtp(number);
    }



    ngOnDestroy() {
        if(this.getotpResultSub){
            //unsubscribe from Result of forgot password
            this.getotpResultSub.unsubscribe();
        }
        if(this.validateotpResultSub){
            //unsubscribe from Result of forgot password
            this.validateotpResultSub.unsubscribe();
        }
    }
}