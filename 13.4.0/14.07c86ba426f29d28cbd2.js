(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"k/2p":function(e,t){e.exports='\x3c!--\r\n\r\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n--\x3e\r\n<section class="container-fluid">\r\n   <div style="margin: 20px 0; width: 288px; height: 400px">\r\n      <st-tab-box [tabs]="tabs" (select)="onSelectTab($event)" qaTag="tab-box">\r\n         <div *ngIf="selectedTab.label === \'Tab1\'">Tab 1 content</div>\r\n         <div *ngIf="selectedTab.label === \'Tab2\'">Tab 2 content</div>\r\n      </st-tab-box>\r\n   </div>\r\n</section>\r\n'},"sn+g":function(e,t,n){"use strict";n.r(t);var r=n("CcnG"),o=n("Ip0R"),i=n("dIas"),a=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(){this.tabs=[{label:"Tab1",active:!0},{label:"Tab2",active:!1}],this.selectedTab=this.tabs[0]}return e.prototype.onSelectTab=function(e){this.selectedTab=e},e=a([Object(r.Component)({selector:"st-tab-box-demo",template:n("k/2p"),styles:[n("xxcR")]}),c("design:paramtypes",[])],e)}();n.d(t,"StTabBoxDemoModule",function(){return f});var l=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},f=function(){function e(){}return e=l([Object(r.NgModule)({imports:[o.CommonModule,i.S,i.i.withComponents({components:[s]})],declarations:[s],providers:[]})],e)}()},xxcR:function(e,t){e.exports='@charset "UTF-8";\n/**\r\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n'}}]);