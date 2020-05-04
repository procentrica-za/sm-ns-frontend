import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { AdvertTokensComponent } from "./advert-tokens/advert-tokens.component";

const routes: Routes = [
   //{ path: '', redirectTo: '/purchase/tokens', pathMatch:'full'},
   { path: '', component: AdvertTokensComponent, pathMatch:'full'} 
]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})

export class PurchaseRoutingModule{} 