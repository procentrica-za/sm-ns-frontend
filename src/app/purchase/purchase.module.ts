import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SharedModule } from "../shared/shared.module";
import { AdvertTokensComponent } from "./advert-tokens/advert-tokens.component"
import { PurchaseRoutingModule } from "./purchase-routing.module";
@NgModule({
    declarations: [
    AdvertTokensComponent  
    ],
    imports: [NativeScriptCommonModule,
              SharedModule,
              PurchaseRoutingModule
             ],
    providers: [
       
    ],
    schemas: [NO_ERRORS_SCHEMA]
})

export class PurchaseModule {}