import { Component, OnInit, OnDestroy } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { AdvertService } from "../advert.service";
import { TextbookResult} from '../advert.model';
import { Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";

@Component({
    selector: 'ns-my-adverts',
    templateUrl: './my-advert.component.html',
    moduleId: module.id
})



export class MyAdvertComponent implements OnInit, OnDestroy {

    ngOnInit() {

    }

    ngOnDestroy(){  

    }
    
}