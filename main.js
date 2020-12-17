(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show/show.component */ "./src/app/show/show.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _showall_showall_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showall/showall.component */ "./src/app/showall/showall.component.ts");






const routes = [
    { path: 'show/:id', component: _show_show_component__WEBPACK_IMPORTED_MODULE_0__["ShowComponent"] },
    { path: 'showall', component: _showall_showall_component__WEBPACK_IMPORTED_MODULE_3__["ShowallComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "container"], ["routerLink", "/showall", 1, "btn", "btn-primary"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Movie Database");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Show All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%]{\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\t\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixtQkFBbUI7O0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show/show.component */ "./src/app/show/show.component.ts");
/* harmony import */ var _showall_showall_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./showall/showall.component */ "./src/app/showall/showall.component.ts");
/* harmony import */ var _newshowui_newshowui_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./newshowui/newshowui.component */ "./src/app/newshowui/newshowui.component.ts");
/* harmony import */ var _loadignspinner_loadignspinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loadignspinner/loadignspinner.component */ "./src/app/loadignspinner/loadignspinner.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _show_show_component__WEBPACK_IMPORTED_MODULE_5__["ShowComponent"],
        _showall_showall_component__WEBPACK_IMPORTED_MODULE_6__["ShowallComponent"],
        _newshowui_newshowui_component__WEBPACK_IMPORTED_MODULE_7__["NewshowuiComponent"],
        _loadignspinner_loadignspinner_component__WEBPACK_IMPORTED_MODULE_8__["LoadignspinnerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _show_show_component__WEBPACK_IMPORTED_MODULE_5__["ShowComponent"],
                    _showall_showall_component__WEBPACK_IMPORTED_MODULE_6__["ShowallComponent"],
                    _newshowui_newshowui_component__WEBPACK_IMPORTED_MODULE_7__["NewshowuiComponent"],
                    _loadignspinner_loadignspinner_component__WEBPACK_IMPORTED_MODULE_8__["LoadignspinnerComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/loadignspinner/loadignspinner.component.ts":
/*!************************************************************!*\
  !*** ./src/app/loadignspinner/loadignspinner.component.ts ***!
  \************************************************************/
/*! exports provided: LoadignspinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadignspinnerComponent", function() { return LoadignspinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoadignspinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadignspinnerComponent.ɵfac = function LoadignspinnerComponent_Factory(t) { return new (t || LoadignspinnerComponent)(); };
LoadignspinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadignspinnerComponent, selectors: [["loadignspinner"]], decls: 6, vars: 0, consts: [[1, "spinner"], [1, "rect1"], [1, "rect2"], [1, "rect3"], [1, "rect4"], [1, "rect5"]], template: function LoadignspinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".spinner[_ngcontent-%COMP%] {\r\n    margin: 100px auto;\r\n    width: 50px;\r\n    height: 40px;\r\n    text-align: center;\r\n    font-size: 10px;\r\n  }\r\n  \r\n  .spinner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    background-color: #333;\r\n    height: 100%;\r\n    width: 6px;\r\n    display: inline-block;\r\n    animation: sk-stretchdelay 1.2s infinite ease-in-out;\r\n  }\r\n  \r\n  .spinner[_ngcontent-%COMP%]   .rect2[_ngcontent-%COMP%] {\r\n    animation-delay: -1.1s;\r\n  }\r\n  \r\n  .spinner[_ngcontent-%COMP%]   .rect3[_ngcontent-%COMP%] {\r\n    animation-delay: -1.0s;\r\n  }\r\n  \r\n  .spinner[_ngcontent-%COMP%]   .rect4[_ngcontent-%COMP%] {\r\n    animation-delay: -0.9s;\r\n  }\r\n  \r\n  .spinner[_ngcontent-%COMP%]   .rect5[_ngcontent-%COMP%] {\r\n    animation-delay: -0.8s;\r\n  }\r\n  \r\n  @keyframes sk-stretchdelay {\r\n    0%, 40%, 100% { \r\n      transform: scaleY(0.4);\r\n      -webkit-transform: scaleY(0.4);\r\n    }  20% { \r\n      transform: scaleY(1.0);\r\n      -webkit-transform: scaleY(1.0);\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGlnbnNwaW5uZXIvbG9hZGlnbnNwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0lBQ1YscUJBQXFCO0lBR3JCLG9EQUFvRDtFQUN0RDs7RUFFQTtJQUVFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUVFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUVFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUVFLHNCQUFzQjtFQUN4Qjs7RUFPQTtJQUNFO01BQ0Usc0JBQXNCO01BQ3RCLDhCQUE4QjtJQUNoQyxHQUFHO01BQ0Qsc0JBQXNCO01BQ3RCLDhCQUE4QjtJQUNoQztFQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9hZGlnbnNwaW5uZXIvbG9hZGlnbnNwaW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGlubmVyIHtcclxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuc3Bpbm5lciA+IGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLXN0cmV0Y2hkZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uOiBzay1zdHJldGNoZGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgLnNwaW5uZXIgLnJlY3QyIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5zcGlubmVyIC5yZWN0MyB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMHM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xLjBzO1xyXG4gIH1cclxuICBcclxuICAuc3Bpbm5lciAucmVjdDQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxuICB9XHJcbiAgXHJcbiAgLnNwaW5uZXIgLnJlY3Q1IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzay1zdHJldGNoZGVsYXkge1xyXG4gICAgMCUsIDQwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC40KSB9ICBcclxuICAgIDIwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMS4wKSB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc2stc3RyZXRjaGRlbGF5IHtcclxuICAgIDAlLCA0MCUsIDEwMCUgeyBcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjQpO1xyXG4gICAgfSAgMjAlIHsgXHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEuMCk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMS4wKTtcclxuICAgIH1cclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadignspinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'loadignspinner',
                templateUrl: './loadignspinner.component.html',
                styleUrls: ['./loadignspinner.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/moviesapi.service.ts":
/*!**************************************!*\
  !*** ./src/app/moviesapi.service.ts ***!
  \**************************************/
/*! exports provided: MoviesapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesapiService", function() { return MoviesapiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class MoviesapiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getShows() {
        return this.httpClient.get('http://api.tvmaze.com/shows');
    }
    getShowbyid(showid) {
        return this.httpClient.get('http://api.tvmaze.com/shows/' + showid);
    }
    getcast(showid) {
        return this.httpClient.get('http://api.tvmaze.com/shows/' + showid + '/cast');
    }
    getshowseasons(showid) {
        return this.httpClient.get('http://api.tvmaze.com/shows/' + showid + '/seasons');
    }
}
MoviesapiService.ɵfac = function MoviesapiService_Factory(t) { return new (t || MoviesapiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MoviesapiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MoviesapiService, factory: MoviesapiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesapiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/newshowui/newshowui.component.ts":
/*!**************************************************!*\
  !*** ./src/app/newshowui/newshowui.component.ts ***!
  \**************************************************/
/*! exports provided: NewshowuiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewshowuiComponent", function() { return NewshowuiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NewshowuiComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewshowuiComponent.ɵfac = function NewshowuiComponent_Factory(t) { return new (t || NewshowuiComponent)(); };
NewshowuiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewshowuiComponent, selectors: [["app-newshowui"]], decls: 2, vars: 0, template: function NewshowuiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "newshowui works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3Nob3d1aS9uZXdzaG93dWkuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewshowuiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-newshowui',
                templateUrl: './newshowui.component.html',
                styleUrls: ['./newshowui.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/show/show.component.ts":
/*!****************************************!*\
  !*** ./src/app/show/show.component.ts ***!
  \****************************************/
/*! exports provided: ShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowComponent", function() { return ShowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _moviesapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../moviesapi.service */ "./src/app/moviesapi.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ShowComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2665");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u2665 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fill_r4 = ctx.fill;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("full", fill_r4 === 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", fill_r4, "%");
} }
function ShowComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](genre_r5);
} }
function ShowComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cast_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", cast_r6 == null ? null : cast_r6.character.image.medium, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cast_r6.person.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cast_r6.character.name);
} }
class ShowComponent {
    constructor(_Activatedroute, moviesapiService) {
        this._Activatedroute = _Activatedroute;
        this.moviesapiService = moviesapiService;
    }
    ngOnInit() {
        this.id = this._Activatedroute.snapshot.paramMap.get("id");
        this.moviesapiService.getShowbyid(this.id).subscribe(data => {
            this.Moviedata = data;
            console.log(this.Moviedata.rating.average);
            this.currentRate = this.Moviedata.rating.average / 2;
            console.log(this.currentRate / 2);
        });
        this.moviesapiService.getcast(this.id).subscribe(data => {
            this.Castdata = data;
        });
    }
    getshowseasons() {
        this.moviesapiService.getshowseasons(this.id).subscribe(data => {
            console.log(data);
        });
    }
}
ShowComponent.ɵfac = function ShowComponent_Factory(t) { return new (t || ShowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_moviesapi_service__WEBPACK_IMPORTED_MODULE_2__["MoviesapiService"])); };
ShowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowComponent, selectors: [["app-show"]], decls: 29, vars: 11, consts: [[1, "container"], [1, "row"], [1, "col-xs-12", "col-sm-3"], [1, "main-hero"], ["alt", "", 1, "img-responsive", 2, "margin", "auto", "padding", "10px", 3, "src"], [1, "col-xs-12", "col-sm-9", "d-flex", "align-items-center"], [1, "main-para", 2, "padding", "10px"], ["t", ""], [3, "rate", "starTemplate", "readonly", "max", "rateChange"], ["style", "display: inline;padding-right: 5px;", 4, "ngFor", "ngForOf"], [3, "href"], [1, "container-fluid"], [4, "ngFor", "ngForOf"], [1, "star"], [1, "half"], [2, "display", "inline", "padding-right", "5px"], [1, "badge", "badge-primary"], [1, "col-xs-6", "col-sm-2", "col-md-3", "col-lg-2"], [1, "castclass"], [2, "width", "100px", "height", "100px", "overflow", "hidden", "background-size", "cover"], ["height", "100", "width", "100", "alt", "", 1, "rounded-image", 3, "src"], [2, "color", "gray", "font-size", "10px"]], template: function ShowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ShowComponent_ng_template_13_Template, 4, 4, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ngb-rating", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function ShowComponent_Template_ngb_rating_rateChange_15_listener($event) { return ctx.currentRate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Genres:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ShowComponent_div_18_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Previous Episodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Episode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ShowComponent_div_28_Template, 9, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.Moviedata == null ? null : ctx.Moviedata.image.medium, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Moviedata == null ? null : ctx.Moviedata.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Moviedata == null ? null : ctx.Moviedata.summary);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ratting : ", ctx.currentRate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx.currentRate)("starTemplate", _r0)("readonly", true)("max", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Moviedata == null ? null : ctx.Moviedata.genres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.Moviedata == null ? null : ctx.Moviedata._links.previousepisode.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Castdata);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbRating"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800');\r\n *[_ngcontent-%COMP%] {\r\n\t box-sizing: border-box;\r\n\t margin: 0;\r\n}\r\n html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n\t margin: 0;\r\n\t background: black;\r\n\t font-family: 'Montserrat', helvetica, arial, sans-serif;\r\n\t font-size: 14px;\r\n\t font-weight: 400;\r\n}\r\n .movie_card[_ngcontent-%COMP%] {\r\n\t position: relative;\r\n\t display: block;\r\n\t width: 800px;\r\n\t height: 350px;\r\n\t margin: 100px auto;\r\n\t overflow: hidden;\r\n\t border-radius: 10px;\r\n\t transition: all 0.4s;\r\n}\r\n .movie_card[_ngcontent-%COMP%]:hover {\r\n\t transform: scale(1.02);\r\n\t transition: all 0.4s;\r\n}\r\n .movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%] {\r\n\t position: relative;\r\n\t width: 100%;\r\n\t height: 100%;\r\n\t background-blend-mode: multiply;\r\n\t z-index: 2;\r\n\t border-radius: 10px;\r\n}\r\n .movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_header[_ngcontent-%COMP%] {\r\n\t position: relative;\r\n\t padding: 25px;\r\n\t height: 40%;\r\n}\r\n .movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\t color: #fff;\r\n\t font-weight: 400;\r\n}\r\n .movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n\t color: #9ac7fa;\r\n\t font-weight: 400;\r\n}\r\n .movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_header[_ngcontent-%COMP%]   .minutes[_ngcontent-%COMP%] {\r\n\t display: inline-block;\r\n\t margin-top: 10px;\r\n\t color: #fff;\r\n\t padding: 5px;\r\n\t border-radius: 5px;\r\n\t border: 1px solid rgba(255, 255, 255, 0.13);\r\n}\r\n .movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_header[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] {\r\n\t display: inline-block;\r\n\t color: #cee4fd;\r\n\t margin-left: 10px;\r\n}\r\n .movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_header[_ngcontent-%COMP%]   .locandina[_ngcontent-%COMP%] {\r\n\t position: relative;\r\n\t float: left;\r\n\t margin-right: 20px;\r\n\t height: 120px;\r\n\t box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);\r\n}\r\n .movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_desc[_ngcontent-%COMP%] {\r\n\t padding: 25px;\r\n\t height: 50%;\r\n}\r\n .movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_desc[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n\t color: #cfd6e1;\r\n}\r\n .movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_social[_ngcontent-%COMP%] {\r\n\t height: 10%;\r\n\t padding-left: 15px;\r\n\t padding-bottom: 20px;\r\n}\r\n .movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n\t list-style: none;\r\n\t padding: 0;\r\n}\r\n .movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\t display: inline-block;\r\n\t color: rgba(255, 255, 255, 0.4);\r\n\t transition: color 0.3s;\r\n\t transition-delay: 0.15s;\r\n\t margin: 0 10px;\r\n}\r\n .movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n\t transition: color 0.3s;\r\n\t color: rgba(255, 255, 255, 0.8);\r\n}\r\n .movie_card[_ngcontent-%COMP%]   .info_section[_ngcontent-%COMP%]   .movie_social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n\t font-size: 19px;\r\n\t cursor: pointer;\r\n}\r\n .movie_card[_ngcontent-%COMP%]   .blur_back[_ngcontent-%COMP%] {\r\n\t position: absolute;\r\n\t top: 0;\r\n\t z-index: 1;\r\n\t height: 100%;\r\n\t right: 0;\r\n\t background-size: cover;\r\n\t border-radius: 11px;\r\n}\r\n @media screen and (min-width: 768px) {\r\n\t .movie_header[_ngcontent-%COMP%] {\r\n\t\t width: 60%;\r\n\t}\r\n\t .movie_desc[_ngcontent-%COMP%] {\r\n\t\t width: 50%;\r\n\t}\r\n\t .info_section[_ngcontent-%COMP%] {\r\n\t\t background: linear-gradient(to right, #0d0d0c 50%, transparent 100%);\r\n\t}\r\n\t .blur_back[_ngcontent-%COMP%] {\r\n\t\t width: 80%;\r\n\t\t background-position: -100% 10% !important;\r\n\t}\r\n}\r\n @media screen and (max-width: 768px) {\r\n\t .movie_card[_ngcontent-%COMP%] {\r\n\t\t width: 95%;\r\n\t\t margin: 70px auto;\r\n\t\t min-height: 350px;\r\n\t\t height: auto;\r\n\t}\r\n\t .blur_back[_ngcontent-%COMP%] {\r\n\t\t width: 100%;\r\n\t\t background-position: 50% 50% !important;\r\n\t}\r\n\t .movie_header[_ngcontent-%COMP%] {\r\n\t\t width: 100%;\r\n\t\t margin-top: 85px;\r\n\t}\r\n\t .movie_desc[_ngcontent-%COMP%] {\r\n\t\t width: 100%;\r\n\t}\r\n\t .info_section[_ngcontent-%COMP%] {\r\n\t\t background: linear-gradient(to top, #141413 50%, transparent 100%);\r\n\t\t display: inline-grid;\r\n\t}\r\n}\r\n #bright[_ngcontent-%COMP%] {\r\n\t box-shadow: 0px 0px 150px -45px rgba(255, 51, 0, 0.5);\r\n}\r\n #bright[_ngcontent-%COMP%]:hover {\r\n\t box-shadow: 0px 0px 120px -55px rgba(255, 51, 0, 0.5);\r\n}\r\n .bright_back[_ngcontent-%COMP%] {\r\n\t background: url(\"https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg\");\r\n}\r\n #tomb[_ngcontent-%COMP%] {\r\n\t box-shadow: 0px 0px 150px -45px rgba(19, 160, 134, 0.6);\r\n}\r\n #tomb[_ngcontent-%COMP%]:hover {\r\n\t box-shadow: 0px 0px 120px -55px rgba(19, 160, 134, 0.6);\r\n}\r\n .tomb_back[_ngcontent-%COMP%] {\r\n\t background: url(\"https://fsmedia.imgix.net/cd/c9/5e/ba/4817/4d9a/93f0/c776ec32ecbc/lara-crofts-neck-looks-unnatural-in-the-new-poster-for-tomb-raider.png\");\r\n}\r\n #ave[_ngcontent-%COMP%] {\r\n\t box-shadow: 0px 0px 150px -45px rgba(199, 147, 75, 0.7);\r\n\t margin-bottom: 200px;\r\n}\r\n #ave[_ngcontent-%COMP%]:hover {\r\n\t box-shadow: 0px 0px 120px -55px rgba(199, 147, 75, 0.7);\r\n}\r\n .ave_back[_ngcontent-%COMP%] {\r\n     background-repeat: no-repeat;\r\n     object-fit: cover;\r\n\t \r\n}\r\n #e1_13[_ngcontent-%COMP%] { \r\n\toverflow:hidden;\r\n\topacity:1;\r\n\twidth:258px;\r\n\theight:148px;\r\n\tposition:absolute;\r\n}\r\n #e1_8[_ngcontent-%COMP%] { \r\n\topacity:1;\r\n\twidth:117px;\r\n\theight:148px;\r\n\tposition:absolute;\r\n\tleft:0px;\r\n\ttop:0px;\r\n}\r\n #e1_4[_ngcontent-%COMP%] { \r\n\tborder-radius:500px;\r\n\topacity:1;\r\n\twidth:100px;\r\n\theight:100px;\r\n\tposition:absolute;\r\n\tleft:8px;\r\n\ttop:0px;\r\n\t\r\n\tbackground-repeat:no-repeat;\r\n\tbackground-size:cover;\r\n}\r\n #e1_5[_ngcontent-%COMP%] { \r\n\tcolor:rgba(0, 0, 0, 1);\r\n\topacity:1;\r\n\twidth:117px;\r\n\theight:19px;\r\n\tposition:absolute;\r\n\tleft:0px;\r\n\ttop:110px;\r\n\tfont-family:Roboto;\r\n\ttext-align:left;\r\n\tfont-size:16px;\r\n\tletter-spacing:0;\r\n\tline-height:undefined;\r\n}\r\n #e1_6[_ngcontent-%COMP%] { \r\n\tcolor:rgba(196.00000351667404, 196.00000351667404, 196.00000351667404, 1);\r\n\topacity:1;\r\n\twidth:77px;\r\n\theight:19px;\r\n\tposition:absolute;\r\n\tleft:20px;\r\n\ttop:129px;\r\n\tfont-family:Roboto;\r\n\ttext-align:left;\r\n\tfont-size:16px;\r\n\tletter-spacing:0;\r\n\tline-height:undefined;\r\n}\r\n #e1_9[_ngcontent-%COMP%] { \r\n\topacity:1;\r\n\twidth:117px;\r\n\theight:148px;\r\n\tposition:absolute;\r\n\tleft:141px;\r\n\ttop:0px;\r\n}\r\n #e1_10[_ngcontent-%COMP%] { \r\n\tborder-radius:500px;\r\n\topacity:1;\r\n\twidth:100px;\r\n\theight:100px;\r\n\tposition:absolute;\r\n\tleft:8px;\r\n\ttop:0px;\r\n\t\r\n\tbackground-repeat:no-repeat;\r\n\tbackground-size:cover;\r\n}\r\n #e1_11[_ngcontent-%COMP%] { \r\n\tcolor:rgba(0, 0, 0, 1);\r\n\topacity:1;\r\n\twidth:117px;\r\n\theight:19px;\r\n\tposition:absolute;\r\n\tleft:0px;\r\n\ttop:110px;\r\n\tfont-family:Roboto;\r\n\ttext-align:left;\r\n\tfont-size:16px;\r\n\tletter-spacing:0;\r\n\tline-height:undefined;\r\n}\r\n #e1_12[_ngcontent-%COMP%] { \r\n\tcolor:rgba(196.00000351667404, 196.00000351667404, 196.00000351667404, 1);\r\n\topacity:1;\r\n\twidth:77px;\r\n\theight:19px;\r\n\tposition:absolute;\r\n\tleft:20px;\r\n\ttop:129px;\r\n\tfont-family:Roboto;\r\n\ttext-align:left;\r\n\tfont-size:16px;\r\n\tletter-spacing:0;\r\n\tline-height:undefined;\r\n}\r\n .rounded-image[_ngcontent-%COMP%] {\r\n\tborder-radius: 50%;\r\n  }\r\n .castclass[_ngcontent-%COMP%]{\r\n\t  padding:10px;\r\n\t  \tflex-direction: column;\r\n\t\tdisplay:flex;\r\n\t\t\r\n\t\talign-items: center;\r\n  }\r\n .star[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tfont-size: 3rem;\r\n\tcolor: #d3d3d3;\r\n  }\r\n .full[_ngcontent-%COMP%] {\r\n\tcolor: red;\r\n  }\r\n .half[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tdisplay: inline-block;\r\n\toverflow: hidden;\r\n\tcolor: red;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvdy9zaG93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUZBQWlGO0NBQ2hGO0VBQ0Msc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDtDQUNDO0VBQ0MsU0FBUztFQUNULGlCQUFpQjtFQUNqQix1REFBdUQ7RUFDdkQsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtDQUNDO0VBQ0Msa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QjtDQUNDO0VBQ0Msc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0QjtDQUNDO0VBQ0Msa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7Q0FDQztFQUNDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztBQUNiO0NBQ0M7RUFDQyxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0NBQ0M7RUFDQyxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0NBQ0M7RUFDQyxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDJDQUEyQztBQUM3QztDQUNDO0VBQ0MscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7Q0FDQztFQUNDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw2Q0FBNkM7QUFDL0M7Q0FDQztFQUNDLGFBQWE7RUFDYixXQUFXO0FBQ2I7Q0FDQztFQUNDLGNBQWM7QUFDaEI7Q0FDQztFQUNDLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0NBQ0M7RUFDQyxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaO0NBQ0M7RUFDQyxxQkFBcUI7RUFDckIsK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjtDQUNDO0VBQ0Msc0JBQXNCO0VBQ3RCLCtCQUErQjtBQUNqQztDQUNDO0VBQ0MsZUFBZTtFQUNmLGVBQWU7QUFDakI7Q0FDQztFQUNDLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sVUFBVTtFQUNWLFlBQVk7RUFDWixRQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjtDQUNDO0VBQ0M7R0FDQyxVQUFVO0NBQ1o7RUFDQztHQUNDLFVBQVU7Q0FDWjtFQUNDO0dBQ0Msb0VBQW9FO0NBQ3RFO0VBQ0M7R0FDQyxVQUFVO0dBQ1YseUNBQXlDO0NBQzNDO0FBQ0Q7Q0FDQztFQUNDO0dBQ0MsVUFBVTtHQUNWLGlCQUFpQjtHQUNqQixpQkFBaUI7R0FDakIsWUFBWTtDQUNkO0VBQ0M7R0FDQyxXQUFXO0dBQ1gsdUNBQXVDO0NBQ3pDO0VBQ0M7R0FDQyxXQUFXO0dBQ1gsZ0JBQWdCO0NBQ2xCO0VBQ0M7R0FDQyxXQUFXO0NBQ2I7RUFDQztHQUNDLGtFQUFrRTtHQUNsRSxvQkFBb0I7Q0FDdEI7QUFDRDtDQUNDO0VBQ0MscURBQXFEO0FBQ3ZEO0NBQ0M7RUFDQyxxREFBcUQ7QUFDdkQ7Q0FDQztFQUNDLDZHQUE2RztBQUMvRztDQUNDO0VBQ0MsdURBQXVEO0FBQ3pEO0NBQ0M7RUFDQyx1REFBdUQ7QUFDekQ7Q0FDQztFQUNDLDJKQUEySjtBQUM3SjtDQUNDO0VBQ0MsdURBQXVEO0VBQ3ZELG9CQUFvQjtBQUN0QjtDQUNDO0VBQ0MsdURBQXVEO0FBQ3pEO0NBQ0M7S0FDSSw0QkFBNEI7S0FDNUIsaUJBQWlCO0VBQ3BCLDhOQUE4TjtBQUNoTztDQUlBO0NBQ0MsZUFBZTtDQUNmLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsWUFBWTtDQUNaLGlCQUFpQjtBQUNsQjtDQUNBO0NBQ0MsU0FBUztDQUNULFdBQVc7Q0FDWCxZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLFFBQVE7Q0FDUixPQUFPO0FBQ1I7Q0FDQTtDQUNDLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsV0FBVztDQUNYLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsUUFBUTtDQUNSLE9BQU87O0NBRVAsMkJBQTJCO0NBQzNCLHFCQUFxQjtBQUN0QjtDQUNBO0NBQ0Msc0JBQXNCO0NBQ3RCLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixRQUFRO0NBQ1IsU0FBUztDQUNULGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixxQkFBcUI7QUFDdEI7Q0FDQTtDQUNDLHlFQUF5RTtDQUN6RSxTQUFTO0NBQ1QsVUFBVTtDQUNWLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsU0FBUztDQUNULFNBQVM7Q0FDVCxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIscUJBQXFCO0FBQ3RCO0NBQ0E7Q0FDQyxTQUFTO0NBQ1QsV0FBVztDQUNYLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsVUFBVTtDQUNWLE9BQU87QUFDUjtDQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQixRQUFRO0NBQ1IsT0FBTzs7Q0FFUCwyQkFBMkI7Q0FDM0IscUJBQXFCO0FBQ3RCO0NBQ0E7Q0FDQyxzQkFBc0I7Q0FDdEIsU0FBUztDQUNULFdBQVc7Q0FDWCxXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLFFBQVE7Q0FDUixTQUFTO0NBQ1Qsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtBQUN0QjtDQUNBO0NBQ0MseUVBQXlFO0NBQ3pFLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixTQUFTO0NBQ1QsU0FBUztDQUNULGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixxQkFBcUI7QUFDdEI7Q0FHQTtDQUNDLGtCQUFrQjtFQUNqQjtDQUVBO0dBQ0MsWUFBWTtJQUNYLHNCQUFzQjtFQUN4QixZQUFZOztFQUVaLG1CQUFtQjtFQUNuQjtDQUlBO0NBQ0Qsa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsY0FBYztFQUNiO0NBQ0E7Q0FDRCxVQUFVO0VBQ1Q7Q0FDQTtDQUNELGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLFVBQVU7RUFDVCIsImZpbGUiOiJzcmMvYXBwL3Nob3cvc2hvdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNzAwLDgwMCcpO1xyXG4gKiB7XHJcblx0IGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0IG1hcmdpbjogMDtcclxufVxyXG4gaHRtbCwgYm9keSB7XHJcblx0IG1hcmdpbjogMDtcclxuXHQgYmFja2dyb3VuZDogYmxhY2s7XHJcblx0IGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIGhlbHZldGljYSwgYXJpYWwsIHNhbnMtc2VyaWY7XHJcblx0IGZvbnQtc2l6ZTogMTRweDtcclxuXHQgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4gLm1vdmllX2NhcmQge1xyXG5cdCBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0IGRpc3BsYXk6IGJsb2NrO1xyXG5cdCB3aWR0aDogODAwcHg7XHJcblx0IGhlaWdodDogMzUwcHg7XHJcblx0IG1hcmdpbjogMTAwcHggYXV0bztcclxuXHQgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHQgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHQgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbn1cclxuIC5tb3ZpZV9jYXJkOmhvdmVyIHtcclxuXHQgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuXHQgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbn1cclxuIC5tb3ZpZV9jYXJkIC5pbmZvX3NlY3Rpb24ge1xyXG5cdCBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0IHdpZHRoOiAxMDAlO1xyXG5cdCBoZWlnaHQ6IDEwMCU7XHJcblx0IGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XHJcblx0IHotaW5kZXg6IDI7XHJcblx0IGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuIC5tb3ZpZV9jYXJkIC5pbmZvX3NlY3Rpb24gLm1vdmllX2hlYWRlciB7XHJcblx0IHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHQgcGFkZGluZzogMjVweDtcclxuXHQgaGVpZ2h0OiA0MCU7XHJcbn1cclxuIC5tb3ZpZV9jYXJkIC5pbmZvX3NlY3Rpb24gLm1vdmllX2hlYWRlciBoMSB7XHJcblx0IGNvbG9yOiAjZmZmO1xyXG5cdCBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbiAubW92aWVfY2FyZCAuaW5mb19zZWN0aW9uIC5tb3ZpZV9oZWFkZXIgaDQge1xyXG5cdCBjb2xvcjogIzlhYzdmYTtcclxuXHQgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4gLm1vdmllX2NhcmQgLmluZm9fc2VjdGlvbiAubW92aWVfaGVhZGVyIC5taW51dGVzIHtcclxuXHQgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdCBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdCBjb2xvcjogI2ZmZjtcclxuXHQgcGFkZGluZzogNXB4O1xyXG5cdCBib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMyk7XHJcbn1cclxuIC5tb3ZpZV9jYXJkIC5pbmZvX3NlY3Rpb24gLm1vdmllX2hlYWRlciAudHlwZSB7XHJcblx0IGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHQgY29sb3I6ICNjZWU0ZmQ7XHJcblx0IG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbiAubW92aWVfY2FyZCAuaW5mb19zZWN0aW9uIC5tb3ZpZV9oZWFkZXIgLmxvY2FuZGluYSB7XHJcblx0IHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHQgZmxvYXQ6IGxlZnQ7XHJcblx0IG1hcmdpbi1yaWdodDogMjBweDtcclxuXHQgaGVpZ2h0OiAxMjBweDtcclxuXHQgYm94LXNoYWRvdzogMCAwIDIwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcbiAubW92aWVfY2FyZCAuaW5mb19zZWN0aW9uIC5tb3ZpZV9kZXNjIHtcclxuXHQgcGFkZGluZzogMjVweDtcclxuXHQgaGVpZ2h0OiA1MCU7XHJcbn1cclxuIC5tb3ZpZV9jYXJkIC5pbmZvX3NlY3Rpb24gLm1vdmllX2Rlc2MgLnRleHQge1xyXG5cdCBjb2xvcjogI2NmZDZlMTtcclxufVxyXG4gLm1vdmllX2NhcmQgLmluZm9fc2VjdGlvbiAubW92aWVfc29jaWFsIHtcclxuXHQgaGVpZ2h0OiAxMCU7XHJcblx0IHBhZGRpbmctbGVmdDogMTVweDtcclxuXHQgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuIC5tb3ZpZV9jYXJkIC5pbmZvX3NlY3Rpb24gLm1vdmllX3NvY2lhbCB1bCB7XHJcblx0IGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0IHBhZGRpbmc6IDA7XHJcbn1cclxuIC5tb3ZpZV9jYXJkIC5pbmZvX3NlY3Rpb24gLm1vdmllX3NvY2lhbCB1bCBsaSB7XHJcblx0IGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHQgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxuXHQgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcclxuXHQgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XHJcblx0IG1hcmdpbjogMCAxMHB4O1xyXG59XHJcbiAubW92aWVfY2FyZCAuaW5mb19zZWN0aW9uIC5tb3ZpZV9zb2NpYWwgdWwgbGk6aG92ZXIge1xyXG5cdCB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG5cdCBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG59XHJcbiAubW92aWVfY2FyZCAuaW5mb19zZWN0aW9uIC5tb3ZpZV9zb2NpYWwgdWwgbGkgaSB7XHJcblx0IGZvbnQtc2l6ZTogMTlweDtcclxuXHQgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiAubW92aWVfY2FyZCAuYmx1cl9iYWNrIHtcclxuXHQgcG9zaXRpb246IGFic29sdXRlO1xyXG5cdCB0b3A6IDA7XHJcblx0IHotaW5kZXg6IDE7XHJcblx0IGhlaWdodDogMTAwJTtcclxuXHQgcmlnaHQ6IDA7XHJcblx0IGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0IGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbn1cclxuIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcblx0IC5tb3ZpZV9oZWFkZXIge1xyXG5cdFx0IHdpZHRoOiA2MCU7XHJcblx0fVxyXG5cdCAubW92aWVfZGVzYyB7XHJcblx0XHQgd2lkdGg6IDUwJTtcclxuXHR9XHJcblx0IC5pbmZvX3NlY3Rpb24ge1xyXG5cdFx0IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzBkMGQwYyA1MCUsIHRyYW5zcGFyZW50IDEwMCUpO1xyXG5cdH1cclxuXHQgLmJsdXJfYmFjayB7XHJcblx0XHQgd2lkdGg6IDgwJTtcclxuXHRcdCBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAwJSAxMCUgIWltcG9ydGFudDtcclxuXHR9XHJcbn1cclxuIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblx0IC5tb3ZpZV9jYXJkIHtcclxuXHRcdCB3aWR0aDogOTUlO1xyXG5cdFx0IG1hcmdpbjogNzBweCBhdXRvO1xyXG5cdFx0IG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG5cdFx0IGhlaWdodDogYXV0bztcclxuXHR9XHJcblx0IC5ibHVyX2JhY2sge1xyXG5cdFx0IHdpZHRoOiAxMDAlO1xyXG5cdFx0IGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCUgIWltcG9ydGFudDtcclxuXHR9XHJcblx0IC5tb3ZpZV9oZWFkZXIge1xyXG5cdFx0IHdpZHRoOiAxMDAlO1xyXG5cdFx0IG1hcmdpbi10b3A6IDg1cHg7XHJcblx0fVxyXG5cdCAubW92aWVfZGVzYyB7XHJcblx0XHQgd2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cdCAuaW5mb19zZWN0aW9uIHtcclxuXHRcdCBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMTQxNDEzIDUwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XHJcblx0XHQgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcblx0fVxyXG59XHJcbiAjYnJpZ2h0IHtcclxuXHQgYm94LXNoYWRvdzogMHB4IDBweCAxNTBweCAtNDVweCByZ2JhKDI1NSwgNTEsIDAsIDAuNSk7XHJcbn1cclxuICNicmlnaHQ6aG92ZXIge1xyXG5cdCBib3gtc2hhZG93OiAwcHggMHB4IDEyMHB4IC01NXB4IHJnYmEoMjU1LCA1MSwgMCwgMC41KTtcclxufVxyXG4gLmJyaWdodF9iYWNrIHtcclxuXHQgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9vY2MtMC0yNDMzLTQ0OC4xLm5mbHhzby5uZXQvYXJ0L2NkNWM5LzNlMTkyZWRmMjAyN2M1MzZlMjViYjVkM2I2YWM5M2NlZDc3Y2Q1YzkuanBnXCIpO1xyXG59XHJcbiAjdG9tYiB7XHJcblx0IGJveC1zaGFkb3c6IDBweCAwcHggMTUwcHggLTQ1cHggcmdiYSgxOSwgMTYwLCAxMzQsIDAuNik7XHJcbn1cclxuICN0b21iOmhvdmVyIHtcclxuXHQgYm94LXNoYWRvdzogMHB4IDBweCAxMjBweCAtNTVweCByZ2JhKDE5LCAxNjAsIDEzNCwgMC42KTtcclxufVxyXG4gLnRvbWJfYmFjayB7XHJcblx0IGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vZnNtZWRpYS5pbWdpeC5uZXQvY2QvYzkvNWUvYmEvNDgxNy80ZDlhLzkzZjAvYzc3NmVjMzJlY2JjL2xhcmEtY3JvZnRzLW5lY2stbG9va3MtdW5uYXR1cmFsLWluLXRoZS1uZXctcG9zdGVyLWZvci10b21iLXJhaWRlci5wbmdcIik7XHJcbn1cclxuICNhdmUge1xyXG5cdCBib3gtc2hhZG93OiAwcHggMHB4IDE1MHB4IC00NXB4IHJnYmEoMTk5LCAxNDcsIDc1LCAwLjcpO1xyXG5cdCBtYXJnaW4tYm90dG9tOiAyMDBweDtcclxufVxyXG4gI2F2ZTpob3ZlciB7XHJcblx0IGJveC1zaGFkb3c6IDBweCAwcHggMTIwcHggLTU1cHggcmdiYSgxOTksIDE0NywgNzUsIDAuNyk7XHJcbn1cclxuIC5hdmVfYmFjayB7XHJcbiAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuXHQgLyogYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly93d3cuZ2FubmV0dC1jZG4uY29tLy1tbS0vYzAzZmQxNDBkZWJlOGFkNGMwNWNmODFhNWNhZDdhZDYxYTEyY2U1Mi9jPTAtMTU4MC0yOTg1LTMyNjYmcj14ODAzJmM9MTYwMHg4MDAvbG9jYWwvLS9tZWRpYS8yMDE3LzA2LzA5L1VTQVRPREFZL1VTQVRPREFZLzYzNjMyNjI3Mjg3MzU5OTE3Ni1CbGFjay1QYW50aGVyLVRlYXNlci5qcGdcIik7ICovXHJcbn1cclxuIFxyXG5cclxuXHJcbiNlMV8xMyB7IFxyXG5cdG92ZXJmbG93OmhpZGRlbjtcclxuXHRvcGFjaXR5OjE7XHJcblx0d2lkdGg6MjU4cHg7XHJcblx0aGVpZ2h0OjE0OHB4O1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG59XHJcbiNlMV84IHsgXHJcblx0b3BhY2l0eToxO1xyXG5cdHdpZHRoOjExN3B4O1xyXG5cdGhlaWdodDoxNDhweDtcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRsZWZ0OjBweDtcclxuXHR0b3A6MHB4O1xyXG59XHJcbiNlMV80IHsgXHJcblx0Ym9yZGVyLXJhZGl1czo1MDBweDtcclxuXHRvcGFjaXR5OjE7XHJcblx0d2lkdGg6MTAwcHg7XHJcblx0aGVpZ2h0OjEwMHB4O1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdGxlZnQ6OHB4O1xyXG5cdHRvcDowcHg7XHJcblx0XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxufVxyXG4jZTFfNSB7IFxyXG5cdGNvbG9yOnJnYmEoMCwgMCwgMCwgMSk7XHJcblx0b3BhY2l0eToxO1xyXG5cdHdpZHRoOjExN3B4O1xyXG5cdGhlaWdodDoxOXB4O1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdGxlZnQ6MHB4O1xyXG5cdHRvcDoxMTBweDtcclxuXHRmb250LWZhbWlseTpSb2JvdG87XHJcblx0dGV4dC1hbGlnbjpsZWZ0O1xyXG5cdGZvbnQtc2l6ZToxNnB4O1xyXG5cdGxldHRlci1zcGFjaW5nOjA7XHJcblx0bGluZS1oZWlnaHQ6dW5kZWZpbmVkO1xyXG59XHJcbiNlMV82IHsgXHJcblx0Y29sb3I6cmdiYSgxOTYuMDAwMDAzNTE2Njc0MDQsIDE5Ni4wMDAwMDM1MTY2NzQwNCwgMTk2LjAwMDAwMzUxNjY3NDA0LCAxKTtcclxuXHRvcGFjaXR5OjE7XHJcblx0d2lkdGg6NzdweDtcclxuXHRoZWlnaHQ6MTlweDtcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRsZWZ0OjIwcHg7XHJcblx0dG9wOjEyOXB4O1xyXG5cdGZvbnQtZmFtaWx5OlJvYm90bztcclxuXHR0ZXh0LWFsaWduOmxlZnQ7XHJcblx0Zm9udC1zaXplOjE2cHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6MDtcclxuXHRsaW5lLWhlaWdodDp1bmRlZmluZWQ7XHJcbn1cclxuI2UxXzkgeyBcclxuXHRvcGFjaXR5OjE7XHJcblx0d2lkdGg6MTE3cHg7XHJcblx0aGVpZ2h0OjE0OHB4O1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdGxlZnQ6MTQxcHg7XHJcblx0dG9wOjBweDtcclxufVxyXG4jZTFfMTAgeyBcclxuXHRib3JkZXItcmFkaXVzOjUwMHB4O1xyXG5cdG9wYWNpdHk6MTtcclxuXHR3aWR0aDoxMDBweDtcclxuXHRoZWlnaHQ6MTAwcHg7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0bGVmdDo4cHg7XHJcblx0dG9wOjBweDtcclxuXHRcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG59XHJcbiNlMV8xMSB7IFxyXG5cdGNvbG9yOnJnYmEoMCwgMCwgMCwgMSk7XHJcblx0b3BhY2l0eToxO1xyXG5cdHdpZHRoOjExN3B4O1xyXG5cdGhlaWdodDoxOXB4O1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdGxlZnQ6MHB4O1xyXG5cdHRvcDoxMTBweDtcclxuXHRmb250LWZhbWlseTpSb2JvdG87XHJcblx0dGV4dC1hbGlnbjpsZWZ0O1xyXG5cdGZvbnQtc2l6ZToxNnB4O1xyXG5cdGxldHRlci1zcGFjaW5nOjA7XHJcblx0bGluZS1oZWlnaHQ6dW5kZWZpbmVkO1xyXG59XHJcbiNlMV8xMiB7IFxyXG5cdGNvbG9yOnJnYmEoMTk2LjAwMDAwMzUxNjY3NDA0LCAxOTYuMDAwMDAzNTE2Njc0MDQsIDE5Ni4wMDAwMDM1MTY2NzQwNCwgMSk7XHJcblx0b3BhY2l0eToxO1xyXG5cdHdpZHRoOjc3cHg7XHJcblx0aGVpZ2h0OjE5cHg7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0bGVmdDoyMHB4O1xyXG5cdHRvcDoxMjlweDtcclxuXHRmb250LWZhbWlseTpSb2JvdG87XHJcblx0dGV4dC1hbGlnbjpsZWZ0O1xyXG5cdGZvbnQtc2l6ZToxNnB4O1xyXG5cdGxldHRlci1zcGFjaW5nOjA7XHJcblx0bGluZS1oZWlnaHQ6dW5kZWZpbmVkO1xyXG59XHJcblxyXG5cclxuLnJvdW5kZWQtaW1hZ2Uge1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG4gIC5jYXN0Y2xhc3N7XHJcblx0ICBwYWRkaW5nOjEwcHg7XHJcblx0ICBcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5zdGFyIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogM3JlbTtcclxuXHRjb2xvcjogI2QzZDNkMztcclxuICB9XHJcbiAgLmZ1bGwge1xyXG5cdGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIC5oYWxmIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0Y29sb3I6IHJlZDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show',
                templateUrl: './show.component.html',
                styleUrls: ['./show.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _moviesapi_service__WEBPACK_IMPORTED_MODULE_2__["MoviesapiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/showall/showall.component.ts":
/*!**********************************************!*\
  !*** ./src/app/showall/showall.component.ts ***!
  \**********************************************/
/*! exports provided: ShowallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowallComponent", function() { return ShowallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _moviesapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../moviesapi.service */ "./src/app/moviesapi.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _loadignspinner_loadignspinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loadignspinner/loadignspinner.component */ "./src/app/loadignspinner/loadignspinner.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function ShowallComponent_loadignspinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "loadignspinner");
} }
function ShowallComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowallComponent_div_3_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const m_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.Showbyid(m_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", m_r2.image.medium, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/show/", m_r2.id, "");
} }
class ShowallComponent {
    constructor(moviesapiservice) {
        this.moviesapiservice = moviesapiservice;
        this.showspinner = true;
    }
    ngOnInit() {
        this.moviesapiservice.getShows().subscribe(data => {
            this.MovieList = data;
            this.showspinner = false;
            //localStorage['fff'] = JSON.stringify(data);
            // console.log(this.MovieList);
            //this.moviesapiservice = JSON.parse(localStorage['fff']);
        });
    }
    Showbyid(m) {
        this.showid = m;
    }
}
ShowallComponent.ɵfac = function ShowallComponent_Factory(t) { return new (t || ShowallComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_moviesapi_service__WEBPACK_IMPORTED_MODULE_1__["MoviesapiService"])); };
ShowallComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowallComponent, selectors: [["app-showall"]], inputs: { showid: "showid" }, decls: 4, vars: 2, consts: [[4, "ngIf"], [1, "container-fluid"], [1, "row"], ["class", "col-xs-2", "style", "padding: 0;", 4, "ngFor", "ngForOf"], [1, "col-xs-2", 2, "padding", "0"], ["alt", "", 1, "img-responsive", "imgclass", 3, "src", "routerLink", "click"]], template: function ShowallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ShowallComponent_loadignspinner_0_Template, 1, 0, "loadignspinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShowallComponent_div_3_Template, 2, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showspinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.MovieList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _loadignspinner_loadignspinner_component__WEBPACK_IMPORTED_MODULE_3__["LoadignspinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".main[_ngcontent-%COMP%]{\r\n\tdisplay: block;\r\n\t margin: auto;\r\n\tmargin-top: 10px;\r\n\tborder-radius: 30px;\r\n\theight: 530px;\r\n\twidth: 300px;\r\n\r\n\tbackground: white;\r\n  box-shadow: 0px 20px 100px rgba(0,0,0,0.1);\r\n}\r\n.mainbody[_ngcontent-%COMP%]{\r\n    margin-left: 38px;\r\n}\r\n.backimg[_ngcontent-%COMP%]{\r\n\theight: 280px;\r\n\tmargin-left: 10px;\r\n\tmargin-top:10px;\r\n\tborder-radius: 30px 30px 10px 30px;\r\n}\r\n.movie-cover[_ngcontent-%COMP%]{\r\n\tposition:absolute;\r\n\tmargin-left: -180px;\r\n\theight: 130px;\r\n\tmargin-top: 230px;\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 0px 0px 20px rgba(0,0,0,0.1);\r\n}\r\n.fa-play[_ngcontent-%COMP%]{\r\n\tposition: absolute;\r\n\tmargin-top: 270px;\r\n\tfont-size: 0.6em;\r\n\tbackground: #dc2c29;\r\n\tcolor: white;\r\n\tborder-radius: 60px;\r\n\tpadding: 15px;\r\n\tmargin-left: -45px;\r\n}\r\nh6[_ngcontent-%COMP%]{\r\n\tposition:absolute;\r\n\tmargin-left: 130px;\r\n\tmargin-top: 20px;\r\n    font-size: 1em;\r\n    max-width: 120px;\r\n    white-space:nowrap;\r\n    overflow:hidden;\r\n    \r\n\tfont-family: sans-serif;\r\n}\r\n.rating[_ngcontent-%COMP%]{\r\n\theight: 10px;\r\n\tmargin-left: 130px;\r\n\tmargin-top: 45px;\r\n}\r\n.head1[_ngcontent-%COMP%]{\r\n\tcolumn-count:4;\r\n\theight: 30px;\r\n\twidth: 270px;\r\n\tmargin-top: 70px;\r\n\tmargin-left: 30px;\r\n}\r\n.head1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n\tcolor: rgba(0,0,0,0.7);\r\n\tfont-family: sans-serif;\r\n\tfont-size: 0.9em;\r\n\t\r\n}\r\n.head2[_ngcontent-%COMP%]{\r\n\tcolumn-count:4;\r\n\theight: 30px;\r\n\twidth: 270px;\r\n\tmargin-top: 0px;\r\n\tmargin-left: 30px;\r\n}\r\n.head2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n\tcolor: rgba(0,0,0,1);\r\n\tfont-family: sans-serif;\r\n\tfont-size: 0.9em;\r\n\tfont-weight: 700;\r\n\t\r\n}\r\n.wrapper[_ngcontent-%COMP%]{\r\n\tmax-height: 305px;\r\n\tborder:1px solid #ddd;\r\n\tdisplay: flex;\r\n\toverflow: auto;\r\n}\r\n.wrapper[_ngcontent-%COMP%]::-webkit-scrollbar{\r\n\twidth: 0;\r\n}\r\n.wrapper[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{\r\n\tmin-width: 210px;\r\n\theight: 295px;\r\n\tline-height: 110px;\r\n\ttext-align:center;\r\n\tcolor: white;\r\n\tmargin-right: 2px;\r\n}\r\n.imageclass[_ngcontent-%COMP%]{\r\n\tposition: absolute;\r\n}\r\n.moviename[_ngcontent-%COMP%]{\r\n\tposition: relative;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2FsbC9zaG93YWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MsY0FBYztFQUNiLFlBQVk7Q0FDYixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixZQUFZOztDQUVaLGlCQUFpQjtFQUNoQiwwQ0FBMEM7QUFDNUM7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2Ysa0NBQWtDO0FBQ25DO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLHdDQUF3QztBQUN6QztBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixnQkFBZ0I7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlOztDQUVsQix1QkFBdUI7QUFDeEI7QUFFQTtDQUNDLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsWUFBWTtDQUNaLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLGdCQUFnQjs7QUFFakI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxZQUFZO0NBQ1osWUFBWTtDQUNaLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLG9CQUFvQjtDQUNwQix1QkFBdUI7Q0FDdkIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjs7QUFFakI7QUFHQTtDQUNDLGlCQUFpQjtDQUNqQixxQkFBcUI7Q0FDckIsYUFBYTtDQUNiLGNBQWM7QUFDZjtBQUNBO0NBQ0MsUUFBUTtBQUNUO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLGlCQUFpQjtBQUNsQjtBQUdBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxrQkFBa0I7O0FBRW5CIiwiZmlsZSI6InNyYy9hcHAvc2hvd2FsbC9zaG93YWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1haW57XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0IG1hcmdpbjogYXV0bztcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcblx0aGVpZ2h0OiA1MzBweDtcclxuXHR3aWR0aDogMzAwcHg7XHJcblxyXG5cdGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAyMHB4IDEwMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG4ubWFpbmJvZHl7XHJcbiAgICBtYXJnaW4tbGVmdDogMzhweDtcclxufVxyXG4uYmFja2ltZ3tcclxuXHRoZWlnaHQ6IDI4MHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cdG1hcmdpbi10b3A6MTBweDtcclxuXHRib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMTBweCAzMHB4O1xyXG59XHJcbi5tb3ZpZS1jb3ZlcntcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRtYXJnaW4tbGVmdDogLTE4MHB4O1xyXG5cdGhlaWdodDogMTMwcHg7XHJcblx0bWFyZ2luLXRvcDogMjMwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuLmZhLXBsYXl7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdG1hcmdpbi10b3A6IDI3MHB4O1xyXG5cdGZvbnQtc2l6ZTogMC42ZW07XHJcblx0YmFja2dyb3VuZDogI2RjMmMyOTtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Ym9yZGVyLXJhZGl1czogNjBweDtcclxuXHRwYWRkaW5nOiAxNXB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAtNDVweDtcclxufVxyXG5oNntcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRtYXJnaW4tbGVmdDogMTMwcHg7XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIFxyXG5cdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ucmF0aW5ne1xyXG5cdGhlaWdodDogMTBweDtcclxuXHRtYXJnaW4tbGVmdDogMTMwcHg7XHJcblx0bWFyZ2luLXRvcDogNDVweDtcclxufVxyXG4uaGVhZDF7XHJcblx0Y29sdW1uLWNvdW50OjQ7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdHdpZHRoOiAyNzBweDtcclxuXHRtYXJnaW4tdG9wOiA3MHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcbi5oZWFkMSBwe1xyXG5cdGNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XHJcblx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAwLjllbTtcclxuXHRcclxufVxyXG4uaGVhZDJ7XHJcblx0Y29sdW1uLWNvdW50OjQ7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdHdpZHRoOiAyNzBweDtcclxuXHRtYXJnaW4tdG9wOiAwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuLmhlYWQyIHB7XHJcblx0Y29sb3I6IHJnYmEoMCwwLDAsMSk7XHJcblx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAwLjllbTtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdFxyXG59XHJcblxyXG5cclxuLndyYXBwZXJ7XHJcblx0bWF4LWhlaWdodDogMzA1cHg7XHJcblx0Ym9yZGVyOjFweCBzb2xpZCAjZGRkO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0b3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLndyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFye1xyXG5cdHdpZHRoOiAwO1xyXG59XHJcbi53cmFwcGVyIC5pdGVte1xyXG5cdG1pbi13aWR0aDogMjEwcHg7XHJcblx0aGVpZ2h0OiAyOTVweDtcclxuXHRsaW5lLWhlaWdodDogMTEwcHg7XHJcblx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdG1hcmdpbi1yaWdodDogMnB4O1xyXG59XHJcblxyXG5cclxuLmltYWdlY2xhc3N7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5tb3ZpZW5hbWV7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowallComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-showall',
                templateUrl: './showall.component.html',
                styleUrls: ['./showall.component.css']
            }]
    }], function () { return [{ type: _moviesapi_service__WEBPACK_IMPORTED_MODULE_1__["MoviesapiService"] }]; }, { showid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\srikanth\Desktop\New folder\Movies\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map