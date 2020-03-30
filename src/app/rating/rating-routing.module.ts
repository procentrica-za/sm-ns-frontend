import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { RatingHomeComponent } from "./rating-home/rating-home.component";
import { RatingBuyerratingComponent } from "./rating-buyerrating/rating-buyerrating.component";
import { RatingSellerratingComponent } from "./rating-sellerrating/rating-sellerrating.component";

const routes: Routes = [
    { path: 'home', component: RatingHomeComponent},
    { path: '', redirectTo: '/rating/home', pathMatch:'full'},
    { path: 'buyerrating', component: RatingBuyerratingComponent, pathMatch:'full'},
    { path: 'sellerrating', component: RatingSellerratingComponent, pathMatch:'full'},

]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})

export class RatingRoutingModule{} 