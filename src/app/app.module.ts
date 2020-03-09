import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth/login/auth.component";


import { AuthService } from "./auth/auth.service";


import { SharedModule } from "./shared/shared.module";
import { RegisterComponent } from "./auth/register/register.component";
import { ForgotpasswordComponent } from "./auth/forgotpassword/forgotpassword.component";
import { UpdateuserComponent } from "./auth/updateuser/updateuser.component";
import { NewpasswordComponent } from "./auth/newpassword/newpassword.component";

import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular"
@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        SharedModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule
    ],
    providers: [
        AuthService
    ],
    declarations: [
        AppComponent, 
        AuthComponent,
        RegisterComponent,
        RegisterComponent,
        ForgotpasswordComponent,
        UpdateuserComponent,
        NewpasswordComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
