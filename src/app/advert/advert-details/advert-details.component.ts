import { Component, OnInit, OnDestroy } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { AdvertService } from "../advert.service";
import { TextbookResult,
         AccomodationResult,
         TutorResult,
         NoteResult,
         UserAdvertTextbookResult,
         UserAdvertAccomodationResult,
         UserAdvertTutorResult,
         UserAdvertNoteResult,
         StartChatResult,
         DeleteAdvertisementResult} from '../advert.model';
import { Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { RadListView, ListViewEventData } from "nativescript-ui-listview";

import * as appSettings from "tns-core-modules/application-settings";

@Component({
    selector: 'ns-advert-details',
    templateUrl: './advert-details.component.html',
    moduleId: module.id
})



export class AdvertDetailsComponent implements OnInit, OnDestroy {
    
    public accomodationTypeFull; notesProvidedFull : string;

    private textbookResultSub: Subscription;
    public textbookResult : TextbookResult;
    private accomodationResultSub: Subscription;
    public accomodationResult : AccomodationResult;
    private tutorResultSub: Subscription;
    public tutorResult : TutorResult;
    private noteResultSub: Subscription;
    public noteResult : NoteResult;

    private userAdvertTextbookResultSub: Subscription;
    public userAdvertTextbookResult : UserAdvertTextbookResult;
    private userAdvertAccomodationResultSub: Subscription;
    public userAdvertAccomodationResult : UserAdvertAccomodationResult;
    private userAdvertTutorResultSub: Subscription;
    public userAdvertTutorResult : UserAdvertTutorResult;
    private userAdvertNoteResultSub: Subscription;
    public userAdvertNoteResult : UserAdvertNoteResult;

    private deleteAdvertisementResultSub: Subscription;
    public deleteAdvertisementResult: DeleteAdvertisementResult;
    
    public advertFound: boolean;

    public notrated: boolean;

    //start chat
    startchatResultSub: Subscription;
    startchat: StartChatResult;
    
    buyerid = "";

    constructor(private router: RouterExtensions, private advertServ: AdvertService) { }

    ngOnInit() { 
        

        this.textbookResultSub = this.advertServ.currentTextbook.subscribe(
            textbook => {
                if(textbook) {
                    this.textbookResult = textbook;
                    this.advertFound = true;
            }});
            
        this.accomodationResultSub = this.advertServ.currentAccomodation.subscribe(
            accomodation => {
                if(accomodation) {
                    this.accomodationResult = accomodation;
                    switch (accomodation.accomodationtypecode) {
                        case "HSE":
                            this.accomodationTypeFull = "House";
                            break;
                        case "APT":
                            this.accomodationTypeFull = "Apartement";
                            break;
                        case "GDC":
                            this.accomodationTypeFull = "Garden Cottage";
                            break;
                        case "COM":
                            this.accomodationTypeFull = "Commune";
                            break;
                    }
                    this.advertFound = true;
            }});
        this.tutorResultSub = this.advertServ.currentTutor.subscribe(
            tutor => {
                if(tutor) {
                    if (tutor.notesincluded == "true"){
                        this.notesProvidedFull = "Yes";
                    }else {
                        this.notesProvidedFull = "No";
                    }
                    this.tutorResult = tutor;
                    this.advertFound = true;
            }});
        this.noteResultSub = this.advertServ.currentNote.subscribe(
            note => {
                if(note) {
                    this.noteResult = note;
                    this.advertFound = true;
            }});
        this.userAdvertTextbookResultSub = this.advertServ.currentUserAdvertTextbook.subscribe(
            textbook => {
                if(textbook) {
                    this.userAdvertTextbookResult = textbook;
                    this.advertFound = true;
                }});
        this.userAdvertAccomodationResultSub = this.advertServ.currentUserAdvertAccomodation.subscribe(
            accomodation => {
                if(accomodation) {
                    this.userAdvertAccomodationResult = accomodation;
                    switch (accomodation.accomodationtypecode) {
                        case "HSE":
                            this.accomodationTypeFull = "House";
                            break;
                        case "APT":
                            this.accomodationTypeFull = "Apartement";
                            break;
                        case "GDC":
                            this.accomodationTypeFull = "Garden Cottage";
                            break;
                        case "COM":
                            this.accomodationTypeFull = "Commune";
                            break;
                    }
                    this.advertFound = true;
                }});
        this.userAdvertTutorResultSub = this.advertServ.currentUserAdvertTutor.subscribe(
            tutor => {
                if(tutor) {
                    if (tutor.notesincluded == "true"){
                        this.notesProvidedFull = "Yes";
                    }else {
                        this.notesProvidedFull = "No";
                    }

                    this.userAdvertTutorResult = tutor;
                    this.advertFound = true;
                }});
        this.userAdvertNoteResultSub = this.advertServ.currentUserAdvertNote.subscribe(
            note => {
                if(note) {
                    this.userAdvertNoteResult = note;
                    this.advertFound = true;
                }});
        if (!this.advertFound){
            TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
        }

        // NOT IN USE
        /*this.textbookResultSub = this.advertServ.currentTextbook.subscribe(
            textbook => {
                if(textbook) {
                    this.textbookResult = textbook;
                    //this.foundResult = true;
                } else {
                    //TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.")
                    this.accomodationResultSub = this.advertServ.currentAccomodation.subscribe(
                        accomodation => {
                            if(accomodation) {
                                this.accomodationResult = accomodation;
                            } else {
                                //TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.")
                                this.tutorResultSub = this.advertServ.currentTutor.subscribe(
                                    tutor => {
                                        if(tutor) {
                                            this.tutorResult = tutor;
                                        } else {
                                            //TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.")
                                            this.noteResultSub = this.advertServ.currentNote.subscribe(
                                                note => {
                                                    if(note) {
                                                        this.noteResult = note;
                                                    } else {
                                                        //TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.")
                                                        this.userAdvertTextbookResultSub = this.advertServ.currentUserAdvertTextbook.subscribe(
                                                            textbook => {
                                                                if(textbook) {
                                                                    this.userAdvertTextbookResult = textbook;
                                                                } else {
                                                                    //TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.")
                                                                    this.userAdvertAccomodationResultSub = this.advertServ.currentUserAdvertAccomodation.subscribe(
                                                                        accomodation => {
                                                                            if(accomodation) {
                                                                                this.userAdvertAccomodationResult = accomodation;
                                                                            } else {
                                                                                //TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.")
                                                                                this.userAdvertTutorResultSub = this.advertServ.currentUserAdvertTutor.subscribe(
                                                                                    tutor => {
                                                                                        if(tutor) {
                                                                                            this.userAdvertTutorResult = tutor;
                                                                                        } else {
                                                                                            //TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.")
                                                                                            this.userAdvertNoteResultSub = this.advertServ.currentUserAdvertNote.subscribe(
                                                                                                note => {
                                                                                                    if(note) {
                                                                                                        this.userAdvertNoteResult = note;
                                                                                                    } else {
                                                                                                        TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.")
                                                                                                    }
                                                                                                }
                                                                                            )
                                                                                        }
                                                                                    } 
                                                                                )
                                                                            }
                                                                        }
                                                                    )
                                                                }
                                                            } 
                                                        )
                                                    }
                                                }
                                            )
                                        }
                                    }
                                )
                            }
                        }
                    )
                }
            }
        )  */

        this.startchatResultSub = this.advertServ.currentStartChat.subscribe(
            startchatresult => {
                if(startchatresult){
                    this.startchat = startchatresult;
 
                    if(this.startchat.responseStatusCode === 200 && this.startchat.chatposted === true){
                        //send chatID to chats service
                       this.advertServ.setActivechat(this.startchat.chatID);
                       TNSFancyAlert.showSuccess("Chat Success", this.startchat.message, "Dismiss");
                       this.router.navigate(['/messagingdetails'],
                       {
                           animated: true,
                           transition: {
                               name: "slide",
                               duration: 200,
                               curve: "ease"
                           }
                       });
                    } else if (this.startchat.responseStatusCode === 500){
                        TNSFancyAlert.showError("Connection error", this.startchat.message, "Dismiss");
                    }
                    else if (this.startchat.responseStatusCode === 200 && this.startchat.chatposted === false){
                        TNSFancyAlert.showSuccess("This chat is already active", "You will be redirected to the chat.", "Dismiss");
                        this.advertServ.setActivechat(this.startchat.chatID);
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
                    else {
                        TNSFancyAlert.showError("Error", this.startchat.message, "Dismiss");
                    }
                    
                }
            }
        );
 this.notrated = true;
        
    }

    onItemSelected(args :ListViewEventData) {
        //get buyerid
        const sellerid = appSettings.getString("sellerid");
        const buyerid = appSettings.getString("userid");
        const advertisementtype = appSettings.getString("advertisementtype");
        const advertisementid = appSettings.getString("advertisementid");
        this.advertServ.StartNewChat(sellerid, buyerid,advertisementtype, advertisementid);
    }

    onViewInterest(args :ListViewEventData) {
        //get buyerid
        this.router.navigate(['/ratebuyerhome'],
        {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
        this.notrated = false;
    }
    deleteAdvertisement(advertisementID: string){
        this.advertServ.deleteAdvertisement(advertisementID);

        this.deleteAdvertisementResultSub = this.advertServ.currentDeleteAdvertisementResult.subscribe(
            advert => {
                if(advert){
                    this.deleteAdvertisementResult = advert;
                    if(this.deleteAdvertisementResult.advertisementDeleted){
                        TNSFancyAlert.showSuccess("Success!", "Advertisement Successfully Deleted!", "Close").then( t => {
                            this.advertServ.initializeUserAdvertisements(appSettings.getString("userid"), appSettings.getBoolean("myAdvertsSelling"));
                            this.router.backToPreviousPage(),
                            {
                                animated: true,
                                transition: {
                                    name: "slide",
                                    duration: 200,
                                    curve: "ease"  
                                }
                            }
                            /*this.router.navigate(['/advert/myadverts'],
                                {
                                    animated: true,
                                    transition: {
                                        name: "slide",
                                        duration: 200,
                                        curve: "ease"
                                    }
                                });*/
                            }
                        );
                    }else{
                        TNSFancyAlert.showError("Error!", "Advertisement Could not be deleted \n" + this.deleteAdvertisementResult.message,"Close");
                    }
                }
            }
        );

        if(this.deleteAdvertisementResultSub){
            this.deleteAdvertisementResultSub.unsubscribe();
        }
        
    }

    

    ngOnDestroy() {
        if(this.deleteAdvertisementResultSub){
            this.deleteAdvertisementResultSub.unsubscribe();
        }
        if(this.textbookResultSub){
            this.textbookResultSub.unsubscribe();
        }
        if(this.accomodationResultSub){
            this.accomodationResultSub.unsubscribe();
        }
        if(this.tutorResultSub){
            this.tutorResultSub.unsubscribe();
        }
        if(this.noteResultSub){
            this.noteResultSub.unsubscribe(); 
        }
        if(this.userAdvertTextbookResultSub){
            this.userAdvertTextbookResultSub.unsubscribe();
        }
        if(this.userAdvertAccomodationResultSub){
            this.userAdvertAccomodationResultSub.unsubscribe();
        }
        if(this.userAdvertTutorResultSub){
            this.userAdvertTutorResultSub.unsubscribe();
        }
        if(this.userAdvertNoteResultSub){
            this.userAdvertNoteResultSub.unsubscribe();
        }
        if(this.startchatResultSub){
            this.startchatResultSub.unsubscribe();
        }
        this.advertServ.clearSelectedAdvertisement();
        this.advertServ.clearSelectedUserAdvertisement();

        
    }

}






        

                