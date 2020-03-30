import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
            OutstandingratingResult,
            OutstandingratingResultList,
            RateSellerResult,
            PreviousratingResult,
            PreviousratingResultList ,
            InterestedbuyerResult,
            InterestedbuyerResultList,
            RateBuyerResult } from './rating.model'
           
//import { TextbookResult, TextbookResultList } from './advert.model';
import { HttpClient } from '@angular/common/http';
import { request, getJSON } from "tns-core-modules/http";
import { getString, setString } from "tns-core-modules/application-settings";
import { isEnabled } from 'tns-core-modules/trace/trace';


import { Subscription } from "rxjs";
//Used for chat styling
import * as appSettings from "tns-core-modules/application-settings";
@Injectable({ providedIn: 'root' })
export class RatingService {
  
     //Rating,outstanding service
     private _currentOutstandingratingList = new BehaviorSubject<OutstandingratingResultList>(null);
     private _currentOutstandingrating = new BehaviorSubject<OutstandingratingResult>(null);
     //rate seller service
     private _currentRateSeller = new BehaviorSubject<RateSellerResult>(null)

     //Rating dashboards
     private _currentPreviousratingList = new BehaviorSubject<PreviousratingResultList>(null);
     private _currentPreviousrating = new BehaviorSubject<PreviousratingResult>(null);
     
     //rate buyer
     private _currentRateBuyer = new BehaviorSubject<RateBuyerResult>(null)


    //Rating, interested buyers
    private _currentInterestedbuyerList = new BehaviorSubject<InterestedbuyerResultList>(null);
    private _currentInterestedbuyer = new BehaviorSubject<InterestedbuyerResult>(null);



    //Rate buyer
    get currentRateBuyer() {
        return this._currentRateBuyer.asObservable();
    }

    // Rating Outstanding results
    get currentOutstandingratingList() {
        return this._currentOutstandingratingList.asObservable();
    }
    get currentOutstandingrating() {
        return this._currentOutstandingrating.asObservable();
    }
    //Rate seller
    get currentRateSeller() {
        return this._currentRateSeller.asObservable();
    }
     // Rating Dashboard results
     get currentPreviousratingList() {
        return this._currentPreviousratingList.asObservable();
    }
    get currentPreviousrating() {
        return this._currentPreviousrating.asObservable();
    }

    // Rating interested parties result
    get currentInterestedbuyerList() {
        return this._currentInterestedbuyerList.asObservable();
    }
    get currentInterestedbuyer() {
        return this._currentInterestedbuyer.asObservable();
    }


    constructor(private http: HttpClient){
        setString("sm-service-ratings-host", "http://192.168.1.174:9957");
    }
    
   
   //Outstading ratings for Buyer to rate seller
   initializeOutstandingratings(userid) {
    const reqUrl = getString("sm-service-ratings-host") + "/rate?userid=" + userid;
    console.log(reqUrl);
    request ({
        url: reqUrl,
        method: "GET",
        timeout: 5000
    }).then((response) => {
        const responseCode = response.statusCode;
        if(responseCode === 500) {
            const outstandingratingResultErr = new OutstandingratingResult(500, null, null, null, null, null);
        } else if (responseCode === 200) {
            // Make sure the response we receive is in JSON format.
            const result = response.content.toJSON();
            // Instansiate a textbook list object to read the response in to.
            let outstandingratingList: OutstandingratingResult[] = [];
            // get the outstandingratinglist.
            const JSONOutstandingratingList = result.outstandingratings;
            // iterate through the outstandingratinglist and read each textbook into a textbook object and push to the list variable
            JSONOutstandingratingList.forEach(element => {
                element.responseStatusCode =200;
                outstandingratingList.push(element)
            })
            const outstandingratingResult = new OutstandingratingResultList(200, outstandingratingList, "Successfully recieved outstanding ratings");
            this._currentOutstandingratingList.next(outstandingratingResult);
        } else {
            const outstandingratinglistResult = new OutstandingratingResultList(responseCode, null,response.content.toString());
            this._currentOutstandingratingList.next(outstandingratinglistResult);

        }
    }, (e) => {
        const outstandingratingResult = new OutstandingratingResultList(400,null, "An Error has been recieved, please contact support.");
        this._currentOutstandingratingList.next(outstandingratingResult);
    });
}

clearSelectedOutstandingrating() {
    this._currentOutstandingrating.next(null);
    this._currentOutstandingratingList.next(null);
}

