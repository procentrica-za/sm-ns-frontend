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
    { path: 'messagingdetails', component: MessagingDetailsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
