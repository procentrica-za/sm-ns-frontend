import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TextField } from 'tns-core-modules/ui/text-field';
import { AdvertService } from "../advert.service";
import { RateBuyerResult} from '../advert.model';
import { Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { RadListView, ListViewEventData } from "nativescript-ui-listview";
import { RouterExtensions } from "nativescript-angular/router";
//import for app settings
import * as appSettings from "tns-core-modules/application-settings";
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { Slider } from "tns-core-modules/ui/slider";
@Component({
    selector: 'ns-ratebuyer',
    templateUrl: './ratebuyer.component.html',
    styleUrls: ['./ratebuyer.component.scss'],
    moduleId: module.id
})
export class RatebuyerComponent implements OnInit, OnDestroy {


    form: FormGroup;
    buyerratingControlIsValid = true;
    buyercommentsControlIsValid = true;
    @ViewChild('buyerratingEl', {static:false}) buyerratingEl: ElementRef<TextField>;
    @ViewChild('buyercommentsEl', {static:false}) buyercommentsEl: ElementRef<TextField>;
    //result of user rating
    rateResultSub: Subscription;
    rate: RateBuyerResult;
    constructor(private advertServ: AdvertService, private router: RouterExtensions) {
    }
    onSliderValueChange(args) {
        let slider = <Slider>args.object;
        this.form.controls['buyerrating'].setValue((args.value).toString());
    }
    ngOnInit() {
        //populate rating options
        this.form = new FormGroup({
            buyerrating: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required,
                    ]
                }
            ),
            buyercomments: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required,
                    ]
                }
            )
        });
        this.form.get('buyerrating').statusChanges.subscribe(status => {
            this.buyerratingControlIsValid = status === 'VALID';
        });
        this.form.get('buyercomments').statusChanges.subscribe(status => {
            this.buyercommentsControlIsValid = status === 'VALID';
        });
        this.rateResultSub = this.advertServ.currentRateBuyer.subscribe( 
            rateresult => {
                if(rateresult){
                    this.rate = rateresult;
 
                    if(this.rate.responseStatusCode === 200 && this.rate.buyerrated === true){
    
                       this.router.back();
                       this.router.back();
                       TNSFancyAlert.showSuccess("Rating Success", this.rate.message, "Dismiss")

                    } else if (this.rate.responseStatusCode === 500 ){
                        TNSFancyAlert.showError("Error Rating", this.rate.message, "Dismiss");
                    }
                    else if (this.rate.responseStatusCode === 200 && this.rate.ratingid === '00000000-0000-0000-0000-000000000000'){
                        TNSFancyAlert.showError("Rating Already Completed.", this.rate.message, "Dismiss");
                        this.router.navigate(['/advert/myadverts'],
                  {
                     animated: true,
                     transition: {
                     name: "slide",
                     duration: 2,
                     curve: "ease"
                     }
            });
                    }
                    else {
                        TNSFancyAlert.showError("Error Rating", this.rate.message, "Dismiss");
                        console.log(this.rate.buyerrated)
                    }
                }
            }
        );



    }

    ngOnDestroy() {
        if(this.rateResultSub){
            this.rateResultSub.unsubscribe();
        }
        this.advertServ.clearSelectedOutstandingrating();
    }

    
//Send message function
    onRateBuyer(args :ListViewEventData): void {
        this.buyerratingEl.nativeElement.focus();
        this.buyercommentsEl.nativeElement.focus();
        this.buyercommentsEl.nativeElement.dismissSoftInput();
        if(!this.form.valid){
            return;
        }
    

         setTimeout(() =>{

             const buyerrating = this.form.get('buyerrating').value;
             const buyercomments = this.form.get('buyercomments').value;
             const advertisementid = appSettings.getString("advertisementid"); 
             const sellerid = appSettings.getString("sellerid"); 
             const buyerid = appSettings.getString("buyerid"); 
             this.advertServ.RateBuyer(advertisementid, sellerid, buyerid ,buyerrating, buyercomments);
         },100);
     }
}