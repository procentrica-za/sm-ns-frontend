import { Component, OnInit, OnDestroy } from "@angular/core";
import { AdvertService } from "../advert.service";
import { TextbookResult, TextbookResultList, AccomodationResultList, TutorResultList, NoteResultList, AccomodationResult, NoteResult, TutorResult} from '../advert.model';
import { Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { ImageSource } from "tns-core-modules/image-source";
import { RadListView, ListViewEventData } from "nativescript-ui-listview";
import { RouterExtensions } from "nativescript-angular/router";
import { EventData } from "tns-core-modules/ui/page/page";
import { Switch } from "tns-core-modules/ui/switch/switch";
import { ObservableArray, ChangedData } from "tns-core-modules/data/observable-array";
import * as appSettings from "tns-core-modules/application-settings";
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
    public allImagesLoaded; textbookImagesLoaded; accomodationImagesLoaded; tutorImagesLoaded; noteImagesLoaded; isSelling : boolean;
    public myTextbookArray : ObservableArray<TextbookResult>;
    public myAccomodationArray : ObservableArray<AccomodationResult>;
    public myNoteArray : ObservableArray<NoteResult>;
    public myTutorArray : ObservableArray<TutorResult>;

    constructor(private advertServ: AdvertService, private router: RouterExtensions) {
        this.isSelling = appSettings.getBoolean("mainAdvertSelling");
        console.log("Logged in user: " + appSettings.getString("userid"));
    }

    onCheckedChange(args: EventData){
        let sw = args.object as Switch;
        appSettings.setBoolean("mainAdvertSelling", sw.checked);
        this.isSelling = appSettings.getBoolean("mainAdvertSelling");
        if(this.allImagesLoaded) {
            this.allImagesLoaded = false;
            setTimeout(() =>{
                this.advertServ.clearSelectedAdvertisement();
                this.advertServ.initializeAdvertisements(this.isSelling);
            },100); 
        }
    }

    ngOnInit() {
        this.textbookImagesLoaded = false;
        this.accomodationImagesLoaded = false;
        this.tutorImagesLoaded = false;
        this.noteImagesLoaded = false; 
        this.allImagesLoaded = false;  
           
        this.textbookResultListSub = this.advertServ.currentTextbookList.subscribe(
            textbookResult => {
                if(textbookResult) {
                    if(textbookResult.responseStatusCode === 200){
                        this.myTextbookArray = new ObservableArray(0);
                        textbookResult.Textbooks.forEach( t => {
                            this.myTextbookArray.push(t);
                        });
                        this.textbookImagesLoaded = true;
                        if(this.textbookImagesLoaded && this.accomodationImagesLoaded && this.tutorImagesLoaded && this.noteImagesLoaded){
                            this.allImagesLoaded = true;
                        }
                    }else {
                        TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                    }
                }
            }
        );

        


        this.accomodationResultListSub = this.advertServ.currentAccomodationList.subscribe(
            accomodationResult => {
                if(accomodationResult) {
                    if(accomodationResult.responseStatusCode === 200){
                        this.accomodationImagesLoaded = true;
                        if(this.textbookImagesLoaded && this.accomodationImagesLoaded && this.tutorImagesLoaded && this.noteImagesLoaded){
                            this.allImagesLoaded = true;
                        }
                    }else {
                        TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                    }
                    this.myAccomodationArray = new ObservableArray(0);
                    accomodationResult.Accomodations.forEach( t => {
                        this.myAccomodationArray.push(t);
                    })
                }
            }
        );

        this.tutorResultListSub = this.advertServ.currentTutorList.subscribe(
            tutorResult => {
                if(tutorResult) {
                    if(tutorResult.responseStatusCode === 200){
                        this.tutorImagesLoaded = true;
                        if(this.textbookImagesLoaded && this.accomodationImagesLoaded && this.tutorImagesLoaded && this.noteImagesLoaded){
                            this.allImagesLoaded = true;
                        }
                    }else {
                        TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                    }
                    this.myTutorArray = new ObservableArray(0);
                    tutorResult.Tutors.forEach( t => {
                        this.myTutorArray.push(t);
                    })
                }
            }
        );

        this.noteResultListSub = this.advertServ.currentNoteList.subscribe(
            noteResult => {
                if(noteResult) {
                    if(noteResult.responseStatusCode === 200){
                        this.noteImagesLoaded = true;
                        if(this.textbookImagesLoaded && this.accomodationImagesLoaded && this.tutorImagesLoaded && this.noteImagesLoaded){
                            this.allImagesLoaded = true;
                        }
                    }else {
                        TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                    }
                    this.myNoteArray = new ObservableArray(0);
                    noteResult.Notes.forEach( t => {
                        this.myNoteArray.push(t);
                    })
                }
            }
        );
        this.advertServ.initializeAdvertisements(this.isSelling);
    }
    
    onItemSelected(args :ListViewEventData): void {
        const tappedAdvertItem = args.view.bindingContext;
        this.advertServ.setAdvert(tappedAdvertItem.advertisementtype, tappedAdvertItem.advertisementid);
        appSettings.setString("buyerid", tappedAdvertItem.advertisementid);
        appSettings.setString("advertisementtype", tappedAdvertItem.advertisementtype);
        appSettings.setString("advertisementid", tappedAdvertItem.advertisementid);
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
