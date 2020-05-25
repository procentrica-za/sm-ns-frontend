import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {    TextbookResult,
            TextbookResultList,
            AccomodationResultList,
            AccomodationResult,
            NoteResultList,
            TutorResultList,
            NoteResult,
            TutorResult,
            UserAdvertAccomodationResult,
            UserAdvertTutorResultList,
            UserAdvertTextbookResultList,
            UserAdvertNoteResultList,
            UserAdvertAccomodationResultList,
            UserAdvertNoteResult,
            UserAdvertTextbookResult,
            UserAdvertTutorResult,
            AddAdvertisementResult,
            DeleteAdvertisementResult,  
            UploadImage,
            MessageResult,
            AddAccomodationResult,
            AddTutorResult,
            AddNoteResult,
            OutstandingratingResult,
            OutstandingratingResultList,
            RateSellerResult,
            ActivechatResultList,
            ActivechatResult,
            MessageResultList,
            PreviousratingResult,
            PreviousratingResultList ,
            StartChatResult ,
            InterestedbuyerResult,
            InterestedbuyerResultList,
            RateBuyerResult, 
            UpdateAdvertisementResult,
            Textbook,
            TextbookList,
            ModuleCodeList,
            ModuleCode,
            UnreadChatsResult,
            DeleteChatResult,
            ImageUploadedResult,
            OutstandingRatingResult, BuyingAverageResult, SellingAverageResult, UploadTextbookResult, GetBookResult} from './advert.model'
           
//import { TextbookResult, TextbookResultList } from './advert.model';
import { HttpClient } from '@angular/common/http';
import { request, getJSON } from "tns-core-modules/http";
import { getString, setString } from "tns-core-modules/application-settings";
import { isEnabled } from 'tns-core-modules/trace/trace';


import { Subscription } from "rxjs";
//Used for chat styling
import * as appSettings from "tns-core-modules/application-settings";
import { propagateInheritableCssProperties } from 'tns-core-modules/ui/page/page';
@Injectable({ providedIn: 'root' })
export class AdvertService {

    private _currentImageUploaded = new BehaviorSubject<ImageUploadedResult>(null);

    private _currentAddTextbookList = new BehaviorSubject<TextbookList>(null);
    private _currentAddTextbook = new BehaviorSubject<Textbook>(null);

    private _currentTextbookList = new BehaviorSubject<TextbookResultList>(null);
    private _currentTextbook = new BehaviorSubject<TextbookResult>(null);

    private _currentUploadTextbook = new BehaviorSubject<UploadTextbookResult>(null);

    private _currentAccomodationList = new BehaviorSubject<AccomodationResultList>(null);
    private _currentAccomodation = new BehaviorSubject<AccomodationResult>(null);
    
    private _currentTutorList = new BehaviorSubject<TutorResultList>(null);
    private _currentTutor = new BehaviorSubject<TutorResult>(null);

    private _currentNoteList = new BehaviorSubject<NoteResultList>(null);
    private _currentNote = new BehaviorSubject<NoteResult>(null);

    private _currentUserAdvertTextbookList = new BehaviorSubject<UserAdvertTextbookResultList>(null);
    private _currentUserAdvertTextbook = new BehaviorSubject<UserAdvertTextbookResult>(null);

    private _currentUserAdvertAccomodationList = new BehaviorSubject<UserAdvertAccomodationResultList>(null);
    private _currentUserAdvertAccomodation = new BehaviorSubject<UserAdvertAccomodationResult>(null);

    private _currentUserAdvertTutorList = new BehaviorSubject<UserAdvertTutorResultList>(null);
    private _currentUserAdvertTutor = new BehaviorSubject<UserAdvertTutorResult>(null);

    private _currentUserAdvertNoteList = new BehaviorSubject<UserAdvertNoteResultList>(null);
    private _currentUserAdvertNote = new BehaviorSubject<UserAdvertNoteResult>(null);

    private _currentAddAdvertisement = new BehaviorSubject<AddAdvertisementResult>(null);

    private _currentAddAccomodation = new BehaviorSubject<AddAccomodationResult>(null);
    private _currentAddTutor = new BehaviorSubject<AddTutorResult>(null);
    private _currentAddNote = new BehaviorSubject<AddNoteResult>(null);

    //private _currentUploadImage = new BehaviorSubject<UploadImage>(null);

    private _currentDeleteAdvertisementResult = new BehaviorSubject<DeleteAdvertisementResult>(null);

    private _currentUpdateAdvertisementResult = new BehaviorSubject<UpdateAdvertisementResult>(null);

    private _currentModuleCode = new BehaviorSubject<ModuleCode>(null);
    private _currentModuleCodeList = new BehaviorSubject<ModuleCodeList>(null);

    //Messaging, active chat service
    private _currentActivechatList = new BehaviorSubject<ActivechatResultList>(null);
    private _currentActivechat = new BehaviorSubject<ActivechatResult>(null);
    //messaging messages service
    private _currentMessageList = new BehaviorSubject<MessageResultList>(null);
    private _currentMessage = new BehaviorSubject<MessageResult>(null);
    //send message service
    private _currentSendMessage = new BehaviorSubject<MessageResult>(null)
    //private _currentUserAdvertList = new BehaviorSubject
    

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

