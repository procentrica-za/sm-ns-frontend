import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AuthComponent } from "./auth/login/auth.component";

const routes: Routes = [
    { path: '', component: AuthComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
