import { Component, OnInit, OnDestroy } from "@angular/core";
import { AdvertService } from "../advert.service";
import { PreviousratingResult, PreviousratingResultList} from '../advert.model';
import { Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { RadListView, ListViewEventData } from "nativescript-ui-listview";
import { RouterExtensions } from "nativescript-angular/router";
//import for app settings
import * as appSettings from "tns-core-modules/application-settings";
@Component({
    selector: 'ns-buyerratings',
    templateUrl: './buyerratings.component.html',
    styleUrls: ['./buyerratings.component.scss'],
    moduleId: module.id
})
export class BuyerratingsComponent implements OnInit, OnDestroy {
    userid = "";
    private previousratingResultListSub: Subscription;
    public previousratingResultList: PreviousratingResultList;
    public ratingsLoaded : boolean;
    constructor(private advertServ: AdvertService, private router: RouterExtensions) {
    }
    ngOnInit() {
        this.ratingsLoaded = false;
        this.previousratingResultListSub = this.advertServ.currentPreviousratingList.subscribe(
            previousratingResult => {
                if(previousratingResult) {
                    this.previousratingResultList = previousratingResult
                    if(this.previousratingResultList.responseStatusCode === 200){
                        this.ratingsLoaded = true;
                    } else {
                        TNSFancyAlert.showError("No ratings", "There aren't any previous rattings to display");
                    }
                }
            }
        );

        const userid = appSettings.getString("userid");
        this.advertServ.Previousbuyerratings(userid);
    }
    ngOnDestroy() {
        if(this.previousratingResultListSub){
            this.previousratingResultListSub.unsubscribe();
        }
    }
}