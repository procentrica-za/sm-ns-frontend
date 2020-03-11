import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { AdvertHomeComponent } from "./advert-home/advert-home.component";
import { AdvertDetailsComponent } from "./advert-details/advert-details.component";
import { MyAdvertComponent } from "./my-adverts/my-advert.component";
import { AddAdvertComponent } from "./add-advert/add-advert.component"
const routes: Routes = [
    { path: 'home', component: AdvertHomeComponent},
    { path: '', redirectTo: '/advert/home', pathMatch:'full'},
    { path: 'details', component: AdvertDetailsComponent, pathMatch:'full'},
    { path: 'myadverts', component: MyAdvertComponent, pathMatch:'full'},
    { path: 'addadvert', component: AddAdvertComponent, pathMatch:'full'}
]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})

export class AdvertRoutingModule{}