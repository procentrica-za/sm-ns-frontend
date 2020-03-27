import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SharedModule } from "../shared/shared.module";
import { MessageService } from "./message.service";
import { MessageHomeComponent } from "./message-home/message-home.component";
import { MessageRoutingModule } from "./message-routing.module";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular"
import { NgShadowModule} from "nativescript-ng-shadow";
import { MessageDetailsComponent } from "./message-details/message-details.component";
import { DropDownModule } from "nativescript-drop-down/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        MessageHomeComponent,
        MessageDetailsComponent,
    ],
    imports: [NativeScriptCommonModule,
              SharedModule,
              MessageRoutingModule,
              NativeScriptUIListViewModule,
              NgShadowModule,
              DropDownModule,
              NativeScriptFormsModule,
              ReactiveFormsModule],
    providers: [
        MessageService
    ], 
    schemas: [NO_ERRORS_SCHEMA]
})

export class MessageModule {}