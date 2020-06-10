import { Component, OnInit, OnDestroy, ElementRef, ViewChild} from "@angular/core";
import * as purchase from "nativescript-purchase";
import * as applicationSettings from "application-settings";
import { Transaction, TransactionState } from "nativescript-purchase/transaction";
import { Product } from "nativescript-purchase/product";
import { ItemEventData } from "ui/list-view";
import {Observable } from "tns-core-modules/data/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { ListViewEventData } from "nativescript-ui-listview";
import { PurchaseService } from "../puchase.service"
import { ProductsToSell, PurchaseAdvertisementResult } from "../purhcase.model"
import * as appSettings from "tns-core-modules/application-settings";
import { Subscription } from "rxjs";
import { TNSFancyAlert } from "nativescript-fancyalert";
let viewModel: Observable;
@Component({
    selector: 'ns-advert-tokens',
    templateUrl: './advert-tokens.component.html',
    moduleId: module.id
})



export class AdvertTokensComponent implements OnInit, OnDestroy {
    public product : ProductsToSell;

    public myProductArray : ObservableArray<ProductsToSell>;

    private purchaseAdvertisementResultSub: Subscription;
    public purchaseAdvertisementResult: PurchaseAdvertisementResult;

    constructor(private purchaseServ: PurchaseService) {

    }
    onProductTap(args : ListViewEventData){
        let product = args.view.bindingContext as Product;
      
        purchase.buyProduct(product);
       
    }

    ngOnInit(){
        console.log("Initing shop component");

        console.log(purchase.getProducts())

        purchase.getProducts().then((res) => {
            console.log("I did get a result from products.");
            console.log(res);
            console.log(res.length);
            res.forEach( t => {
                console.log(t);
                console.log(t.localizedDescription);
                console.log(t.priceAmount)
            })
        })
        console.log("????")
        this.myProductArray = new ObservableArray(0);
        purchase.getProducts().then((res) => {
            res.forEach( t => {
                console.log(t);
                this.product = t; 
                this.myProductArray.push(this.product);
            })
        }).catch((e) => console.log(e));

        purchase.on(purchase.transactionUpdatedEvent, (transaction: Transaction) => {
            if (transaction.transactionState === TransactionState.Restored) {
                applicationSettings.setBoolean(transaction.productIdentifier, true); /* 1 */
            }
            if (transaction.transactionState === TransactionState.Purchased) {
                if ( (transaction.productIdentifier.indexOf(".product1") >= 0) ) { /* 2 */
                    purchase.consumePurchase(transaction.transactionReceipt) /* 3 */
                        .then((responseCode) => {
                            if (responseCode === 0) {
                                this.purchaseServ.PurchaseAdvertisementToken(appSettings.getString("userid"), "1")

                                this.purchaseAdvertisementResultSub = this.purchaseServ.currentAdvertisementTokenPurchaseResult.subscribe(
                                    purchaseAdvertResult => {
                                        if(purchaseAdvertResult) {
                                            if(purchaseAdvertResult.responseStatusCode === 200){
                                                TNSFancyAlert.showSuccess("Success!", "Advertisement Tokens Successfully Purchased!", "Close").then(
                                                    t => {
                                                        this.purchaseServ.ClearPurchase();
                                                    }
                                                )
                                            }
                                        }
                                    }
                                    
                                );
                            }
                        })
                        .catch((e) => console.log(e));
                }

                if ( (transaction.productIdentifier.indexOf(".product3") >= 0 ) ) { /* 2 */
                    purchase.consumePurchase(transaction.transactionReceipt) /* 3 */
                        .then((responseCode) => {
                            if (responseCode === 0) {
                                this.purchaseServ.PurchaseAdvertisementToken(appSettings.getString("userid"), "5")

                                this.purchaseAdvertisementResultSub = this.purchaseServ.currentAdvertisementTokenPurchaseResult.subscribe(
                                    purchaseAdvertResult => {
                                        if(purchaseAdvertResult) {
                                            if(purchaseAdvertResult.responseStatusCode === 200){
                                                TNSFancyAlert.showSuccess("Success!", "Advertisement Tokens Successfully Purchased!", "Close").then(
                                                    t => {
                                                        this.purchaseServ.ClearPurchase();
                                                    }
                                                )
                                            }
                                        }
                                    }
                                    
                                );
                            }
                        })
                        .catch((e) => console.log(e));
                }

                
                else {
                    applicationSettings.setBoolean(transaction.productIdentifier, true); /* 4 */
                }
            
            }    
        });    
                
         


    }

    ngOnDestroy(){
        if (this.purchaseAdvertisementResultSub){
            this.purchaseAdvertisementResultSub.unsubscribe();
        }
        this.purchaseServ.ClearPurchase();
    }

}