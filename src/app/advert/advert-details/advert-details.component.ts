import { Component, OnInit, OnDestroy } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { AdvertService } from "../advert.service";
import { TextbookResult, AccomodationResult, TutorResult, NoteResult, UserAdvertTextbookResult, UserAdvertAccomodationResult, UserAdvertTutorResult, UserAdvertNoteResult} from '../advert.model';
import { Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";

@Component({
    selector: 'ns-advert-details',
    templateUrl: './advert-details.component.html',
    moduleId: module.id
})



export class AdvertDetailsComponent implements OnInit, OnDestroy {
    
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
    
    public advertFound: boolean;

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
                    this.advertFound = true;
            }});
        this.tutorResultSub = this.advertServ.currentTutor.subscribe(
            tutor => {
                if(tutor) {
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
                    this.advertFound = true;
                }});
        this.userAdvertTutorResultSub = this.advertServ.currentUserAdvertTutor.subscribe(
            tutor => {
                if(tutor) {
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
    }



    

    ngOnDestroy() {
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
        this.advertServ.clearSelectedAdvertisement();
        this.advertServ.clearSelectedUserAdvertisement();

        
    }

}






        

                