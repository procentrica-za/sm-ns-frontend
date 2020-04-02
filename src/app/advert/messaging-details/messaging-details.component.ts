import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TextField } from 'tns-core-modules/ui/text-field';
import { AdvertService } from "../advert.service";
import { MessageResult, MessageResultList} from '../advert.model';
import { Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { RadListView, ListViewEventData } from "nativescript-ui-listview";
import { RouterExtensions } from "nativescript-angular/router";
import { ObservableArray } from "tns-core-modules/data/observable-array";
//import for app settings
import * as appSettings from "tns-core-modules/application-settings";
@Component({
    selector: 'ns-messaging-details',
    templateUrl: './messaging-details.component.html',
    styleUrls: ['./messaging-details.component.scss'],
    moduleId: module.id
})
export class MessagingDetailsComponent implements OnInit, OnDestroy {
    
    form: FormGroup;
    messageControlIsValid = true;
    @ViewChild('messageEl', {static:false}) messageEl: ElementRef<TextField>;
    @ViewChild('hiddenEl', {static:false}) hiddenEl: ElementRef<TextField>;
    private messageResultListSub: Subscription;
    public messageResultList: MessageResultList;
    public messagesLoaded : boolean;
    public myMessageArray : ObservableArray<MessageResult>;
    constructor(private advertServ: AdvertService, private router: RouterExtensions) {
    }
    ngOnInit() {
        this.messagesLoaded = false;
        this.messageResultListSub = this.advertServ.currentMessageList.subscribe(
            messageResult => {
                if(messageResult) {
                    if(messageResult.responseStatusCode === 200){
                        this.myMessageArray = new ObservableArray(0);
                        messageResult.Messages.forEach( t => {
                            this.myMessageArray.push(t);
                            
                        });
                        this.advertServ.clearMessages();
                        this.advertServ.initializeActiveChats();
                        this.messagesLoaded = true;
                    } else if(this.messageResultList.responseStatusCode === 500) {
                        TNSFancyAlert.showError("Connection error", "A Connection cannot be established at this time", "Dismiss");
                    }
                    else if(this.messageResultList.responseStatusCode === 400) {
                        TNSFancyAlert.showError("Connection error", this.messageResultList.message, "Dismiss");
                    }
                    else {
                        TNSFancyAlert.showError("Connection error", this.messageResultList.message, "Dismiss");
                    }
                }
            }
        );
        this.form = new FormGroup({
            message: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                }
            )
        });
        this.form.get('message').statusChanges.subscribe(status => {
            this.messageControlIsValid = status === 'VALID';
        });
    }
    ngOnDestroy() {
        if(this.messageResultListSub){
            this.messageResultListSub.unsubscribe();
        }
    }
//Send message function
    onSendMessage() {
        this.hiddenEl.nativeElement.focus();
        this.messageEl.nativeElement.focus();
        this.messageEl.nativeElement.dismissSoftInput();
        if(!this.form.valid){
            return;
        }
        const chatid = appSettings.getString("chatid");
        const authorid = appSettings.getString("userid");
        const message = this.form.get('message').value;

         setTimeout(() =>{
    //send message
             this.advertServ.SendMessage(chatid,authorid, message);
         },100);
         this.form.reset();
     }

}