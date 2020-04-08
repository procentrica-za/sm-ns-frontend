import { Component, OnInit, OnDestroy, ElementRef, ViewChild} from "@angular/core";
import * as appSettings from "tns-core-modules/application-settings";
import { TextField } from "tns-core-modules/ui/text-field/text-field";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AdvertService } from "../advert.service";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { Subscription } from "rxjs";
import { UserAdvertTextbookResult, UserAdvertAccomodationResult, UserAdvertTutorResult, UserAdvertNoteResult, UpdateAdvertisementResult } from "../advert.model";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { EventData } from "tns-core-modules/ui/page/page";
import { Switch } from "tns-core-modules/ui/switch/switch";
@Component({
    selector: 'ns-update-advert',
    templateUrl: './update-advert.component.html',
    moduleId: module.id
})



export class UpdateAdvertComponent implements OnInit, OnDestroy {

    form: FormGroup;
    priceBind; descriptionBind; advertType; entityId; advertisementId: string;
    private userAdvertTextbookResultSub: Subscription;
    public userAdvertTextbookResult : UserAdvertTextbookResult;
    private userAdvertAccomodationResultSub: Subscription;
    public userAdvertAccomodationResult : UserAdvertAccomodationResult;
    private userAdvertTutorResultSub: Subscription;
    public userAdvertTutorResult : UserAdvertTutorResult;
    private userAdvertNoteResultSub: Subscription;
    public userAdvertNoteResult : UserAdvertNoteResult;
    public updateAdvertisementResultSub : Subscription;
    private updateAdvertisementResult: UpdateAdvertisementResult;

    public advertFound; isSelling: boolean;
    constructor(private advertServ : AdvertService, private router: RouterExtensions){
        this.isSelling = true;
    }
    @ViewChild('priceEl', {static:false}) priceEl: ElementRef<TextField>;
    @ViewChild('descriptionEl', {static:false}) descriptionEl: ElementRef<TextField>;

    ngOnInit(){
        this.advertFound = false;
        this.userAdvertTextbookResultSub = this.advertServ.currentUserAdvertTextbook.subscribe(
            textbook => {
                if(textbook) {
                    this.userAdvertTextbookResult = textbook;
                    this.priceBind = textbook.price;
                    this.descriptionBind = textbook.description;
                    this.isSelling = textbook.isselling;
                    this.advertType = "TXB";
                    this.entityId = textbook.textbookid;
                    this.advertisementId = textbook.advertisementid;
                    this.advertFound = true;
                }});
        this.userAdvertAccomodationResultSub = this.advertServ.currentUserAdvertAccomodation.subscribe(
            accomodation => {
                if(accomodation) {
                    this.userAdvertAccomodationResult = accomodation;
                    this.priceBind = accomodation.price;
                    this.descriptionBind = accomodation.description;
                    this.isSelling = accomodation.isselling;
                    this.advertType = "ACD";
                    this.entityId = accomodation.accomodationid;
                    this.advertisementId = accomodation.advertisementid;
                    this.advertFound = true;
                }});
        this.userAdvertTutorResultSub = this.advertServ.currentUserAdvertTutor.subscribe(
            tutor => {
                if(tutor) {
                    this.userAdvertTutorResult = tutor;
                    this.priceBind = tutor.price;
                    this.descriptionBind = tutor.description;
                    this.isSelling = tutor.isselling;
                    this.advertType = "TUT";
                    this.entityId = tutor.tutorid;
                    this.advertisementId = tutor.advertisementid;
                    this.advertFound = true;
                }});
        this.userAdvertNoteResultSub = this.advertServ.currentUserAdvertNote.subscribe(
            note => {
                if(note) {
                    this.userAdvertNoteResult = note;
                    this.priceBind = note.price;
                    this.descriptionBind = note.description;
                    this.isSelling = note.isselling;
                    this.advertType = "NTS";
                    this.entityId = note.noteid;
                    this.advertisementId = note.advertisementid;
                    this.advertFound = true;
                }});
        if (!this.advertFound){
            TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
        }


        this.form = new FormGroup({
            description: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                   
                }
            ),
            price: new FormControl(
                null,
                {
                    updateOn: 'blur',
                    validators: [
                        Validators.required
                    ]
                }
            )
        });
    }

    delay(ms: number) { // <------ Change
        return new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired")); // <------ Change
    }

    async onUpdateTap(){
        this.descriptionEl.nativeElement.focus();
        this.priceEl.nativeElement.focus();
        

        if(!this.form.valid){
            return;
        }
        const userid = appSettings.getString('userid');
        const price = this.form.get('price').value;
        const description = this.form.get('description').value;

        setTimeout(() =>{
            //Call the service with captured information
            this.advertServ.UpdateAdvertisement(this.advertisementId, userid, this.isSelling.toString(), this.advertType, this.entityId, price, description);
        },100);

        await this.delay(1000);

        this.updateAdvertisementResultSub = this.advertServ.currentUpdateAdvertisementResult.subscribe(
            advertResult => {
                //console.log("Updated?: " + advertResult.advertisementUpdated);
                if(advertResult.advertisementUpdated) {
                    TNSFancyAlert.showSuccess("Success!", "Advertisement Successfully Updated!", "Close").then( t => {
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
                    TNSFancyAlert.showError("Error!", "Advertisement Could not be Updated\n Message: " + advertResult.message,"Close");
                }
            }
        );

        if (this.updateAdvertisementResultSub){
            this.updateAdvertisementResultSub.unsubscribe();
        }

        this.advertServ.clearSelectedUserAdvertisement();
        this.advertServ.clearSelectedAdvertisement();
        
    }

    ngOnDestroy(){
        if (this.updateAdvertisementResultSub){
            this.updateAdvertisementResultSub.unsubscribe();
        }
    }

    onCheckedChange(args: EventData){
        let sw = args.object as Switch;
        this.isSelling = sw.checked;
    }
}