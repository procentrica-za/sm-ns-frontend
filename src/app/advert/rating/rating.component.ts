import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TextField } from 'tns-core-modules/ui/text-field';
import { AdvertService } from "../advert.service";
import { BuyingAverageResult, SellingAverageResult} from '../advert.model';
import { Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { RadListView, ListViewEventData } from "nativescript-ui-listview";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: 'ns-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss'],
    moduleId: module.id
})
export class RatingComponent implements OnInit, OnDestroy {
    userid = "";
    buyingaverageResultSub: Subscription;
    sellingaverageResultSub: Subscription;
    buyingaverage: BuyingAverageResult;
    sellingaverage: SellingAverageResult;
    public buyingFound: boolean;
    public sellingFound: boolean;



    constructor(private advertServ: AdvertService, private router: RouterExtensions) {
    }
    ngOnInit() {
        
        this.advertServ.Buyingdashboard();
        this.buyingaverageResultSub = this.advertServ.currentBuyingAverage.subscribe(
            buyingresult => {
                if(buyingresult){
                    this.buyingaverage = buyingresult;
 
                    if(this.buyingaverage.responseStatusCode === 200 ){
   
                        console.log(this.buyingaverage.average);
                        this.buyingFound = true;
                
                    } else if (this.buyingaverage.responseStatusCode === 200 && this.buyingaverage.average != "You have not been rated as a buyer yet"){
                        TNSFancyAlert.showInfo("No Average", this.buyingaverage.average, "Dismiss")
                  
                    }
                    else {
                        TNSFancyAlert.showError("Connection Error", "There has been an issue whilst trying to connect, please contact support", "Dismiss");
                    }
                    
                }
            }
        );


        this.advertServ.Sellingdashboard();
        this.sellingaverageResultSub = this.advertServ.currentSellingAverage.subscribe(
            sellingresult => {
                if(sellingresult){
                    this.sellingaverage = sellingresult;
 
                    if( this.sellingaverage.responseStatusCode === 200 ){
            
                  console.log(this.sellingaverage.average);
                        this.sellingFound = true;
                
                    } else if ( this.sellingaverage.responseStatusCode === 200 && this.sellingaverage.average == "You have not been rated as a seller yet"){
                        TNSFancyAlert.showInfo("No Average", this.sellingaverage.average, "Dismiss")
                   
              
                    }
                    else {
                        TNSFancyAlert.showError("Connection Error", "There has been an issue whilst trying to connect, please contact support", "Dismiss");
                    }
                    
                }
            }
        );
    

    }
    onOutstandingRatings(args :ListViewEventData): void {
        this.router.navigate(['/ratinghome'],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });

    }

    onSellerRatings(args :ListViewEventData): void {
        this.router.navigate(['/sellerrating'],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });

    }

    onBuyerRatings(args :ListViewEventData): void {
        this.router.navigate(['/buyerrating'],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });

    }



  /*async showBuyerAverage() {
        this.advertServ.Buyingdashboard();
        this.buyingaverageResultSub = this.advertServ.currentBuyingAverage.subscribe(
            averageresult => {
                if(averageresult){
                    this.average = averageresult;
 
                    if(this.average.responseStatusCode === 200 && this.average.average != "You have not been rated as a buyer yet"){
                        TNSFancyAlert.showInfo("Buying Average", "Your average from purchasing on this platform is " + this.average.average, "Dismiss")
                        this.advertServ.clearAverage();
                        console.log(this.average.average);
                
                    } else if (this.average.responseStatusCode === 200 && this.average.average != "You have not been rated as a buyer yet"){
                        TNSFancyAlert.showInfo("No Average", this.average.average, "Dismiss")
                        this.advertServ.clearAverage();
                    }
                    else {
                        TNSFancyAlert.showError("Connection Error", "There has been an issue whilst trying to connect, please contact support", "Dismiss");
                    }
                    
                }
            }
        );
    }
*/
  /*async  showSellerAverage() {
        this.advertServ.Sellingdashboard();
        this.sellingaverageResultSub = this.advertServ.currentSellingAverage.subscribe(
            averageresult => {
                if(averageresult){
                    this.average = averageresult;
 
                    if( this.average.responseStatusCode === 200 && this.average.average != "You have not been rated as a seller yet"){
                        TNSFancyAlert.showInfo("Selling Average", "Your average from selling on this platform is " + this.average.average , "Dismiss")
                        this.advertServ.clearAverage();
                  console.log(this.average.average);
                
                    } else if ( this.average.responseStatusCode === 200 && this.average.average == "You have not been rated as a seller yet"){
                        TNSFancyAlert.showInfo("No Average", this.average.average, "Dismiss")
                        this.advertServ.clearAverage();
              
                    }
                    else {
                        TNSFancyAlert.showError("Connection Error", "There has been an issue whilst trying to connect, please contact support", "Dismiss");
                    }
                    
                }
            }
        );
    }
    */

    ngOnDestroy() {
        if(this.buyingaverageResultSub){
            this.buyingaverageResultSub.unsubscribe();
        }
        if(this.sellingaverageResultSub){
            this.sellingaverageResultSub.unsubscribe();
        }
        this.advertServ.clearSelectedOutstandingrating();
    }
}