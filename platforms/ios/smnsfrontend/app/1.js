(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[1],{

/***/ "./app/purchase/advert-tokens/advert-tokens.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-action-bar [actionBarTitle]=\"'Shop'\" [hasMenu]=true [showBackButton]=false></ns-action-bar>\n<StackLayout class=\"advertRadList\">\n    <GridLayout class=\"GridLayoutAdvertListStyle\" shadow=\"6\">\n        <ListView [items]=\"myProductArray\" (itemTap)=\"onProductTap($event)\">\n            <ng-template tkListItemTemplate let-inAppProduct=\"item\" >\n                <GridLayout rows=\"auto, auto\" columns=\"*, auto\" padding=\"5\">\n                    <Label row=\"0\" col=\"0\" class=\"h2\" [text]=\"inAppProduct.localizedTitle\"></Label>\n                    <Label row=\"1\" col=\"0\" [text]=\"inAppProduct.localizedDescription\" textWrap=\"true\" color=\"#999999\"></Label>\n                    <Label [text]=\"inAppProduct.priceFormatted\" row=\"0\" rowSpan=\"2\" col=\"1\" class=\"h1\" style=\"margin-left: 5\"></Label>\n                </GridLayout>\n            </ng-template>\n        </ListView>\n    </GridLayout>\n</StackLayout>\n"

/***/ }),

/***/ "./app/purchase/advert-tokens/advert-tokens.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertTokensComponent", function() { return AdvertTokensComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_purchase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-purchase/purchase.js");
/* harmony import */ var nativescript_purchase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_purchase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var application_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var application_settings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(application_settings__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_purchase_transaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-purchase/transaction/transaction.js");
/* harmony import */ var nativescript_purchase_transaction__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_purchase_transaction__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/tns-core-modules/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _puchase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/purchase/puchase.service.ts");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/nativescript-fancyalert/fancyalert.js");
/* harmony import */ var nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_6__);