    RateSeller(ratingid: string, sellerrating: string, sellercomments: string) {
        const reqUrl = getString("sm-service-ratings-host") + "/rate" ;
        console.log(reqUrl);
        request ({
            url: reqUrl,
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ ratingid: ratingid,  sellerrating: sellerrating, sellercomments: sellercomments}),
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const RateSellerResultErr = new RateSellerResult(500, false, 'An error has occured whilst trying to connect.',);
                this._currentRateSeller.next(RateSellerResultErr);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                const RateSellersuccessResult = new RateSellerResult(200, true, result.message);
                this._currentRateSeller.next(RateSellersuccessResult);
            } else {
                const RateSellersuccessResult = new RateSellerResult(responseCode, false, response.content.toString());
                this._currentRateSeller.next(RateSellersuccessResult); 
            }
        }, (e) => {
    
            const RateSellersuccessResult = new RateSellerResult(400, false, "An Error has been recieved, please contact support.");
            this._currentRateSeller.next(RateSellersuccessResult);
        });
        return null;
    }
    
    

//seller dashboard
Previoussellerratings(userid) {
    const reqUrl = getString("sm-service-ratings-host") + "/sellerrating?userid=" + userid;
    console.log(reqUrl);
    request ({
        url: reqUrl,
        method: "GET",
        timeout: 5000
    }).then((response) => {
        const responseCode = response.statusCode;
        if(responseCode === 500) {
            const previousratingResultErr = new PreviousratingResult(500, null, null, null, null);
        } else if (responseCode === 200) {
            // Make sure the response we receive is in JSON format.
            const result = response.content.toJSON();
            // Instansiate a textbook list object to read the response in to.
            let previousratingList: PreviousratingResult[] = [];
            // get the previousratinglist.
            const JSONPreviousratingList = result.previousratings;
            // iterate through the previousratinglist and read each textbook into a textbook object and push to the list variable
            JSONPreviousratingList.forEach(element => {
                element.responseStatusCode =200;
                previousratingList.push(element)
            })
            const previousratingResult = new PreviousratingResultList(200, previousratingList, "Successfully recieved previous ratings");
            this._currentPreviousratingList.next(previousratingResult);
        } else {
            const previousratinglistResult = new PreviousratingResultList(responseCode, null,response.content.toString());
            this._currentPreviousratingList.next(previousratinglistResult);

        }
    }, (e) => {
        const previousratingResult = new PreviousratingResultList(400,null, "An Error has been recieved, please contact support.");
        this._currentPreviousratingList.next(previousratingResult);
    });
}

//buyer dashboard
Previousbuyerratings(userid) {
    const reqUrl = getString("sm-service-ratings-host") + "/buyerrating?userid=" + userid;
    console.log(reqUrl);
    request ({
        url: reqUrl,
        method: "GET",
        timeout: 5000
    }).then((response) => {
        const responseCode = response.statusCode;
        if(responseCode === 500) {
            const previousratingResultErr = new PreviousratingResult(500, null, null, null, null);
        } else if (responseCode === 200) {
            // Make sure the response we receive is in JSON format.
            const result = response.content.toJSON();
            // Instansiate a textbook list object to read the response in to.
            let previousratingList: PreviousratingResult[] = [];
            // get the previousratinglist.
            const JSONPreviousratingList = result.previousratings;
            // iterate through the previousratinglist and read each textbook into a textbook object and push to the list variable
            JSONPreviousratingList.forEach(element => {
                element.responseStatusCode =200;
                previousratingList.push(element)
            })
            const previousratingResult = new PreviousratingResultList(200, previousratingList, "Successfully recieved previous ratings");
            this._currentPreviousratingList.next(previousratingResult);
        } else {
            const previousratinglistResult = new PreviousratingResultList(responseCode, null,response.content.toString());
            this._currentPreviousratingList.next(previousratinglistResult);

        }
    }, (e) => {
        const previousratingResult = new PreviousratingResultList(400,null, "An Error has been recieved, please contact support.");
        this._currentPreviousratingList.next(previousratingResult);
    });
}


