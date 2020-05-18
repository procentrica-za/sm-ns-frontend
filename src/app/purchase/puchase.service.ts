import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PurchaseAdvertisementResult } from "./purhcase.model"

import { HttpClient } from '@angular/common/http';
import { request } from "tns-core-modules/http";
import { getString, setString } from "tns-core-modules/application-settings";
@Injectable({ providedIn: 'root' })

export class PurchaseService {
    private _currentAdvertisementTokenPurchaseResult = new BehaviorSubject<PurchaseAdvertisementResult>(null)

    get currentAdvertisementTokenPurchaseResult() {
        return this._currentAdvertisementTokenPurchaseResult.asObservable();
    }


    constructor(private http: HttpClient){
        setString("sm-service-cred-manager-host", "http://192.168.1.188:9952");
    }

    PurchaseAdvertisementToken(id: string, ammount: string) {
        const reqUrl = getString("sm-service-cred-manager-host") + "/purchase" ;
        console.log(reqUrl);
        request ({
            url: reqUrl,
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ id: id, ammount: ammount }),
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const PurchaseAdvertTokenErr = new PurchaseAdvertisementResult(500, false, 'An error has occured whilst trying to connect.',);
                this._currentAdvertisementTokenPurchaseResult.next(PurchaseAdvertTokenErr);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                const PurchaseAdvertisementResultSuccess = new PurchaseAdvertisementResult(200, result.success, result.message);
                this._currentAdvertisementTokenPurchaseResult.next(PurchaseAdvertisementResultSuccess);
            } else {
                const PurchaseAdvertisementResultFailure = new PurchaseAdvertisementResult(responseCode, false, response.content.toString());
                this._currentAdvertisementTokenPurchaseResult.next(PurchaseAdvertisementResultFailure);
            }
        }, (e) => {
            const PurchaseAdvertisementResultFailure = new PurchaseAdvertisementResult(400, false, "An Error has been recieved, please contact support.");
            this._currentAdvertisementTokenPurchaseResult.next(PurchaseAdvertisementResultFailure);
        });

    }

    ClearPurchase(){
        this._currentAdvertisementTokenPurchaseResult = new BehaviorSubject<PurchaseAdvertisementResult>(null);
    }

}