var viewModel;
var AdvertTokensComponent = /** @class */ (function () {
    function AdvertTokensComponent(purchaseServ) {
        this.purchaseServ = purchaseServ;
    }
    AdvertTokensComponent.prototype.onProductTap = function (args) {
        var product = args.view.bindingContext;
        nativescript_purchase__WEBPACK_IMPORTED_MODULE_1__["buyProduct"](product);
    };
    AdvertTokensComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Initing shop component");
        console.log(nativescript_purchase__WEBPACK_IMPORTED_MODULE_1__["getProducts"]());
        nativescript_purchase__WEBPACK_IMPORTED_MODULE_1__["getProducts"]().then(function (res) {
            console.log("I did get a result from products.");
            console.log(res);
            console.log(res.length);
            res.forEach(function (t) {
                console.log(t);
                console.log(t.localizedDescription);
                console.log(t.priceAmount);
            });
        });
        console.log("????");
        this.myProductArray = new tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_4__["ObservableArray"](0);
        nativescript_purchase__WEBPACK_IMPORTED_MODULE_1__["getProducts"]().then(function (res) {
            res.forEach(function (t) {
                console.log(t);
                _this.product = t;
                _this.myProductArray.push(_this.product);
            });
        }).catch(function (e) { return console.log(e); });
        nativescript_purchase__WEBPACK_IMPORTED_MODULE_1__["on"](nativescript_purchase__WEBPACK_IMPORTED_MODULE_1__["transactionUpdatedEvent"], function (transaction) {
            if (transaction.transactionState === nativescript_purchase_transaction__WEBPACK_IMPORTED_MODULE_3__["TransactionState"].Restored) {
                application_settings__WEBPACK_IMPORTED_MODULE_2__["setBoolean"](transaction.productIdentifier, true); /* 1 */
            }
            if (transaction.transactionState === nativescript_purchase_transaction__WEBPACK_IMPORTED_MODULE_3__["TransactionState"].Purchased) {
                if ((transaction.productIdentifier.indexOf(".product1") >= 0)) { /* 2 */
                    nativescript_purchase__WEBPACK_IMPORTED_MODULE_1__["consumePurchase"](transaction.transactionReceipt) /* 3 */
                        .then(function (responseCode) {
                        if (responseCode === 0) {
                            _this.purchaseServ.PurchaseAdvertisementToken(application_settings__WEBPACK_IMPORTED_MODULE_2__["getString"]("userid"), "1");
                            _this.purchaseAdvertisementResultSub = _this.purchaseServ.currentAdvertisementTokenPurchaseResult.subscribe(function (purchaseAdvertResult) {
                                if (purchaseAdvertResult) {
                                    if (purchaseAdvertResult.responseStatusCode === 200) {
                                        nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_6__["TNSFancyAlert"].showSuccess("Success!", "Advertisement Tokens Successfully Purchased!", "Close").then(function (t) {
                                            _this.purchaseServ.ClearPurchase();
                                        });
                                    }
                                }
                            });
                        }
                    })
                        .catch(function (e) { return console.log(e); });
                }
                if ((transaction.productIdentifier.indexOf(".product3") >= 0)) { /* 2 */
                    nativescript_purchase__WEBPACK_IMPORTED_MODULE_1__["consumePurchase"](transaction.transactionReceipt) /* 3 */
                        .then(function (responseCode) {
                        if (responseCode === 0) {
                            _this.purchaseServ.PurchaseAdvertisementToken(application_settings__WEBPACK_IMPORTED_MODULE_2__["getString"]("userid"), "5");
                            _this.purchaseAdvertisementResultSub = _this.purchaseServ.currentAdvertisementTokenPurchaseResult.subscribe(function (purchaseAdvertResult) {
                                if (purchaseAdvertResult) {
                                    if (purchaseAdvertResult.responseStatusCode === 200) {
                                        nativescript_fancyalert__WEBPACK_IMPORTED_MODULE_6__["TNSFancyAlert"].showSuccess("Success!", "Advertisement Tokens Successfully Purchased!", "Close").then(function (t) {
                                            _this.purchaseServ.ClearPurchase();
                                        });
                                    }
                                }
                            });
                        }
                    })
                        .catch(function (e) { return console.log(e); });
                }
                else {
                    application_settings__WEBPACK_IMPORTED_MODULE_2__["setBoolean"](transaction.productIdentifier, true); /* 4 */
                }
            }
        });
    };
    AdvertTokensComponent.prototype.ngOnDestroy = function () {
        if (this.purchaseAdvertisementResultSub) {
            this.purchaseAdvertisementResultSub.unsubscribe();
        }
        this.purchaseServ.ClearPurchase();
    };
    AdvertTokensComponent.ctorParameters = function () { return [
        { type: _puchase_service__WEBPACK_IMPORTED_MODULE_5__["PurchaseService"] }
    ]; };
    AdvertTokensComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-advert-tokens',
            template: __webpack_require__("./app/purchase/advert-tokens/advert-tokens.component.html")
        }),
        __metadata("design:paramtypes", [_puchase_service__WEBPACK_IMPORTED_MODULE_5__["PurchaseService"]])
    ], AdvertTokensComponent);
    return AdvertTokensComponent;
}());



/***/ }),

