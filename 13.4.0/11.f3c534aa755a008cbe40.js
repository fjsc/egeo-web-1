(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{VGMC:function(e,r,n){"use strict";n.r(r);var t=n("CcnG"),i=n("Ip0R"),o=n("dIas"),a=n("gIcY"),s=function(e,r,n,t){var i,o=arguments.length,a=o<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,n):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,r,n,t);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(r,n,a):i(r,n))||a);return o>3&&a&&Object.defineProperty(r,n,a),a},l=function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)},c=function(){function e(e){this.fb=e;var r=new a.c("",[]);r.disable();var n=new a.c("",[]),t=new a.c("",[a.l.required,a.l.minLength(2)]);this.myForm=e.group({disabledField:r,enabledField:n,requiredField:t}),this.myForm.valueChanges.subscribe(function(e){return console.log(e)})}return e=s([Object(t.Component)({selector:"st-textarea-demo",template:n("d+I8"),styles:[n("isuV")]}),l("design:paramtypes",[a.b])],e)}();n.d(r,"StTextareaDemoModule",function(){return p});var d=function(e,r,n,t){var i,o=arguments.length,a=o<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,n):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,r,n,t);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(r,n,a):i(r,n))||a);return o>3&&a&&Object.defineProperty(r,n,a),a},p=function(){function e(){}return e=d([Object(t.NgModule)({imports:[i.CommonModule,o.V,o.i.withComponents({components:[c]}),a.e,a.k],declarations:[c],providers:[]})],e)}()},"d+I8":function(e,r){e.exports='\x3c!--\r\n\r\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n--\x3e\r\n\r\n<form [formGroup]="myForm" novalidate>\r\n   <h1>In a form</h1>\r\n   <div class="example">\r\n      <st-textarea name="Disabled"\r\n                   placeholder="Enter description"\r\n                   value="This is a description"\r\n                   label="Description"\r\n                   contextualHelp="This is the contextual help of the components"\r\n                   formControlName="disabledField"\r\n                   class="st-form-field"\r\n                   [cols]="50"\r\n                   [rows]="3">\r\n      </st-textarea>\r\n   </div>\r\n\r\n   <div class="example">\r\n\r\n      <st-textarea name="enabledFormControl"\r\n                   placeholder="Enter description"\r\n                   value="This is a description"\r\n                   label="Enabled"\r\n                   contextualHelp="This is the contextual help of the components"\r\n                   formControlName="enabledField"\r\n                   class="st-form-field"\r\n                   [cols]="50"\r\n                   [rows]="3">\r\n      </st-textarea>\r\n   </div>\r\n\r\n   <div class="example">\r\n      <st-textarea name="requiredField"\r\n                   placeholder="Enter description"\r\n                   value="This is a description"\r\n                   label="Required field"\r\n                   [required]="true"\r\n                   contextualHelp="This is the contextual help of the components"\r\n                   formControlName="requiredField"\r\n                   class="st-form-field"\r\n                   [cols]="50"\r\n                   [rows]="3">\r\n      </st-textarea>\r\n   </div>\r\n   <h1>Out a form</h1>\r\n   <div class="example">\r\n      <st-textarea\r\n         placeholder="Enter description"\r\n         value="This is a description"\r\n         label="Description"\r\n         contextualHelp="This is the contextual help of the components"\r\n         [cols]="50"\r\n         [rows]="3">\r\n      </st-textarea>\r\n   </div>\r\n</form>\r\n\r\n\r\n'},isuV:function(e,r){e.exports='@charset "UTF-8";\n/**\r\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.example {\n  width: 100%; }\n.example-title {\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n  width: 280px; }\n'}}]);