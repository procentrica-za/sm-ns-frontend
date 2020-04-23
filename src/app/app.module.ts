import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth/login/auth.component";


import { AuthService } from "./auth/auth.service";
import { AdvertService } from "./advert/advert.service";


import { SharedModule } from "./shared/shared.module";
import { RegisterComponent } from "./auth/register/register.component";
import { ForgotpasswordComponent } from "./auth/forgotpassword/forgotpassword.component";
import { UpdateuserComponent } from "./auth/updateuser/updateuser.component";
import { NewpasswordComponent } from "./auth/newpassword/newpassword.component";
//Messaging components
import { MessagingHomeComponent } from "./advert/messaging-home/messaging-home.component";
import { MessagingDetailsComponent } from "./advert/messaging-details/messaging-details.component";

//rating imports
import { RatingHomeComponent } from "./advert/rating-home /rating-home.component";
import { RatesellerComponent } from "./advert/rateseller/rateseller.component";
import { BuyerratingsComponent } from "./advert/buyerratings/buyerratings.component";
import { SellerratingsComponent } from "./advert/sellerratings/sellerratings.component";
import { RatebuyerHomeComponent } from "./advert/ratebuyer-home/ratebuyer-home.component";
import { RatebuyerComponent } from "./advert/ratebuyer/ratebuyer.component";
import { RatingComponent } from "./advert/rating/rating.component";

import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular"
import { InstitutionListPickerComponent } from "././auth/institution-listpicker/institution-listpicker.component"
import { OtpComponent } from "./auth/otp/otp.component";
import { ValidateComponent } from "./auth/validate/validate.component";
import { BarcodeScanner } from 'nativescript-barcodescanner';
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
        AuthService,
        AdvertService,
        BarcodeScanner
    ],
    declarations: [
        AppComponent, 
        AuthComponent,
        RegisterComponent,
        RegisterComponent,
        ForgotpasswordComponent,
        UpdateuserComponent,
        NewpasswordComponent,
        MessagingHomeComponent,
        MessagingDetailsComponent,
        RatingHomeComponent,
        RatesellerComponent,
        BuyerratingsComponent,
        SellerratingsComponent,
        RatebuyerHomeComponent,
        RatebuyerComponent,
        InstitutionListPickerComponent,
        RatingComponent,
        OtpComponent,
        ValidateComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [InstitutionListPickerComponent, OtpComponent, ValidateComponent]
})
export class AppModule { }
