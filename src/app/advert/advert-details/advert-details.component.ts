import { Component, OnInit, OnDestroy } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { AdvertService } from "../advert.service";
import { TextbookResult, AccomodationResult, TutorResult, NoteResult} from '../advert.model';
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

    constructor(private router: RouterExtensions, private advertServ: AdvertService) { }

    ngOnInit() { 
        
        this.textbookResultSub = this.advertServ.currentTextbook.subscribe(
            textbook => {
                if(textbook) {
                    this.textbookResult = textbook;
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
        this.advertServ.clearSelectedAdvertisement();
    }

}

