import { Component, OnInit, OnDestroy } from "@angular/core";
import { AdvertService } from "../advert.service";
import { AverageResult} from '../advert.model';
import { Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { RadListView, ListViewEventData } from "nativescript-ui-listview";
import { RouterExtensions } from "nativescript-angular/router";
import { ObservableArray } from "tns-core-modules/data/observable-array";
//import for app settings
import * as appSettings from "tns-core-modules/application-settings";
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
    average: AverageResult;
    constructor(private advertServ: AdvertService, private router: RouterExtensions) {
    }
    ngOnInit() {

        


    

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



  async showBuyerAverage() {
        this.advertServ.Buyingdashboard();
        this.buyingaverageResultSub = this.advertServ.currentBuyingAverage.subscribe(
            averageresult => {
                if(averageresult){
                    this.average = averageresult;
 
                    if(this.average.responseStatusCode === 200 && this.average.average != ""){
                        TNSFancyAlert.showInfo("Buying Average", "Your average from purchasing on this platform is " + this.average.average, "Dismiss")
                        this.advertServ.clearAverage();
                        console.log(this.average.average);
                
                    } else if (this.average.responseStatusCode === 500){
                        TNSFancyAlert.showInfo("No Average", "You do not have any ratings as yet", "Dismiss")
                        this.advertServ.clearAverage();
                    }
                    else {
                       
                    }
                    
                }
            }
        );
    }

  async  showSellerAverage() {
        this.advertServ.Sellingdashboard();
        this.buyingaverageResultSub = this.advertServ.currentSellingAverage.subscribe(
            averageresult => {
                if(averageresult){
                    this.average = averageresult;
 
                    if(this.average.responseStatusCode === 200 && this.average.average != ""){
                        TNSFancyAlert.showInfo("Selling Average", "Your average from selling on this platform is " + this.average.average , "Dismiss")
                        this.advertServ.clearAverage();
                  console.log(this.average.average);
                
                    } else if (this.average.responseStatusCode === 500){
                        TNSFancyAlert.showInfo("No Average", "You do not have any ratings as yet", "Dismiss")
                        this.advertServ.clearAverage();
              
                    }
                    else {
                        TNSFancyAlert.showError("Connection Error", "There has been an issue whilst trying to connect, please contact support", "Dismiss");
                    }
                    
                }
            }
        );
    }

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