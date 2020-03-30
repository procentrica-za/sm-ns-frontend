import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SharedModule } from "../shared/shared.module";
import { RatingService } from "./rating.service";
import { RatingHomeComponent } from "./rating-home/rating-home.component";
import { RatingBuyerratingComponent } from "./rating-buyerrating/rating-buyerrating.component";
import { RatingSellerratingComponent } from "./rating-sellerrating/rating-sellerrating.component";
import { RatingRoutingModule } from "./rating-routing.module";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular"
import { NgShadowModule} from "nativescript-ng-shadow";
import { DropDownModule } from "nativescript-drop-down/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
    declarations: [
        RatingHomeComponent,
        RatingBuyerratingComponent,
        RatingSellerratingComponent
    ],
    imports: [NativeScriptCommonModule,
              SharedModule,
              RatingRoutingModule,
              NativeScriptUIListViewModule,
              NgShadowModule,
              DropDownModule,
              NativeScriptFormsModule,
              ReactiveFormsModule],
    providers: [
        RatingService
    ],
    schemas: [NO_ERRORS_SCHEMA]
})

export class RatingModule {}