import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { AdvertService } from "../advert.service";
import {TextbookResult, TextbookResultList} from '../advert.model';
import { Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { ImageSource } from "tns-core-modules/image-source";
@Component({
    selector: 'ns-advert-home',
    templateUrl: './advert-home.component.html',
    styleUrls: ['./advert-home.component.scss'],
    moduleId: module.id
})

export class AdvertHomeComponent implements OnInit, OnDestroy {

    textbookResultListSub: Subscription;
    textbookResultList: TextbookResultList;
    imgSource : ImageSource;
    constructor(private advertServ: AdvertService) {
        this.imgSource = new ImageSource();
    }

    ngOnInit() {

        this.advertServ.initializeTextbooks();

        this.textbookResultListSub = this.advertServ.currentTextbookList.subscribe(
            textbookResult => {
                if(textbookResult) {
                    this.textbookResultList = textbookResult
                    if(this.textbookResultList.responseStatusCode === 200){
                        //console.log(this.textbookResultList);
                        
                        this.textbookResultList.Textbooks[0].imagebytes = "data:image/png;base64," + this.textbookResultList.Textbooks[0].imagebytes;
                        console.log(this.textbookResultList.Textbooks[0].imagebytes)
                    } else {
                        TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                    }
                    
                }
            }
        );

      
        
    }

    

    ngOnDestroy() {
        if(this.textbookResultListSub){
            this.textbookResultListSub.unsubscribe();
        }
    }
}
