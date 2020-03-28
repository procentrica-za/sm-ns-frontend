import { Component, OnInit, OnDestroy } from "@angular/core";
import { RatingService } from "../rating.service";
import { PreviousratingResult, PreviousratingResultList} from '../rating.model';
import { Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { RadListView, ListViewEventData } from "nativescript-ui-listview";
import { RouterExtensions } from "nativescript-angular/router";
import { ObservableArray, ChangedData } from "tns-core-modules/data/observable-array";
//import for app settings
import * as appSettings from "tns-core-modules/application-settings";
@Component({
    selector: 'ns-rating-sellerrating',
    templateUrl: './rating-sellerrating.component.html',
    styleUrls: ['./rating-sellerrating.component.scss'],
    moduleId: module.id
})
export class RatingSellerratingComponent implements OnInit, OnDestroy {
    userid = "";
    private previousratingResultListSub: Subscription;
    public previousratingResultList: PreviousratingResultList;
    public ratingsLoaded : boolean;
    public myPreviousratingArray : ObservableArray<PreviousratingResult>;
    constructor(private ratingServ: RatingService, private router: RouterExtensions) {
    }
    ngOnInit() {
        this.ratingsLoaded = false;
        this.previousratingResultListSub = this.ratingServ.currentPreviousratingList.subscribe(
            previousratingResult => {
                if(previousratingResult) {
                    if(previousratingResult.responseStatusCode === 200){
                        this.myPreviousratingArray = new ObservableArray(0);
                        previousratingResult.Previousratings.forEach( t => {
                            this.myPreviousratingArray.push(t);
                        });
                        this.ratingsLoaded = true;
                    } else {
                        TNSFancyAlert.showError("No ratings", "There aren't any previous rattings to display");
                    }
                }
            }
        );

        const userid = appSettings.getString("userid");
        this.ratingServ.Previoussellerratings(userid);
    }
    ngOnDestroy() {
        if(this.previousratingResultListSub){
            this.previousratingResultListSub.unsubscribe();
        }
    }
}