InterestedBuyers(userid: string, advertisementid: string) {
    const reqUrl = getString("sm-service-ratings-host") + "/interest" ;
    console.log(reqUrl);
    request ({
        url: reqUrl,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        content: JSON.stringify({ userid: userid, advertisementid: advertisementid}),
        timeout: 5000
    }).then((response) => {
        const responseCode = response.statusCode;
        if(responseCode === 500) {
            const interestedbuyerResultErr = new InterestedbuyerResult(500, null, null, null, null, null);
        } else if (responseCode === 200) {
            // Make sure the response we receive is in JSON format.
            const result = response.content.toJSON();
            // Instansiate a textbook list object to read the response in to.
            let interestedbuyerList: InterestedbuyerResult[] = [];
            // get the textbooklist.
            const JSONInterestedbuyerList = result.interestedbuyers;
            const userchat = appSettings.getString("username");
            // iterate through the textbooklist and read each textbook into a textbook object and push to the list variable
            JSONInterestedbuyerList.forEach(element => {
                element.responseStatusCode =200;
                //for interestedbuyer styling
                element.userchat = userchat;
                interestedbuyerList.push(element)
            })
            const interestedbuyerResult = new InterestedbuyerResultList(200, interestedbuyerList, "Message successfully recieved");
            this._currentInterestedbuyerList.next(interestedbuyerResult);
        } else {
            const interestedbuyerlistResult = new InterestedbuyerResultList(responseCode, null,response.content.toString());
            this._currentInterestedbuyerList.next(interestedbuyerlistResult);

        }
    }, (e) => {
        const interestedbuyerResult = new InterestedbuyerResultList(400,null, "An Error has been recieved, please contact support.");
        this._currentInterestedbuyerList.next(interestedbuyerResult);
    });
}

RateBuyer(advertisementid: string, sellerid: string, buyerid: string, buyerrating: string, buyercomments: string) {
    const reqUrl = getString("sm-service-ratings-host") + "/rate" ;
    console.log(reqUrl);
    request ({
        url: reqUrl,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        content: JSON.stringify({ advertisementid: advertisementid,  sellerid: sellerid, buyerid: buyerid, buyerrating: buyerrating, buyercomments: buyercomments }),
        timeout: 5000
    }).then((response) => {
        const responseCode = response.statusCode;
        if(responseCode === 500) {
            const RateBuyerResultErr = new RateBuyerResult(500, false, '00000000-0000-0000-0000-000000000000','An error has occured whilst trying to connect.',);
            this._currentRateBuyer.next(RateBuyerResultErr);
        } else if (responseCode === 200) {
            const result = response.content.toJSON();
            const RateBuyersuccessResult = new RateBuyerResult(200, result.buyerrated, result.ratingid, result.message);
            this._currentRateBuyer.next(RateBuyersuccessResult);
        } else {
            const RateBuyersuccessResult = new RateBuyerResult(responseCode, false, '00000000-0000-0000-0000-000000000000', response.content.toString());
            this._currentRateBuyer.next(RateBuyersuccessResult); 
        }
    }, (e) => {

        const RateBuyersuccessResult = new RateBuyerResult(400, false, '00000000-0000-0000-0000-000000000000', "An Error has been recieved, please contact support.");
        this._currentRateBuyer.next(RateBuyersuccessResult);
    });
    return null;
}
}

