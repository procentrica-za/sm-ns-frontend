import { Component, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { AdvertService } from "../app/advert/advert.service";
import { UnreadChatsResult} from '../app/advert/advert.model';
import { Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { RouterExtensions } from "nativescript-angular/router";

import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { UIService } from './shared/ui/ui.service';


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

     //unread messages
     unreadchatsResultSub: Subscription;
     unreadchats: UnreadChatsResult;
     unreadMessages : boolean;

    constructor(
        private router: RouterExtensions,
        private uiService: UIService,
        private changeDetectionRef: ChangeDetectorRef,
        private advertServ: AdvertService){}

    ngOnInit(
    
    ){

        this.unreadchatsResultSub = this.advertServ.currentUnreadMessages.subscribe(
            unreadchatsresult => {
                if(unreadchatsresult){
                    this.unreadchats = unreadchatsresult;
 
                    if(this.unreadchats.responseStatusCode === 200 && this.unreadchats.unreadmessages === true){
                        this.unreadMessages = true;
                
                    } else if (this.unreadchats.responseStatusCode === 500){
                        TNSFancyAlert.showError("Connection error", "An internal error has occured.", "Dismiss");
                    }
                    else if (this.unreadchats.responseStatusCode === 200 && this.unreadchats.unreadmessages === false){
                        this.unreadMessages = false;
          
                    }
                    else {
                        TNSFancyAlert.showError("Error", "An Error has been recieved, please contact support." , "Dismiss");
                    }
                    
                }
            }
        );
    }

    onRouterOutletActivate(event : any) {
        if(appSettings.getBoolean("loggedIn")) {
            this.isLoggedIn = true;
            this.advertServ.UnreadChats();
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
        this.router.navigate(['ratinghome']);
       
    }

    Buyerhome(){
        this.drawerComponent.sideDrawer.closeDrawer();
        this.router.navigate(['buyerrating']);
        
    }
    
    Sellerhome(){
        this.drawerComponent.sideDrawer.closeDrawer();
        this.router.navigate(['sellerrating']);
    
    }

    logOut() {
        this.drawerComponent.sideDrawer.closeDrawer();
        appSettings.setString("personid", "");
        appSettings.setBoolean("rememberme", false);
        appSettings.setBoolean("loggedIn", false);
        this.router.navigate([''], {clearHistory: true});
    }
    onViewUnread(){
        this.router.navigate(['/messaginghome'],
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
        if(this.unreadchatsResultSub){
            this.unreadchatsResultSub.unsubscribe();
        }
    }
}
