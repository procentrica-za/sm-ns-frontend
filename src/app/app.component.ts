import { Component, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { AdvertService } from "../app/advert/advert.service";
import { UnreadChatsResult, OutstandingRatingResult} from '../app/advert/advert.model';
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

     //Outstanding ratings
     outstandingratingsResultSub: Subscription;
     outstandingratings: OutstandingRatingResult;
     outstandingRatings : boolean;
    constructor(
        private router: RouterExtensions,
        private uiService: UIService,
        private changeDetectionRef: ChangeDetectorRef,
        private advertServ: AdvertService){}

    ngOnInit(){
 
        this.unreadchatsResultSub = this.advertServ.currentUnreadMessages.subscribe(
            unreadchatsresult => {
                if(unreadchatsresult){
                    this.unreadchats = unreadchatsresult;
 
                    if(this.unreadchats.responseStatusCode === 200 && this.unreadchats.unreadmessages === true){
                        this.unreadMessages = true;
                  
                
                    } else if (this.unreadchats.responseStatusCode === 500){
                        this.unreadMessages = false;
              
                    }
                    else if (this.unreadchats.responseStatusCode === 200 && this.unreadchats.unreadmessages === false){
                        this.unreadMessages = false;
              
                    }
                    else {
                        this.unreadMessages = false;
                    }
                    
                }
            }
        );

        this.outstandingratingsResultSub = this.advertServ.currentOutstandingRating.subscribe(
            outstandingratingsresult => {
                if(outstandingratingsresult){
                    this.outstandingratings = outstandingratingsresult;
 
                    if(this.outstandingratings.responseStatusCode === 200 && this.outstandingratings.outstandingratings === true){
                        this.outstandingRatings = true;
                  
                
                    } else if (this.outstandingratings.responseStatusCode === 500){
                        this.outstandingRatings = false;
                   
                    }
                    else if (this.outstandingratings.responseStatusCode === 200 && this.outstandingratings.outstandingratings === false){                       
                        this.outstandingRatings = false;
              
                    }
                    else {
                        this.outstandingRatings = false;
                    }
                    
                }
            }
        );
    }

    ngAfterViewInit() {
        this.drawersub = this.uiService.drawerState.subscribe(() =>{
            this.drawerComponent.sideDrawer.toggleDrawerState();
        });

        this.changeDetectionRef.detectChanges();
    }

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


    Messagehome(){
        this.drawerComponent.sideDrawer.closeDrawer();
        this.router.navigate(['/messaginghome']);
      
    }

    Ratinghome(){
        this.drawerComponent.sideDrawer.closeDrawer();
        this.router.navigate(['/rating']);
       
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
        if(this.drawersub){
            this.drawersub.unsubscribe();
        }
        if(this.unreadchatsResultSub){
            this.unreadchatsResultSub.unsubscribe();
        }
        if(this.outstandingratingsResultSub){
            this.outstandingratingsResultSub.unsubscribe();
        }
    }
}
