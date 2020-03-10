import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TextbookResult, TextbookResultList, UserAdvertisementResult, UserAdvertisementResultList, AccomodationResultList, AccomodationResult, NoteResultList, TutorResultList, NoteResult, TutorResult} from './advert.model'
//import { TextbookResult, TextbookResultList } from './advert.model';

import { HttpClient } from '@angular/common/http';
import { request, getJSON } from "tns-core-modules/http";

import { getString, setString } from "tns-core-modules/application-settings";


@Injectable({ providedIn: 'root' })

export class AdvertService {
    private _currentTextbookList = new BehaviorSubject<TextbookResultList>(null);
    private _currentTextbook = new BehaviorSubject<TextbookResult>(null);
    private _currentAccomodationList = new BehaviorSubject<AccomodationResultList>(null);
    private _currentAccomodation = new BehaviorSubject<AccomodationResult>(null);
    private _currentNoteList = new BehaviorSubject<NoteResultList>(null);
    private _currentNote = new BehaviorSubject<NoteResult>(null);
    private _currentTutorList = new BehaviorSubject<TutorResultList>(null);
    private _currentTutor = new BehaviorSubject<TutorResult>(null);
    private _currentUserAdvertList = new BehaviorSubject<UserAdvertisementResultList>(null);
    private _currentUserAdvertisement = new BehaviorSubject<UserAdvertisementResult>(null);


    get currentTextbookList() {
        return this._currentTextbookList.asObservable();
    }

    get currentTextbook() {
        return this._currentTextbook.asObservable();
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

    get currentUserAdvertList(){
        return this._currentUserAdvertList.asObservable();
    }

    get currentUserAdvert(){
        return this._currentUserAdvertisement.asObservable();
    }

    constructor(private http: HttpClient){
        setString("sm-service-advert-manager-host", "http://10.10.100.136:9953");
    }

    initializeTextbooks() {
        const reqUrl = getString("sm-service-advert-manager-host") + "/advertisementtype?adverttype=TXB";
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

    initializeAccomodation() {
        const reqUrl = getString("sm-service-advert-manager-host") + "/advertisementtype?adverttype=ACD";
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

    initializeTutors() {
        const reqUrl = getString("sm-service-advert-manager-host") + "/advertisementtype?adverttype=TUT";
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

    initializeNotes() {
        const reqUrl = getString("sm-service-advert-manager-host") + "/advertisementtype?adverttype=NTS";
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

   

    setTextbook(advertisementID: string) {
        this.currentTextbookList.forEach(element => {
            element.Textbooks.forEach(innerElement => {
                if(advertisementID == innerElement.advertisementid){
                    this._currentTextbook.next(innerElement);
                }
            })
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

    initializeUserAdvertisements(userID: string){
        const reqUrl = getString("sm-service-advert-manager-host") + "/useradvertisements?id=" + userID;
        request ({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const userAdvertResultErr = new UserAdvertisementResult(500, null, null, null, null, null, null, null);
            } else if (responseCode === 200) {
                
                const result = response.content.toJSON();
               
                let userAdvertList: UserAdvertisementResult[] = [];
               
                const JSONUserAdvertList = result.useradvertisements;
               
                JSONUserAdvertList.forEach(element => {
                    element.responseStatusCode =200;
                    element.imagebytes = "data:image/png;base64," + element.imagebytes;
                    userAdvertList.push(element)
                })
                const userAdvertListResult = new UserAdvertisementResultList(200, userAdvertList);
                this._currentUserAdvertList.next(userAdvertListResult);
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

    clearSelectedAdvertisement() {
        this._currentTextbook.next(null);
        this._currentAccomodation.next(null);
        this._currentTutor.next(null);
        this._currentNote.next(null);
    }


}





