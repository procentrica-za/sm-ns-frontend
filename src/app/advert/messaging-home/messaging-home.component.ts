import { Component, OnInit, OnDestroy } from "@angular/core";
import { AdvertService } from "../advert.service";
import { ActivechatResult, ActivechatResultList} from '../advert.model';
import { Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { RadListView, ListViewEventData } from "nativescript-ui-listview";
import { RouterExtensions } from "nativescript-angular/router";
//import for app settings
import * as appSettings from "tns-core-modules/application-settings";
@Component({
    selector: 'ns-messaging-home',
    templateUrl: './messaging-home.component.html',
    styleUrls: ['./messaging-home.component.scss'],
    moduleId: module.id
})
export class MessagingHomeComponent implements OnInit, OnDestroy {
    userid = "";
    chatid = "";
    private activechatResultListSub: Subscription;
    public activechatResultList: ActivechatResultList;
    public chatsLoaded : boolean;
    constructor(private advertServ: AdvertService, private router: RouterExtensions) {
    }
    ngOnInit() {
        this.chatsLoaded = false;
        this.activechatResultListSub = this.advertServ.currentActivechatList.subscribe(
            activechatResult => {
                if(activechatResult) {
                    this.activechatResultList = activechatResult
                    if(this.activechatResultList.responseStatusCode === 200){
                        this.chatsLoaded = true;
                    }
                    } else if(this.activechatResultList.responseStatusCode === 500) {
                        TNSFancyAlert.showError("Connection error", "A Connection cannot be established at this time", "Dismiss");
                    }
                    else if(this.activechatResultList.responseStatusCode === 400) {
                        TNSFancyAlert.showError("Connection error", this.activechatResultList.message, "Dismiss");
                    }
                    else {
                        TNSFancyAlert.showError("Connection error", this.activechatResultList.message, "Dismiss");
                    }
                }
        );
        const userid = appSettings.getString("userid");
        this.advertServ.initializeActiveChats(userid);
    }
    onItemSelected(args :ListViewEventData): void {
        const tappedActivechatItem = args.view.bindingContext;
        this.advertServ.setActivechat(tappedActivechatItem.chatid);
        appSettings.setString("chatid", tappedActivechatItem.chatid);
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
        if(this.activechatResultListSub){
            this.activechatResultListSub.unsubscribe();
        }
    }
}