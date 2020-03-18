import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TextbookResult, TextbookResultList, AccomodationResultList, AccomodationResult, NoteResultList, TutorResultList, NoteResult, TutorResult, UserAdvertAccomodationResult, UserAdvertTutorResultList, UserAdvertTextbookResultList, UserAdvertNoteResultList, UserAdvertAccomodationResultList, UserAdvertNoteResult, UserAdvertTextbookResult, UserAdvertTutorResult } from './advert.model'
import {TextbookResult, TextbookResultList, ActivechatResult, ActivechatResultList, MessageResult, MessageResultList} from './advert.model'
//import { TextbookResult, TextbookResultList } from './advert.model';
import { HttpClient } from '@angular/common/http';
import { request, getJSON } from "tns-core-modules/http";
import { getString, setString } from "tns-core-modules/application-settings";
import { isEnabled } from 'tns-core-modules/trace/trace';


import { Subscription } from "rxjs";
//Used for chat styling
import * as appSettings from "tns-core-modules/application-settings";
@Injectable({ providedIn: 'root' })
export class AdvertService {
    private _currentTextbookList = new BehaviorSubject<TextbookResultList>(null);
    private _currentTextbook = new BehaviorSubject<TextbookResult>(null);
    //Messaging, active chat service
    private _currentActivechatList = new BehaviorSubject<ActivechatResultList>(null);
    private _currentActivechat = new BehaviorSubject<ActivechatResult>(null);
    //messaging messages service
    private _currentMessageList = new BehaviorSubject<MessageResultList>(null);
    private _currentMessage = new BehaviorSubject<MessageResult>(null);
    //send message service
    private _currentSendMessage = new BehaviorSubject<MessageResult>(null)
   //private _currentUserAdvertList = new BehaviorSubject
    private test: Subscription;
    public testList: TextbookResult[];

    private _currentAccomodationList = new BehaviorSubject<AccomodationResultList>(null);
    private _currentAccomodation = new BehaviorSubject<AccomodationResult>(null);

    private _currentNoteList = new BehaviorSubject<NoteResultList>(null);
    private _currentNote = new BehaviorSubject<NoteResult>(null);

    private _currentTutorList = new BehaviorSubject<TutorResultList>(null);
    private _currentTutor = new BehaviorSubject<TutorResult>(null);

    private _currentUserAdvertTextbookList = new BehaviorSubject<UserAdvertTextbookResultList>(null);
    private _currentUserAdvertTextbook = new BehaviorSubject<UserAdvertTextbookResult>(null);

    private _currentUserAdvertAccomodationList = new BehaviorSubject<UserAdvertAccomodationResultList>(null);
    private _currentUserAdvertAccomodation = new BehaviorSubject<UserAdvertAccomodationResult>(null);

    private _currentUserAdvertTutorList = new BehaviorSubject<UserAdvertTutorResultList>(null);
    private _currentUserAdvertTutor = new BehaviorSubject<UserAdvertTutorResult>(null);

    private _currentUserAdvertNoteList = new BehaviorSubject<UserAdvertNoteResultList>(null);
    private _currentUserAdvertNote = new BehaviorSubject<UserAdvertNoteResult>(null);



    get currentTextbookList() {
        return this._currentTextbookList.asObservable();
    }
    get currentTextbook() {
        return this._currentTextbook.asObservable();
    }
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

    get currentAccomodationList() {
        return this._currentAccomodationList.asObservable();
    }

    get currentAccomodation() {
        return this._currentAccomodation.asObservable();
    }
    get currentTutorList() {
        return this._currentTutorList.asObservable();
    }

    get currentTutor() {
        return this._currentTutor.asObservable();
    }
    get currentNoteList() {
        return this._currentNoteList.asObservable();
    }

    get currentNote() {
        return this._currentNote.asObservable();
    }

    get currentUserAdvertTextbookList(){
        return this._currentUserAdvertTextbookList.asObservable();
    }

    get currentUserAdvertTextbook(){
        return this._currentUserAdvertTextbook.asObservable();
    }

    get currentUserAdvertAccomodationList(){
        return this._currentUserAdvertAccomodationList.asObservable();
    }

    get currentUserAdvertAccomodation(){
        return this._currentUserAdvertAccomodation.asObservable();
    }

    get currentUserAdvertTutorList(){
        return this._currentUserAdvertTutorList.asObservable();
    }

    get currentUserAdvertTutor(){
        return this._currentUserAdvertTutor.asObservable();
    }

