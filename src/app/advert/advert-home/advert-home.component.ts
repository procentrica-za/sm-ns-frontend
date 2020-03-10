import { Component, OnInit, OnDestroy } from "@angular/core";
import { AdvertService } from "../advert.service";
import { TextbookResult, TextbookResultList, AccomodationResultList, TutorResultList, NoteResultList} from '../advert.model';
import { Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { ImageSource } from "tns-core-modules/image-source";
import { RadListView, ListViewEventData } from "nativescript-ui-listview";
import { RouterExtensions } from "nativescript-angular/router";
@Component({
    selector: 'ns-advert-home',
    templateUrl: './advert-home.component.html',
    styleUrls: ['./advert-home.component.scss'],
    moduleId: module.id
})

export class AdvertHomeComponent implements OnInit, OnDestroy {

    private textbookResultListSub: Subscription;
    public textbookResultList: TextbookResultList;
    private accomodationResultListSub: Subscription;
    public accomodationResultList: AccomodationResultList;
    private tutorResultListSub: Subscription;
    public tutorResultList: TutorResultList;
    private noteResultListSub: Subscription;
    public noteResultList: NoteResultList;
    public allImagesLoaded; textbookImagesLoaded; accomodationImagesLoaded; tutorImagesLoaded; noteImagesLoaded : boolean;
    
   
    constructor(private advertServ: AdvertService, private router: RouterExtensions) {

    }

    ngOnInit() {
        //this.allImgesLoaded = false;
        this.textbookImagesLoaded = false;
        this.accomodationImagesLoaded = false;
        this.tutorImagesLoaded = false;
        this.noteImagesLoaded = false; 
        this.allImagesLoaded = false;       
        
        this.textbookResultListSub = this.advertServ.currentTextbookList.subscribe(
            textbookResult => {
                if(textbookResult) {
                    this.textbookResultList = textbookResult
                    if(this.textbookResultList.responseStatusCode === 200){
                        this.textbookImagesLoaded = true;
                    } else {
                        TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                    }
                    
                }
            }
        );

        this.accomodationResultListSub = this.advertServ.currentAccomodationList.subscribe(
            accomodationResult => {
                if(accomodationResult) {
                    this.accomodationResultList = accomodationResult
                    if(this.accomodationResultList.responseStatusCode === 200){   
                        this.accomodationImagesLoaded = true;
                    } else {
                        TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                    }
                    
                }
            }
        );

        this.tutorResultListSub = this.advertServ.currentTutorList.subscribe(
            tutorResult => {
                if(tutorResult) {
                    this.tutorResultList = tutorResult
                    if(this.tutorResultList.responseStatusCode === 200){
                        this.tutorImagesLoaded = true;
                    } else {
                        TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                    }
                    
                }
            }
        );

        this.noteResultListSub = this.advertServ.currentNoteList.subscribe(
            noteResult => {
                if(noteResult) {
                    this.noteResultList = noteResult
                    if(this.noteResultList.responseStatusCode === 200){
                        this.noteImagesLoaded = true;
                    } else {
                        TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                    }
                    
                }
            }
        );
        
        this.advertServ.initializeTextbooks();
        this.advertServ.initializeAccomodation();
        this.advertServ.initializeTutors();
        this.advertServ.initializeNotes();

        if(this.textbookImagesLoaded && this.accomodationImagesLoaded && this.tutorImagesLoaded && this.noteImagesLoaded){
            this.allImagesLoaded = true;
        }
    }
    
    onItemSelected(args :ListViewEventData): void {
        const tappedAdvertItem = args.view.bindingContext;
        this.advertServ.setAdvert(tappedAdvertItem.advertisementtype, tappedAdvertItem.advertisementid);
        this.router.navigate(['/advert/details'],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });
    }



    ngOnDestroy() {
        if(this.textbookResultListSub){
            this.textbookResultListSub.unsubscribe();
        }
        if(this.accomodationResultListSub){
            this.accomodationResultListSub.unsubscribe();
        }
        if(this.tutorResultListSub){
            this.tutorResultListSub.unsubscribe();
        }
        if(this.noteResultListSub){
            this.noteResultListSub.unsubscribe();
        }
    }
}
