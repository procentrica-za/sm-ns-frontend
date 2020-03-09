import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TextbookResult, TextbookResultList, UserAdvertisementResult, UserAdvertisementResultList} from './advert.model'
//import { TextbookResult, TextbookResultList } from './advert.model';

import { HttpClient } from '@angular/common/http';
import { request, getJSON } from "tns-core-modules/http";

import { getString, setString } from "tns-core-modules/application-settings";


@Injectable({ providedIn: 'root' })

export class AdvertService {
    private _currentTextbookList = new BehaviorSubject<TextbookResultList>(null);
    private _currentTextbook = new BehaviorSubject<TextbookResult>(null);
    private _currentUserAdvertList = new BehaviorSubject<UserAdvertisementResultList>(null);
    private _currentUserAdvertisement = new BehaviorSubject<UserAdvertisementResult>(null);


    get currentTextbookList() {
        return this._currentTextbookList.asObservable();
    }

    get currentTextbook() {
        return this._currentTextbook.asObservable();
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
        //console.log(reqUrl);
        request ({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const textbookResultErr = new TextbookResult(500, null, null, null, null, null, null, null, null, null ,null ,null ,null ,null);
            } else if (responseCode === 200) {
                // Make sure the response we receive is in JSON format.
                const result = response.content.toJSON();
                // Instansiate a textbook list object to read the response in to.
                let textbookList: TextbookResult[] = [];
                // get the textbooklist.
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

    setTextbook(advertisementID: string) {
        this.currentTextbookList.forEach(element => {
            element.Textbooks.forEach(innerElement => {
                if(advertisementID == innerElement.advertisementid){
                    this._currentTextbook.next(innerElement);
                }
            })
        });
    }

    initializeUserAdvertisements(userID: string){
        const reqUrl = getString("sm-service-advert-manager-host") + "/useradvertisements?id=" + userID;
        //console.log(reqUrl);
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


}





