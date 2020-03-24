import { Component, OnInit, OnDestroy } from "@angular/core";
import { AdvertService } from "../advert.service";
import { OutstandingratingResult, OutstandingratingResultList} from '../advert.model';
import { Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { RadListView, ListViewEventData } from "nativescript-ui-listview";
import { RouterExtensions } from "nativescript-angular/router";
import { ObservableArray } from "tns-core-modules/data/observable-array";
//import for app settings
import * as appSettings from "tns-core-modules/application-settings";
@Component({
    selector: 'ns-rating-home',
    templateUrl: './rating-home.component.html',
    styleUrls: ['./rating-home.component.scss'],
    moduleId: module.id
})
export class RatingHomeComponent implements OnInit, OnDestroy {
    userid = "";
    private outstandingratingResultListSub: Subscription;
    public outstandingratingResultList: OutstandingratingResultList;
    public ratingsLoaded : boolean;
    public myOutstandingratingArray : ObservableArray<OutstandingratingResult>;
    constructor(private advertServ: AdvertService, private router: RouterExtensions) {
    }
    ngOnInit() {
        this.ratingsLoaded = false;
        this.outstandingratingResultListSub = this.advertServ.currentOutstandingratingList.subscribe(
            outstandingratingResult => {
                if(outstandingratingResult) {
                    if(outstandingratingResult.responseStatusCode === 200){
                        this.myOutstandingratingArray = new ObservableArray(0);
                        outstandingratingResult.Outstandingratings.forEach( t => {
                            this.myOutstandingratingArray.push(t);
                        });
                        this.ratingsLoaded = true;
                    } else {
                        TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                    }
                }
            }
        );

        const userid = appSettings.getString("userid");
        this.advertServ.initializeOutstandingratings(userid);
    }
    onItemSelected(args :ListViewEventData): void {
        const tappedOutstandingratingItem = args.view.bindingContext;
        appSettings.setString("ratingid", tappedOutstandingratingItem.ratingid);
        this.router.navigate(['/rateseller'],
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
        if(this.outstandingratingResultListSub){
            this.outstandingratingResultListSub.unsubscribe();
        }
        this.advertServ.clearSelectedOutstandingrating();
    }
}