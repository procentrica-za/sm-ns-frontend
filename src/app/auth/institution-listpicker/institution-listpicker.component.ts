import { Component, OnInit, OnDestroy } from "@angular/core";
import { EventData } from "tns-core-modules/ui/page/page";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Subscription } from "rxjs";
import { InstitutionNameList } from "../auth.model";
import { AuthService } from "../auth.service";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { TNSFancyAlert } from "nativescript-fancyalert";
import { ListViewEventData } from "nativescript-ui-listview";
import { ImagePickerMediaType } from "nativescript-imagepicker";
import { SearchBar } from "tns-core-modules/ui/search-bar"
@Component({
    selector: 'ns-institution-listpicker',
    templateUrl: './institution-listpicker.component.html',
    moduleId: module.id
})

export class InstitutionListPickerComponent implements OnInit, OnDestroy {
    public moduleSearch; textbookSearch: string;
    public textbookListSub; institutionNameSub : Subscription;
    public institutionNameList : InstitutionNameList;
    public institutionNameTypes; institutionNameTypesFilter : ObservableArray<string>;
    public  institutionNameType : string;
    public institutionTypes; yearCompletedTypes; venueTypes; noteTypes; termTypes; qualityTypes : Array<string>;
    public paramReceived; acdType; instType; yearCompletedType; venueType; noteType; termType; qualityType : String;
    public AccomodationType; InstitutionType; YearCompletedType; VenueType; NoteType; TermType; InstitutionNameType; TextbookType; QualityType; noFilterResults; alltextbooksLoaded : boolean;
    constructor(private modalParams: ModalDialogParams, private authServ: AuthService){
       
        //this.institutionTypes = new Array<string>("University of Pretoria","University of Johannesburg");
   
        this.InstitutionNameType = false;

    }

    

    ngOnInit(){
                this.authServ.initializeInstitutionNameList();
                this.institutionNameSub = this.authServ.currentInstitutionNameList.subscribe(
                    modulecodeListResult => {
                        if (modulecodeListResult){
                            if(modulecodeListResult.responseStatusCode === 200){
                                this.institutionNameTypes = new ObservableArray(0);
                                modulecodeListResult.InstitutionNames.forEach( t => {
                                    this.institutionNameTypes.push(t.institutionname);
                                });
                                this.institutionNameTypesFilter = new ObservableArray(0);
                                this.institutionNameTypesFilter = this.institutionNameTypes;
                                this.InstitutionNameType = true;
                            }else {
                                TNSFancyAlert.showError("Data Retrieval", "Unable to retrieve data.");
                            }
                        }
                    }
                );

            }
        

    

   
    onInstitutionTap(){
        this.modalParams.closeCallback(this.institutionNameType);    
    }
    

   
    onInstitutionSearchChanged(args: EventData){
        const searchBar = args.object as SearchBar;
        var newList = this.institutionNameTypes.filter(function(value, index, array){
            var code = value.toLowerCase();
            if(code.indexOf(searchBar.text.toLowerCase()) > -1){
                return value;
            } else {
                return null;
            }
        });

        if(newList[0] == null){
            this.noFilterResults = true;
            this.institutionNameTypesFilter = null;
        }else{
            this.institutionNameTypesFilter = newList;
            this.noFilterResults = false;
        }
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



    onSelectedIndexInstitutionTypeChanged(args: EventData){
        const picker = <ListPicker>args.object;
        this.institutionNameType = this.institutionNameTypes.getItem(picker.selectedIndex);
        console.log(this.institutionNameType);
    }
    
}