    get currentUserAdvertNoteList(){
        return this._currentUserAdvertNoteList.asObservable();
    }

    get currentUserAdvertNote(){
        return this._currentUserAdvertNote.asObservable();
    }

    constructor(private http: HttpClient){
        setString("sm-service-advert-manager-host", "http://192.168.1.56:9953");
        setString("sm-service-messages-host", "http://10.10.100.156:9956");
    }
    initializeTextbooks() {
        const reqUrl = getString("sm-service-advert-manager-host") + "/advertisementtype?adverttype=TXB";
        console.log(reqUrl);


    initializeAdvertisements(isSelling: boolean){
        this.initializeTextbooks(isSelling);
        this.initializeAccomodation(isSelling);
        this.initializeTutors(isSelling);
        this.initializeNotes(isSelling);
    }

    initializeUserAdvertisements(userID: string, isSelling: boolean){
        this.initializeUserAdvertTextbooks(userID, isSelling);
        this.initializeUserAdvertAccomodation(userID, isSelling);
        this.initializeUserAdvertTutors(userID, isSelling);
        this.initializeUserAdvertNotes(userID, isSelling);
    }

    initializeTextbooks(isSelling: boolean) {
        const reqUrl = getString("sm-service-advert-manager-host") + "/advertisementtype?adverttype=TXB&selling=" + isSelling;
        request ({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const textbookResultErr = new TextbookResult(500, null, null, null, null, null, null, null, null, null ,null ,null ,null ,null);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                let textbookList: TextbookResult[] = [];
                const JSONTextbookList = result.textbooks;
                // iterate through the textbooklist and read each textbook into a textbook object and push to the list variable
                JSONTextbookList.forEach(element => {
                    element.responseStatusCode =200;
                    element.imagebytes = "data:image/png;base64," + element.imagebytes;
                    textbookList.push(element)
                })
                const textbookResult = new TextbookResultList(200, textbookList);
                this._currentTextbookList.next(textbookResult);
            } else {
                // TODO : Handle if code other than 200 or 500 has been received
                console.log("in the else");
            }
        }, (e) => {
            // TODO : Handle error
            console.log(e);
        });
        return null;
    }

