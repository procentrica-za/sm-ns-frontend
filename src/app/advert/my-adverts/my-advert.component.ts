import { Component, OnInit, OnDestroy } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { AdvertService } from "../advert.service";
import {UserAdvertAccomodationResultList,UserAdvertNoteResultList,UserAdvertTextbookResultList,UserAdvertTutorResultList, UserAdvertTextbookResult, UserAdvertAccomodationResult, UserAdvertNoteResult, UserAdvertTutorResult} from '../advert.model';
import { Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";
import * as appSettings from "tns-core-modules/application-settings";
import { RadListView, ListViewEventData } from "nativescript-ui-listview";
import { EventData } from "tns-core-modules/ui/page/page";
import { Switch } from "tns-core-modules/ui/switch/switch";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
@Component({
    selector: 'ns-my-adverts',
    templateUrl: './my-advert.component.html',
    moduleId: module.id
})

export class MyAdvertComponent implements OnInit, OnDestroy {
    private imageUploadedSub : Subscription;
    public imageUploaded : boolean;

    public myTextbookArray : ObservableArray<UserAdvertTextbookResult>;
    public myAccomodationArray : ObservableArray<UserAdvertAccomodationResult>;
    public myNoteArray : ObservableArray<UserAdvertNoteResult>;
    public myTutorArray : ObservableArray<UserAdvertTutorResult>;

    public UserID : string;


    private userTextbookAdvertResultListSub: Subscription;
    public userTextbookAdvertResultList: UserAdvertTextbookResultList;

    private userAccomodationAdvertResultListSub: Subscription;
    public userAccomodationAdvertResultList: UserAdvertAccomodationResultList;
    
    private userTutorAdvertResultListSub: Subscription;
    public userTutorAdvertResultList: UserAdvertTutorResultList;

    private userNoteAdvertResultListSub: Subscription;
    public userNoteAdvertResultList: UserAdvertNoteResultList;

    public allImagesLoaded; textbookImagesLoaded; accomodationImagesLoaded; tutorImagesLoaded; noteImagesLoaded; isSelling: boolean;
    

    constructor(private router: RouterExtensions, private advertServ: AdvertService){
        this.isSelling = appSettings.getBoolean("myAdvertsSelling");
    }

    addAdvertisementNavigate(){
        this.router.navigate(['/advert/addadvert'],
        {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
    }

    onCheckedChange(args: EventData){
        let sw = args.object as Switch;
        appSettings.setBoolean("myAdvertSelling", sw.checked);
        this.isSelling = sw.checked
        this.textbookImagesLoaded = false;
        this.accomodationImagesLoaded = false;
        this.tutorImagesLoaded = false;
        this.noteImagesLoaded = false; 
        this.allImagesLoaded = false;
        setTimeout(() =>{
            this.advertServ.clearSelectedUserAdvertisement();
            this.advertServ.clearUserAdvertisements();
        },100); 
        this.advertServ.initializeUserAdvertisements(this.UserID, this.isSelling);
    };
    

    ngOnInit() {
        this.textbookImagesLoaded = false;
        this.accomodationImagesLoaded = false;
        this.tutorImagesLoaded = false;
        this.noteImagesLoaded = false; 
        this.allImagesLoaded = false;

        this.userTextbookAdvertResultListSub = this.advertServ.currentUserAdvertTextbookList.subscribe(
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


        this.userAccomodationAdvertResultListSub = this.advertServ.currentUserAdvertAccomodationList.subscribe(
            accomodationResult => {
                if(accomodationResult) {
                    if(accomodationResult.responseStatusCode === 200){
                        this.myAccomodationArray = new ObservableArray(0);
                        accomodationResult.Accomodations.forEach( t => {
                            this.myAccomodationArray.push(t);
                        })
                        this.accomodationImagesLoaded = true;
                        if(this.textbookImagesLoaded && this.accomodationImagesLoaded && this.tutorImagesLoaded && this.noteImagesLoaded){
                            this.allImagesLoaded = true;
                        }
                    }else {
                        TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                    }
                   
                }
            }
        );

        this.userTutorAdvertResultListSub = this.advertServ.currentUserAdvertTutorList.subscribe(
            tutorResult => {
                if(tutorResult) {
                    if(tutorResult.responseStatusCode === 200){
                        this.myTutorArray = new ObservableArray(0);
                        tutorResult.Tutors.forEach( t => {
                        this.myTutorArray.push(t);
                        })
                        this.tutorImagesLoaded = true;
                        if(this.textbookImagesLoaded && this.accomodationImagesLoaded && this.tutorImagesLoaded && this.noteImagesLoaded){
                            this.allImagesLoaded = true;
                        }
                    }else {
                        TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                    }
                    
                }
            }
        );

        this.userNoteAdvertResultListSub = this.advertServ.currentUserAdvertNoteList.subscribe(
            noteResult => {
                if(noteResult) {
                    if(noteResult.responseStatusCode === 200){
                        this.myNoteArray = new ObservableArray(0);
                        noteResult.Notes.forEach( t => {
                        this.myNoteArray.push(t);
                        })
                        this.noteImagesLoaded = true;
                        if(this.textbookImagesLoaded && this.accomodationImagesLoaded && this.tutorImagesLoaded && this.noteImagesLoaded){
                            this.allImagesLoaded = true;
                        }
                    }else {
                        TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                    }
                    
                }
            }
        );
        this.UserID = appSettings.getString("userid");
        this.advertServ.initializeUserAdvertisements(this.UserID, this.isSelling);
    }

    ngOnDestroy(){  
        if(this.userTextbookAdvertResultListSub){
            this.userTextbookAdvertResultListSub.unsubscribe();
        }
        if(this.userAccomodationAdvertResultListSub){
            this.userAccomodationAdvertResultListSub.unsubscribe();
        }
        if(this.userTutorAdvertResultListSub){
            this.userTutorAdvertResultListSub.unsubscribe();
        }
        if(this.userNoteAdvertResultListSub){
            this.userNoteAdvertResultListSub.unsubscribe();
        }
    }


    onItemSelected(args :ListViewEventData): void {
        const tappedAdvertItem = args.view.bindingContext;
        //console.log("Ad Type:  "+ tappedAdvertItem.advertisementtype +"\n ID:  "+ tappedAdvertItem.advertisementid)
        this.advertServ.setUserAdvert(tappedAdvertItem.advertisementtype, tappedAdvertItem.advertisementid);
        //Set ID's for ratings 
        appSettings.setString("buyerid", tappedAdvertItem.advertisementid);
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

    

}