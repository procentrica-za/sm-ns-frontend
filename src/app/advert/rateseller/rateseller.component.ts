import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TextField } from 'tns-core-modules/ui/text-field';
import { AdvertService } from "../advert.service";
import { RateSellerResult} from '../advert.model';
import { Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { RadListView, ListViewEventData } from "nativescript-ui-listview";
import { RouterExtensions } from "nativescript-angular/router";
//import for app settings
import * as appSettings from "tns-core-modules/application-settings";
@Component({
    selector: 'ns-rateseller',
    templateUrl: './rateseller.component.html',
    styleUrls: ['./rateseller.component.scss'],
    moduleId: module.id
})
export class RatesellerComponent implements OnInit, OnDestroy {
    
    form: FormGroup;
    sellerratingControlIsValid = true;
    sellercommentsControlIsValid = true;
    @ViewChild('sellerratingEl', {static:false}) sellerratingEl: ElementRef<TextField>;
    @ViewChild('sellercommentsEl', {static:false}) sellercommentsEl: ElementRef<TextField>;
    //result of user rating
    rateResultSub: Subscription;
    rate: RateSellerResult;
    constructor(private advertServ: AdvertService, private router: RouterExtensions) {
    }
    ngOnInit() {
        this.form = new FormGroup({
            sellerrating: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                }
            ),
            sellercomments: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required,
                    ]
                }
            )
        });
        this.form.get('sellerrating').statusChanges.subscribe(status => {
            this.sellerratingControlIsValid = status === 'VALID';
        });
        this.form.get('sellercomments').statusChanges.subscribe(status => {
            this.sellercommentsControlIsValid = status === 'VALID';
        });


    }
    ngOnDestroy() {
        if(this.rateResultSub){
            this.rateResultSub.unsubscribe();
        }
    }

    
//Send message function
    onRateSeller() {
        this.sellerratingEl.nativeElement.focus();
        this.sellercommentsEl.nativeElement.focus();
        this.sellercommentsEl.nativeElement.dismissSoftInput();
        if(!this.form.valid){
            return;
        }
        const ratingid = appSettings.getString("ratingid");
        const sellerrating = this.form.get('sellerrating').value;
        const sellercomments = this.form.get('sellercomments').value;
        
        this.rateResultSub = this.advertServ.currentRateSeller.subscribe( 
            rateresult => {
                if(rateresult){
                    this.rate = rateresult;
 
                    if(this.rate.responseStatusCode === 200 && this.rate.sellerrated === true){

                       //Save user details and rememberme info
                       this.router.navigate(['/advert/home'],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });
                       TNSFancyAlert.showSuccess("Rating Success", this.rate.message, "Dismiss")
                    } else if (this.rate.responseStatusCode === 500 ){
                        TNSFancyAlert.showError("Error Rating", this.rate.message, "Dismiss");
                    }
                    else if (this.rate.responseStatusCode === 400 ){
                        TNSFancyAlert.showError("Error Rating", this.rate.message, "Dismiss");
                    }
                    else {
                        TNSFancyAlert.showError("Error Rating", this.rate.message, "Dismiss");
                        console.log(this.rate.sellerrated)
                    }
                }
            }
        );

         setTimeout(() =>{
    //send message
             this.advertServ.RateSeller(ratingid,sellerrating, sellercomments);
             this.form.reset();
         },100);
     }
}