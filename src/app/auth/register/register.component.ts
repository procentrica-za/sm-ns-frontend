import { Component, OnInit, ViewChild, ElementRef, OnDestroy, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TextField } from 'tns-core-modules/ui/text-field';
import { RouterExtensions } from "nativescript-angular/router";
import { AuthService } from "../auth.service";
import { Subscription } from "rxjs";
import { RegisterResult } from "../auth.model";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { InstitutionListPickerComponent } from "../institution-listpicker/institution-listpicker.component";
import { ModalDialogService } from 'nativescript-angular/modal-dialog';

@Component({
    selector: 'ns-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    moduleId: module.id
})
export class RegisterComponent implements OnInit, OnDestroy {
    form: FormGroup;
    usernameControlIsValid = true;
    passwordControlIsValid = true;
    nameControlIsValid = true;
    surnameControlIsValid = true;
    emailControlIsValid = true;
    isLoading = false;
    public institutionNameBind;
 

    @ViewChild('passwordEl', {static:false}) passwordEl: ElementRef<TextField>;
    @ViewChild('usernameEl', {static:false}) usernameEl: ElementRef<TextField>;
    @ViewChild('nameEl', {static:false}) nameEl: ElementRef<TextField>;
    @ViewChild('surnameEl', {static:false}) surnameEl: ElementRef<TextField>;
    @ViewChild('emailEl', {static:false}) emailEl: ElementRef<TextField>;
    @ViewChild('institutionnameEl', {static:false}) institutionnameEl: ElementRef<TextField>;

    registerResultSub: Subscription;
    register: RegisterResult;

    constructor(private router: RouterExtensions, private authServ: AuthService, private modalDialog: ModalDialogService,  private vcRef: ViewContainerRef) {
        this.institutionNameBind = "";

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
            ),
            institutionname: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
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
        this.form.get('name').statusChanges.subscribe(status => {
            this.nameControlIsValid = status === 'VALID';
        });
        this.form.get('surname').statusChanges.subscribe(status => {
            this.surnameControlIsValid = status === 'VALID';
        });
        this.form.get('email').statusChanges.subscribe(status => {
            this.emailControlIsValid = status === 'VALID';
        });
        
        this.registerResultSub = this.authServ.currentRegister.subscribe(
            registerresult => {
                if(registerresult){
                    this.isLoading = false;
                    this.register = registerresult;
 
                    if(this.register.responseStatusCode === 200 && this.register.UserCreated === "true"){

                       TNSFancyAlert.showSuccess("Registration success", "You have sucessfully registered.", "Dismiss").then( t => {
                        this.authServ.clearRegistration();
                       this.router.navigate([''], {clearHistory: true});
                       });
                    } else if (this.register.responseStatusCode === 500){
                        TNSFancyAlert.showError("Connection error", this.register.Message, "Dismiss");
                        this.authServ.clearRegistration();
                    }
                    else if (this.register.responseStatusCode === 400){
                        TNSFancyAlert.showError("Error", this.register.Message, "Dismiss");
                        this.authServ.clearRegistration();
                    }
                    else {
                        TNSFancyAlert.showError("Error", this.register.Message, "Dismiss");
                        this.authServ.clearRegistration();
                    }
                    
                }
            }
        );
    }

    onInstitutionNameTap(){
        this.modalDialog.showModal(InstitutionListPickerComponent, {viewContainerRef: this.vcRef,
            animated: true,
            fullscreen: true,
            context: {string: "ModuleCodeType" } }).then((selection:string) => {
                this.institutionNameBind=selection;
            });      
    }

  
    onRegisterUser() {
        this.usernameEl.nativeElement.focus();
        this.passwordEl.nativeElement.focus();
        this.nameEl.nativeElement.focus();
        this.surnameEl.nativeElement.focus();
        this.emailEl.nativeElement.focus();
        this.institutionnameEl.nativeElement.focus();
        this.institutionnameEl.nativeElement.dismissSoftInput();

        
        if(!this.form.valid){
            return;
        }
        const username = this.form.get('username').value;
        const password = this.form.get('password').value;
        const name = this.form.get('name').value;
        const surname = this.form.get('surname').value;
        const email = this.form.get('email').value;
        //institutions
        const institutionname = this.form.get('institutionname').value;

        this.isLoading = true;
        //Timeout to give loading bar time to appear
        setTimeout(() =>{
            //Verify register Credentials
            this.authServ.RegisterNewUser(username, password, name, surname, email, institutionname);
        },100);
    }

      ngOnDestroy() {
        if(this.registerResultSub){
            this.registerResultSub.unsubscribe();
        }
    }
}