import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { AdvertHomeComponent } from "./advert-home/advert-home.component";
import { AdvertDetailsComponent } from "./advert-details/advert-details.component";

const routes: Routes = [
    { path: 'home', component: AdvertHomeComponent},
    { path: '', redirectTo: '/advert/home', pathMatch:'full'},
    { path: 'details', component: AdvertDetailsComponent, pathMatch:'full'},
]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})

export class AdvertRoutingModule{}