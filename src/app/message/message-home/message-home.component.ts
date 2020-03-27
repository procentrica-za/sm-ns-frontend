import { Component, OnInit, OnDestroy } from "@angular/core";
import { MessageService } from "../message.service";
import { ActivechatResult, ActivechatResultList} from '../message.model';
import { Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { RadListView, ListViewEventData } from "nativescript-ui-listview";
import { RouterExtensions } from "nativescript-angular/router";
import { ObservableArray } from "tns-core-modules/data/observable-array";
//import for app settings
import * as appSettings from "tns-core-modules/application-settings";
@Component({
    selector: 'ns-message-home',
    templateUrl: './message-home.component.html',
    styleUrls: ['./message-home.component.scss'],
    moduleId: module.id
})
export class MessageHomeComponent implements OnInit, OnDestroy {
    userid = "";
    chatid = "";
    private activechatResultListSub: Subscription; 
    public activechatResultList: ActivechatResultList;
    public myActivechatArray : ObservableArray<ActivechatResult>;
    public chatsLoaded : boolean;
    public showDetails : boolean;
    constructor(private messageServ: MessageService, private router: RouterExtensions) {
    }
    ngOnInit() {
        this.chatsLoaded = false;
        this.showDetails = false;

        this.userid = appSettings.getString("userid");
        this.messageServ.initializeActiveChats(this.userid);

        this.activechatResultListSub = this.messageServ.currentActivechatList.subscribe(
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

    }
    onItemSelected(args :ListViewEventData): void {
        console.log(this.userid);
        const tappedActivechatItem = args.view.bindingContext;
        this.messageServ.setActivechat(this.userid,tappedActivechatItem.chatid);

        appSettings.setString("chatid", tappedActivechatItem.chatid);
        appSettings.setString("advertisementtype", tappedActivechatItem.advertisementtype);
        appSettings.setString("advertisementid", tappedActivechatItem.advertisementid);
        this.router.navigate(['/message/details'],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });

    }

    onViewAd(){
        if (this.showDetails == false){
            this.showDetails = true; 
        } 
        else {
            this.showDetails = false;
        }
        ; 
 
    }

    ngOnDestroy() {
        if(this.activechatResultListSub){
            this.activechatResultListSub.unsubscribe();
        }
    }
}