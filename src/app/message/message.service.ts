import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
            MessageResult,
            ActivechatResultList,
            ActivechatResult,
            MessageResultList } from './message.model'
           
//import { TextbookResult, TextbookResultList } from './advert.model';
import { HttpClient } from '@angular/common/http';
import { request, getJSON } from "tns-core-modules/http";
import { getString, setString } from "tns-core-modules/application-settings";
import { isEnabled } from 'tns-core-modules/trace/trace';


import { Subscription } from "rxjs";
//Used for chat styling
import * as appSettings from "tns-core-modules/application-settings";
@Injectable({ providedIn: 'root' })
export class MessageService {



    //Messaging, active chat service
    private _currentActivechatList = new BehaviorSubject<ActivechatResultList>(null);
    private _currentActivechat = new BehaviorSubject<ActivechatResult>(null);
    //messaging messages service
    private _currentMessageList = new BehaviorSubject<MessageResultList>(null);
    private _currentMessage = new BehaviorSubject<MessageResult>(null);
    //send message service
    private _currentSendMessage = new BehaviorSubject<MessageResult>(null);
    


// Messaging active chat results
    get currentActivechatList() {
        return this._currentActivechatList.asObservable();
    }
    get currentActivechat() {
        return this._currentActivechat.asObservable();
    }
// Messaging message results
    get currentMessageList() {
        return this._currentMessageList.asObservable();
    }
    get currentMessage() {
        return this._currentMessage.asObservable();
    }
    //Send message
    get currentSendMessage() {
        return this._currentSendMessage.asObservable();
    }
  


    constructor(private http: HttpClient){
        setString("sm-service-messages-host", "http://192.168.1.174:9956");
    }
    

    initializeActiveChats(userid) {
        const reqUrl = getString("sm-service-messages-host") + "/chats?userid=" + userid;
        console.log(reqUrl);
        request ({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const activechatResultErr = new ActivechatResult(500, null, null, null, null, null, null, null, null, null, null);
            } else if (responseCode === 200) {
                // Make sure the response we receive is in JSON format.
                const result = response.content.toJSON();
                // Instansiate a textbook list object to read the response in to.
                let activechatList: ActivechatResult[] = [];
                // get the activechatlist.
                const JSONActivechatList = result.activechats;
                // iterate through the activechatlist and read each textbook into a textbook object and push to the list variable
                JSONActivechatList.forEach(element => {
                    element.responseStatusCode =200;
                    activechatList.push(element)
                })
                const activechatResult = new ActivechatResultList(200, activechatList, "Successfully recieved chats");
                this._currentActivechatList.next(activechatResult);
            } else {
                const activechatlistResult = new ActivechatResultList(responseCode, null,response.content.toString());
                this._currentActivechatList.next(activechatlistResult);
    
            }
        }, (e) => {
            const activechatResult = new ActivechatResultList(400,null, "An Error has been recieved, please contact support.");
            this._currentActivechatList.next(activechatResult);
        });
    }
    setActivechat(userid: string, chatid: string) {
        const reqUrl = getString("sm-service-messages-host") + "/message?userid=" + userid + "&chatid=" + chatid;
        console.log(reqUrl);
        request ({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const messageResultErr = new MessageResult(500, null, null, null, null);
            } else if (responseCode === 200) {
                // Make sure the response we receive is in JSON format.
                const result = response.content.toJSON();
                // Instansiate a textbook list object to read the response in to.
                let messageList: MessageResult[] = [];
                // get the textbooklist.
                const JSONMessageList = result.messages;
                const userchat = appSettings.getString("username");
                // iterate through the textbooklist and read each textbook into a textbook object and push to the list variable
                JSONMessageList.forEach(element => {
                    element.responseStatusCode =200;
                     //for message styling
                    element.userchat = userchat;
                    messageList.push(element)
                })
                const messageResult = new MessageResultList(200, messageList, "Messages successfully recieved");
                this._currentMessageList.next(messageResult);
            } else {
                const messagelistResult = new MessageResultList(responseCode, null,response.content.toString());
                this._currentMessageList.next(messagelistResult);
    
            }
        }, (e) => {
            const messageResult = new MessageResultList(400,null, "An Error has been recieved, please contact support.");
            this._currentMessageList.next(messageResult);
        });
    }
    SendMessage(chatid: string, authorid: string, message: string) {
        const reqUrl = getString("sm-service-messages-host") + "/message" ;
        console.log(reqUrl);
        request ({
            url: reqUrl,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ chatid: chatid, authorid: authorid, message: message }),
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const messageResultErr = new MessageResult(500, null, null, null, null);
            } else if (responseCode === 200) {
                // Make sure the response we receive is in JSON format.
                const result = response.content.toJSON();
                // Instansiate a textbook list object to read the response in to.
                let messageList: MessageResult[] = [];
                // get the textbooklist.
                const JSONMessageList = result.messages;
                const userchat = appSettings.getString("username");
                console.log(userchat);
                // iterate through the textbooklist and read each textbook into a textbook object and push to the list variable
                JSONMessageList.forEach(element => {
                    element.responseStatusCode =200;
                    //for message styling
                    element.userchat = userchat;
                    messageList.push(element)
                })
                const messageResult = new MessageResultList(200, messageList, "Message successfully recieved");
                this._currentMessageList.next(messageResult);
            } else {
                const messagelistResult = new MessageResultList(responseCode, null,response.content.toString());
                this._currentMessageList.next(messagelistResult);
    
            }
        }, (e) => {
            const messageResult = new MessageResultList(400,null, "An Error has been recieved, please contact support.");
            this._currentMessageList.next(messageResult);
        });
    }
}

