import { Component, OnInit, OnDestroy } from "@angular/core";
import { AdvertService } from "../advert.service";
import { InterestedbuyerResult, InterestedbuyerResultList} from '../advert.model';
import { Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { RadListView, ListViewEventData } from "nativescript-ui-listview";
import { RouterExtensions } from "nativescript-angular/router";
import { ObservableArray } from "tns-core-modules/data/observable-array";
//import for app settings 
import * as appSettings from "tns-core-modules/application-settings";
@Component({
    selector: 'ns-ratebuyer-home',
    templateUrl: './ratebuyer-home.component.html',
    styleUrls: ['./ratebuyer-home.component.scss'],
    moduleId: module.id
})
export class RatebuyerHomeComponent implements OnInit, OnDestroy {
    public interestLoaded : boolean;
    private interestedbuyerResultListSub: Subscription;
    public interestedbuyerResultList: InterestedbuyerResultList;
    public myInterestedbuyerArray : ObservableArray<InterestedbuyerResult>;
    constructor(private advertServ: AdvertService, private router: RouterExtensions) {
    }
    ngOnInit() {
        this.interestLoaded = false;
        this.interestedbuyerResultListSub = this.advertServ.currentInterestedbuyerList.subscribe(
            interestedbuyerResult => {
                if(interestedbuyerResult) {
                    if(interestedbuyerResult.responseStatusCode === 200){
                        this.myInterestedbuyerArray = new ObservableArray(0);
                        interestedbuyerResult.Interestedbuyers.forEach( t => {
                            this.myInterestedbuyerArray.push(t);
                        });
                        this.interestLoaded = true;
                    } else if(this.interestedbuyerResultList.responseStatusCode === 500) {
                        TNSFancyAlert.showError("Connection error", "A Connection cannot be established at this time", "Dismiss");
                    }
                    else if(this.interestedbuyerResultList.responseStatusCode === 400) {
                        TNSFancyAlert.showError("Connection error", this.interestedbuyerResultList.message, "Dismiss");
                    }
                    else {
                        TNSFancyAlert.showError("Connection error", this.interestedbuyerResultList.message, "Dismiss");
                    }
                }
            }
        );
        const userid = appSettings.getString("userid");
        const advertisementid = appSettings.getString("advertisementid");
        this.advertServ.InterestedBuyers(userid,advertisementid);
       
    }
    onItemSelected(args :ListViewEventData): void {
        const tappedInterestedItem = args.view.bindingContext;
        appSettings.setString("advertisementid", tappedInterestedItem.advertisementid);
        appSettings.setString("sellerid", tappedInterestedItem.sellerid);
        appSettings.setString("buyerid", tappedInterestedItem.buyerid);
        this.router.navigate(['/ratebuyer'],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });

    }

    ngOnDestroy() {
        if(this.interestedbuyerResultListSub){
            this.interestedbuyerResultListSub.unsubscribe();
        }
    }
}