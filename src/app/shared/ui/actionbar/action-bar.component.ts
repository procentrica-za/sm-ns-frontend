import { Component, Input } from '@angular/core';
import { isAndroid } from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from 'nativescript-angular/router';
import { UIService } from '../ui.service';

declare var android: any;

@Component({
    selector: 'ns-action-bar',
    templateUrl: './action-bar.component.html',
    styleUrls: ['./action-bar.component.css'],
    moduleId: module.id
})

export class ActionBarComponent {
    @Input() actionBarTitle: string;
    @Input() showBackButton = true;
    @Input() hasMenu = true;

    constructor(private page: Page, private router: RouterExtensions, private uiService: UIService) {

    }

    get android(){
        return isAndroid;
    }

    get canGoBack() {
        return this.router.canGoBack() && this.showBackButton;
    }

    onGoBack() {
        this.router.backToPreviousPage();
    }

    onLoadedActionBar() {
        if(isAndroid){
            const androidToolbar = this.page.actionBar.nativeView;
            const backButton = androidToolbar.getNavigationIcon();
            let color = '#171717';
            if (this.hasMenu){
                color = '#ffffff';
            }
            if (backButton){
                backButton.setColorFilter(
                    android.graphics.Color.parseColor(color),
                (<any>android.graphics).PorterDuff.Mode.SRC_ATOP
                );
            }
        }
    }

    OnToggleMenu(){
        this.uiService.toggleDrawer();
    }
}