    private _currentStartChat = new BehaviorSubject<StartChatResult>(null);

    private _currentUnreadChats = new BehaviorSubject<UnreadChatsResult>(null);
    private _currentDeleteChatResult = new BehaviorSubject<DeleteChatResult>(null);

    private _currentOutstandingRating = new BehaviorSubject<OutstandingRatingResult>(null);

    private _currentBuyingAverage = new BehaviorSubject<BuyingAverageResult>(null);
    private _currentSellingAverage = new BehaviorSubject<SellingAverageResult>(null);
   
    private _currentGetBook = new BehaviorSubject<GetBookResult>(null)

    get currentImageUploaded(){
        return this._currentImageUploaded.asObservable();
    }

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
    //start chat
    get currentStartChat() {
        return this._currentStartChat.asObservable();
    }

     //start chat
     get currentUnreadMessages() {
        return this._currentUnreadChats.asObservable();
    }
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

    get currentOutstandingRating() {
        return this._currentOutstandingRating.asObservable();
    }

    get currentBuyingAverage() {
        return this._currentBuyingAverage.asObservable();
    }

    get currentSellingAverage() {
        return this._currentSellingAverage.asObservable();
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

    get currentAddTextbook(){
        return this._currentAddTextbook.asObservable();
    } 

    get currentAddTextbookList(){
        return this._currentAddTextbookList.asObservable();
    }

    get currentAddAccomodation(){
        return this._currentAddAccomodation.asObservable();
    }

    get currentAddTutor(){
        return this._currentAddTutor.asObservable();
    }

    get currentAddNote(){
        return this._currentAddNote.asObservable();
    }

    get currentAddAdvertisement(){
        return this._currentAddAdvertisement.asObservable();
    }

    get currentModuleCode(){
        return this._currentModuleCode.asObservable();
    }

    get currentModuleCodeList(){
        return this._currentModuleCodeList.asObservable();
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

    /*get currentUploadImage(){
        return this._currentUploadImage.asObservable();
    }*/

    get currentDeleteAdvertisementResult(){
        return this._currentDeleteAdvertisementResult.asObservable();
    }

    get currentDeleteChatResult(){
        return this._currentDeleteChatResult.asObservable();
    }

    get currentUpdateAdvertisementResult(){
        return this._currentUpdateAdvertisementResult.asObservable();
    }

    get currentGetBook() {
        return this._currentGetBook.asObservable();
    }

    get currentUploadTextbook() {
        return this._currentUploadTextbook.asObservable();
    }
   

    constructor(private http: HttpClient){
        setString("sm-service-ratings-host", "http://10.10.100.147:9957");
        setString("sm-service-advert-manager-host", "http://10.10.100.147:9953");
        setString("sm-service-file-manager-host", "http://10.10.100.147:9955");
        setString("sm-service-messages-host", "http://10.10.100.147:9956");
    }
    
    initializeModuleCodeList(){
        const reqUrl = getString("sm-service-advert-manager-host") + "/modulecode"
        request ({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500){
                const modulecodeErr = new ModuleCode(500, null);
            }else if(responseCode === 200){
                const result = response.content.toJSON();
                let modulecodeList: ModuleCode[] = [];
                const JSONModuleCodeList = result.modulecodes;
                JSONModuleCodeList.forEach(element => {
                    element.responseStatusCode = 200;
                    modulecodeList.push(element);
                });
                const toNextList = new ModuleCodeList(200, modulecodeList);
                this._currentModuleCodeList.next(toNextList);
            }else {
                console.log("in the else");
            }
        }, (e) => {
            console.log(e);
        });
        return null;
    }

    initializeAddTextbookList(){
        const reqUrl = getString("sm-service-advert-manager-host") + "/textbooks"
        request ({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const textbookErr = new Textbook(500, null, null, null, null, null, null);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                let textbookList: Textbook[] = [];
                const JSONTextbookList = result.textbooks;
                // iterate through the textbooklist and read each textbook into a textbook object and push to the list variable
                JSONTextbookList.forEach(element => {
                    element.responseStatusCode =200;
                    textbookList.push(element)
                })
                const textbookListResult = new TextbookList(200, textbookList);
                this._currentAddTextbookList.next(textbookListResult);
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

    setImageUploaded(uploaded: ImageUploadedResult){
        this._currentImageUploaded.next(uploaded);
    }

    clearImageUploaded(){
        this._currentImageUploaded.next(null);
    }

    setAddTextbook(textbook: Textbook){
        this._currentAddTextbook.next(textbook);
    }

    clearAddTextbook(){
        this._currentAddTextbook = new BehaviorSubject<Textbook>(null);

    }

    GetBook(isbn: string) {
        const reqUrl = "https://api.altmetric.com/v1/isbn/" + isbn
        console.log(reqUrl);
        request ({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const getbookResultErr = new GetBookResult(500, 'Please enter Title', 'Please enter author(s)');
                this._currentGetBook.next(getbookResultErr);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                const getbookResult = new GetBookResult(200, result.title, result.authors || result.authors_or_editors);
                this._currentGetBook.next(getbookResult);             
            } else {
                const getbookResult = new GetBookResult(responseCode,'Please enter Title', 'Please enter author(s)');
                this._currentGetBook.next(getbookResult); 
            }
        }, (e) => {

            const getbookResult = new GetBookResult(400, 'Please enter Title', 'Please enter author(s)');
            this._currentGetBook.next(getbookResult); 
        });
    }

    UploadNewTextbook(modulecode: string, name: string, edition: string, quality: string, author: string) {
        const reqUrl = getString("sm-service-advert-manager-host") + "/textbook"
        console.log(reqUrl);
        request ({
            url: reqUrl,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ modulecode: modulecode, name: name, edition: edition , quality: quality, author: author}),
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const UploadTextbookResultErr = new UploadTextbookResult('none','00000000-0000-0000-0000-000000000000', 'none', 'none', 'none', 'none', 500);
                this._currentUploadTextbook.next(UploadTextbookResultErr);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                const UploadsuccessResult = new UploadTextbookResult(result.modulecode, result.id, result.name, result.edition, result.quality,result.author, 200);
                this._currentUploadTextbook.next(UploadsuccessResult);   
            } else {
                const UploadsuccessResult = new UploadTextbookResult('none','00000000-0000-0000-0000-000000000000', 'none', 'none', 'none', 'none', responseCode);
                this._currentUploadTextbook.next(UploadsuccessResult); 
            }
        }, (e) => {

            const UploadsuccessResult = new UploadTextbookResult('none','00000000-0000-0000-0000-000000000000', 'none', 'none', 'none', 'none', 400);
                this._currentUploadTextbook.next(UploadsuccessResult); 
        });
        return null;
    }  

