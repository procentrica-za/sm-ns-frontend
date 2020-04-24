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
    public moduleSearch; textbookSearch; countrySearch: string;
    public textbookListSub; moduleCodeSub : Subscription;
    public textbookList : TextbookList;
    public myTextbookArray; TextbookFilterArray : ObservableArray<Textbook>;
    public moduleCodeList : ModuleCodeList;
    public moduleCodeTypes; moduleCodeTypesFilter; countryTypes; countryTypesFilter : ObservableArray<string>;
    public  moduleCodeType : string;
    public accomodationTypes; institutionTypes; yearCompletedTypes; venueTypes; noteTypes; termTypes; qualityTypes : Array<string>;
    public paramReceived; acdType; instType; yearCompletedType; venueType; noteType; termType; qualityType; countryType : String;
    public AccomodationType; InstitutionType; YearCompletedType; VenueType; NoteType; TermType; ModuleCodeType; TextbookType; QualityType; CountryType; noFilterResults; alltextbooksLoaded : boolean;
    constructor(private modalParams: ModalDialogParams, private advertServ: AdvertService){
       
        this.accomodationTypes = new Array<string>("Apartment", "Commune", "House", "Garden Cottage");
        this.institutionTypes = new Array<string>("University of Pretoria","University of Johannesburg");
        this.yearCompletedTypes = new Array<string>("2012","2013","2014","2015","2016","2017","2018","2019");
        this.venueTypes = new Array<string>("On Campus","At my Home","Other - Contact for more details");
        this.noteTypes = new Array<string>("Yes","No");
        this.termTypes = new Array<string>("Pay per Lesson","Pay for Package Lessons","Other - Contact for more details");
        this.qualityTypes = new Array<string>("New","Like New","Good", "Average", "Falling to pieces");
        this.countryTypes = new Array<string>("BD(880)", "BE(32)", "BF(226)", "BG(359)", "BA(387)", "BB(1246)", "WF(681)", "BL(590)", "BM(1441)", "BN(673)", "BO(591)", "BH(973)", "BI(257)", "BJ(229)", "BT(975)", "JM(1876)", "BV()", "BW(267)", "WS(685)", "BQ(599)", "BR(55)", "BS(1242)", "JE(441534)", "BY(375)", "BZ(501)", "RU(7)", "RW(250)", "RS(381)", "TL(670)", "RE(262)", "TM(993)", "TJ(992)", "RO(40)", "TK(690)", "GW(245)", "GU(1671)", "GT(502)", "GS()", "GR(30)", "GQ(240)", "GP(590)", "JP(81)", "GY(592)", "GG(441481)", "GF(594)", "GE(995)", "GD(1473)", "GB(44)", "GA(241)", "SV(503)", "GN(224)", "GM(220)", "GL(299)", "GI(350)", "GH(233)", "OM(968)", "TN(216)", "JO(962)", "HR(385)", "HT(509)", "HU(36)", "HK(852)", "HN(504)", "HM( )", "VE(58)", "PR(1787 and 1939)", "PS(970)", "PW(680)", "PT(351)", "SJ(47)", "PY(595)", "IQ(964)", "PA(507)", "PF(689)", "PG(675)", "PE(51)", "PK(92)", "PH(63)", "PN(870)", "PL(48)", "PM(508)", "ZM(260)", "EH(212)", "EE(372)", "EG(20)", "ZA(27)", "EC(593)", "IT(39)", "VN(84)", "SB(677)", "ET(251)", "SO(252)", "ZW(263)", "SA(966)", "ES(34)", "ER(291)", "ME(382)", "MD(373)", "MG(261)", "MF(590)", "MA(212)", "MC(377)", "UZ(998)", "MM(95)", "ML(223)", "MO(853)", "MN(976)", "MH(692)", "MK(389)", "MU(230)", "MT(356)", "MW(265)", "MV(960)", "MQ(596)", "MP(1670)", "MS(1664)", "MR(222)", "IM(441624)", "UG(256)", "TZ(255)", "MY(60)", "MX(52)", "IL(972)", "FR(33)", "IO(246)", "SH(290)", "FI(358)", "FJ(679)", "FK(500)", "FM(691)", "FO(298)", "NI(505)", "NL(31)", "NO(47)", "NA(264)", "VU(678)", "NC(687)", "NE(227)", "NF(672)", "NG(234)", "NZ(64)", "NP(977)", "NR(674)", "NU(683)", "CK(682)", "XK()", "CI(225)", "CH(41)", "CO(57)", "CN(86)", "CM(237)", "CL(56)", "CC(61)", "CA(1)", "CG(242)", "CF(236)", "CD(243)", "CZ(420)", "CY(357)", "CX(61)", "CR(506)", "CW(599)", "CV(238)", "CU(53)", "SZ(268)", "SY(963)", "SX(599)", "KG(996)", "KE(254)", "SS(211)", "SR(597)", "KI(686)", "KH(855)", "KN(1869)", "KM(269)", "ST(239)", "SK(421)", "KR(82)", "SI(386)", "KP(850)", "KW(965)", "SN(221)", "SM(378)", "SL(232)", "SC(248)", "KZ(7)", "KY(1345)", "SG(65)", "SE(46)", "SD(249)", "DO(1809 and 1829)", "DM(1767)", "DJ(253)", "DK(45)", "VG(1284)", "DE(49)", "YE(967)", "DZ(213)", "US(1)", "UY(598)", "YT(262)", "UM(1)", "LB(961)", "LC(1758)", "LA(856)", "TV(688)", "TW(886)", "TT(1868)", "TR(90)", "LK(94)", "LI(423)", "LV(371)", "TO(676)", "LT(370)", "LU(352)", "LR(231)", "LS(266)", "TH(66)", "TF()", "TG(228)", "TD(235)", "TC(1649)", "LY(218)", "VA(379)", "VC(1784)", "AE(971)", "AD(376)", "AG(1268)", "AF(93)", "AI(1264)", "VI(1340)", "IS(354)", "IR(98)", "AM(374)", "AL(355)", "AO(244)", "AQ()", "AS(1684)", "AR(54)", "AU(61)", "AT(43)", "AW(297)", "IN(91)", "AX(35818)", "AZ(994)", "IE(353)", "ID(62)", "UA(380)", "QA(974)", "MZ(258)");
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
        this.CountryType = false;
        this.noFilterResults = false;
        this.alltextbooksLoaded  = false;

    }

    

    ngOnInit(){
        this.paramReceived = (this.modalParams.context as {string: String}).string
        console.log(this.paramReceived);
        switch (this.paramReceived){
            case "QualityType":
                this.QualityType = true;
                break;
            case "CountryType":
                this.CountryType = true;
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
                this.alltextbooksLoaded  = true;
                this.advertServ.initializeAddTextbookList();
                this.textbookListSub= this.advertServ.currentAddTextbookList.subscribe(
                    textbookResult => {
                        if(textbookResult) {
                            if(textbookResult.responseCode === 200){
                                this.myTextbookArray = new ObservableArray(0);
                                textbookResult.Textbooks.forEach( t => {
                                    this.myTextbookArray.push(t);
                                });
                                this.TextbookFilterArray = new ObservableArray(0);
                                this.TextbookFilterArray = this.myTextbookArray;
                                this.alltextbooksLoaded = true;
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
        console.log(args.view.bindingContext);
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
    onCountryTap(){
        this.modalParams.closeCallback(this.countryType);
    }

   
    onModuleSearchChanged(args: EventData){
        const searchBar = args.object as SearchBar;
        var newList = this.moduleCodeTypes.filter(function(value, index, array){
            var code = value.toLowerCase();
            if(code.indexOf(searchBar.text.toLowerCase()) > 1){
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

    onCountrySearchChanged(args: EventData){
        const searchBar = args.object as SearchBar;
        var newList = this.countryTypes.filter(function(value, index, array){
            var code = value.toLowerCase();
            if(code.indexOf(searchBar.text.toLowerCase()) > 1){
                return value;
            } else {
                return null;
            }
        });

        if(newList[0] == null){
            this.noFilterResults = true;
            this.countryTypesFilter = null;
        }else{
            this.countryTypesFilter = newList;
            this.noFilterResults = false;
        }
    }

    onTextbookSearchSubmit(args: EventData){
        this.alltextbooksLoaded  = false;
        const searchBar = args.object as SearchBar;
        searchBar.dismissSoftInput();
        this.TextbookFilterArray = new ObservableArray(0);
        this.myTextbookArray.forEach(element => {
            var name: string;
            name =  element.name;
            if(name == ""){
                this.TextbookFilterArray = this.myTextbookArray;
                return;
            }
            if(name.toLowerCase().includes(searchBar.text.toLowerCase())){
                this.TextbookFilterArray.push(element);
            }
           
        });
        this.alltextbooksLoaded = true;
        //console.log(this.TextbookFilterArray);
    }

    onTextbookClear(args: EventData){
        const searchBar = args.object as SearchBar;
        searchBar.dismissSoftInput();
        this.TextbookFilterArray = this.myTextbookArray;
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
    onSelectedIndexCountryTypeChanged(args: EventData){
        const picker = <ListPicker>args.object;
        this.countryType = this.countryTypes[picker.selectedIndex];
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