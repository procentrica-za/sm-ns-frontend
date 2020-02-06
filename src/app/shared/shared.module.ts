import { NgModule } from "@angular/core";
import { ActionBarComponent } from "./ui/actionbar/action-bar.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";

@NgModule({
    imports: [NativeScriptCommonModule, NativeScriptRouterModule],
    declarations: [ActionBarComponent],
    exports: [ActionBarComponent]
})

export class SharedModule{}