    deleteAdvertisement(advertisementID: string){
        const reqUrl = getString("sm-service-advert-manager-host") + "/advertisement?id=" + advertisementID;
        request ({
            url: reqUrl,
            method: "DELETE",
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if (responseCode === 500){
                const DeleteAdvertisementResultErr = new DeleteAdvertisementResult(500, false, advertisementID, 'An internal error has occured.');
                this._currentDeleteAdvertisementResult.next(DeleteAdvertisementResultErr);
            } else if (responseCode === 200){
                const result = response.content.toJSON();
                const DeleteAdvertisementResultSuccess = new DeleteAdvertisementResult(200, result.advertisementdeleted, result.id, result.message);
                this._currentDeleteAdvertisementResult.next(DeleteAdvertisementResultSuccess);
            } else {
                const DeleteAdvertisementResultErr = new DeleteAdvertisementResult(responseCode, false, advertisementID, 'An internal error has occured.');
                this._currentDeleteAdvertisementResult.next(DeleteAdvertisementResultErr);
            }
        }, (e) => {
            console.log("Error Encountered: " + e);
        });
    }

    AddNewImage(advertisementID: string, isMainImage: boolean, imageBytes: string){
        const reqUrl = getString("sm-service-file-manager-host") + "/uploadimage";
        request ({
            url: reqUrl,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ entityid: advertisementID, ismainimage: isMainImage, imagebytes:imageBytes }),
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 200) {
                //const result = response.content.toJSON();
                const addImageResult = new ImageUploadedResult(true, "Success")
                this.setImageUploaded(addImageResult);
                console.log("Image Successfully uploaded and linked to advertisement: Status Code ---> " + responseCode);
                
            } else {
                //const result = response.content.toJSON();
                const addImageResult = new ImageUploadedResult(false, "Error")
                this.setImageUploaded(addImageResult);
                console.log("Internal Error encountered: Status Code ---> " + responseCode);
            }
        }, (e) => {
            console.log("Error Encountered: " + e);
        });
    }

    AddNewTextbookAdvertisement(userID: string, isSelling: boolean, advertType: string, price: string, description: string, institution : string, entityID: string){
        const reqUrl = getString("sm-service-advert-manager-host") + "/advertisement" ;
       
        request ({
            url: reqUrl,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ userid: userID, isselling: isSelling, advertisementtype: advertType, entityid: entityID, price: price, description: description, institution: institution }),
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const AddAdvertisementResultErr = new AddAdvertisementResult(500, false, '00000000-0000-0000-0000-000000000000', 'An internal error has occured.');
                this._currentAddAdvertisement.next(AddAdvertisementResultErr);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                const AddAdvertisementSuccess = new AddAdvertisementResult(200, result.advertisementposted, result.id, result.message);
                this._currentAddAdvertisement.next(AddAdvertisementSuccess);   
               
            } else {
                const AddAdvertisementSuccess = new AddAdvertisementResult(responseCode, false, '00000000-0000-0000-0000-000000000000', response.content.toString());
                this._currentAddAdvertisement.next(AddAdvertisementSuccess); 
            }
        }, (e) => {
            const AddAdvertisementSuccess = new AddAdvertisementResult(400, false, '00000000-0000-0000-0000-000000000000', "An Error has been recieved, please contact support.");
            this._currentAddAdvertisement.next(AddAdvertisementSuccess);  
        })
    }

    AddNewAccomodationAdvertisement(userID: string, isSelling: boolean, advertType: string, price: string, description: string, acdID: string, acdType: string, location: string, distancetocampus: string, instName: string) {
        const reqUrl = getString("sm-service-advert-manager-host") + "/accomodation" ;
        request ({
            url: reqUrl,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ id: acdID, accomodationtypecode: acdType, institutionname: instName, location: location, distancetocampus: distancetocampus }),
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const AddAccomodationResultErr = new AddAccomodationResult(500, false, '00000000-0000-0000-0000-000000000000', 'An internal error has occured.');
                this._currentAddAccomodation.next(AddAccomodationResultErr);
            } else if (responseCode === 200) {

                const result = response.content.toJSON();
                const AddAccomodationSuccess = new AddAccomodationResult(200, result.accomodationadded, result.id, result.message);
                this._currentAddAccomodation.next(AddAccomodationSuccess); 
                /* ===============================================================================================
                ==================================================================================================
                ================================================================================================*/
                const reqUrl = getString("sm-service-advert-manager-host") + "/advertisement" ;
                console.log(reqUrl);
                console.log(JSON.stringify({ userid: userID, isselling: isSelling, advertisementtype: advertType, entityid: acdID, price: price, description: description, institution: instName }))
                request ({
                    url: reqUrl,
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    content: JSON.stringify({ userid: userID, isselling: isSelling, advertisementtype: advertType, entityid: acdID, price: price, description: description, institution: instName }),
                    timeout: 5000
                }).then((response) => {
                    const responseCode = response.statusCode;
                    if(responseCode === 500) {
                        const AddAdvertisementResultErr = new AddAdvertisementResult(500, false, '00000000-0000-0000-0000-000000000000', 'An internal error has occured.');
                        this._currentAddAdvertisement.next(AddAdvertisementResultErr);
                    } else if (responseCode === 200) {
                        const result = response.content.toJSON();
                        const AddAdvertisementSuccess = new AddAdvertisementResult(200, result.advertisementposted, result.id, result.message);
                        this._currentAddAdvertisement.next(AddAdvertisementSuccess);   
                       
                    } else {
                        const AddAdvertisementSuccess = new AddAdvertisementResult(responseCode, false, '00000000-0000-0000-0000-000000000000', response.content.toString());
                        this._currentAddAdvertisement.next(AddAdvertisementSuccess); 
                    }
                }, (e) => {
        
                    const AddAdvertisementSuccess = new AddAdvertisementResult(400, false, '00000000-0000-0000-0000-000000000000', "An Error has been recieved, please contact support.");
                        this._currentAddAdvertisement.next(AddAdvertisementSuccess); 
                });

                /* ===============================================================================================
                ==================================================================================================
                ================================================================================================*/
                
            } else {
                const AddAccomodationSuccess = new AddAccomodationResult(responseCode, false, '00000000-0000-0000-0000-000000000000', response.content.toString());
                this._currentAddAccomodation.next(AddAccomodationSuccess); 
            }
        }, (e) => {

            const AddAccomodationSuccess = new AddAccomodationResult(400, false, '00000000-0000-0000-0000-000000000000', "An Error has been recieved, please contact support.");
                this._currentAddAccomodation.next(AddAccomodationSuccess); 
        });

        return null;
    }  

    /* ADD NEW TUTOR ADVERTISEMENT */

   

    AddNewTutorAdvertisement(userID: string, isSelling: boolean, advertType: string, price: string, description: string, institution : string, entityID: string, subject: string, yearcompleted: string, venue: string, notesincluded: string, terms: string, moduleCode: string) {
        const reqUrl = getString("sm-service-advert-manager-host") + "/tutor" ;
        request ({
            url: reqUrl,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ id: entityID, modulecode: moduleCode, subject: subject, yearcompleted: yearcompleted, venue: venue, notesincluded: notesincluded, terms: terms }),
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const AddTutorResultErr = new AddTutorResult(500, false, '00000000-0000-0000-0000-000000000000', 'An internal error has occured.');
                this._currentAddTutor.next(AddTutorResultErr);
            } else if (responseCode === 200) {

                const result = response.content.toJSON();
                const AddTutorSuccess = new AddTutorResult(200, result.tutoradded, result.id, result.message);
                this._currentAddTutor.next(AddTutorSuccess); 
                /* ===============================================================================================
                ==================================================================================================
                ================================================================================================*/
                const reqUrl = getString("sm-service-advert-manager-host") + "/advertisement" ;
                //console.log(reqUrl);
                //console.log(JSON.stringify({ userid: userID, isselling: isSelling, advertisementtype: advertType, entityid: entityID, price: price, description: description, institution: institution }))
                request ({
                    url: reqUrl,
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    content: JSON.stringify({ userid: userID, isselling: isSelling, advertisementtype: advertType, entityid: entityID, price: price, description: description, institution: institution }),
                    timeout: 5000
                }).then((response) => {
                    const responseCode = response.statusCode;
                    if(responseCode === 500) {
                        const AddAdvertisementResultErr = new AddAdvertisementResult(500, false, '00000000-0000-0000-0000-000000000000', 'An internal error has occured.');
                        this._currentAddAdvertisement.next(AddAdvertisementResultErr);
                    } else if (responseCode === 200) {
                        const result = response.content.toJSON();
                        const AddAdvertisementSuccess = new AddAdvertisementResult(200, result.advertisementposted, result.id, result.message);
                        this._currentAddAdvertisement.next(AddAdvertisementSuccess);   
                       
                    } else {
                        const AddAdvertisementSuccess = new AddAdvertisementResult(responseCode, false, '00000000-0000-0000-0000-000000000000', response.content.toString());
                        this._currentAddAdvertisement.next(AddAdvertisementSuccess); 
                    }
                }, (e) => {
        
                    const AddAdvertisementSuccess = new AddAdvertisementResult(400, false, '00000000-0000-0000-0000-000000000000', "An Error has been recieved, please contact support.");
                        this._currentAddAdvertisement.next(AddAdvertisementSuccess); 
                });

                /* ===============================================================================================
                ==================================================================================================
                ================================================================================================*/
                
            } else {
                const AddAccomodationSuccess = new AddAccomodationResult(responseCode, false, '00000000-0000-0000-0000-000000000000', response.content.toString());
                this._currentAddAccomodation.next(AddAccomodationSuccess); 
            }
        }, (e) => {

            const AddAccomodationSuccess = new AddAccomodationResult(400, false, '00000000-0000-0000-0000-000000000000', "An Error has been recieved, please contact support.");
                this._currentAddAccomodation.next(AddAccomodationSuccess); 
        });

        return null;
    }



    AddNewNoteAdvertisement(userID: string, isSelling: boolean, advertType: string, price: string, description: string, institution : string, entityID: string, moduleCode: string) {
        const reqUrl = getString("sm-service-advert-manager-host") + "/note" ;
        //console.log(reqUrl);
        request ({
            url: reqUrl,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ id: entityID, modulecode: moduleCode}),
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const AddNoteResultErr = new AddNoteResult(500, false, '00000000-0000-0000-0000-000000000000', 'An internal error has occured.');
                this._currentAddNote.next(AddNoteResultErr);
            } else if (responseCode === 200) {

                const result = response.content.toJSON();
                const AddNoteSuccess = new AddNoteResult(200, result.noteadded, result.id, result.message);
                this._currentAddNote.next(AddNoteSuccess); 
                /* ===============================================================================================
                ==================================================================================================
                ================================================================================================*/
                const reqUrl = getString("sm-service-advert-manager-host") + "/advertisement" ;
                //console.log(reqUrl);
                //console.log(JSON.stringify({ userid: userID, isselling: isSelling, advertisementtype: advertType, entityid: entityID, price: price, description: description, institution: institution }));
                request ({
                    url: reqUrl,
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    content: JSON.stringify({ userid: userID, isselling: isSelling, advertisementtype: advertType, entityid: entityID, price: price, description: description, institution: institution }),
                    timeout: 5000
                }).then((response) => {
                    const responseCode = response.statusCode;
                    if(responseCode === 500) {
                        const AddAdvertisementResultErr = new AddAdvertisementResult(500, false, '00000000-0000-0000-0000-000000000000', 'An internal error has occured.');
                        this._currentAddAdvertisement.next(AddAdvertisementResultErr);
                    } else if (responseCode === 200) {
                        const result = response.content.toJSON();
                        const AddAdvertisementSuccess = new AddAdvertisementResult(200, result.advertisementposted, result.id, result.message);
                        this._currentAddAdvertisement.next(AddAdvertisementSuccess);   
                       
                    } else {
                        const AddAdvertisementSuccess = new AddAdvertisementResult(responseCode, false, '00000000-0000-0000-0000-000000000000', response.content.toString());
                        this._currentAddAdvertisement.next(AddAdvertisementSuccess); 
                    }
                }, (e) => {
        
                    const AddAdvertisementSuccess = new AddAdvertisementResult(400, false, '00000000-0000-0000-0000-000000000000', "An Error has been recieved, please contact support.");
                        this._currentAddAdvertisement.next(AddAdvertisementSuccess); 
                });

                /* ===============================================================================================
                ==================================================================================================
                ================================================================================================*/
                
            } else {
                const AddAccomodationSuccess = new AddAccomodationResult(responseCode, false, '00000000-0000-0000-0000-000000000000', response.content.toString());
                this._currentAddAccomodation.next(AddAccomodationSuccess); 
            }
        }, (e) => {

            const AddAccomodationSuccess = new AddAccomodationResult(400, false, '00000000-0000-0000-0000-000000000000', "An Error has been recieved, please contact support.");
                this._currentAddAccomodation.next(AddAccomodationSuccess); 
        });

        return null;
    }





    UpdateAdvertisement(advertisementid: string, userid: string, isSelling: string, advertType: string, entityid: string, price: string, description: string){
        const reqUrl = getString("sm-service-advert-manager-host") + "/advertisement" ;
        console.log(reqUrl);
        //console.log(JSON.stringify({ id: advertisementid, userid: userid, isselling: isSelling, advertisementtype: advertType, entityid: entityid, price: price, description: description }));
        request ({
            url: reqUrl,
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ id: advertisementid, userid: userid, isselling: isSelling, advertisementtype: advertType, entityid: entityid, price: price, description: description }),
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if (responseCode === 500){
                const UpdateAdvertisementResultErr = new UpdateAdvertisementResult(500, false, "An internal error has occured");
                this._currentUpdateAdvertisementResult.next(UpdateAdvertisementResultErr);
            } else if (responseCode === 200){
                const result = response.content.toJSON();
                const UpdateAdvertisementResultSuccess = new UpdateAdvertisementResult(200, result.advertisementupdated, result.message);
                this._currentUpdateAdvertisementResult.next(UpdateAdvertisementResultSuccess);
            } else {
                const UpdateAdvertisementResultErr = new UpdateAdvertisementResult(responseCode, false, "An internal error has occured");
                this._currentUpdateAdvertisementResult.next(UpdateAdvertisementResultErr);
            }
        });
    }

    initializeAdvertisements(isSelling: boolean, defaultInstitution: string){
        this.initializeTextbooks(defaultInstitution,isSelling,9999999,"","","","","");
        this.initializeAccomodation(defaultInstitution,isSelling, 999999, "", "", 999999);
        this.initializeTutors(defaultInstitution,isSelling, 999999, "", "", "", "", "", "");
        this.initializeNotes(defaultInstitution,isSelling, 999999, "");
    }

    initializeUserAdvertisements(userID: string, isSelling: boolean){
        this.initializeUserAdvertTextbooks(userID, isSelling);
        this.initializeUserAdvertAccomodation(userID, isSelling);
        this.initializeUserAdvertTutors(userID, isSelling);
        this.initializeUserAdvertNotes(userID, isSelling);
    }

    clearUserAdvertisements(){
        this._currentUserAdvertTextbookList.next(null);
        this._currentUserAdvertAccomodationList.next(null);
        this._currentUserAdvertTutorList.next(null);
        this._currentUserAdvertNoteList.next(null);
    }

    
    initializeTextbooks(institution : string, isSelling: boolean, priceFilter: number, modulecodeFilter: string, nameFilter: string, editionFilter: string, qualityFilter: string, authorFilter: string) {
        const reqUrl = getString("sm-service-advert-manager-host") + "/advertisementtype?adverttype=TXB&selling=" + isSelling +
        "&price=" + priceFilter + "&modulecode=" + modulecodeFilter + "&name=" + nameFilter + "&edition=" + editionFilter + "&quality=" + qualityFilter + "&author=" + authorFilter + "&institution=" + institution ;
        console.log(reqUrl);
        request ({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const textbookResultErr = new TextbookResult(500, null, null, null, null, null, null, null, null, null ,null ,null ,null ,null, null);
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

    initializeAccomodation(instNameFilter: string, isSelling: boolean, priceFilter: number, acdTypeFilter: string, locationFilter: string, distancetoCampusFilter: number) {
        
        
        const reqUrl = getString("sm-service-advert-manager-host") + "/advertisementtype?adverttype=ACD&selling=" + isSelling + "&price=" + priceFilter +
        "&acdType=" + acdTypeFilter + "&location=" + locationFilter + "&distance=" + distancetoCampusFilter + "&institution=" + instNameFilter;
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
                    switch (element.accomodationtypecode) {
                        case "HSE":
                            element.accomodationtypecode = "House";
                            break;
                        case "APT":
                            element.accomodationtypecode = "Apartement";
                            break;
                        case "GDC":
                            element.accomodationtypecode = "Garden Cottage";
                            break;
                        case "COM":
                            element.accomodationtypecode = "Commune";
                            break;
                    }
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

    
    
    

    initializeTutors(institution  : string, isSelling: boolean, priceFilter: number, subjectFilter: string, yearCompletedFilter: string, venueFilter: string, notesincludedFilter : string, termsFilter : string, moduleCodeFilter: string ) {
        const reqUrl = getString("sm-service-advert-manager-host") + "/advertisementtype?adverttype=TUT&selling=" + isSelling + "&price=" + priceFilter +
        "&modulecode=" + moduleCodeFilter + "&subject=" + subjectFilter + "&yearcompleted=" + yearCompletedFilter + "&venue=" + venueFilter + "&notes=" +
        notesincludedFilter + "&terms=" + termsFilter + "&institution=" + institution;
        console.log(reqUrl);
        request ({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const tutorResultErr = new TutorResult(500, null, null, null, null, null, null, null, null, null ,null ,null, null, null, null, null);
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

    initializeNotes(institution: string, isSelling: boolean, priceFilter: number, modulecodeFilter : string) {
        const reqUrl = getString("sm-service-advert-manager-host") + "/advertisementtype?adverttype=NTS&selling=" + isSelling + "&price=" + priceFilter + "&modulecode=" + modulecodeFilter + "&institution=" + institution;
        request ({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                const noteResultErr = new NoteResult(500, null, null, null, null, null, null, null, null, null, null);
            } else if (responseCode === 200) {
                const result = response.content.toJSON();
                let noteList: NoteResult[] = [];
                const JSONNoteList = result.notes;
                JSONNoteList.forEach(element => {
                    element.responseStatusCode =200;
                    element.imagebytes = "data:image/png;base64," + element.imagebytes;
                    //console.log(element.advertisementid);
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
        //console.log(userID);
        const reqUrl = getString("sm-service-advert-manager-host") + "/useradvertisements?id=" + userID + "&adverttype=TXB&selling=" + isSelling;
        console.log(reqUrl);
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
                    switch (element.accomodationtypecode) {
                        case "HSE":
                            element.accomodationtypecode = "House";
                            break;
                        case "APT":
                            element.accomodationtypecode = "Apartement";
                            break;
                        case "GDC":
                            element.accomodationtypecode = "Garden Cottage";
                            break;
                        case "COM":
                            element.accomodationtypecode = "Commune";
                            break;
                    }
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
    initializeActiveChats() {
        const userid = appSettings.getString("userid");
        const reqUrl = getString("sm-service-messages-host") + "/chats?userid=" + userid;
        console.log(reqUrl);
        request ({
            url: reqUrl,
            method: "GET",
            timeout: 5000
        }).then((response) => {
            const responseCode = response.statusCode;
            if(responseCode === 500) {
                
                const activechatResultErr = new ActivechatResult(500, null, null, null, null, null, null, null, null, null, null, null);
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
        const userid = appSettings.getString("userid");
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
        this._currentStartChat.next(null);
    }

    clearSelectedUserAdvertisement() {
        this._currentUserAdvertTextbook.next(null);
        this._currentUserAdvertAccomodation.next(null);
        this._currentUserAdvertTutor.next(null);
        this._currentUserAdvertNote.next(null);
    }

    PostAdvertisement(){
        
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

StartNewChat(sellerid: string, buyerid: string, advertisementtype: string, advertisementid: string) {
    const reqUrl = getString("sm-service-messages-host") + "/chat";
    console.log(reqUrl);
    request ({
        url: reqUrl,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        content: JSON.stringify({ sellerid: sellerid, buyerid: buyerid, advertisementtype: advertisementtype, advertisementid: advertisementid}),
        timeout: 5000
    }).then((response) => {
        const responseCode = response.statusCode;
        if(responseCode === 500) {
            const StartChatResultErr = new StartChatResult(500, false,'00000000-0000-0000-0000-000000000000', 'An internal error has occured.');
            this._currentStartChat.next(StartChatResultErr);
        } else if (responseCode === 200) {

            const result = response.content.toJSON();
            const StartChatsuccessResult = new StartChatResult(200, result.chatposted, result.chatid,result.message);
            this._currentStartChat.next(StartChatsuccessResult);   
        } else {
            const StartChatsuccessResult = new StartChatResult(responseCode, false,'00000000-0000-0000-0000-000000000000', response.content.toString());
            this._currentStartChat.next(StartChatsuccessResult); 
        }
    }, (e) => {

        const StartChatsuccessResult = new StartChatResult(400, false,'00000000-0000-0000-0000-000000000000', "An Error has been recieved, please contact support.");
            this._currentStartChat.next(StartChatsuccessResult); 
    });
    return null;
} 

UnreadChats() {
    const userid = appSettings.getString("userid");
    const reqUrl = getString("sm-service-messages-host") + "/unreadchats?userid=" + userid;
    console.log(reqUrl);
    request ({
        url: reqUrl,
        method: "GET",
        timeout: 5000
    }).then((response) => {
        const responseCode = response.statusCode;
        if(responseCode === 500) {
            const UnreadChatsResultErr = new UnreadChatsResult(500, false,);
            this._currentUnreadChats.next(UnreadChatsResultErr);
        } else if (responseCode === 200) {

            const result = response.content.toJSON();
            const UnreadChatssuccessResult = new UnreadChatsResult(200, result.unreadmessages);
            this._currentUnreadChats.next(UnreadChatssuccessResult);   
        } else {
            const UnreadChatssuccessResult = new UnreadChatsResult(responseCode, false);
            this._currentUnreadChats.next(UnreadChatssuccessResult); 
        }
    }, (e) => {

        const UnreadChatssuccessResult = new UnreadChatsResult(400, false);
            this._currentUnreadChats.next(UnreadChatssuccessResult); 
    });
    return null;
} 

deleteChat(chatid: string){
    const reqUrl = getString("sm-service-messages-host") + "/chat?id=" + chatid;
    console.log(reqUrl);
    request ({
        url: reqUrl,
        method: "DELETE",
        timeout: 5000
    }).then((response) => {
        const responseCode = response.statusCode;
        if (responseCode === 500){
            const DeleteChatResultErr = new DeleteChatResult(500, false , 'An internal error has occured whilst trying to delete ' + chatid);
            this._currentDeleteChatResult.next(DeleteChatResultErr);
        } else if (responseCode === 200){
            const result = response.content.toJSON();
            const DeleteChatResultSuccess = new DeleteChatResult(200, result.chatposted, result.message);
            this._currentDeleteChatResult.next(DeleteChatResultSuccess);
        } else {
            const DeleteChatResultSuccess = new DeleteChatResult(responseCode, false, 'An internal error has occured whilst trying to delete ' + chatid);
            this._currentDeleteChatResult.next(DeleteChatResultSuccess);
        }
    }, (e) => {
        const DeleteChatResultSuccess = new DeleteChatResult(400, false, "An Error has been recieved, please contact support.");
            this._currentDeleteChatResult.next(DeleteChatResultSuccess); 
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

RateBuyer(advertisementid: string, buyerid: string, sellerid: string, buyerrating: string, buyercomments: string) {
    const reqUrl = getString("sm-service-ratings-host") + "/rate";
    console.log(reqUrl);
    request ({
        url: reqUrl,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        content: JSON.stringify({ advertisementid: advertisementid,  buyerid: buyerid, sellerid: sellerid, buyerrating: buyerrating, buyercomments: buyercomments }),
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

OutstandingRatings() {
    const userid = appSettings.getString("userid");
    const reqUrl = getString("sm-service-ratings-host") + "/rating?userid=" + userid;
    console.log(reqUrl);
    request ({
        url: reqUrl,
        method: "GET",
        timeout: 5000
    }).then((response) => {
        const responseCode = response.statusCode;
        if(responseCode === 500) {
            const OutstandingRatingResultErr = new OutstandingRatingResult(500, false,);
            this._currentOutstandingRating.next(OutstandingRatingResultErr);
        } else if (responseCode === 200) {

            const result = response.content.toJSON();
            const OutstandingRatingsuccessResult = new OutstandingRatingResult(200, result.outstandingratings);
            this._currentOutstandingRating.next(OutstandingRatingsuccessResult);   
        } else {
            const OutstandingRatingsuccessResult = new OutstandingRatingResult(responseCode, false);
            this._currentOutstandingRating.next(OutstandingRatingsuccessResult); 
        }
    }, (e) => {

        const OutstandingRatingsuccessResult = new OutstandingRatingResult(400, false);
            this._currentOutstandingRating.next(OutstandingRatingsuccessResult); 
    });
    return null;
} 

Buyingdashboard() {
    const userid = appSettings.getString("userid");
    const reqUrl = getString("sm-service-ratings-host") + "/buyer?userid=" + userid;
    console.log(reqUrl);
    request ({
        url: reqUrl,
        method: "GET",
        timeout: 5000
    }).then((response) => {
        const responseCode = response.statusCode;
        if(responseCode === 500) {
            const BuyingAverageResultErr = new BuyingAverageResult(500, "You do not have any ratings as yet");
            this._currentBuyingAverage.next(BuyingAverageResultErr);
        } else if (responseCode === 200) {

            const result = response.content.toJSON();
            const BuyingAveragesuccessResult = new BuyingAverageResult(200, result.average);
            this._currentBuyingAverage.next(BuyingAveragesuccessResult);   
        } else {
            const BuyingAveragesuccessResult = new BuyingAverageResult(responseCode,response.content.toString());
            this._currentBuyingAverage.next(BuyingAveragesuccessResult); 
        }
    }, (e) => {

        const BuyingAveragesuccessResult = new BuyingAverageResult(400, "An Error has been recieved, please contact support.");
            this._currentBuyingAverage.next(BuyingAveragesuccessResult); 
    });
}

Sellingdashboard() {
    const userid = appSettings.getString("userid");
    const reqUrl = getString("sm-service-ratings-host") + "/seller?userid=" + userid;
    console.log(reqUrl);
    request ({
        url: reqUrl,
        method: "GET",
        timeout: 5000
    }).then((response) => {
        const responseCode = response.statusCode;
        if(responseCode === 500) {
            const SellingAverageResultErr = new SellingAverageResult(500, "You do not have any ratings as yet");
            this._currentSellingAverage.next(SellingAverageResultErr);
        } else if (responseCode === 200) {

            const result = response.content.toJSON();
            const SellingAveragesuccessResult = new SellingAverageResult(200, result.average);
            this._currentSellingAverage.next(SellingAveragesuccessResult);   
        } else {
            const SellingAveragesuccessResult = new SellingAverageResult(responseCode,response.content.toString());
            this._currentSellingAverage.next(SellingAveragesuccessResult); 
        }
    }, (e) => {

        const SellingAveragesuccessResult = new SellingAverageResult(400, "An Error has been recieved, please contact support.");
            this._currentSellingAverage.next(SellingAveragesuccessResult); 
    });
}

clearChat(){
    this._currentDeleteChatResult = new BehaviorSubject<DeleteChatResult>(null);
    this._currentUnreadChats = new BehaviorSubject<UnreadChatsResult>(null);
}

clearRating(){
    this._currentRateBuyer = new BehaviorSubject<RateBuyerResult>(null);
    this._currentOutstandingRating = new BehaviorSubject<OutstandingRatingResult>(null);
}

clearSellerRating(){
    this._currentRateSeller = new BehaviorSubject<RateSellerResult>(null)
}

clearMessages(){
    this._currentMessage = new BehaviorSubject<MessageResult>(null);
    this._currentSendMessage = new BehaviorSubject<MessageResult>(null)
    this._currentStartChat = new BehaviorSubject<StartChatResult>(null);
}

clearAverage(){
    this._currentBuyingAverage = new BehaviorSubject<BuyingAverageResult>(null);
    this._currentSellingAverage = new BehaviorSubject<SellingAverageResult>(null);
}

clearBook(){
    this._currentGetBook = new BehaviorSubject<GetBookResult>(null)
}

clearUpload(){
    this._currentUploadTextbook = new BehaviorSubject<UploadTextbookResult>(null);
}



}

