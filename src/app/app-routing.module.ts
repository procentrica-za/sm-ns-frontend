import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AuthComponent } from "./auth/login/auth.component";
import { RegisterComponent } from "./auth/register/register.component";
import { ForgotpasswordComponent } from "./auth/forgotpassword/forgotpassword.component";
import { UpdateuserComponent } from "./auth/updateuser/updateuser.component";

const routes: Routes = [
    { path: '', component: AuthComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'forgotpassword', component: ForgotpasswordComponent},
    { path: 'updateuser', component: UpdateuserComponent },
    {
        path: 'advert',
        loadChildren: '~/app/advert/advert.module#AdvertModule'
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