/***/ "./app/purchase/puchase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseService", function() { return PurchaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _purhcase_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/purchase/purhcase.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/tns-core-modules/http/http.js");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__);






var PurchaseService = /** @class */ (function () {
    function PurchaseService(http) {
        this.http = http;
        this._currentAdvertisementTokenPurchaseResult = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["setString"])("sm-service-cred-manager-host", "http://192.168.1.55:9952");
    }
    Object.defineProperty(PurchaseService.prototype, "currentAdvertisementTokenPurchaseResult", {
        get: function () {
            return this._currentAdvertisementTokenPurchaseResult.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    PurchaseService.prototype.PurchaseAdvertisementToken = function (id, ammount) {
        var _this = this;
        var reqUrl = Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])("sm-service-cred-manager-host") + "/purchase";
        console.log(reqUrl);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: reqUrl,
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ id: id, ammount: ammount }),
            timeout: 5000
        }).then(function (response) {
            var responseCode = response.statusCode;
            if (responseCode === 500) {
                var PurchaseAdvertTokenErr = new _purhcase_model__WEBPACK_IMPORTED_MODULE_2__["PurchaseAdvertisementResult"](500, false, 'An error has occured whilst trying to connect.');
                _this._currentAdvertisementTokenPurchaseResult.next(PurchaseAdvertTokenErr);
            }
            else if (responseCode === 200) {
                var result = response.content.toJSON();
                var PurchaseAdvertisementResultSuccess = new _purhcase_model__WEBPACK_IMPORTED_MODULE_2__["PurchaseAdvertisementResult"](200, result.success, result.message);
                _this._currentAdvertisementTokenPurchaseResult.next(PurchaseAdvertisementResultSuccess);
            }
            else {
                var PurchaseAdvertisementResultFailure = new _purhcase_model__WEBPACK_IMPORTED_MODULE_2__["PurchaseAdvertisementResult"](responseCode, false, response.content.toString());
                _this._currentAdvertisementTokenPurchaseResult.next(PurchaseAdvertisementResultFailure);
            }
        }, function (e) {
            var PurchaseAdvertisementResultFailure = new _purhcase_model__WEBPACK_IMPORTED_MODULE_2__["PurchaseAdvertisementResult"](400, false, "An Error has been recieved, please contact support.");
            _this._currentAdvertisementTokenPurchaseResult.next(PurchaseAdvertisementResultFailure);
        });
    };
    PurchaseService.prototype.ClearPurchase = function () {
        this._currentAdvertisementTokenPurchaseResult = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    };
    PurchaseService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    PurchaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PurchaseService);
    return PurchaseService;
}());



/***/ }),

/***/ "./app/purchase/purchase-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseRoutingModule", function() { return PurchaseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _advert_tokens_advert_tokens_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/purchase/advert-tokens/advert-tokens.component.ts");



var routes = [
    //{ path: '', redirectTo: '/purchase/tokens', pathMatch:'full'},
    { path: '', component: _advert_tokens_advert_tokens_component__WEBPACK_IMPORTED_MODULE_2__["AdvertTokensComponent"], pathMatch: 'full' }
];
var PurchaseRoutingModule = /** @class */ (function () {
    function PurchaseRoutingModule() {
    }
    PurchaseRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], PurchaseRoutingModule);
    return PurchaseRoutingModule;
}());



/***/ }),

/***/ "./app/purchase/purchase.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseModule", function() { return PurchaseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/shared/shared.module.ts");
/* harmony import */ var _advert_tokens_advert_tokens_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/purchase/advert-tokens/advert-tokens.component.ts");
/* harmony import */ var _purchase_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/purchase/purchase-routing.module.ts");





var PurchaseModule = /** @class */ (function () {
    function PurchaseModule() {
    }
    PurchaseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _advert_tokens_advert_tokens_component__WEBPACK_IMPORTED_MODULE_3__["AdvertTokensComponent"]
            ],
            imports: [nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _purchase_routing_module__WEBPACK_IMPORTED_MODULE_4__["PurchaseRoutingModule"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], PurchaseModule);
    return PurchaseModule;
}());

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            // Currently the context is needed only for application style modules.
            const moduleContext = {};
            global.hmrRefresh(moduleContext);
        });
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/purchase/purhcase.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsToSell", function() { return ProductsToSell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseAdvertisementResult", function() { return PurchaseAdvertisementResult; });
var ProductsToSell = /** @class */ (function () {
    function ProductsToSell(productType, productIdentifier, localizedDescription, localizedTitle, priceAmount, priceFormatted, priceCurrencyCode) {
        this.productType = productType;
        this.productIdentifier = productIdentifier;
        this.localizedDescription = localizedDescription;
        this.localizedTitle = localizedTitle;
        this.priceAmount = priceAmount;
        this.priceFormatted = priceFormatted;
        this.priceCurrencyCode = priceCurrencyCode;
    }
    ProductsToSell.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Number },
        { type: String },
        { type: String }
    ]; };
    return ProductsToSell;
}());

