import { Component, OnInit, OnDestroy } from "@angular/core";
import { EventData } from "tns-core-modules/ui/page/page";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Subscription } from "rxjs";
import { TextbookList, Textbook, ModuleCodeList } from "../advert.model";
import { AdvertService } from "../advert.service";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { ListViewEventData } from "nativescript-ui-listview";
import { ImagePickerMediaType } from "nativescript-imagepicker";
import { SearchBar } from "tns-core-modules/ui/search-bar"
@Component({
    selector: 'ns-advert-listpicker',
    templateUrl: './advert-listpicker.component.html',
    moduleId: module.id
})

export class AdvertListPickerComponent implements OnInit, OnDestroy {
    public moduleSearch; textbookSearch: string;
    public textbookListSub; moduleCodeSub : Subscription;
    public textbookList : TextbookList;
    public myTextbookArray; TextbookFilterArray : ObservableArray<Textbook>;
    public moduleCodeList : ModuleCodeList;
    public moduleCodeTypes; moduleCodeTypesFilter : ObservableArray<string>;
    public  moduleCodeType : string;
    public accomodationTypes; institutionTypes; yearCompletedTypes; venueTypes; noteTypes; termTypes; qualityTypes : Array<string>;
    public paramReceived; acdType; instType; yearCompletedType; venueType; noteType; termType; qualityType : String;
    public AccomodationType; InstitutionType; YearCompletedType; VenueType; NoteType; TermType; ModuleCodeType; TextbookType; QualityType; noFilterResults : boolean;
    constructor(private modalParams: ModalDialogParams, private advertServ: AdvertService){
       
        this.accomodationTypes = new Array<string>("Apartement", "Commune", "House", "Garden Cottage");
        this.institutionTypes = new Array<string>("University of Pretoria","University of Johannesburg");
        this.yearCompletedTypes = new Array<string>("2012","2013","2014","2015","2016","2017","2018","2019");
        this.venueTypes = new Array<string>("On Campus","At my Home","Other - Contact for more details");
        this.noteTypes = new Array<string>("Yes","No");
        this.termTypes = new Array<string>("Pay per Lesson","Pay for Package Lessons","Other - Contact for more details");
        this.qualityTypes = new Array<string>("New","Used");
        //this.moduleCodeTypes = new Array<string>("OBS110","OBS120","ENG111","ENG122","LLB120","LLB140","EKN110","EKN120","CHE156","CHE186","ILB111","ILB122");

        this.AccomodationType = false;
        this.InstitutionType = false;
        this.YearCompletedType = false;
        this.VenueType = false;
        this.NoteType = false;
        this.TermType = false;
        this.ModuleCodeType = false;
        this.TextbookType = false;
        this.QualityType = false;
        this.noFilterResults = false;

    }

    

    ngOnInit(){
        this.paramReceived = (this.modalParams.context as {string: String}).string
        console.log(this.paramReceived);
        switch (this.paramReceived){
            case "QualityType":
                this.QualityType = true;
                break;
            case "AccomodationType":
                this.AccomodationType = true;
                break;
            case "InstitutionType":
                this.InstitutionType = true;
                break;
            case "YearCompletedType":
                this.YearCompletedType = true;
                break;  
            case "VenueType":
                this.VenueType = true;
                break;  
            case "NoteType":
                this.NoteType = true;
                break;  
            case "TermType":
                this.TermType = true;
                break;  
            case "ModuleCodeType":
                this.advertServ.initializeModuleCodeList();
                this.moduleCodeSub = this.advertServ.currentModuleCodeList.subscribe(
                    modulecodeListResult => {
                        if (modulecodeListResult){
                            if(modulecodeListResult.responseStatusCode === 200){
                                this.moduleCodeTypes = new ObservableArray(0);
                                modulecodeListResult.ModuleCodes.forEach( t => {
                                    this.moduleCodeTypes.push(t.code);
                                });
                                this.moduleCodeTypesFilter = new ObservableArray(0);
                                this.moduleCodeTypesFilter = this.moduleCodeTypes;
                                this.ModuleCodeType = true;
                            }else {
                                TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                            }
                        }
                    }
                );
                break;  
            case "TextbookType":
                this.advertServ.initializeAddTextbookList();
                this.textbookListSub= this.advertServ.currentAddTextbookList.subscribe(
                    textbookResult => {
                        if(textbookResult) {
                            if(textbookResult.responseCode === 200){
                                this.myTextbookArray = new ObservableArray(0);
                                textbookResult.Textbooks.forEach( t => {
                                    this.myTextbookArray.push(t);
                                });
                                this.TextbookFilterArray = this.myTextbookArray;
                                this.TextbookType = true;
                            }else {
                                TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                            }
                        }
                    }
                );
                break;
            }
        }

    onItemSelected(args :ListViewEventData): void {
        const tappedAdvertItem = args.view.bindingContext;
        this.advertServ.setAddTextbook(tappedAdvertItem);
        this.modalParams.closeCallback(true);
    }

