import { Component, OnInit, OnDestroy } from "@angular/core";
import { AdvertService } from "../advert.service";
import { ActivechatResult, ActivechatResultList, DeleteChatResult} from '../advert.model';
import { Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { RadListView, ListViewEventData } from "nativescript-ui-listview";
import { RouterExtensions } from "nativescript-angular/router";
import { ObservableArray } from "tns-core-modules/data/observable-array";
//import for app settings
import * as appSettings from "tns-core-modules/application-settings";
import * as dialogs from "tns-core-modules/ui/dialogs";
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
    public myActivechatArray : ObservableArray<ActivechatResult>;
    public chatsLoaded : boolean;
    public showDetails : boolean;
    public deleteChat : boolean;
     //unread messages
     deletechatResultSub: Subscription;
     deletechat: DeleteChatResult;
    constructor(private advertServ: AdvertService, private router: RouterExtensions) {
    }
    ngOnInit() {
        this.chatsLoaded = false;
        this.showDetails = false;
        this.deleteChat = false;
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

        this.deletechatResultSub = this.advertServ.currentDeleteChatResult.subscribe(
            deletechatresult => {
                if(deletechatresult){
                    this.deletechat = deletechatresult;
 
                    if(this.deletechat.responseStatusCode === 200 && this.deletechat.chatposted === true){
                        this.advertServ.initializeActiveChats();
                        this.deletechatResultSub.unsubscribe();
                        TNSFancyAlert.showSuccess("Success!", "Chat Successfully Deleted!", "Close")
                        this.deleteChat = false;
                    } else if (this.deletechat.responseStatusCode === 500){
                        TNSFancyAlert.showError("Connection error", "An internal error has occured.", "Close");
                        this.deleteChat = false;
                        this.deletechatResultSub.unsubscribe();
                    }
    
                    else {
                        TNSFancyAlert.showError("Error", "An Error has been recieved, please contact support." , "Close");
                        this.deleteChat = false;
                        this.deletechatResultSub.unsubscribe();
                    }
                    
                }
            }
        );

    
        this.advertServ.initializeActiveChats();
    }
    onItemSelected(args :ListViewEventData): void {
        if(this.deleteChat == true){
            const tappedActivechatItem = args.view.bindingContext;
            dialogs.confirm({
                title: "Please confirm deletion",
                message: "Are you sure that you wish to delete this chat?",
                okButtonText: "Yes",
                cancelButtonText: "No",
            }).then(result => {
                // result argument is boolean
                console.log("Dialog result: " + result);
                if (result == true) {
                    this.advertServ.deleteChat(tappedActivechatItem.chatid);
                    
                }
                else {
                    this.deleteChat = false;
                }
            });
            
        
        }
        else{
        const tappedActivechatItem = args.view.bindingContext;
        this.advertServ.setActivechat(tappedActivechatItem.chatid);
        appSettings.setString("chatid", tappedActivechatItem.chatid);
        appSettings.setString("advertisementtype", tappedActivechatItem.advertisementtype);
        appSettings.setString("advertisementid", tappedActivechatItem.advertisementid);
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

    }

    onViewAd(){
        if (this.showDetails == false){
            this.showDetails = true; 
        } 
        else {
            this.showDetails = false;
        }
         
 
    }

    onDeleteChat(){
        if (this.deleteChat == false){
            this.deleteChat = true;
        } 
        else {
            this.deleteChat = false;
        }
         
 
    }

    ngOnDestroy() {
        if(this.activechatResultListSub){
            this.activechatResultListSub.unsubscribe();
        }
        if(this.deletechatResultSub){
            this.deletechatResultSub.unsubscribe();
        }
    }
}