    initializeAccomodation(isSelling: boolean) {
        const reqUrl = getString("sm-service-advert-manager-host") + "/advertisementtype?adverttype=ACD&selling" + isSelling;
        request ({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const accomodationResultErr = new AccomodationResult(500, null, null, null, null, null, null, null, null, null ,null ,null, null);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                let accomodationList: AccomodationResult[] = [];
                const JSONAccomodationList = result.accomodations;
                JSONAccomodationList.forEach(element => {
                    element.responseStatusCode =200;
                    element.imagebytes = "data:image/png;base64," + element.imagebytes;
                    accomodationList.push(element)
                })
                const accomodationResult = new AccomodationResultList(200, accomodationList);
                this._currentAccomodationList.next(accomodationResult);
            } else {
                // TODO : Handle if code other than 200 or 500 has been received
                console.log("in the else");
            }
        }, (e) => {
            // TODO : Handle error
            console.log(e);
        });
        return null;
    }

    initializeTutors(isSelling: boolean) {
        const reqUrl = getString("sm-service-advert-manager-host") + "/advertisementtype?adverttype=TUT&selling=" + isSelling;
        request ({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const tutorResultErr = new TutorResult(500, null, null, null, null, null, null, null, null, null ,null ,null, null, null, null);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                let tutorList: TutorResult[] = [];
                const JSONTutorList = result.tutors;
                JSONTutorList.forEach(element => {
                    element.responseStatusCode =200;
                    element.imagebytes = "data:image/png;base64," + element.imagebytes;
                    tutorList.push(element)
                })
                const tutorResult = new TutorResultList(200, tutorList);
                this._currentTutorList.next(tutorResult);
            } else {
                // TODO : Handle if code other than 200 or 500 has been received
                console.log("in the else");
            }
        }, (e) => {
            // TODO : Handle error
            console.log(e);
        });
        return null;
    }

    initializeNotes(isSelling: boolean) {
        const reqUrl = getString("sm-service-advert-manager-host") + "/advertisementtype?adverttype=NTS&selling=" + isSelling;
        request ({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const noteResultErr = new NoteResult(500, null, null, null, null, null, null, null, null, null);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                let noteList: NoteResult[] = [];
                const JSONNoteList = result.notes;
                JSONNoteList.forEach(element => {
                    element.responseStatusCode =200;
                    element.imagebytes = "data:image/png;base64," + element.imagebytes;
                    console.log(element.advertisementid);
                    noteList.push(element)
                })
                const noteResult = new NoteResultList(200, noteList);
                this._currentNoteList.next(noteResult);
            } else {
                // TODO : Handle if code other than 200 or 500 has been received
                console.log("in the else");
            }
        }, (e) => {
            // TODO : Handle error
            console.log(e);
        });
        return null;
    }

    initializeUserAdvertTextbooks(userID: string, isSelling: boolean) {
        const reqUrl = getString("sm-service-advert-manager-host") + "/useradvertisements?id=" + userID + "&adverttype=TXB&selling=" + isSelling;
        request ({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const userAdvertTextbookResultErr = new UserAdvertTextbookResult(500, null, null, null, null, null, null, null, null, null ,null ,null ,null ,null);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                let userAdverttextbookList: UserAdvertTextbookResult[] = [];
                const JSONuserAdvertTextbookList = result.textbooks;
                JSONuserAdvertTextbookList.forEach(element => {
                    element.responseStatusCode =200;
                    element.imagebytes = "data:image/png;base64," + element.imagebytes;
                    userAdverttextbookList.push(element)
                })
                const userAdverttextbookResult = new UserAdvertTextbookResultList(200, userAdverttextbookList);
                this._currentUserAdvertTextbookList.next(userAdverttextbookResult);
            } else {
                // TODO : Handle if code other than 200 or 500 has been received
                console.log("in the else");
            }
        }, (e) => {
            // TODO : Handle error
            console.log(e);
        });
        return null;
    }

    initializeUserAdvertAccomodation(userID: string, isSelling: boolean) {
        const reqUrl = getString("sm-service-advert-manager-host") + "/useradvertisements?id=" + userID + "&adverttype=ACD&selling=" + isSelling;
        request ({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const userAdvertAccomodationResultErr = new UserAdvertAccomodationResult(500, null, null, null, null, null, null, null, null, null ,null ,null ,null);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                let userAdvertAccomodationList: UserAdvertAccomodationResult[] = [];
                const JSONuserAdvertAccomodationList = result.accomodations;
                JSONuserAdvertAccomodationList.forEach(element => {
                    element.responseStatusCode =200;
                    element.imagebytes = "data:image/png;base64," + element.imagebytes;
                    userAdvertAccomodationList.push(element)
                })
                const userAdvertAccomodationResult = new UserAdvertAccomodationResultList(200, userAdvertAccomodationList);
                this._currentUserAdvertAccomodationList.next(userAdvertAccomodationResult);
            } else {
                // TODO : Handle if code other than 200 or 500 has been received
                console.log("in the else");
            }
        }, (e) => {
            // TODO : Handle error
            console.log(e);
        });
        return null;
    }

    initializeUserAdvertTutors(userID: string, isSelling: boolean) {
        const reqUrl = getString("sm-service-advert-manager-host") + "/useradvertisements?id=" + userID + "&adverttype=TUT&selling=" + isSelling;
        request ({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const userAdvertTutorResultErr = new UserAdvertTutorResult(500, null, null, null, null, null, null, null, null, null ,null ,null ,null, null ,null);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                let userAdvertTutorList: UserAdvertTutorResult[] = [];
                const JSONuserAdvertTutorList = result.tutors;
                JSONuserAdvertTutorList.forEach(element => {
                    element.responseStatusCode =200;
                    element.imagebytes = "data:image/png;base64," + element.imagebytes;
                    userAdvertTutorList.push(element)
                })
                const userAdvertTutorResult = new UserAdvertTutorResultList(200, userAdvertTutorList);
                this._currentUserAdvertTutorList.next(userAdvertTutorResult);
            } else {
                // TODO : Handle if code other than 200 or 500 has been received
                console.log("in the else");
            }
        }, (e) => {
            // TODO : Handle error
            console.log(e);
        });
        return null;
    }

    initializeUserAdvertNotes(userID: string, isSelling: boolean) {
        const reqUrl = getString("sm-service-advert-manager-host") + "/useradvertisements?id=" + userID + "&adverttype=NTS&selling=" + isSelling;
        request ({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const userAdvertNoteResultErr = new UserAdvertNoteResult(500, null, null, null, null, null, null, null, null, null);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                let userAdvertNoteList: UserAdvertNoteResult[] = [];
                const JSONuserAdvertNoteList = result.notes;
                JSONuserAdvertNoteList.forEach(element => {
                    element.responseStatusCode =200;
                    element.imagebytes = "data:image/png;base64," + element.imagebytes;
                    userAdvertNoteList.push(element)
                })
                const userAdvertNoteResult = new UserAdvertNoteResultList(200, userAdvertNoteList);
                this._currentUserAdvertNoteList.next(userAdvertNoteResult);
            } else {
                // TODO : Handle if code other than 200 or 500 has been received
                console.log("in the else");
            }
        }, (e) => {
            // TODO : Handle error
            console.log(e);
        });
        return null;
    }
    

    setAdvert(type: string, advertisementID: string){
        switch(type){
            case "TXB":{
                this.setTextbook(advertisementID);
                break;
            }
            case "ACD":{
                this.setAccomodation(advertisementID);
                break;
            }
            case "TUT":{
                this.setTutor(advertisementID);
                break;
            }
            case "NTS":{
                this.setNote(advertisementID);
                break;
            }
        }
    }

    setUserAdvert(type: string, advertisementID: string){
        switch(type){
            case "TXB":{
                this.setUserTextbook(advertisementID);
                break;
            }
            case "ACD":{
                this.setUserAccomodation(advertisementID);
                break;
            }
            case "TUT":{
                this.setUserTutor(advertisementID);
                break;
            }
            case "NTS":{
                this.setUserNote(advertisementID);
                break;
            }
        }
    }

   

    setTextbook(advertisementID: string) {
        this.currentTextbookList.forEach(element => {
            element.Textbooks.forEach(innerElement => {
                if(advertisementID == innerElement.advertisementid){
                    this._currentTextbook.next(innerElement);
                }
            })
        });
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
                const activechatResultErr = new ActivechatResult(500, null, null, null, null, null, null);
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
    setActivechat(chatid: string) {
        const reqUrl = getString("sm-service-messages-host") + "/message?chatid=" + chatid;
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
                console.log(userchat);
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

    setAccomodation(advertisementID: string){
        this.currentAccomodationList.forEach(element => {
            element.Accomodations.forEach(innerElement => {
                if(advertisementID == innerElement.advertisementid){
                    this._currentAccomodation.next(innerElement);
                }
            })
        });
    }

    setTutor(advertisementID: string){
        this.currentTutorList.forEach(element => {
            element.Tutors.forEach(innerElement => {
                if(advertisementID == innerElement.advertisementid){
                    this._currentTutor.next(innerElement);
                }
            })
        });
    }

    setNote(advertisementID: string){
        this.currentNoteList.forEach(element => {
            element.Notes.forEach(innerElement => {
                if(advertisementID == innerElement.advertisementid){
                    this._currentNote.next(innerElement);
                }
            })
        });
    }

    setUserTextbook(advertisementID: string) {
        this.currentUserAdvertTextbookList.forEach(element => {
            element.Textbooks.forEach(innerElement => {
                if(advertisementID == innerElement.advertisementid){
                    this._currentUserAdvertTextbook.next(innerElement);
                }
            })
        });
    }

    setUserAccomodation(advertisementID: string){
        this.currentUserAdvertAccomodationList.forEach(element => {
            element.Accomodations.forEach(innerElement => {
                if(advertisementID == innerElement.advertisementid){
                    this._currentUserAdvertAccomodation.next(innerElement);
                }
            })
        });
    }

    setUserTutor(advertisementID: string){
        this.currentUserAdvertTutorList.forEach(element => {
            element.Tutors.forEach(innerElement => {
                if(advertisementID == innerElement.advertisementid){
                    this._currentUserAdvertTutor.next(innerElement);
                }
            })
        });
    }

    setUserNote(advertisementID: string){
        this.currentUserAdvertNoteList.forEach(element => {
            element.Notes.forEach(innerElement => {
                if(advertisementID == innerElement.advertisementid){
                    this._currentUserAdvertNote.next(innerElement);
                }
            })
        });
    }

    clearSelectedAdvertisement() {
        this._currentTextbook.next(null);
        this._currentAccomodation.next(null);
        this._currentTutor.next(null);
        this._currentNote.next(null);
    }

    clearSelectedUserAdvertisement() {
        this._currentUserAdvertTextbook.next(null);
        this._currentUserAdvertAccomodation.next(null);
        this._currentUserAdvertTutor.next(null);
        this._currentUserAdvertNote.next(null);
    }


}