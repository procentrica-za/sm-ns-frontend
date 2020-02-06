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
        SharedModule
    ],
    providers: [
        AuthService
    ],
    declarations: [
        AppComponent, 
        AuthComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
