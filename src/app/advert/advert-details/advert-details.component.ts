import { Component, OnInit, OnDestroy } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { AdvertService } from "../advert.service";
import { TextbookResult} from '../advert.model';
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

    constructor(private router: RouterExtensions, private advertServ: AdvertService) { }

    ngOnInit() { 
        
        this.textbookResultSub = this.advertServ.currentTextbook.subscribe(
            textbook => {
                if(textbook) {
                    this.textbookResult = textbook;
                    //console.log(this.textbookResult);
                } else {
                    TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.")
                }
            }
        )
    }

    ngOnDestroy() {
        this.textbookResultSub.unsubscribe
    }

    onBackButtonTap(): void {
       
        this.router.navigate(['/advert/home'],
            {
                animated: true,
                transition: {
                    name: "slideRight",
                    duration: 200,
                    curve: "ease"
                }
            });
    }
}

