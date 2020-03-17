import { Component, OnInit, OnDestroy } from "@angular/core";
import { EventData } from "tns-core-modules/ui/page/page";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
@Component({
    selector: 'ns-advert-listpicker',
    templateUrl: './advert-listpicker.component.html',
    moduleId: module.id
})





export class AdvertListPickerComponent implements OnInit, OnDestroy {

    public accomodationTypes; institutionTypes : Array<string>;
    public paramReceived; acdType; instType : String;
    public AccomodationType; InstitutionType : boolean;
    constructor(private modalParams: ModalDialogParams){
       
        this.accomodationTypes = new Array<string>("Apartement", "Commune", "House", "Garden Cottage");
        this.institutionTypes = new Array<string>("University of Pretoria","University of Johannesburg");
        this.AccomodationType = false;
        this.InstitutionType = false;

    }
    ngOnInit(){
        this.paramReceived = (this.modalParams.context as {string: String}).string
        console.log(this.paramReceived);
        switch (this.paramReceived){
            case "AccomodationType":
                this.AccomodationType = true;
                this.InstitutionType = false;
                break;
            case "InstitutionType":
                this.AccomodationType = false;
                this.InstitutionType = true;
                break;   

       }
    }

    

    onAcdTap(){
        this.modalParams.closeCallback(this.acdType); 
    }
    onInstTap(){
        this.modalParams.closeCallback(this.instType); 
    }

    ngOnDestroy(){

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


    /*onSelectedIndexAdvertTypeChanged(args: EventData){
        const picker = <ListPicker>args.object;
        console.log(picker.selectedIndex);
    }*/
}