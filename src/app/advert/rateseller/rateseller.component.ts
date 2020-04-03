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
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { Slider } from "tns-core-modules/ui/slider";
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
    onSliderValueChange(args) {
        let slider = <Slider>args.object;
        this.form.controls['sellerrating'].setValue((args.value).toString());
    }
    ngOnInit() {
        //populate rating options
        this.form = new FormGroup({
            sellerrating: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required,
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
                      TNSFancyAlert.showSuccess("Rating Success", this.rate.message, "Dismiss");
                      this.advertServ.clearSellerRating();
                       this.router.navigate(['/advert/home'],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 2,
                    curve: "ease"
                }
            });
                    } else if (this.rate.responseStatusCode === 500 ){
                        TNSFancyAlert.showError("Error Rating", this.rate.message, "Dismiss");
                        this.advertServ.clearSellerRating();
                    }
                    else if (this.rate.responseStatusCode === 400 ){
                        TNSFancyAlert.showError("Error Rating", this.rate.message, "Dismiss");
                        this.advertServ.clearSellerRating();
                    }
                    else {
                        TNSFancyAlert.showError("Error Rating", this.rate.message, "Dismiss");
                        this.advertServ.clearSellerRating();

                    }
                }
            }
        );

         setTimeout(() =>{
    //send message
             this.advertServ.RateSeller(ratingid,sellerrating, sellercomments);
         },100);
     }

     ngOnDestroy() {
        if(this.rateResultSub){
            this.rateResultSub.unsubscribe();
        }
        this.advertServ.clearSelectedOutstandingrating();
    }

}