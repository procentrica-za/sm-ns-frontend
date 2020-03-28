import { Component, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";


import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { UIService } from './shared/ui/ui.service';
import { RouterExtensions } from "nativescript-angular/router";

import { Subscription } from 'rxjs'


//Import for config file
import * as appSettings from "tns-core-modules/application-settings";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit{ 

    public isLoggedIn: boolean;
    private drawersub: Subscription;
    @ViewChild(RadSideDrawerComponent, {static: false}) drawerComponent: RadSideDrawerComponent;

    public myActivechatArray : ObservableArray<ActivechatResult>;
    constructor(
        private router: RouterExtensions,
        private uiService: UIService,
        private changeDetectionRef: ChangeDetectorRef,){}

    ngOnInit(
        this.activechatResultListSub = this.advertServ.currentActivechatList.subscribe(
            activechatResult => {
                if(activechatResult) {
                    if(activechatResult.responseStatusCode === 200){
                        this.myActivechatArray = new ObservableArray(0);
                        activechatResult.Activechats.forEach( t => {
                            this.myActivechatArray.push(t);
                        });
                        this.chatsLoaded = true;
                    } else {
                        TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                    }
                }
            }
        );
    ){}

    onRouterOutletActivate(event : any) {
        if(appSettings.getBoolean("loggedIn")) {
            this.isLoggedIn = true;
        } else {
            this.isLoggedIn = false;
        }
    }

    advertHome(){
        this.drawerComponent.sideDrawer.closeDrawer();
        this.router.navigate(['/advert']);
    }

    myAdsHome(){
        this.drawerComponent.sideDrawer.closeDrawer();
        this.router.navigate(['/advert/myadverts']);
    }

    myPersonalDetails(){
        this.drawerComponent.sideDrawer.closeDrawer();
        this.router.navigate(['/updateuser']);
    }

    PasswordUpdate(){
        this.drawerComponent.sideDrawer.closeDrawer();
        this.router.navigate(['/newpassword']);
    }

    Messagehome(){
        this.drawerComponent.sideDrawer.closeDrawer();
        this.router.navigate(['/messaginghome']);
    }

    Ratinghome(){
        this.drawerComponent.sideDrawer.closeDrawer();
        this.router.navigate(['/rating']);
    }

    Buyerhome(){
        this.drawerComponent.sideDrawer.closeDrawer();
        this.router.navigate(['/rating/buyerrating']);
    }
    
    Sellerhome(){
        this.drawerComponent.sideDrawer.closeDrawer();
        this.router.navigate(['/rating/sellerrating']);
    }

    logOut() {
        this.drawerComponent.sideDrawer.closeDrawer();
        appSettings.setString("personid", "");
        appSettings.setBoolean("rememberme", false);
        appSettings.setBoolean("loggedIn", false);
        this.router.navigate([''], {clearHistory: true});
    }
}
