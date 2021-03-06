import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SharedModule } from "../shared/shared.module";
import { AdvertService } from "./advert.service";
import { AdvertHomeComponent } from "./advert-home/advert-home.component";
import { AdvertRoutingModule } from "./advert-routing.module";

@NgModule({
    declarations: [
        AdvertHomeComponent
    ],
    imports: [NativeScriptCommonModule, SharedModule, AdvertRoutingModule],
    providers: [
        AdvertService
    ],
    schemas: [NO_ERRORS_SCHEMA]
})

export class AdvertModule {}