(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.html":
/*!*********************************************************************************************!*\
  !*** D:/projects/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home\">\r\n   <div class=\"background\">\r\n      <h1>Egeo Design System</h1>\r\n      <h5>Creating the statement for a scalable and consistent design system</h5>\r\n      <div class=\"separator separator--white\"></div>\r\n   </div>\r\n   <div class=\"main-text\">\r\n      <p><b>Egeo</b> is an open source design system that combines both the world of design and development in one\r\n         single\r\n         interface. This product works together with\r\n         UX/UI guidelines and the Angular Library. </p>\r\n\r\n      <p>Egeo’s design looks for an innovative, smart and balanced line, without forgetting the professional and\r\n         reliable\r\n         side.</p>\r\n\r\n      <p>We also provide <b>Egeo</b> Themes to help you creating and customizing your theme with your own colors.\r\n         Furthermore,\r\n         thanks to <b>Egeo Starter</b> you can start\r\n         using a brand new Angular app with a set of well-designed and implemented data-bound components built on top\r\n         of\r\n         Angular.</p>\r\n      <div class=\"separator separator--blue\"></div>\r\n      <span class=\"footer-text\">Egeo Design System is developed by Stratio.</span>\r\n      <a href=\"https://github.com/stratio/egeo\" class=\"github-button\"><i class=\"icon-github2\"></i><span>Fork and rate it on\r\n         GitHub</span></a>\r\n   </div>\r\n</div>\r\n\r\n<st-footer [rightsText]=\"rightsText\" [links]=\"links\" image=\"assets/images/stratio-white.png\">\r\n</st-footer>\r\n");

/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: routes, HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/app/modules/home/home.ts");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */





var routes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_4__["StFooterModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [_home__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/modules/home/home.scss":
/*!****************************************!*\
  !*** ./src/app/modules/home/home.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n:host {\n  display: block;\n  height: 100%;\n  overflow-y: auto; }\n.home {\n  padding-bottom: 100px; }\n.home .background {\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: url('background-mask.png');\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding-bottom: 105px; }\n.home h1 {\n    font-weight: 100;\n    font-size: 72px;\n    text-align: left;\n    color: #FFFFFF;\n    margin-top: 192px;\n    margin-bottom: 52px; }\n.home h5 {\n    text-align: left;\n    font-weight: 100;\n    font-size: 1.286rem;\n    color: #FFFFFF;\n    margin-bottom: 58px; }\n.home .separator {\n    width: 80px;\n    margin: auto; }\n.home .separator--blue {\n      border: solid 1px #029ee3; }\n.home .separator--white {\n      border: solid 1px #e6e6e6; }\n.home .main-text {\n    margin: 77px auto 0 auto;\n    display: flex;\n    flex-direction: column;\n    max-width: 892px;\n    font-weight: 100;\n    font-size: 1.429rem;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: normal;\n    text-align: center;\n    color: #4b4b4b; }\n.home .main-text p {\n      margin-bottom: 25px; }\n.home .footer-text {\n    margin-top: 14px;\n    font-weight: bold;\n    font-size: 1.143rem;\n    color: #0F1B27;\n    padding: 40px 0 35px; }\n.home .github-button {\n    background-color: #029ee3;\n    font-weight: normal;\n    font-size: 1.286rem;\n    font-style: normal;\n    font-stretch: normal;\n    letter-spacing: normal;\n    text-align: center;\n    color: #FFFFFF;\n    cursor: pointer;\n    padding: 11px 26px;\n    border-radius: 4px;\n    margin: auto; }\n.home .github-button:hover {\n      background-color: #028cca; }\n.home .github-button i {\n      padding-right: 18px;\n      font-size: 2.125rem;\n      vertical-align: bottom; }\n.home .github-button span {\n      display: inline-block;\n      line-height: 1.8em; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL2hvbWUvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9pbmRleC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy9ob21lL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfY29sb3JzLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL2hvbWUvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9mb250cy5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy9ob21lL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfc2V0dGluZ3Muc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvaG9tZS9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW8tZGVtb1xcc3JjXFxhcHBcXG1vZHVsZXNcXGhvbWVcXGhvbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7OztFRFVFO0FFVkY7Ozs7Ozs7OztFRm9CRTtBR3BCRjs7Ozs7Ozs7O0VIOEJFO0FJOUJGOzs7Ozs7Ozs7RUp3Q0U7QUt0Q0Y7RUFDRyxjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0FBR25CO0VBQ0cscUJBQXFCLEVBQUE7QUFEeEI7SUFJTSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsc0NBQTZEO0lBQzdELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIscUJBQXFCLEVBQUE7QUFYM0I7SUFlTSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjSHlDZ0I7SUd4Q2hCLGlCQUFpQjtJQUNqQixtQkFBbUIsRUFBQTtBQXBCekI7SUF3Qk0sZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkZSc0I7SUVTdEIsY0hnQ2dCO0lHL0JoQixtQkFBbUIsRUFBQTtBQTVCekI7SUFnQ00sV0FBVztJQUNYLFlBQVksRUFBQTtBQWpDbEI7TUFvQ1MseUJBQXlCLEVBQUE7QUFwQ2xDO01Bd0NTLHlCQUF5QixFQUFBO0FBeENsQztJQTZDTSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CRi9Cc0I7SUVnQ3RCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsY0FBYyxFQUFBO0FBeERwQjtNQTJEUyxtQkFBbUIsRUFBQTtBQTNENUI7SUFpRU0sZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkZsRHNCO0lFbUR0QixjSDNDYTtJRzRDYixvQkFBb0IsRUFBQTtBQXJFMUI7SUF5RU0seUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixtQkZ6RHNCO0lFMER0QixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsY0hyQmdCO0lHc0JoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZLEVBQUE7QUFwRmxCO01Bc0ZTLHlCQUFxQyxFQUFBO0FBdEY5QztNQXlGUyxtQkFBbUI7TUFDbkIsbUJGekM2QjtNRTBDN0Isc0JBQXNCLEVBQUE7QUEzRi9CO01BOEZTLHFCQUFxQjtNQUNyQixrQkFBa0IsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL2hvbWUvaG9tZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvOyB9XG5cbi5ob21lIHtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4OyB9XG4gIC5ob21lIC5iYWNrZ3JvdW5kIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLW1hc2sucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTA1cHg7IH1cbiAgLmhvbWUgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiA3MnB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgbWFyZ2luLXRvcDogMTkycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTJweDsgfVxuICAuaG9tZSBoNSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMS4yODZyZW07XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgbWFyZ2luLWJvdHRvbTogNThweDsgfVxuICAuaG9tZSAuc2VwYXJhdG9yIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBtYXJnaW46IGF1dG87IH1cbiAgICAuaG9tZSAuc2VwYXJhdG9yLS1ibHVlIHtcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICMwMjllZTM7IH1cbiAgICAuaG9tZSAuc2VwYXJhdG9yLS13aGl0ZSB7XG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAjZTZlNmU2OyB9XG4gIC5ob21lIC5tYWluLXRleHQge1xuICAgIG1hcmdpbjogNzdweCBhdXRvIDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWF4LXdpZHRoOiA4OTJweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMS40MjlyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM0YjRiNGI7IH1cbiAgICAuaG9tZSAubWFpbi10ZXh0IHAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxuICAuaG9tZSAuZm9vdGVyLXRleHQge1xuICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjE0M3JlbTtcbiAgICBjb2xvcjogIzBGMUIyNztcbiAgICBwYWRkaW5nOiA0MHB4IDAgMzVweDsgfVxuICAuaG9tZSAuZ2l0aHViLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyOWVlMztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMS4yODZyZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAxMXB4IDI2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogYXV0bzsgfVxuICAgIC5ob21lIC5naXRodWItYnV0dG9uOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjhjY2E7IH1cbiAgICAuaG9tZSAuZ2l0aHViLWJ1dHRvbiBpIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XG4gICAgICBmb250LXNpemU6IDIuMTI1cmVtO1xuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTsgfVxuICAgIC5ob21lIC5naXRodWItYnV0dG9uIHNwYW4ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuOGVtOyB9XG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcbkBpbXBvcnQgJ2NvbG9ycyc7XHJcbkBpbXBvcnQgJ2ZvbnRzJztcclxuQGltcG9ydCAnc2V0dGluZ3MnO1xyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG4vLyBicmFuZDpcclxuJGJyYW5kOiAjMzdCNUU0ICFkZWZhdWx0O1xyXG5cclxuLy8gYWN0aW9uOlxyXG4kYWN0aW9uOiAjMDc3NkRGICFkZWZhdWx0O1xyXG4kYWN0aW9uLTEwOiAjRTZGMUZDICFkZWZhdWx0O1xyXG4kYWN0aW9uLTQwOiAjOUNDOEYyICFkZWZhdWx0O1xyXG4kYWN0aW9uLTYwOiAjNkFBREVDICFkZWZhdWx0O1xyXG4kYWN0aW9uLTgwOiAjMzk5MUU1ICFkZWZhdWx0O1xyXG4kYWN0aW9uLTEyMDogIzA2NUVCMiAhZGVmYXVsdDtcclxuJGFjdGlvbi0xNTA6ICMwMzNCNzAgIWRlZmF1bHQ7XHJcblxyXG4vLyBzcGFjZTpcclxuJHNwYWNlOiAjMjczMjNEICFkZWZhdWx0O1xyXG4kc3BhY2UtNTogI0YzRjZGOCAhZGVmYXVsdDtcclxuJHNwYWNlLTEwOiAjRUFFRkY1ICFkZWZhdWx0O1xyXG4kc3BhY2UtMjA6ICNDREQ2REYgIWRlZmF1bHQ7XHJcbiRzcGFjZS0zMDogI0FBQjdDNCAhZGVmYXVsdDtcclxuJHNwYWNlLTQwOiAjQTVCMUJDICFkZWZhdWx0O1xyXG4kc3BhY2UtNTA6ICM4ODk4QTcgIWRlZmF1bHQ7XHJcbiRzcGFjZS03MDogIzZDN0I4QiAhZGVmYXVsdDtcclxuJHNwYWNlLTgwOiAjNTY2NTc0ICFkZWZhdWx0O1xyXG4kc3BhY2UtMTEwOiAjMEYxQjI3ICFkZWZhdWx0O1xyXG5cclxuLy8gc3VjY2VzczpcclxuJHN1Y2Nlc3M6ICMwQ0FBNzAgIWRlZmF1bHQ7XHJcbiRzdWNjZXNzLTEwOiAjRTdGN0YxICFkZWZhdWx0O1xyXG4kc3VjY2Vzcy0xMjA6ICMwQTg4NUEgIWRlZmF1bHQ7XHJcbiRzdWNjZXNzLTE0MDogIzA3NjY0MyAhZGVmYXVsdDtcclxuXHJcbi8vIHdhcm5pbmc6XHJcbiR3YXJuaW5nOiAjRUM3RTEzICFkZWZhdWx0O1xyXG4kd2FybmluZy0xMDogI0ZERjJFNyAhZGVmYXVsdDtcclxuJHdhcm5pbmctMTIwOiAjQkQ2NTBGICFkZWZhdWx0O1xyXG4kd2FuaW5nLTE0MDogIzhFNEMwQiAhZGVmYXVsdDtcclxuXHJcbi8vIGVycm9yOlxyXG4kZXJyb3I6ICNERjI5MzUgIWRlZmF1bHQ7XHJcbiRlcnJvci0xMDogI0ZDRUFFQiAhZGVmYXVsdDtcclxuJGVycm9yLTEyMDogI0IyMjEyQSAhZGVmYXVsdDtcclxuJGVycm9yLTE0MDogIzg2MTkyMCAhZGVmYXVsdDtcclxuXHJcbi8vIG5ldXRyYWw6XHJcbiRuZXV0cmFsOiAjMTExMTExICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0yOiAjRkFGQUZBICFkZWZhdWx0O1xyXG4kbmV1dHJhbC00OiAjRjVGNUY1ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC04OiAjRUNFQ0VDICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xMDogI0U3RTdFNyAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTU6ICNEQkRCREIgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTIwOiAjQ0ZDRkNGICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0zMDogI0I4QjhCOCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtNDA6ICNBMEEwQTAgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTUwOiAjODg4ODg4ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC02MDogIzcwNzA3MCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtNzA6ICM1ODU4NTggIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTgwOiAjNDE0MTQxICFkZWZhdWx0O1xyXG4kbmV1dHJhbC1mdWxsOiAjRkZGRkZGICFkZWZhdWx0O1xyXG5cclxuLy8gbWlzYzpcclxuJG1pc2MtY29yYWw6ICAgICAgICAgICAgI2ZhNzE2NyAhZGVmYXVsdDtcclxuJG1pc2MtY29yYWwtbGlnaHQ6ICAgICAgI2ZmY2FjNiAhZGVmYXVsdDtcclxuJG1pc2MtdGFuZ2VyaW5lOiAgICAgICAgI2ZhOWM3ZCAhZGVmYXVsdDtcclxuJG1pc2MtdGFuZ2VyaW5lLWxpZ2h0OiAgI2ZmZDRjNSAhZGVmYXVsdDtcclxuJG1pc2MtcGVhY2g6ICAgICAgICAgICAgI2ZkYmQyYiAhZGVmYXVsdDtcclxuJG1pc2MtcGVhY2gtbGlnaHQ6ICAgICAgI2ZmZjBjNCAhZGVmYXVsdDtcclxuJG1pc2Mtb2xpdmU6ICAgICAgICAgICAgI2FjYzk1MiAhZGVmYXVsdDtcclxuJG1pc2Mtb2xpdmUtbGlnaHQ6ICAgICAgI2U5ZjNkMCAhZGVmYXVsdDtcclxuJG1pc2MtdHVycXVvaXNlOiAgICAgICAgIzJkY2ZiZSAhZGVmYXVsdDtcclxuJG1pc2MtdHVycXVvaXNlLWxpZ2h0OiAgI2I0ZWVlYSAhZGVmYXVsdDtcclxuJG1pc2MtYXF1YTogICAgICAgICAgICAgIzNkYzlmYyAhZGVmYXVsdDtcclxuJG1pc2MtYXF1YS1saWdodDogICAgICAgI2JjZTdmNiAhZGVmYXVsdDtcclxuJG1pc2MtdmlraW5nOiAgICAgICAgICAgIzc3YjFlMSAhZGVmYXVsdDtcclxuJG1pc2MtdmlraW5nLWxpZ2h0OiAgICAgI2NkZTNmOCAhZGVmYXVsdDtcclxuJG1pc2MtbGF2ZW5kZXI6ICAgICAgICAgI2NkODlkMiAhZGVmYXVsdDtcclxuJG1pc2MtbGF2ZW5kZXItbGlnaHQ6ICAgI2Y1ZGFmNyAhZGVmYXVsdDtcclxuXHJcbi8vIGRlcHJlY2F0ZWQ6XHJcbiRzdGF0dXMtd2FybmluZy1kZWZhdWx0OiAjZmE5MzJmICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xNDogI2YwZjBmMCAhZGVmYXVsdDtcclxuJGlucHV0LWZpZWxkLW9uZm9jdXM6ICM4OGM1ZWUgIWRlZmF1bHQ7XHJcbiRpbnB1dC1maWVsZC1lcnJvcjogI2Y1OWVhOSAhZGVmYXVsdDtcclxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5cclxuLy8vIFZBUlM6XHJcbiRlZ2VvLWZvbnRmYWNlLXNyYzogJy4vYXNzZXRzL2ZvbnRzJyAhZGVmYXVsdDtcclxuJGVnZW8taW1hZ2Utc3JjOiAnYXNzZXRzL2ltYWdlcycgIWRlZmF1bHQ7XHJcbiRlZ2VvLWRyb2lkLXNhbnMtbW9ubzogdHJ1ZSAhZGVmYXVsdDtcclxuXHJcbi8vLyBmb250LWZhbWlseTpcclxuJGVnZW8tbnVuaXRvLXNhbnM6ICAgICAgICAgICAgICAgICAgJ051bml0byBTYW5zJyAhZGVmYXVsdDtcclxuJGVnZW8tc3RyYXRpby1pY29uczogICAgICAgICAgICAgICAgJ2ljb19zdHJhdGlvJyAhZGVmYXVsdDtcclxuXHJcbi8vLyBmb250LXNpemU6XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xMDogMC42MjVyZW0gIWRlZmF1bHQ7IC8vIDEwcHhcclxuJGVnZW8tZm9udC1zaXplLTExOiAwLjc4NnJlbSAhZGVmYXVsdDsgLy8gMTFweFxyXG4kZWdlby1mb250LXNpemUtMTI6IDAuODU3cmVtICFkZWZhdWx0OyAvLyAxMnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xNDogMXJlbSAhZGVmYXVsdDsgICAgIC8vIDE0cHhcclxuJGVnZW8tZm9udC1zaXplLTE2OiAxLjE0M3JlbSAhZGVmYXVsdDsgLy8gMTZweFxyXG4kZWdlby1mb250LXNpemUtMTg6IDEuMjg2cmVtICFkZWZhdWx0OyAvLyAxOHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0yMDogMS40MjlyZW0gIWRlZmF1bHQ7IC8vIDIwcHhcclxuJGVnZW8tZm9udC1zaXplLTI0OiAxLjcxNHJlbSAhZGVmYXVsdDsgLy8gMjRweFxyXG4kZWdlby1mb250LXNpemUtMjg6IDJyZW0gIWRlZmF1bHQ7ICAgICAvLyAyOHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0zMjogMi4yODZyZW0gIWRlZmF1bHQ7IC8vIDMycHhcclxuJGVnZW8tZm9udC1zaXplLTM4OiAyLjcxNHJlbSAhZGVmYXVsdDsgLy8gMzhweFxyXG4kZWdlby1mb250LXNpemUtNDI6IDNyZW0gIWRlZmF1bHQ7ICAgICAvLyA0MnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS00ODogMy40MjlyZW0gIWRlZmF1bHQ7IC8vIDQ4cHhcclxuJGVnZW8tZm9udC1zaXplLTUyOiAzLjcxNHJlbSAhZGVmYXVsdDsgLy8gNTJweFxyXG5cclxuLy8vIGxpbmUtaGVpZ2h0OlxyXG4kZWdlby1saW5lLWhlaWdodC0xODogMS4yODZyZW0gIWRlZmF1bHQ7IC8vIDE4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjA6IDEuNDI5cmVtICFkZWZhdWx0OyAvLyAyMHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTIyOiAxLjU3MXJlbSAhZGVmYXVsdDsgLy8gMjJweFxyXG4kZWdlby1saW5lLWhlaWdodC0yNDogMS43MTRyZW0gIWRlZmF1bHQ7IC8vIDI0cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjY6IDEuODU3cmVtICFkZWZhdWx0OyAvLyAyNnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI4OiAycmVtICFkZWZhdWx0OyAgICAgLy8gMjhweFxyXG4kZWdlby1saW5lLWhlaWdodC0zMjogMi4yODZyZW0gIWRlZmF1bHQ7IC8vIDMycHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMzU6IDIuNXJlbSAhZGVmYXVsdDsgICAvLyAzNXB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTQyOiAzcmVtICFkZWZhdWx0OyAgICAgLy8gNDJweFxyXG4kZWdlby1saW5lLWhlaWdodC00NjogMy4yODZyZW0gIWRlZmF1bHQ7IC8vIDQ2cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtNTA6IDMuNTcxcmVtICFkZWZhdWx0OyAvLyA1MHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTU4OiA0LjE0M3JlbSAhZGVmYXVsdDsgLy8gNThweFxyXG4kZWdlby1saW5lLWhlaWdodC02MjogNC40MjlyZW0gIWRlZmF1bHQ7IC8vIDYycHhcclxuXHJcbi8vIGRlcHJlY2F0ZWQ6XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eHhsYXJnZTogIDEuODEzcmVtICFkZWZhdWx0OyAgIC8vIDI5cHhcclxuJGVnZW8tZm9udC1zaXplLXh4bGFyZ2U6ICAgMS41NjNyZW0gIWRlZmF1bHQ7ICAgLy8gMjVweFxyXG4kZWdlby1mb250LXNpemUteGxhcmdlOiAgICAxLjM3NXJlbSAhZGVmYXVsdDsgICAvLyAyMnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14c21hbGw6ICAgIDAuOTM4cmVtICFkZWZhdWx0OyAgIC8vIDE1cHhcclxuXHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eGxhcmdlOiAgIDIuMTI1cmVtICFkZWZhdWx0OyAgLy8gMzRweFxyXG4kZWdlby1saW5lLWhlaWdodC14eGxhcmdlOiAgICAxLjg3NXJlbSAhZGVmYXVsdDsgIC8vIDMwcHhcclxuJGVnZW8tbGluZS1oZWlnaHQtc21hbGw6ICAgICAgMS4zMTNyZW0gIWRlZmF1bHQ7ICAvLyAyMXB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eHNtYWxsOiAgIDEuMDYzcmVtICFkZWZhdWx0OyAgLy8gMTdweFxyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG4vLyB6LWluZGV4XHJcblxyXG4vLyBUaGlzIHBvc2l0aW9ucyBoYXZlIHRvIGJlIHNvcnRlZCBpbiBhIGRlc2NlbmRhbnQgb3JkZXIuIFdoZW4geW91IGFkZCBhIG5ldyBwb3NpdGlvbiwgbWFrZSBzdXJlIHRoZXkgYXJlIHNvcnRlZCBjb3JyZWN0bHkuXHJcbiRtb2RhbC16LWluZGV4OiAxMDAwMCAhZGVmYXVsdDtcclxuJGFsZXJ0LXotaW5kZXg6IDkwMDAgIWRlZmF1bHQ7XHJcbiRmdWxsc2NyZWVuLXotaW5kZXg6IDgwMDAgIWRlZmF1bHQ7XHJcbiRtZW51LXotaW5kZXg6IDc1MDAgIWRlZmF1bHQ7XHJcbiRoZWFkZXItei1pbmRleDogNzAwMCAhZGVmYXVsdDtcclxuXHJcblxyXG5cclxuIiwiQGltcG9ydCAnY29uc3RhbnRzL2luZGV4JztcclxuXHJcbjpob3N0IHtcclxuICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIGhlaWdodDogMTAwJTtcclxuICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmhvbWUge1xyXG4gICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcblxyXG4gICAuYmFja2dyb3VuZCB7XHJcbiAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtbWFzay5wbmcnKTtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEwNXB4O1xyXG4gICB9XHJcblxyXG4gICBoMSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogNzJweDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgY29sb3I6ICRuZXV0cmFsLWZ1bGw7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE5MnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1MnB4O1xyXG4gICB9XHJcblxyXG4gICBoNSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLTE4O1xyXG4gICAgICBjb2xvcjogJG5ldXRyYWwtZnVsbDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNThweDtcclxuICAgfVxyXG5cclxuICAgLnNlcGFyYXRvciB7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgICAmLS1ibHVlIHtcclxuICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzAyOWVlMztcclxuICAgICAgfVxyXG5cclxuICAgICAgJi0td2hpdGUge1xyXG4gICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZTZlNmU2O1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC5tYWluLXRleHQge1xyXG4gICAgICBtYXJnaW46IDc3cHggYXV0byAwIGF1dG87XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIG1heC13aWR0aDogODkycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLTIwO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjNGI0YjRiO1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgIH1cclxuXHJcbiAgIC5mb290ZXItdGV4dCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS0xNjtcclxuICAgICAgY29sb3I6ICRzcGFjZS0xMTA7XHJcbiAgICAgIHBhZGRpbmc6IDQwcHggMCAzNXB4O1xyXG4gICB9XHJcblxyXG4gICAuZ2l0aHViLWJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjllZTM7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLTE4O1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAkbmV1dHJhbC1mdWxsO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDExcHggMjZweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oIzAyOWVlMywgNSUpO1xyXG4gICAgICB9XHJcbiAgICAgIGkge1xyXG4gICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xyXG4gICAgICAgICBmb250LXNpemU6ICRlZ2VvLWxpbmUtaGVpZ2h0LXh4eGxhcmdlO1xyXG4gICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICB9XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgfVxyXG5cclxuICAgfVxyXG5cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/home/home.ts":
/*!**************************************!*\
  !*** ./src/app/modules/home/home.ts ***!
  \**************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.links = [];
        this.rightsText = 'Copyright © 2018 Stratio';
        this.links.push({
            title: 'Github',
            url: 'http://www.github.com/stratio',
            icon: 'icon-github2'
        }, {
            title: 'Twitter',
            url: 'https://twitter.com/stratiobd',
            icon: 'icon-twitter'
        }, {
            title: 'Youtube',
            url: 'https://www.youtube.com/channel/UCuzJA_GlT3TQaU5DyRwDOVw',
            icon: 'icon-youtube'
        }, {
            title: 'Linkedin',
            url: 'https://es.linkedin.com/company/stratiobd',
            icon: 'icon-linkedin'
        }, {
            title: 'Slideshare',
            url: 'https://es.slideshare.net/stratio',
            icon: 'icon-slideshare'
        });
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'demo-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.scss */ "./src/app/modules/home/home.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-home-home-module.js.map