    onAcdTap(){
        this.modalParams.closeCallback(this.acdType); 
    }
    onInstTap(){
        this.modalParams.closeCallback(this.instType); 
    }
    onYearTap(){
        this.modalParams.closeCallback(this.yearCompletedType);    
    }
    onVenueTap(){
        this.modalParams.closeCallback(this.venueType);    
    }
    onNoteTap(){
        this.modalParams.closeCallback(this.noteType);    
    }
    onTermTap(){
        this.modalParams.closeCallback(this.termType);    
    }
    onModuleTap(){
        this.modalParams.closeCallback(this.moduleCodeType);    
    }
    onQualityTap(){
        this.modalParams.closeCallback(this.qualityType);
    }

   
    onModuleSearchChanged(args: EventData){
        const searchBar = args.object as SearchBar;
        var newList = this.moduleCodeTypes.filter(function(value, index, array){
            var code = value.toLowerCase();
            if(code.indexOf(searchBar.text.toLowerCase()) > -1){
                return value;
            } else {
                return null;
            }
        });

        if(newList[0] == null){
            this.noFilterResults = true;
            this.moduleCodeTypesFilter = null;
        }else{
            this.moduleCodeTypesFilter = newList;
            this.noFilterResults = false;
        }
    }

    onTextbookSearchSubmit(args: EventData){
        const searchBar = args.object as SearchBar;
        searchBar.dismissSoftInput();
        this.TextbookFilterArray = new ObservableArray(0);
        this.myTextbookArray.forEach(element => {
            var name: string;
            name =  element.name;
            if(name.toLowerCase().includes(searchBar.text.toLowerCase())){
                this.TextbookFilterArray.push(element);
            }
           
        });

        //console.log(this.TextbookFilterArray);
        
        
        
        
        

    }


   /* onModuleSearchClear(args){
        const searchBar = args.object as SearchBar;
        console.log(searchBar.text);
    }

    onModuleSearchSubmit(args){
        const searchBar = args.object as SearchBar;
        console.log(searchBar.text);
    }*/

     

    ngOnDestroy(){

    }

    onSelectedIndexQualityTypeChanged(args: EventData){
        const picker = <ListPicker>args.object;
        this.qualityType = this.qualityTypes[picker.selectedIndex];
    }

    onSelectedIndexAcdTypeChanged(args: EventData){
        const picker = <ListPicker>args.object;
        switch (picker.selectedIndex){
            case 0:
                this.acdType = this.accomodationTypes[0];
                break;
            case 1:
                this.acdType = this.accomodationTypes[1];
                break;
            case 2:
                this.acdType = this.accomodationTypes[2];
                break;
            case 3:
                this.acdType = this.accomodationTypes[3];
                break;
        }
    }

    onSelectedIndexInstTypeChanged(args: EventData){
        const picker = <ListPicker>args.object;
        switch (picker.selectedIndex){
            case 0:
                this.instType = this.institutionTypes[0];
                break;
            case 1:
                this.instType = this.institutionTypes[1];
                break;
        }
    }

    onSelectedIndexYearTypeChanged(args: EventData){
        const picker = <ListPicker>args.object;
        switch(picker.selectedIndex){
            case 0:
                this.yearCompletedType = this.yearCompletedTypes[0];
                break;
            case 1:
                this.yearCompletedType = this.yearCompletedTypes[1];
                break;
            case 2:
                this.yearCompletedType = this.yearCompletedTypes[2];
                break;
            case 3:
                this.yearCompletedType = this.yearCompletedTypes[3];
                break;
            case 4:
                this.yearCompletedType = this.yearCompletedTypes[4];
                break;
            case 5:
                this.yearCompletedType = this.yearCompletedTypes[5];
                break;
            case 6:
                this.yearCompletedType = this.yearCompletedTypes[6];
                break;
            case 7:
                this.yearCompletedType = this.yearCompletedTypes[7];
                break;
            
        }
    }

    onSelectedIndexVenueTypeChanged(args: EventData){
        const picker = <ListPicker>args.object;
        switch(picker.selectedIndex){
            case 0:
                this.venueType = this.venueTypes[0];
                break;
            case 1:
                this.venueType = this.venueTypes[1];
                break;
            case 2:
                this.venueType = this.venueTypes[2];
                break;
        }
    }

    onSelectedIndexNoteTypeChanged(args: EventData){
        const picker = <ListPicker>args.object;
        switch(picker.selectedIndex){
            case 0:
                this.noteType = this.noteTypes[0];
                break;
            case 1:
                this.noteType = this.noteTypes[1];
                break;
        }
    }

    onSelectedIndexTermTypeChanged(args: EventData){
        const picker = <ListPicker>args.object;
        switch(picker.selectedIndex){
            case 0:
                this.termType = this.termTypes[0];
                break;
            case 1:
                this.termType = this.termTypes[1];
                break;
            case 2:
                this.termType = this.termTypes[2];
                break;
        }

    }

    onSelectedIndexModuleTypeChanged(args: EventData){
        const picker = <ListPicker>args.object;
        this.moduleCodeType = this.moduleCodeTypes.getItem(picker.selectedIndex);
        console.log(this.moduleCodeType);
    }
    
}