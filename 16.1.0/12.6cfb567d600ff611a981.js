(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{VGMC:function(e,t,n){"use strict";n.r(t);var r=n("CcnG"),o=n("Ip0R"),i=n("dIas"),a=n("gIcY"),s=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e){this.fb=e,this.configDoc={html:"demo/st-textarea-demo/st-textarea-demo.html",ts:"demo/st-textarea-demo/st-textarea-demo.ts",component:"lib/st-textarea/st-textarea.component.ts"};var t=new a.c("",[]);t.disable();var n=new a.c("",[]),r=new a.c("",[a.l.required,a.l.minLength(2)]);this.myForm=e.group({disabledField:t,enabledField:n,requiredField:r}),this.myForm.valueChanges.subscribe(function(e){return console.log(e)})}return e=s([Object(r.Component)({selector:"st-textarea-demo",template:n("d+I8"),styles:[n("isuV")]}),l("design:paramtypes",[a.b])],e)}();n.d(t,"StTextareaDemoModule",function(){return p});var d=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},p=function(){function e(){}return e=d([Object(r.NgModule)({imports:[o.CommonModule,i.Z,i.j.withComponents({components:[c]}),a.e,a.k,i.k],declarations:[c],providers:[]})],e)}()},"d+I8":function(e,t){e.exports='\x3c!--\r\n\r\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n--\x3e\r\n<st-docs [htmlFile]="configDoc.html" [tsFile]="configDoc.ts" [componentFile]="configDoc.component">\r\n   <form [formGroup]="myForm" novalidate>\r\n      <h1>In a form</h1>\r\n      <div class="example">\r\n         <st-textarea name="Disabled" placeholder="Enter description" value="This is a description" label="Description" contextualHelp="This is the contextual help of the components"\r\n             formControlName="disabledField" class="st-form-field" [cols]="50" [rows]="3">\r\n         </st-textarea>\r\n      </div>\r\n\r\n      <div class="example">\r\n\r\n         <st-textarea name="enabledFormControl" placeholder="Enter description" value="This is a description" label="Enabled" contextualHelp="This is the contextual help of the components"\r\n             formControlName="enabledField" class="st-form-field" [cols]="50" [rows]="3">\r\n         </st-textarea>\r\n      </div>\r\n\r\n      <div class="example">\r\n         <st-textarea name="requiredField" placeholder="Enter description" value="This is a description" label="Required field" [required]="true"\r\n             contextualHelp="This is the contextual help of the components" formControlName="requiredField" class="st-form-field" [cols]="50" [rows]="3">\r\n         </st-textarea>\r\n      </div>\r\n      <h1>Out a form</h1>\r\n      <div class="example">\r\n         <st-textarea placeholder="Enter description" value="This is a description" label="Description" contextualHelp="This is the contextual help of the components"\r\n             [cols]="50" [rows]="3">\r\n         </st-textarea>\r\n      </div>\r\n   </form>\r\n</st-docs>\r\n'},isuV:function(e,t){e.exports='@charset "UTF-8";\n/**\r\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.example {\n  width: 100%; }\n.example-title {\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n  width: 280px; }\n'}}]);