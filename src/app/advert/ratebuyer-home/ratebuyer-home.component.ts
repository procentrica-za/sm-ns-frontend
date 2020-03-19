import { Component, OnInit, OnDestroy } from "@angular/core";
import { AdvertService } from "../advert.service";
import { InterestedResult, InterestedResultList} from '../advert.model';
import { Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { RadListView, ListViewEventData } from "nativescript-ui-listview";
import { RouterExtensions } from "nativescript-angular/router";
//import for app settings
import * as appSettings from "tns-core-modules/application-settings";
@Component({
    selector: 'ns-ratebuyer-home',
    templateUrl: './ratebuyer-home.component.html',
    styleUrls: ['./ratebuyer-home.component.scss'],
    moduleId: module.id
})
export class RatebuyerHomeComponent implements OnInit, OnDestroy {
    private interestedResultListSub: Subscription;
    public interestedResultList: InterestedResultList;
    public interestLoaded : boolean;
    constructor(private advertServ: AdvertService, private router: RouterExtensions) {
    }
    ngOnInit() {
        this.interestLoaded = false;
        this.interestedResultListSub = this.advertServ.currentInterestedList.subscribe(
            interestedResult => {
                if(interestedResult) {
                    this.interestedResultList = interestedResult
                    if(this.interestedResultList.responseStatusCode === 200){
                        this.interestLoaded = true;
                    } else {
                        TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                    }
                }
            }
        );

        const userid = appSettings.getString("userid");
        const advertisementid = appSettings.getString("advertisementid");
        this.advertServ.InterestedBuyers(userid, advertisementid);
    }
    onItemSelected(args :ListViewEventData): void {
        const tappedInterestedItem = args.view.bindingContext;
        appSettings.setString("advertisementid", tappedInterestedItem.advertisementid);
        appSettings.setString("sellerid", tappedInterestedItem.sellerid);
        appSettings.setString("buyerid", tappedInterestedItem.buyerid);
        this.router.navigate(['/messagingdetails'],
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
        if(this.interestedResultListSub){
            this.interestedResultListSub.unsubscribe();
        }
    }
}