var PurchaseAdvertisementResult = /** @class */ (function () {
    function PurchaseAdvertisementResult(responseStatusCode, Success, Message) {
        this.responseStatusCode = responseStatusCode;
        this.Success = Success;
        this.Message = Message;
    }
    PurchaseAdvertisementResult.ctorParameters = function () { return [
        { type: Number },
        { type: Boolean },
        { type: String }
    ]; };
    return PurchaseAdvertisementResult;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcHVyY2hhc2UvYWR2ZXJ0LXRva2Vucy9hZHZlcnQtdG9rZW5zLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9wdXJjaGFzZS9hZHZlcnQtdG9rZW5zL2FkdmVydC10b2tlbnMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9wdXJjaGFzZS9wdWNoYXNlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3B1cmNoYXNlL3B1cmNoYXNlLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9wdXJjaGFzZS9wdXJjaGFzZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3B1cmNoYXNlL3B1cmhjYXNlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNjhCOzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDakM7QUFDVTtBQUNzQjtBQUlRO0FBRXRDO0FBRWlCO0FBRWI7QUFDeEQsSUFBSSxTQUFxQixDQUFDO0FBUzFCO0lBUUksK0JBQW9CLFlBQTZCO1FBQTdCLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtJQUVqRCxDQUFDO0lBQ0QsNENBQVksR0FBWixVQUFhLElBQXdCO1FBQ2pDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBeUIsQ0FBQztRQUVsRCxnRUFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVqQyxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUFBLGlCQTJGQztRQTFGRyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpRUFBb0IsRUFBRSxDQUFDO1FBRW5DLGlFQUFvQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztZQUM1QixPQUFPLENBQUMs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Q3pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBUTtRQUM1QixtQkFBYyxHQUFkLGNBQWMsQ0FBUztRQUN2QixnQkFBVyxHQUFYLFdBQVcsQ0FBUztRQUNwQixtQkFBYyxHQUFkLGNBQWMsQ0FBUTtRQUN0QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQVM7SUFBRSxDQUFDOzs7Ozs7Ozs7O0lBQ3hDLHFCQUFDO0NBQUE7QUFUMEI7QUFZM0I7SUFDSSxxQ0FDVyxrQkFBMEIsRUFDMUIsT0FBZ0IsRUFDaEIsT0FBZTtRQUZmLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBUTtRQUMxQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFDeEIsQ0FBQzs7Ozs7O0lBQ1Asa0NBQUM7Q0FBQTtBQU51QyIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxucy1hY3Rpb24tYmFyIFthY3Rpb25CYXJUaXRsZV09XFxcIidTaG9wJ1xcXCIgW2hhc01lbnVdPXRydWUgW3Nob3dCYWNrQnV0dG9uXT1mYWxzZT48L25zLWFjdGlvbi1iYXI+XFxuPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJhZHZlcnRSYWRMaXN0XFxcIj5cXG4gICAgPEdyaWRMYXlvdXQgY2xhc3M9XFxcIkdyaWRMYXlvdXRBZHZlcnRMaXN0U3R5bGVcXFwiIHNoYWRvdz1cXFwiNlxcXCI+XFxuICAgICAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cXFwibXlQcm9kdWN0QXJyYXlcXFwiIChpdGVtVGFwKT1cXFwib25Qcm9kdWN0VGFwKCRldmVudClcXFwiPlxcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RJdGVtVGVtcGxhdGUgbGV0LWluQXBwUHJvZHVjdD1cXFwiaXRlbVxcXCIgPlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiBwYWRkaW5nPVxcXCI1XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcImgyXFxcIiBbdGV4dF09XFxcImluQXBwUHJvZHVjdC5sb2NhbGl6ZWRUaXRsZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMFxcXCIgW3RleHRdPVxcXCJpbkFwcFByb2R1Y3QubG9jYWxpemVkRGVzY3JpcHRpb25cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjb2xvcj1cXFwiIzk5OTk5OVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09XFxcImluQXBwUHJvZHVjdC5wcmljZUZvcm1hdHRlZFxcXCIgcm93PVxcXCIwXFxcIiByb3dTcGFuPVxcXCIyXFxcIiBjb2w9XFxcIjFcXFwiIGNsYXNzPVxcXCJoMVxcXCIgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OiA1XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgIDwvTGlzdFZpZXc+XFxuICAgIDwvR3JpZExheW91dD5cXG48L1N0YWNrTGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgRWxlbWVudFJlZiwgVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgcHVyY2hhc2UgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wdXJjaGFzZVwiO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IFRyYW5zYWN0aW9uLCBUcmFuc2FjdGlvblN0YXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wdXJjaGFzZS90cmFuc2FjdGlvblwiO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHVyY2hhc2UvcHJvZHVjdFwiO1xuaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9saXN0LXZpZXdcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuaW1wb3J0IHsgUHVyY2hhc2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3B1Y2hhc2Uuc2VydmljZVwiXG5pbXBvcnQgeyBQcm9kdWN0c1RvU2VsbCwgUHVyY2hhc2VBZHZlcnRpc2VtZW50UmVzdWx0IH0gZnJvbSBcIi4uL3B1cmhjYXNlLm1vZGVsXCJcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgVE5TRmFuY3lBbGVydCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZmFuY3lhbGVydFwiO1xubGV0IHZpZXdNb2RlbDogT2JzZXJ2YWJsZTtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbnMtYWR2ZXJ0LXRva2VucycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FkdmVydC10b2tlbnMuY29tcG9uZW50Lmh0bWwnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5cblxuXG5leHBvcnQgY2xhc3MgQWR2ZXJ0VG9rZW5zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHB1YmxpYyBwcm9kdWN0IDogUHJvZHVjdHNUb1NlbGw7XG5cbiAgICBwdWJsaWMgbXlQcm9kdWN0QXJyYXkgOiBPYnNlcnZhYmxlQXJyYXk8UHJvZHVjdHNUb1NlbGw+O1xuXG4gICAgcHJpdmF0ZSBwdXJjaGFzZUFkdmVydGlzZW1lbnRSZXN1bHRTdWI6IFN1YnNjcmlwdGlvbjtcbiAgICBwdWJsaWMgcHVyY2hhc2VBZHZlcnRpc2VtZW50UmVzdWx0OiBQdXJjaGFzZUFkdmVydGlzZW1lbnRSZXN1bHQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHB1cmNoYXNlU2VydjogUHVyY2hhc2VTZXJ2aWNlKSB7XG5cbiAgICB9XG4gICAgb25Qcm9kdWN0VGFwKGFyZ3MgOiBMaXN0Vmlld0V2ZW50RGF0YSl7XG4gICAgICAgIGxldCBwcm9kdWN0ID0gYXJncy52aWV3LmJpbmRpbmdDb250ZXh0IGFzIFByb2R1Y3Q7XG4gICAgICBcbiAgICAgICAgcHVyY2hhc2UuYnV5UHJvZHVjdChwcm9kdWN0KTtcbiAgICAgICBcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIkluaXRpbmcgc2hvcCBjb21wb25lbnRcIik7XG5cbiAgICAgICAgY29uc29sZS5sb2cocHVyY2hhc2UuZ2V0UHJvZHVjdHMoKSlcblxuICAgICAgICBwdXJjaGFzZS5nZXRQcm9kdWN0cygpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJIGRpZCBnZXQgYSByZXN1bHQgZnJvbSBwcm9kdWN0cy5cIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmxlbmd0aCk7XG4gICAgICAgICAgICByZXMuZm9yRWFjaCggdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codC5sb2NhbGl6ZWREZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codC5wcmljZUFtb3VudClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKFwiPz8/P1wiKVxuICAgICAgICB0aGlzLm15UHJvZHVjdEFycmF5ID0gbmV3IE9ic2VydmFibGVBcnJheSgwKTtcbiAgICAgICAgcHVyY2hhc2UuZ2V0UHJvZHVjdHMoKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHJlcy5mb3JFYWNoKCB0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3QgPSB0OyBcbiAgICAgICAgICAgICAgICB0aGlzLm15UHJvZHVjdEFycmF5LnB1c2godGhpcy5wcm9kdWN0KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XG5cbiAgICAgICAgcHVyY2hhc2Uub24ocHVyY2hhc2UudHJhbnNhY3Rpb25VcGRhdGVkRXZlbnQsICh0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIGlmICh0cmFuc2FjdGlvbi50cmFuc2FjdGlvblN0YXRlID09PSBUcmFuc2FjdGlvblN0YXRlLlJlc3RvcmVkKSB7XG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb25TZXR0aW5ncy5zZXRCb29sZWFuKHRyYW5zYWN0aW9uLnByb2R1Y3RJZGVudGlmaWVyLCB0cnVlKTsgLyogMSAqL1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRyYW5zYWN0aW9uLnRyYW5zYWN0aW9uU3RhdGUgPT09IFRyYW5zYWN0aW9uU3RhdGUuUHVyY2hhc2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCAodHJhbnNhY3Rpb24ucHJvZHVjdElkZW50aWZpZXIuaW5kZXhPZihcIi5wcm9kdWN0MVwiKSA+PSAwKSApIHsgLyogMiAqL1xuICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZS5jb25zdW1lUHVyY2hhc2UodHJhbnNhY3Rpb24udHJhbnNhY3Rpb25SZWNlaXB0KSAvKiAzICovXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2VDb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlQ29kZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlU2Vydi5QdXJjaGFzZUFkdmVydGlzZW1lbnRUb2tlbihhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1c2VyaWRcIiksIFwiMVwiKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VBZHZlcnRpc2VtZW50UmVzdWx0U3ViID0gdGhpcy5wdXJjaGFzZVNlcnYuY3VycmVudEFkdmVydGlzZW1lbnRUb2tlblB1cmNoYXNlUmVzdWx0LnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlQWR2ZXJ0UmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwdXJjaGFzZUFkdmVydFJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwdXJjaGFzZUFkdmVydFJlc3VsdC5yZXNwb25zZVN0YXR1c0NvZGUgPT09IDIwMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUTlNGYW5jeUFsZXJ0LnNob3dTdWNjZXNzKFwiU3VjY2VzcyFcIiwgXCJBZHZlcnRpc2VtZW50IFRva2VucyBTdWNjZXNzZnVsbHkgUHVyY2hhc2VkIVwiLCBcIkNsb3NlXCIpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VTZXJ2LkNsZWFyUHVyY2hhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCAodHJhbnNhY3Rpb24ucHJvZHVjdElkZW50aWZpZXIuaW5kZXhPZihcIi5wcm9kdWN0M1wiKSA+PSAwICkgKSB7IC8qIDIgKi9cbiAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2UuY29uc3VtZVB1cmNoYXNlKHRyYW5zYWN0aW9uLnRyYW5zYWN0aW9uUmVjZWlwdCkgLyogMyAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlQ29kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZUNvZGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZVNlcnYuUHVyY2hhc2VBZHZlcnRpc2VtZW50VG9rZW4oYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidXNlcmlkXCIpLCBcIjVcIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlQWR2ZXJ0aXNlbWVudFJlc3VsdFN1YiA9IHRoaXMucHVyY2hhc2VTZXJ2LmN1cnJlbnRBZHZlcnRpc2VtZW50VG9rZW5QdXJjaGFzZVJlc3VsdC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZUFkdmVydFJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocHVyY2hhc2VBZHZlcnRSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocHVyY2hhc2VBZHZlcnRSZXN1bHQucmVzcG9uc2VTdGF0dXNDb2RlID09PSAyMDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVE5TRmFuY3lBbGVydC5zaG93U3VjY2VzcyhcIlN1Y2Nlc3MhXCIsIFwiQWR2ZXJ0aXNlbWVudCBUb2tlbnMgU3VjY2Vzc2Z1bGx5IFB1cmNoYXNlZCFcIiwgXCJDbG9zZVwiKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlU2Vydi5DbGVhclB1cmNoYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvblNldHRpbmdzLnNldEJvb2xlYW4odHJhbnNhY3Rpb24ucHJvZHVjdElkZW50aWZpZXIsIHRydWUpOyAvKiA0ICovXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICB9KTsgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICBcblxuXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKXtcbiAgICAgICAgaWYgKHRoaXMucHVyY2hhc2VBZHZlcnRpc2VtZW50UmVzdWx0U3ViKXtcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2VBZHZlcnRpc2VtZW50UmVzdWx0U3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wdXJjaGFzZVNlcnYuQ2xlYXJQdXJjaGFzZSgpO1xuICAgIH1cblxufSIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHVyY2hhc2VBZHZlcnRpc2VtZW50UmVzdWx0IH0gZnJvbSBcIi4vcHVyaGNhc2UubW9kZWxcIlxuXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcbmltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5cbmV4cG9ydCBjbGFzcyBQdXJjaGFzZVNlcnZpY2Uge1xuICAgIHByaXZhdGUgX2N1cnJlbnRBZHZlcnRpc2VtZW50VG9rZW5QdXJjaGFzZVJlc3VsdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UHVyY2hhc2VBZHZlcnRpc2VtZW50UmVzdWx0PihudWxsKVxuXG4gICAgZ2V0IGN1cnJlbnRBZHZlcnRpc2VtZW50VG9rZW5QdXJjaGFzZVJlc3VsdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRBZHZlcnRpc2VtZW50VG9rZW5QdXJjaGFzZVJlc3VsdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCl7XG4gICAgICAgIHNldFN0cmluZyhcInNtLXNlcnZpY2UtY3JlZC1tYW5hZ2VyLWhvc3RcIiwgXCJodHRwOi8vMTkyLjE2OC4xLjU1Ojk5NTJcIik7XG4gICAgfVxuXG4gICAgUHVyY2hhc2VBZHZlcnRpc2VtZW50VG9rZW4oaWQ6IHN0cmluZywgYW1tb3VudDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHJlcVVybCA9IGdldFN0cmluZyhcInNtLXNlcnZpY2UtY3JlZC1tYW5hZ2VyLWhvc3RcIikgKyBcIi9wdXJjaGFzZVwiIDtcbiAgICAgICAgY29uc29sZS5sb2cocmVxVXJsKTtcbiAgICAgICAgcmVxdWVzdCAoe1xuICAgICAgICAgICAgdXJsOiByZXFVcmwsXG4gICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh7IGlkOiBpZCwgYW1tb3VudDogYW1tb3VudCB9KSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IDUwMDBcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlQ29kZSA9IHJlc3BvbnNlLnN0YXR1c0NvZGU7XG4gICAgICAgICAgICBpZihyZXNwb25zZUNvZGUgPT09IDUwMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFB1cmNoYXNlQWR2ZXJ0VG9rZW5FcnIgPSBuZXcgUHVyY2hhc2VBZHZlcnRpc2VtZW50UmVzdWx0KDUwMCwgZmFsc2UsICdBbiBlcnJvciBoYXMgb2NjdXJlZCB3aGlsc3QgdHJ5aW5nIHRvIGNvbm5lY3QuJywpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRBZHZlcnRpc2VtZW50VG9rZW5QdXJjaGFzZVJlc3VsdC5uZXh0KFB1cmNoYXNlQWR2ZXJ0VG9rZW5FcnIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZUNvZGUgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgUHVyY2hhc2VBZHZlcnRpc2VtZW50UmVzdWx0U3VjY2VzcyA9IG5ldyBQdXJjaGFzZUFkdmVydGlzZW1lbnRSZXN1bHQoMjAwLCByZXN1bHQuc3VjY2VzcywgcmVzdWx0Lm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRBZHZlcnRpc2VtZW50VG9rZW5QdXJjaGFzZVJlc3VsdC5uZXh0KFB1cmNoYXNlQWR2ZXJ0aXNlbWVudFJlc3VsdFN1Y2Nlc3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBQdXJjaGFzZUFkdmVydGlzZW1lbnRSZXN1bHRGYWlsdXJlID0gbmV3IFB1cmNoYXNlQWR2ZXJ0aXNlbWVudFJlc3VsdChyZXNwb25zZUNvZGUsIGZhbHNlLCByZXNwb25zZS5jb250ZW50LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRBZHZlcnRpc2VtZW50VG9rZW5QdXJjaGFzZVJlc3VsdC5uZXh0KFB1cmNoYXNlQWR2ZXJ0aXNlbWVudFJlc3VsdEZhaWx1cmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgUHVyY2hhc2VBZHZlcnRpc2VtZW50UmVzdWx0RmFpbHVyZSA9IG5ldyBQdXJjaGFzZUFkdmVydGlzZW1lbnRSZXN1bHQoNDAwLCBmYWxzZSwgXCJBbiBFcnJvciBoYXMgYmVlbiByZWNpZXZlZCwgcGxlYXNlIGNvbnRhY3Qgc3VwcG9ydC5cIik7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50QWR2ZXJ0aXNlbWVudFRva2VuUHVyY2hhc2VSZXN1bHQubmV4dChQdXJjaGFzZUFkdmVydGlzZW1lbnRSZXN1bHRGYWlsdXJlKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBDbGVhclB1cmNoYXNlKCl7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRBZHZlcnRpc2VtZW50VG9rZW5QdXJjaGFzZVJlc3VsdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UHVyY2hhc2VBZHZlcnRpc2VtZW50UmVzdWx0PihudWxsKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBBZHZlcnRUb2tlbnNDb21wb25lbnQgfSBmcm9tIFwiLi9hZHZlcnQtdG9rZW5zL2FkdmVydC10b2tlbnMuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgLy97IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL3B1cmNoYXNlL3Rva2VucycsIHBhdGhNYXRjaDonZnVsbCd9LFxuICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBBZHZlcnRUb2tlbnNDb21wb25lbnQsIHBhdGhNYXRjaDonZnVsbCd9IFxuXVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBQdXJjaGFzZVJvdXRpbmdNb2R1bGV7fSAiLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5pbXBvcnQgeyBBZHZlcnRUb2tlbnNDb21wb25lbnQgfSBmcm9tIFwiLi9hZHZlcnQtdG9rZW5zL2FkdmVydC10b2tlbnMuY29tcG9uZW50XCJcbmltcG9ydCB7IFB1cmNoYXNlUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3B1cmNoYXNlLXJvdXRpbmcubW9kdWxlXCI7XG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgIEFkdmVydFRva2Vuc0NvbXBvbmVudCAgXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICAgICAgICBTaGFyZWRNb2R1bGUsXG4gICAgICAgICAgICAgIFB1cmNoYXNlUm91dGluZ01vZHVsZVxuICAgICAgICAgICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBQdXJjaGFzZU1vZHVsZSB7fSIsImV4cG9ydCBjbGFzcyBQcm9kdWN0c1RvU2VsbCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHByb2R1Y3RUeXBlOiBzdHJpbmcsXG4gICAgcHVibGljIHByb2R1Y3RJZGVudGlmaWVyOiBzdHJpbmcsXG4gICAgcHVibGljIGxvY2FsaXplZERlc2NyaXB0aW9uOiBzdHJpbmcsXG4gICAgcHVibGljIGxvY2FsaXplZFRpdGxlIDogc3RyaW5nLFxuICAgIHB1YmxpYyBwcmljZUFtb3VudCA6IG51bWJlcixcbiAgICBwdWJsaWMgcHJpY2VGb3JtYXR0ZWQ6IHN0cmluZyxcbiAgICBwdWJsaWMgcHJpY2VDdXJyZW5jeUNvZGUgOiBzdHJpbmcpe31cbn1cblxuXG5leHBvcnQgY2xhc3MgUHVyY2hhc2VBZHZlcnRpc2VtZW50UmVzdWx0e1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyBTdWNjZXNzOiBib29sZWFuLFxuICAgICAgICBwdWJsaWMgTWVzc2FnZTogc3RyaW5nXG4gICAgKXt9XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==