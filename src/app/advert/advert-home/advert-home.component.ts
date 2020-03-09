import { Component, OnInit, OnDestroy } from "@angular/core";
import { AdvertService } from "../advert.service";
import { TextbookResult, TextbookResultList} from '../advert.model';
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
    public imagesLoaded : boolean;
    
    private imgSource : ImageSource;
    constructor(private advertServ: AdvertService, private router: RouterExtensions) {
        this.imgSource = new ImageSource();
        
        
    }

   

    ngOnInit() {
        this.imagesLoaded = false;        
        
        this.textbookResultListSub = this.advertServ.currentTextbookList.subscribe(
            textbookResult => {
                if(textbookResult) {
                    this.textbookResultList = textbookResult
                    if(this.textbookResultList.responseStatusCode === 200){
                        this.imagesLoaded = true;
                    } else {
                        TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                    }
                    
                }
            }
        );

        this.advertServ.initializeTextbooks();
    }


    
    
    onItemSelected(args :ListViewEventData): void {
        const tappedAdvertItem = args.view.bindingContext;
        this.advertServ.setTextbook(tappedAdvertItem.advertisementid);
        //console.log(tappedAdvertItem.advertisementid);
        //this.router.navigate(['/advert/details'], { clearHistory: true });
        this.router.navigate(['/advert/details'],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });
        //console.log(`The following ad was selected: ${args.index}`);
    }



    ngOnDestroy() {
        if(this.textbookResultListSub){
            this.textbookResultListSub.unsubscribe();
        }
    }
}
