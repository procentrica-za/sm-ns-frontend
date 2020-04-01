import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AuthComponent } from "./auth/login/auth.component";
import { RegisterComponent } from "./auth/register/register.component";
import { ForgotpasswordComponent } from "./auth/forgotpassword/forgotpassword.component";
import { UpdateuserComponent } from "./auth/updateuser/updateuser.component";
import { NewpasswordComponent } from "./auth/newpassword/newpassword.component";
//messaging imports 
import { MessagingHomeComponent } from "./advert/messaging-home/messaging-home.component";
import { MessagingDetailsComponent } from "./advert/messaging-details/messaging-details.component";
//rating imports
import { RatingHomeComponent } from "./advert/rating-home /rating-home.component";
import { RatesellerComponent } from "./advert/rateseller/rateseller.component";

import { BuyerratingsComponent } from "./advert/buyerratings/buyerratings.component";
import { SellerratingsComponent } from "./advert/sellerratings/sellerratings.component";

import { RatebuyerHomeComponent } from "./advert/ratebuyer-home/ratebuyer-home.component";
import { RatebuyerComponent } from "./advert/ratebuyer/ratebuyer.component";



const routes: Routes = [
    { path: '', component: AuthComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'forgotpassword', component: ForgotpasswordComponent},
    { path: 'newpassword', component: NewpasswordComponent},
    { path: 'updateuser', component: UpdateuserComponent },
    {
        path: 'advert',
        loadChildren: '~/app/advert/advert.module#AdvertModule'
    },
    { path: 'messaginghome', component: MessagingHomeComponent },
    { path: 'messagingdetails', component: MessagingDetailsComponent },
    { path: 'ratinghome', component: RatingHomeComponent },
    { path: 'rateseller', component: RatesellerComponent },
    { path: 'buyerrating', component: BuyerratingsComponent },
    { path: 'sellerrating', component: SellerratingsComponent },
    { path: 'sellerrating', component: SellerratingsComponent },
    { path: 'ratebuyerhome', component: RatebuyerHomeComponent },
    { path: 'ratebuyer', component: RatebuyerComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
