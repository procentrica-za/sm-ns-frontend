import { Component, OnInit, OnDestroy, ViewContainerRef, ViewChild, ElementRef } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { ModalDialogParams, ModalDialogService } from "nativescript-angular/modal-dialog";
import { AdvertService } from "../advert.service";
import { Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { EventData } from "tns-core-modules/ui/page/page";
import { ListPicker } from "tns-core-modules/ui/list-picker/list-picker";
import { AdvertListPickerComponent } from "../advert-listpicker/advert-listpicker.component";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TextField } from "tns-core-modules/ui/text-field/text-field";
import { Switch } from "tns-core-modules/ui/switch/switch";
import * as appSettings from "tns-core-modules/application-settings";
import { TextbookResultList, AccomodationResultList, TutorResultList, NoteResultList } from "../advert.model";
@Component({
    selector: 'ns-advert-filter',
    templateUrl: './advert-filter.component.html',
    moduleId: module.id
})

export class AdvertFilterComponent implements OnInit, OnDestroy {
    form: FormGroup;
    private textbookResultListSub: Subscription;
    public textbookResultList: TextbookResultList;
    private accomodationResultListSub: Subscription;
    public accomodationResultList: AccomodationResultList;
    private tutorResultListSub: Subscription;
    public tutorResultList: TutorResultList;
    private noteResultListSub: Subscription;
    public noteResultList: NoteResultList;
    
    public paramReceived; moduleCodeTypeBind; QualityTypeBind; acdTypeBind; instTypeBind; venueTypeBind; termTypeBind; noteTypeBind : String;

    public textbookFilter; accomodationFilter; tutorFilter; noteFilter; isSelling : boolean;

    constructor(private modalParams: ModalDialogParams, private advertServ: AdvertService, private modalDialog: ModalDialogService, private vcRef: ViewContainerRef){
        this.textbookFilter = false;
        this.accomodationFilter = false;
        this.tutorFilter = false;
        this.noteFilter = false;
        this.isSelling = true;
    }
    @ViewChild('nameEl', {static:false}) nameEl: ElementRef<TextField>;
    @ViewChild('editionEl', {static:false}) editionEl: ElementRef<TextField>;
    @ViewChild('moduleCodeEl', {static:false}) moduleCodeEl: ElementRef<TextField>;
    @ViewChild('qualityEl', {static:false}) qualityEl: ElementRef<TextField>;
    @ViewChild('authorEl', {static:false}) authorEl: ElementRef<TextField>;
    @ViewChild('priceEl', {static:false}) priceEl: ElementRef<TextField>;
    @ViewChild('acdTypeEl', {static:false}) acdTypeEl: ElementRef<TextField>;
    @ViewChild('instTypeEl', {static:false}) instTypeEl: ElementRef<TextField>;
    @ViewChild('subjectEl', {static:false}) subjectEl: ElementRef<TextField>;
    @ViewChild('yearTypeEl', {static:false}) yearTypeEl: ElementRef<TextField>;
    @ViewChild('venueTypeEl', {static:false}) venueTypeEl: ElementRef<TextField>;
    @ViewChild('noteTypeEl', {static:false}) noteTypeEl: ElementRef<TextField>;
    @ViewChild('termTypeEl', {static:false}) termTypeEl: ElementRef<TextField>;
    @ViewChild(' distanceEl', {static:false})  distanceEl: ElementRef<TextField>;
    
   


    ngOnInit(){
        this.form = new FormGroup({
            moduleCode: new FormControl(
                null,
                {
                    updateOn: 'blur'
                }
            ),
            name: new FormControl(
                null,
                {
                    updateOn: 'blur'
                }
            ),
            edition: new FormControl(
                null,
                {
                    updateOn: 'blur'
                }
            ),
            quality: new FormControl(
                null,
                {
                    updateOn: 'blur'
                }
            ),
            author: new FormControl(
                null,
                {
                    updateOn: 'blur'
                }
            ),
            price: new FormControl(
                null,
                {
                    updateOn: 'blur'
                }
            ),
            acdType: new FormControl(
                null,
                {
                    updateOn: 'blur'
                }
            ),
            instType: new FormControl(
                null,
                {
                    updateOn: 'blur'
                }
            ),
            subject: new FormControl(
                null,
                {
                    updateOn: 'blur'
                   
                }
            ),
            yearType: new FormControl(
                null,
                {
                    updateOn: 'blur'
                   
                }
            ),
            venueType: new FormControl(
                null,
                {
                    updateOn: 'blur'
                   
                }
            ),
            noteType: new FormControl(
                null,
                {
                    updateOn: 'blur'
                   
                }
            ),
            termType: new FormControl(
                null,
                {
                    updateOn: 'blur'
                   
                }
            ),
            distance: new FormControl(
                null,
                {
                    updateOn: 'blur'
                   
                }
            )
        });


        

        this.paramReceived = (this.modalParams.context as {string: String}).string;

        switch(this.paramReceived){
            case "TextbookFilter":
                this.textbookFilter = true;
                break;
             case "AccomodationFilter":
                this.accomodationFilter = true;
                break;
             case "TutorFilter":
                this.tutorFilter = true;
                break;
             case "NoteFilter":
                this.noteFilter = true;
                break;
        }
        

    }

