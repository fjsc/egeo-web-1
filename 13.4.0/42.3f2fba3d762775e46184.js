(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{IGFU:function(n,e,t){"use strict";t.r(e);var r=t("CcnG"),o=t("Ip0R"),i=t("dIas"),a=function(n,e,t,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var c=n.length-1;c>=0;c--)(o=n[c])&&(a=(i<3?o(a):i>3?o(e,t,a):o(e,t))||a);return i>3&&a&&Object.defineProperty(e,t,a),a},c=function(){function n(){}return n=a([Object(r.Component)({selector:"st-checkbox-demo",template:t("hS/6"),styles:[t("oO9E")]})],n)}();t.d(e,"StCheckboxDemoModule",function(){return l});var s=function(n,e,t,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,t,r);else for(var c=n.length-1;c>=0;c--)(o=n[c])&&(a=(i<3?o(a):i>3?o(e,t,a):o(e,t))||a);return i>3&&a&&Object.defineProperty(e,t,a),a},l=function(){function n(){}return n=s([Object(r.NgModule)({imports:[o.CommonModule,i.h,i.i.withComponents({components:[c]})],declarations:[c],providers:[]})],n)}()},"hS/6":function(n,e){n.exports='\x3c!--\r\n\r\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n--\x3e\r\n\r\n<section class="container-liquid">\r\n\r\n   <div class="row">\r\n      <div class="col-md-12">\r\n         <p>Inline:</p>\r\n      </div>\r\n      <div class="col-md-6">\r\n         <form>\r\n            <st-checkbox name="nameA" value="1"><span>Option A</span>\r\n            </st-checkbox>\r\n            <st-checkbox name="nameA" value="2"><span>Option B</span>\r\n            </st-checkbox>\r\n            <st-checkbox name="nameA" value="3" [disabled]="true"><span>Option C (disabled)</span>\r\n            </st-checkbox>\r\n            <st-checkbox name="nameA" value="3" [disabled]="true" [checked]="true">\r\n               <span>Option C (disabled and checked)</span>\r\n            </st-checkbox>\r\n         </form>\r\n      </div>\r\n   </div>\r\n\r\n   <div class="separator"></div>\r\n\r\n   <div class="row">\r\n      <div class="col-md-12">\r\n         <p>Block:</p>\r\n      </div>\r\n      <div class="col-md-6">\r\n         <form class="checkbox-flex">\r\n            <st-checkbox name="nameB" value="1"><span>Option A</span>\r\n            </st-checkbox>\r\n            <st-checkbox name="nameB" value="2"><span>Option B</span>\r\n            </st-checkbox>\r\n            <st-checkbox name="nameB" value="3"><span>Option C</span>\r\n            </st-checkbox>\r\n         </form>\r\n      </div>\r\n   </div>\r\n\r\n</section>\r\n'},oO9E:function(n,e){n.exports="@charset \"UTF-8\";\n/**\r\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\nh1 {\n  font-family: 'Nunito Sans Bold';\n  font-size: 20px;\n  margin-bottom: 20px;\n  padding: 0;\n  line-height: 25px;\n  font-weight: lighter; }\np {\n  font-family: 'Nunito Sans';\n  margin: 0;\n  padding: 0; }\n.temp1 {\n  font-family: 'Nunito Sans';\n  color: #aaa;\n  font-size: 12px;\n  line-height: 12px;\n  display: block;\n  margin-bottom: 5px; }\n.temp2 {\n  font-family: 'Nunito Sans';\n  background-color: #f1f1f1;\n  padding: 10px 0; }\n.separator {\n  display: block;\n  margin: 10px;\n  overflow: hidden; }\n"}}]);