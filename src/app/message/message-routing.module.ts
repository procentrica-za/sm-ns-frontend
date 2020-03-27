import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { MessageHomeComponent } from "./message-home/message-home.component";
import { MessageDetailsComponent } from "./message-details/message-details.component";

const routes: Routes = [
    { path: 'home', component: MessageHomeComponent},
    { path: '', redirectTo: '/message/home', pathMatch:'full'},
    { path: 'details', component: MessageDetailsComponent, pathMatch:'full'},
]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})

export class MessageRoutingModule{}