    onQualityTypeTap(){
        this.modalDialog.showModal(AdvertListPickerComponent, {viewContainerRef: this.vcRef,
            animated: true,
            fullscreen: true,
            context: {string: "QualityType" } }).then((selection:string) => {
                this.QualityTypeBind=selection;
            });
    }


    onModuleCodeTypeTap(){
        this.modalDialog.showModal(AdvertListPickerComponent, {viewContainerRef: this.vcRef,
            animated: true,
            fullscreen: true,
            context: {string: "ModuleCodeType" } }).then((selection:string) => {
                this.moduleCodeTypeBind=selection;
            });
    }

    onAccomodationTypeTap(){
        this.modalDialog.showModal(AdvertListPickerComponent, {viewContainerRef: this.vcRef, 
            animated: true,
            fullscreen: true,
            context: {string: "AccomodationType" } }).then((selection: string) => {
                this.acdTypeBind=selection;
            });
    }

    onInstitutionTypeTap(){
        this.modalDialog.showModal(AdvertListPickerComponent, {viewContainerRef: this.vcRef,
            animated: true,
            fullscreen: true,
            context: {string: "InstitutionType" } }).then((selection:string) => {
                this.instTypeBind=selection;
            });
    }

    onVenueTypeTap(){
        this.modalDialog.showModal(AdvertListPickerComponent, {viewContainerRef: this.vcRef,
            animated: true,
            fullscreen: true,
            context: {string: "VenueType" } }).then((selection:string) => {
                this.venueTypeBind=selection;
            });    
    }

    onTermsTypeTap(){
        this.modalDialog.showModal(AdvertListPickerComponent, {viewContainerRef: this.vcRef,
            animated: true,
            fullscreen: true,
            context: {string: "TermType" } }).then((selection:string) => {
                this.termTypeBind=selection;
            });      
    }

    onNoteTypeTap(){
        this.modalDialog.showModal(AdvertListPickerComponent, {viewContainerRef: this.vcRef,
            animated: true,
            fullscreen: true,
            context: {string: "NoteType" } }).then((selection:string) => {
                this.noteTypeBind=selection;
            });    
    }

    onCheckedChange(args: EventData){
        let sw = args.object as Switch;
        this.isSelling = sw.checked
    }

    delay(ms: number) { 
        return new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired")); 
    }

    async onTextbookConfirmTap(){
            this.nameEl.nativeElement.focus();
            this.editionEl.nativeElement.focus();
            this.qualityEl.nativeElement.focus();
            this.authorEl.nativeElement.focus();
            this.moduleCodeEl.nativeElement.focus();
            this.priceEl.nativeElement.focus();


            var name = this.form.get('name').value;
            var edition = this.form.get('edition').value;
            var quality = this.form.get('quality').value;
            var author = this.form.get('author').value;
            var code = this.form.get('moduleCode').value;
            var price = this.form.get('price').value;

            if(name == null || !name){
                name = "";
            }
            if(edition == null || !edition){
                edition = "";
            }
            if(quality == null || !quality){
                quality = "";
            }
            if(author == null || !author){
                author = "";
            }
            if(code == null || !code){
                code = "";
            }
            if(price == null || !price){
                price = 999999;
            }
 
            this.advertServ.initializeTextbooks(this.isSelling,price,code,name,edition,quality,author);
            
            await this.delay(1500);

            this.textbookResultListSub = this.advertServ.currentTextbookList.subscribe(
                textbookResult => {
                    if(textbookResult) {
                        if(textbookResult.responseStatusCode === 200){
                            if(textbookResult.Textbooks[0].advertisementid == ""){
                                TNSFancyAlert.showError("No Results", "There are no advertisements that match your search query!")
                            }else{
                                this.modalParams.closeCallback(true);
                            }
                        }
                    }else {
                        TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                    }
                });

            if(this.textbookResultListSub){
                this.textbookResultListSub.unsubscribe();
            }
    }

    async onTextbookCancelTap(){
        this.advertServ.initializeTextbooks(true,999999,"","","","","");
        await this.delay(1500);
        this.modalParams.closeCallback(false);
    }


