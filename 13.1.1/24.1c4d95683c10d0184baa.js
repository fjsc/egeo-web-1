(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{J8VT:function(t,e,n){"use strict";n.r(e);var i=n("CcnG"),r=n("Ip0R"),a=n("dIas"),o=function(t,e,n,i){var r,a=arguments.length,o=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(a<3?r(o):a>3?r(e,n,o):r(e,n))||o);return a>3&&o&&Object.defineProperty(e,n,o),o},s=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(){this.title="st page title demo",this.error=!1,this.errorMsg="",this.minlength=1,this.maxlength=20}return t.prototype.editTitle=function(t){t.length===this.maxlength?(this.error=!0,this.errorMsg="Error filling page title input"):(this.error=!1,this.errorMsg="")},t=o([Object(i.Component)({selector:"st-page-title-demo-example",template:n("M2o0"),styles:[n("xv/3")]}),s("design:paramtypes",[])],t)}();n.d(e,"StPageTitleDemoModule",function(){return p});var c=function(t,e,n,i){var r,a=arguments.length,o=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(o=(a<3?r(o):a>3?r(e,n,o):r(e,n))||o);return a>3&&o&&Object.defineProperty(e,n,o),o},p=function(){function t(){}return t=c([Object(i.NgModule)({imports:[r.b,a.F,a.M,a.i.withComponents({components:[l]})],declarations:[l],providers:[]})],t)}()},M2o0:function(t,e){t.exports='\x3c!--\n\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n--\x3e\n<section class="page-container col-md-24">\n   <h3>Title without left button:</h3>\n   <st-page-title [title]="title" qaTag="page-title">\n      <div class="right-content">\n         <st-search qa="test-page-title" placeholder="search" class="margin-right"></st-search>\n         <button class="button button-primary">\n            <span>Create</span>\n         </button>\n      </div>\n   </st-page-title>\n</section>\n\n<section class="page-container col-md-24">\n   <h3>Title without left button and with pretitle:</h3>\n   <st-page-title title="Egeo" preTitle="Project" qaTag="page-title-pretitle"></st-page-title>\n</section>\n\n<section class="page-container col-md-24">\n   <h3>Title with back button:</h3>\n   <st-page-title leftButton="icon-reply" [title]="title" qaTag="page-title-button">\n      <div class="right-content">\n          <st-search qa="test-page-title" placeholder="search" class="margin-right"></st-search>\n         <button class="button button-primary">\n            <span>Create</span>\n         </button>\n      </div>\n   </st-page-title>\n</section>\n\n<section class="page-container col-md-24">\n   <h3>Title editable:</h3>\n   <st-page-title\n      [title]="title"\n      qaTag="page-title-editable"\n      [editable]="true"\n      placeholder="Page Title Editable"\n      [maxlength]="20"\n      [minlength]="1">\n      <div class="right-content">\n         <button class="button button-primary">\n            <span>Create</span>\n         </button>\n      </div>\n   </st-page-title>\n</section>\n\n<section class="page-container col-md-24">\n   <h3>Title editable with errors:</h3>\n   <st-page-title\n      [title]="title"\n      qaTag="page-title-editable"\n      [editable]="true"\n      placeholder="Page Title Editable"\n      [maxlength]="maxlength"\n      [minlength]="minlength"\n      [error]="error"\n      [errorMessage]="errorMsg"\n      (edit)=editTitle($event)>\n      <div class="right-content">\n         <button class="button button-primary">\n            <span>Create</span>\n         </button>\n      </div>\n   </st-page-title>\n</section>\n'},"xv/3":function(t,e){t.exports='@charset "UTF-8";\n/**\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.box-right {\n  display: inline-block;\n  height: 35px;\n  border: 1px solid #999;\n  margin: 0 5px; }\n.box-content {\n  margin: 0 5px;\n  line-height: 35px; }\n.right-content {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  min-width: 300px;\n  margin-bottom: 10px;\n  align-content: flex-end; }\n.margin-right {\n  margin-right: 10px; }\n.page-container {\n  width: 100%;\n  margin-bottom: 35px; }\nh3 {\n  margin-bottom: 5px; }\n'}}]);