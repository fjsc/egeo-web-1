(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"65OO":function(t,n){t.exports=".st-live-example {\n  display: block;\n  width: 100%;\n  padding-bottom: 30px; }\n"},GfKx:function(t,n){t.exports='<st-docs [htmlFile]="configDoc.html" [tsFile]="configDoc.ts" [componentFile]="configDoc.component">\r\n  <section class="container-fluid col-md-24">\r\n\r\n    <div class="st-live-example">\r\n      <h1 class="st-live-example-title">Simple Modal:</h1>\r\n      <button class="button button-primary" (click)="modal1 = true">\r\n        <span>Simple Message Modal</span>\r\n      </button>\r\n\r\n      <st-modal2 modalTitle="Modal title"\r\n        (onClose)="modal1 = false"\r\n        *ngIf="modal1">\r\n        <div>\r\n          Modal content\r\n        </div>\r\n      </st-modal2>\r\n\r\n    </div>\r\n\r\n    <div class="st-live-example">\r\n      <h1 class="st-live-example-title">Simple modal with ESC control</h1>\r\n      <button class="button button-primary" (click)="modal2 = true">\r\n        <span>Simple message modal with ESC control</span>\r\n      </button>\r\n  \r\n      <st-modal2 modalTitle="Modal title"\r\n        closeOnEscape="true"\r\n        (onClose)="modal2 = false"\r\n        *ngIf="modal2">\r\n        <div>\r\n          Modal content\r\n        </div>\r\n      </st-modal2>\r\n  \r\n    </div>\r\n    <div class="st-live-example">\r\n      <h1 class="st-live-example-title">Simple modal with custom Header</h1>\r\n      <button class="button button-primary" (click)="modal3 = true">\r\n        <span>Custom title Modal</span>\r\n      </button>\r\n      \r\n      <st-modal2\r\n        closeOnEscape="true"\r\n        (onClose)="modal3 = false"\r\n        *ngIf="modal3">\r\n        <div st-modal-title>\r\n          Custom <b>title</b>\r\n        </div>\r\n        <div>\r\n          Modal content\r\n        </div>\r\n      </st-modal2>\r\n    \r\n    </div>\r\n  </section>\r\n</st-docs>'},ar8e:function(t,n,o){"use strict";o.r(n);var e=o("CcnG"),l=o("Ip0R"),r=o("dIas"),s=function(t,n,o,e){var l,r=arguments.length,s=r<3?n:null===e?e=Object.getOwnPropertyDescriptor(n,o):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,n,o,e);else for(var a=t.length-1;a>=0;a--)(l=t[a])&&(s=(r<3?l(s):r>3?l(n,o,s):l(n,o))||s);return r>3&&s&&Object.defineProperty(n,o,s),s},a=function(){function t(){this.modal1=!1,this.modal2=!1,this.modal3=!1,this.configDoc={html:"demo/st-modal2-demo/st-modal2-demo.component.html",ts:"demo/st-modal2-demo/st-modal2-demo.component.ts",component:"lib/st-modal2/st-modal2.component.ts"}}return t=s([Object(e.Component)({selector:"st-modal2-demo",template:o("GfKx"),styles:[o("65OO")]})],t)}();o.d(n,"StModal2DemoModule",function(){return c});var i=function(t,n,o,e){var l,r=arguments.length,s=r<3?n:null===e?e=Object.getOwnPropertyDescriptor(n,o):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,n,o,e);else for(var a=t.length-1;a>=0;a--)(l=t[a])&&(s=(r<3?l(s):r>3?l(n,o,s):l(n,o))||s);return r>3&&s&&Object.defineProperty(n,o,s),s},c=function(){function t(){}return t=i([Object(e.NgModule)({imports:[l.CommonModule,r.D,r.j.withComponents({components:[a]}),r.k],declarations:[a],providers:[]})],t)}()}}]);