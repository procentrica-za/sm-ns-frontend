import { Component, OnInit, OnDestroy } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { AdvertService } from "../advert.service";
import { UserAdvertisementResultList} from '../advert.model';
import { Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";
import * as appSettings from "tns-core-modules/application-settings";
import { RadListView, ListViewEventData } from "nativescript-ui-listview";
@Component({
    selector: 'ns-my-adverts',
    templateUrl: './my-advert.component.html',
    moduleId: module.id
})



export class MyAdvertComponent implements OnInit, OnDestroy {

    public UserID : string;
    private userAdvertResultListSub: Subscription;
    public userAdvertResultList: UserAdvertisementResultList;
    public imagesLoaded : boolean;

    constructor(private router: RouterExtensions, private advertServ: AdvertService){
        
    }

    ngOnInit() {

        
        this.imagesLoaded = false;        
        
        this.userAdvertResultListSub = this.advertServ.currentUserAdvertList.subscribe(
            userAdvertResult => {
                if(userAdvertResult) {
                    this.userAdvertResultList = userAdvertResult
                    if(this.userAdvertResultList.responseStatusCode === 200){
                        this.imagesLoaded = true;
                        //console.log(this.userAdvertResultList);
                    } else {
                        TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                    }
                    
                }
            }
        );
        this.UserID = appSettings.getString("userid");
        this.advertServ.initializeUserAdvertisements(this.UserID);
    
    }

    ngOnDestroy(){  
        if(this.userAdvertResultListSub){
            this.userAdvertResultListSub.unsubscribe();
        }
    }


    onItemSelected(args :ListViewEventData): void {
        const tappedAdvertItem = args.view.bindingContext;
        //console.log("Ad Type:  "+ tappedAdvertItem.advertisementtype +"\n ID:  "+ tappedAdvertItem.advertisementid)
        this.advertServ.setAdvert(tappedAdvertItem.advertisementtype, tappedAdvertItem.advertisementid);
        this.router.navigate(['/advert/details'],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });
    }

}