    async onAccomodationConfirmTap(){
        this.priceEl.nativeElement.focus();
        this.acdTypeEl.nativeElement.focus();
        this.instTypeEl.nativeElement.focus();
        this.distanceEl.nativeElement.focus();

        var distance = this.form.get('distance').value;
        var price = this.form.get('price').value;
        var acdType = this.form.get('acdType').value;
        var instType = this.form.get("instType").value;
        
        if(acdType == null || !acdType){
            acdType = "";
        }
        if(instType == null || !instType){
            instType = "";
        }
        if(price == null || !price){
            price = 999999;
        }
        if(distance == null || !distance){
            distance = 999999;
        }

        switch(acdType){
            case "Apartement":
                acdType = "APT";
                break;
            case "Commune":
                acdType = "COM";
                break;
            case "House":
                acdType = "HSE";
                break;
            case "Garden Cottage":
                acdType = "GDC";
                break;
        }

        switch(instType){
            case "University of Pretoria":
                instType = "Pretoria";
                break;
            case "University of Johannesburg":
                instType = "Johannesburg";
                break;
        }
        this.advertServ.initializeAccomodation(this.isSelling,price,acdType,"",distance,instType);
        
        await this.delay(1500);

        this.accomodationResultListSub = this.advertServ.currentAccomodationList.subscribe(
            accomodationResult => {
                if(accomodationResult) {
                    if(accomodationResult.responseStatusCode === 200){
                        console.log(accomodationResult.Accomodations[0].isselling)
                        if(accomodationResult.Accomodations[0].advertisementid == ""){
                            TNSFancyAlert.showError("No Results", "There are no advertisements that match your search query!")
                        }else{
                            this.modalParams.closeCallback(true);
                        }
                    }
                }else {
                    TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                }
            });

        if(this.accomodationResultListSub){
            this.accomodationResultListSub.unsubscribe();
        }
    }

    async onAccomodationCancelTap(){
        this.advertServ.initializeAccomodation(true,999999,"","",999999,"",);
        await this.delay(1500);
        this.modalParams.closeCallback(false);
    }

    async onTutorConfirmTap(){
        this.subjectEl.nativeElement.focus();
        this.termTypeEl.nativeElement.focus();
        this.venueTypeEl.nativeElement.focus();
        this.noteTypeEl.nativeElement.focus();
        this.moduleCodeEl.nativeElement.focus();
        this.priceEl.nativeElement.focus();

        var subject = this.form.get('subject').value;
        var term = this.form.get('termType').value;
        var venue = this.form.get('venueType').value;
        var note = this.form.get('noteType').value;
        
        var code = this.form.get('moduleCode').value;
        var price = this.form.get('price').value;

        if(subject == null || !subject){
            subject = "";
        }
        if(term == null || !term){
            term = "";
        }
        if(venue == null || !venue){
            venue = "";
        }
        if(note == null || !note){
            note = "";
        }
        if(code == null || !code){
            code = "";
        }
        if(price == null || !price){
            price = 999999;
        }

        if(note == "Yes"){
            note = "true";
        }else if( note == "No"){
            note = "false";
        }

        console.log(this.isSelling)
        console.log(price)
        console.log(subject)
        console.log("")
        console.log(venue)
        console.log(note)
        console.log(term)
        console.log(code)

        this.advertServ.initializeTutors(this.isSelling,price,subject,"",venue,note,term,code);
        
        await this.delay(1500);

        this.tutorResultListSub = this.advertServ.currentTutorList.subscribe(
            tutorResult => {
                if(tutorResult) {
                    if(tutorResult.responseStatusCode === 200){
                        if(tutorResult.Tutors[0].advertisementid == ""){
                            TNSFancyAlert.showError("No Results", "There are no advertisements that match your search query!")
                        }else{
                            this.modalParams.closeCallback(true);
                        }
                    }
                }else {
                    TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                }
            });

        if(this.tutorResultListSub){
            this.tutorResultListSub.unsubscribe();
        }
    }

    async onTutorCancelTap(){
        this.advertServ.initializeTutors(true,999999,"","","","","","");
        await this.delay(1500);
        this.modalParams.closeCallback(false);
    }


    async onNoteConfirmTap(){
       
        this.moduleCodeEl.nativeElement.focus();
        this.priceEl.nativeElement.focus();

        var code = this.form.get('moduleCode').value;
        var price = this.form.get('price').value;


        if(code == null || !code){
            code = "";
        }
        if(price == null || !price){
            price = 999999;
        }

       

        console.log(this.isSelling)
        console.log(price)
        console.log(code)

        this.advertServ.initializeNotes(this.isSelling,price,code)
        
        await this.delay(1500);

        this.noteResultListSub = this.advertServ.currentNoteList.subscribe(
            noteResult => {
                if(noteResult) {
                    if(noteResult.responseStatusCode === 200){
                        if(noteResult.Notes[0].advertisementid == ""){
                            TNSFancyAlert.showError("No Results", "There are no advertisements that match your search query!")
                        }else{
                            this.modalParams.closeCallback(true);
                        }
                    }
                }else {
                    TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                }
            });

        if(this.noteResultListSub){
            this.noteResultListSub.unsubscribe();
        }
    }

    async onNoteCancelTap(){
        this.advertServ.initializeNotes(true,999999,"");
        await this.delay(1500);
        this.modalParams.closeCallback(false);
    }


    ngOnDestroy(){

    }

    
}