(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"k/2p":function(e,t){e.exports='\x3c!--\n\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n--\x3e\n<section class="container-fluid">\n   <div style="margin: 20px 0; width: 288px; height: 400px">\n      <st-tab-box [tabs]="tabs" (select)="onSelectTab($event)" qaTag="tab-box">\n         <div *ngIf="selectedTab.label === \'Tab1\'">Tab 1 content</div>\n         <div *ngIf="selectedTab.label === \'Tab2\'">Tab 2 content</div>\n      </st-tab-box>\n   </div>\n</section>\n'},"sn+g":function(e,t,n){"use strict";n.r(t);var i=n("CcnG"),o=n("Ip0R"),a=n("dIas"),c=function(e,t,n,i){var o,a=arguments.length,c=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(c=(a<3?o(c):a>3?o(t,n,c):o(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c},r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(){this.tabs=[{label:"Tab1",active:!0},{label:"Tab2",active:!1}],this.selectedTab=this.tabs[0]}return e.prototype.onSelectTab=function(e){this.selectedTab=e},e=c([Object(i.Component)({selector:"st-tab-box-demo",template:n("k/2p"),styles:[n("xxcR")]}),r("design:paramtypes",[])],e)}();n.d(t,"StTabBoxDemoModule",function(){return f});var l=function(e,t,n,i){var o,a=arguments.length,c=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(c=(a<3?o(c):a>3?o(t,n,c):o(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c},f=function(){function e(){}return e=l([Object(i.NgModule)({imports:[o.b,a.S,a.i.withComponents({components:[s]})],declarations:[s],providers:[]})],e)}()},xxcR:function(e,t){e.exports='@charset "UTF-8";\n/**\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n'}}]);