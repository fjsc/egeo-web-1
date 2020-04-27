(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-table-demo-st-table-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-table-demo/st-table-demo.component.html":
/*!***********************************************************************************************************************!*\
  !*** D:/projects/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-table-demo/st-table-demo.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\r\n   <section class=\"container-liquid\">\r\n      <div class=\"demo-layout\">\r\n         <p class=\"introduction\">Tables are structured grids of information that help users understand large amounts of\r\n            data.</p>\r\n         <span class=\"separator\"></span>\r\n         <h1 class=\"title\">Design and behaviour</h1>\r\n         <p class=\"paragraph\">When a user needs to understand, manipulate, or edit a group of information that is\r\n            text-based\r\n            and has the same content structure you use a Table component. Table’s main content can be of two main types:\r\n            Normal content tables and file system content. Depending on the type of table’s content some options will be\r\n            available when selecting one or more rows allowing the user to perform bulk options. As well, if 2 or more\r\n            items\r\n            are selected a row, a new row will appear under the header of the table allowing to select all the avaiable\r\n            items\r\n            on the table even if it has pagination. Tables can have a breadcrumbs row before the table header if the table\r\n            type allows folder / files navigation. In that case too a first folder with two dots allows the user go back to\r\n            the parent folder.\r\n         </p>\r\n         <h1 class=\"title\">Normal content table design and behaviour</h1>\r\n         <p class=\"paragraph\">They can have two rows of items before the table header.\r\n            On the first you can have a title on the top left (optional) and dropdown filters on the right (optional)\r\n            On second you can have a Search box (Optional) on the left, and toolbar icons (optional) on the right. You can\r\n            choose between an Add toolbar icon or a more explicit Call to Action button on the right. In case you have\r\n            toolbar\r\n            icons and a CTA, please, place your CTA as the latest element of the row.\r\n            When the user scrolls and reach the header of the table, this element will remain sticked to the main header\r\n            while\r\n            scrolling so the user always know what kind of data is seeing on the current table. On scroll up the subheader\r\n            will appear. To understand better this behaviour please interact with the following tables</p>\r\n\r\n      </div>\r\n\r\n      <h2 class=\"subtitle\">Selectable tables</h2>\r\n      <p class=\"paragraph\"> Tables can be configured to stand up or not the selected rows.</p>\r\n      <div class=\"row\">\r\n         <div class=\"col-sm-6 col-lg-6 col-xs-12\">\r\n            <st-table [fields]=\"smallTableFields\" [sortable]=\"false\" [selectableAll]=\"true\" (selectAll)=\"onSelectAll($event, 0)\">\r\n               <tbody>\r\n                  <tr st-table-row *ngFor=\"let userData of data; let index = index\" [selected]=\"selectedCheckboxes[0][index]\">\r\n\r\n                     <td st-table-cell class=\"clickable\" st-table-row-content>\r\n                        <st-checkbox class=\"st-table__checkbox\" [checked]=\"selectedCheckboxes[0][index]\"\r\n                            (change)=\"onSelectRow($event, index, selectedCheckboxes[0])\">\r\n                        </st-checkbox>\r\n                        <label>{{userData.id}}</label>\r\n                     </td>\r\n                     <td st-table-cell st-table-row-content>\r\n                        <label>{{userData.name}}</label>\r\n                     </td>\r\n                     <td st-table-cell st-table-row-content>\r\n                        <label>{{userData.lastName}}</label>\r\n                     </td>\r\n                     <td st-table-row-hover class=\"st-table-hover\">\r\n                        <i class=\"icon icon-ellipsis\"></i>\r\n                     </td>\r\n                  </tr>\r\n               </tbody>\r\n            </st-table>\r\n         </div>\r\n         <div class=\"col-sm-6 col-lg-6 col-xs-12\">\r\n\r\n            <st-table [fields]=\"smallTableFields\" [sortable]=\"false\" [selectableAll]=\"true\" [hasHoverMenu]=\"true\"\r\n                (selectAll)=\"onSelectAll($event, 0)\">\r\n               <tbody>\r\n                  <tr st-table-row *ngFor=\"let userData of data; let index = index\" [selected]=\"selectedCheckboxes[0][index]\"\r\n                      [standUpSelected]=\"false\">\r\n                     <td st-table-cell class=\"clickable\" st-table-row-content>\r\n                        <st-checkbox class=\"st-table__checkbox\" [checked]=\"selectedCheckboxes[0][index]\"\r\n                            (change)=\"onSelectRow($event, index, selectedCheckboxes[0])\">\r\n                        </st-checkbox>\r\n                        <label>{{userData.id}}</label>\r\n                     </td>\r\n                     <td st-table-cell st-table-row-content>\r\n                        <label>{{userData.name}}</label>\r\n                     </td>\r\n                     <td st-table-cell st-table-row-content>\r\n                        <label>{{userData.lastName}}</label>\r\n                     </td>\r\n                     <td st-table-row-hover class=\"st-table-hover\">\r\n                        <i class=\"icon icon-ellipsis\"></i>\r\n                     </td>\r\n                  </tr>\r\n               </tbody>\r\n            </st-table>\r\n         </div>\r\n      </div>\r\n\r\n      <h2 class=\"subtitle\">Sortable table</h2>\r\n      <p class=\"paragraph\">Table can be configured as sortable or not. Moreover, it allows to configure only specific\r\n         fields as sortable </p>\r\n      <st-table [fields]=\"fields\" (changeOrder)=\"onSortTable($event)\">\r\n         <tbody>\r\n            <tr st-table-row *ngFor=\"let userData of sortedData; let index = index\">\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.id}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.name}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.lastName}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.phone}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.company}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.completedProfile}}</label>\r\n               </td>\r\n\r\n               <td st-table-row-hover class=\"st-table-hover\">\r\n                  <i class=\"icon icon-ellipsis\"></i>\r\n               </td>\r\n            </tr>\r\n         </tbody>\r\n      </st-table>\r\n\r\n      <h2 class=\"subtitle\">Filterable and sortable table</h2>\r\n      <p class=\"paragraph\">Table can be configured as filterable or not. Moreover, it allows to configure only specific\r\n         fields as filterable </p>\r\n      <st-table [filterable]=\"true\" [fields]=\"filterFields\" (selectedFilters)=\"onSelectedFilters($event)\" (changeOrder)=\"onSortTable($event)\">\r\n         <tbody>\r\n            <tr st-table-row *ngFor=\"let userData of filterData; let index = index\">\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.id}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.name}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.lastName}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.phone}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.company}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.completedProfile}}</label>\r\n               </td>\r\n               <td st-table-row-hover class=\"st-table-hover\">\r\n                  <i class=\"icon icon-ellipsis\"></i>\r\n               </td>\r\n            </tr>\r\n         </tbody>\r\n      </st-table>\r\n\r\n      <h2 class=\"subtitle\">Filterable table with custom template</h2>\r\n      <p class=\"paragraph\">Table can be configured as filterable or not. Moreover, it allows to configure only specific\r\n         fields as filterable </p>\r\n      <ng-template #filterContent let-index=\"index\">\r\n         <div *ngIf=\"index === 2\">\r\n            <div>\r\n               <st-checkbox name=\"nameA\" value=\"1\">\r\n                  <span>Option A</span>\r\n               </st-checkbox>\r\n               <st-checkbox name=\"nameB\" value=\"2\">\r\n                  <span>Option B</span>\r\n               </st-checkbox>\r\n               <st-checkbox name=\"nameC\" value=\"3\">\r\n                  <span>Option C</span>\r\n               </st-checkbox>\r\n            </div>\r\n            <button class=\"button button-primary small st-table__popover-button\" (click)=\"onFilter(index); checkIcon(index)\">\r\n               <span>Apply</span>\r\n            </button>\r\n         </div>\r\n         <div *ngIf=\"index === 3\">\r\n            <div>\r\n               <span>Hellooo {{index}}</span>\r\n            </div>\r\n\r\n            <button class=\"button button-primary small st-table__popover-button\" (click)=\"onFilter(index); checkIcon(index)\">\r\n               <span>Apply</span>\r\n            </button>\r\n         </div>\r\n      </ng-template>\r\n      <st-table [sortable]=\"false\" [filterable]=\"true\" [fields]=\"filterFields\" [templateContentFilter]=\"filterContent\" [statusFilter]=\"statusFilter\">\r\n         <tbody>\r\n            <tr st-table-row *ngFor=\"let userData of filterData; let index = index\">\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.id}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.name}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.lastName}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.phone}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.company}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.completedProfile}}</label>\r\n               </td>\r\n               <td st-table-row-hover class=\"st-table-hover\">\r\n                  <i class=\"icon icon-ellipsis\"></i>\r\n               </td>\r\n            </tr>\r\n         </tbody>\r\n      </st-table>\r\n\r\n      <h2 class=\"subtitle\">Sortable and selectable table</h2>\r\n      <p class=\"paragraph\">Table can be configured as sortable and selectable simultaneously</p>\r\n      <st-table [fields]=\"fields\" (changeOrder)=\"onSortTable($event)\" [selectableAll]=\"true\" [hasHoverMenu]=\"true\"\r\n          (selectAll)=\"onSelectAll($event, 0)\">\r\n         <tbody>\r\n            <tr st-table-row *ngFor=\"let userData of sortedData; let index = index\" [selected]=\"selectedCheckboxes[0][index]\">\r\n               <td class=\"clickable\" st-table-cell st-table-row-content>\r\n                  <st-checkbox class=\"st-table__checkbox\" [checked]=\"selectedCheckboxes[0][index]\" (click)=\"$event.stopPropagation()\"\r\n                      (change)=\"onSelectRow($event, index, selectedCheckboxes[0])\">\r\n                  </st-checkbox>\r\n                  <label>{{userData.id}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.name}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.lastName}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.phone}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.company}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.completedProfile}}</label>\r\n               </td>\r\n\r\n               <td st-table-row-hover class=\"st-table-hover\">\r\n                  <i class=\"icon icon-ellipsis\"></i>\r\n               </td>\r\n            </tr>\r\n         </tbody>\r\n      </st-table>\r\n\r\n\r\n      <h2 class=\"subtitle\">Table with fixed header</h2>\r\n      <p class=\"paragraph\">In order to fix the header, it is needed to set the input 'fixedHeader' to true and specify\r\n         to st-table tag from outside <i><b>\"display:flex; height: 'the desired height'</b></i>\"</p>\r\n\r\n      <st-table [fields]=\"fields\" [sortable]=\"false\" [fixedHeader]=\"true\" [hasHoverMenu]=\"false\" class=\"table--fixed-header\">\r\n         <tbody>\r\n            <tr st-table-row *ngFor=\"let userData of data\">\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.id}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.name}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.lastName}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.phone}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.company}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.completedProfile}}</label>\r\n               </td>\r\n            </tr>\r\n         </tbody>\r\n      </st-table>\r\n\r\n\r\n      <h2 class=\"subtitle\">Table without header</h2>\r\n      <st-table [fields]=\"fields\" [header]=\"false\">\r\n         <tbody>\r\n            <tr st-table-row *ngFor=\"let userData of data\">\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.id}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.name}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.lastName}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.phone}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.company}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.completedProfile}}</label>\r\n               </td>\r\n               <td st-table-row-hover class=\"st-table-hover\">\r\n                  <i class=\"icon icon-arrow2_right\"></i>\r\n               </td>\r\n            </tr>\r\n         </tbody>\r\n      </st-table>\r\n\r\n      <h2 class=\"subtitle\">Table with complex hover actions and the custom class 'separated rows'</h2>\r\n      <st-table [fields]=\"fields\" [sortable]=\"false\" customClasses=\"separated-rows\" qaTag=\"table-qa-tag\">\r\n         <tbody>\r\n            <tr st-table-row *ngFor=\"let userData of data\">\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.id}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.name}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.lastName}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.phone}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.company}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.completedProfile}}</label>\r\n               </td>\r\n               <td st-table-row-hover class=\"st-table-hover\">\r\n                  <button class=\"button button-toolbar\"><i class=\"icon-circle-check\"></i></button>\r\n                  <button class=\"button button-toolbar\"><i class=\"icon-download\"></i></button>\r\n               </td>\r\n            </tr>\r\n         </tbody>\r\n      </st-table>\r\n\r\n      <h2 class=\"subtitle\">Table with special content (charts, images)</h2>\r\n      <st-table [fields]=\"fields\" [hasHoverMenu]=\"false\">\r\n         <tbody>\r\n            <tr st-table-row *ngFor=\"let userData of data\">\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.id}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.name}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.lastName}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <label>{{userData.phone}}</label>\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <img style=\"width: 50px;\" src=\"assets/images/stratio.png\">\r\n               </td>\r\n               <td st-table-cell st-table-row-content>\r\n                  <div style=\"width: 25px;  height: 25px;\">\r\n                     <svg viewBox=\"0 0 100 100\" style=\"display: block; width: 100%;\">\r\n                        <path d=\"M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94\" stroke=\"#eee\" stroke-width=\"1\" fill-opacity=\"0\"></path>\r\n                        <path d=\"M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94\" stroke=\"rgb(55,181,228)\" stroke-width=\"6\" fill-opacity=\"0\"\r\n                            style=\"stroke-dasharray: 295.416, 295.416; stroke-dashoffset: 59.0832;\"></path>\r\n                     </svg>\r\n                  </div>\r\n               </td>\r\n            </tr>\r\n         </tbody>\r\n      </st-table>\r\n\r\n   </section>\r\n\r\n</st-docs>\r\n");

/***/ }),

/***/ "./src/app/demos/st-table-demo/st-table-demo.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/demos/st-table-demo/st-table-demo.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\nst-table {\n  position: relative; }\n.st-table__popover-button {\n  margin-top: 20px;\n  width: 100%; }\ntd > .icon-ellipsis {\n  cursor: pointer;\n  font-size: 24px;\n  vertical-align: text-top; }\n.button-toolbar {\n  margin-right: 6px; }\n.table--fixed-header {\n  display: flex;\n  height: 150px; }\n.subtitle {\n  font-weight: 400;\n  font-size: 1.429rem;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.714rem;\n  letter-spacing: normal;\n  color: #111111;\n  padding: 26px 0;\n  display: inline-block; }\n.paragraph {\n  font-weight: normal;\n  font-size: 1.286rem;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.571rem;\n  letter-spacing: normal;\n  color: #111111;\n  padding-bottom: 20px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXRhYmxlLWRlbW8vc3QtdGFibGUtZGVtby5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXRhYmxlLWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvLWRlbW9cXHNyY1xcYXBwXFxkZW1vc1xcc3QtdGFibGUtZGVtb1xcc3QtdGFibGUtZGVtby5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXRhYmxlLWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9pbmRleC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtdGFibGUtZGVtby9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW9cXHNyY1xcdGhlbWVcXGNvbnN0YW50c1xcX2NvbG9ycy5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtdGFibGUtZGVtby9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW9cXHNyY1xcdGhlbWVcXGNvbnN0YW50c1xcX2ZvbnRzLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC10YWJsZS1kZW1vL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfc2V0dGluZ3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7OztFRFVFO0FFVkY7Ozs7Ozs7OztFRm9CRTtBR3BCRjs7Ozs7Ozs7O0VIOEJFO0FJOUJGOzs7Ozs7Ozs7RUp3Q0U7QUt4Q0Y7Ozs7Ozs7OztFTGtERTtBQ3JDRjtFQUNHLGtCQUFrQixFQUFBO0FBSWxCO0VBQ0csZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTtBQUlqQjtFQUNHLGVBQWU7RUFDZixlQUFlO0VBQ2Ysd0JBQXdCLEVBQUE7QUFHM0I7RUFDRyxpQkFBaUIsRUFBQTtBQUlqQjtFQUNHLGFBQWE7RUFDYixhQUFhLEVBQUE7QUFJbkI7RUFDRyxnQkFBZ0I7RUFDaEIsbUJHaEJ5QjtFSGlCekIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixxQkdOMkI7RUhPM0Isc0JBQXNCO0VBQ3RCLGNFTWM7RUZMZCxlQUFlO0VBQ2YscUJBQXFCLEVBQUE7QUFHeEI7RUFDRyxtQkFBbUI7RUFDbkIsbUJHN0J5QjtFSDhCekIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixxQkduQjJCO0VIb0IzQixzQkFBc0I7RUFDdEIsY0VOYztFRk9kLG9CQUFvQixFQUFBIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXRhYmxlLWRlbW8vc3QtdGFibGUtZGVtby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbnN0LXRhYmxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5zdC10YWJsZV9fcG9wb3Zlci1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTsgfVxuXG50ZCA+IC5pY29uLWVsbGlwc2lzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDsgfVxuXG4uYnV0dG9uLXRvb2xiYXIge1xuICBtYXJnaW4tcmlnaHQ6IDZweDsgfVxuXG4udGFibGUtLWZpeGVkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTUwcHg7IH1cblxuLnN1YnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxLjQyOXJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNzE0cmVtO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzExMTExMTtcbiAgcGFkZGluZzogMjZweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLnBhcmFncmFwaCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMS4yODZyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU3MXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICMxMTExMTE7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4OyB9XG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG5AaW1wb3J0ICdjb25zdGFudHMvaW5kZXgnO1xyXG5cclxuc3QtdGFibGUge1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zdC10YWJsZSB7XHJcbiAgICZfX3BvcG92ZXItYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgIH1cclxufVxyXG5cclxudGQgPiAuaWNvbi1lbGxpcHNpcyB7XHJcbiAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbn1cclxuXHJcbi5idXR0b24tdG9vbGJhciB7XHJcbiAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAmLS1maXhlZC1oZWFkZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICB9XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLTIwO1xyXG4gICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICBsaW5lLWhlaWdodDogJGVnZW8tbGluZS1oZWlnaHQtMjQ7XHJcbiAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgIGNvbG9yOiAkbmV1dHJhbDtcclxuICAgcGFkZGluZzogMjZweCAwO1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5wYXJhZ3JhcGgge1xyXG4gICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS0xODtcclxuICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgbGluZS1oZWlnaHQ6ICRlZ2VvLWxpbmUtaGVpZ2h0LTIyO1xyXG4gICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICBjb2xvcjogJG5ldXRyYWw7XHJcbiAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuQGltcG9ydCAnY29sb3JzJztcclxuQGltcG9ydCAnZm9udHMnO1xyXG5AaW1wb3J0ICdzZXR0aW5ncyc7XHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vIGJyYW5kOlxyXG4kYnJhbmQ6ICMzN0I1RTQgIWRlZmF1bHQ7XHJcblxyXG4vLyBhY3Rpb246XHJcbiRhY3Rpb246ICMwNzc2REYgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tMTA6ICNFNkYxRkMgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tNDA6ICM5Q0M4RjIgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tNjA6ICM2QUFERUMgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tODA6ICMzOTkxRTUgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tMTIwOiAjMDY1RUIyICFkZWZhdWx0O1xyXG4kYWN0aW9uLTE1MDogIzAzM0I3MCAhZGVmYXVsdDtcclxuXHJcbi8vIHNwYWNlOlxyXG4kc3BhY2U6ICMyNzMyM0QgIWRlZmF1bHQ7XHJcbiRzcGFjZS01OiAjRjNGNkY4ICFkZWZhdWx0O1xyXG4kc3BhY2UtMTA6ICNFQUVGRjUgIWRlZmF1bHQ7XHJcbiRzcGFjZS0yMDogI0NERDZERiAhZGVmYXVsdDtcclxuJHNwYWNlLTMwOiAjQUFCN0M0ICFkZWZhdWx0O1xyXG4kc3BhY2UtNDA6ICNBNUIxQkMgIWRlZmF1bHQ7XHJcbiRzcGFjZS01MDogIzg4OThBNyAhZGVmYXVsdDtcclxuJHNwYWNlLTcwOiAjNkM3QjhCICFkZWZhdWx0O1xyXG4kc3BhY2UtODA6ICM1NjY1NzQgIWRlZmF1bHQ7XHJcbiRzcGFjZS0xMTA6ICMwRjFCMjcgIWRlZmF1bHQ7XHJcblxyXG4vLyBzdWNjZXNzOlxyXG4kc3VjY2VzczogIzBDQUE3MCAhZGVmYXVsdDtcclxuJHN1Y2Nlc3MtMTA6ICNFN0Y3RjEgIWRlZmF1bHQ7XHJcbiRzdWNjZXNzLTEyMDogIzBBODg1QSAhZGVmYXVsdDtcclxuJHN1Y2Nlc3MtMTQwOiAjMDc2NjQzICFkZWZhdWx0O1xyXG5cclxuLy8gd2FybmluZzpcclxuJHdhcm5pbmc6ICNFQzdFMTMgIWRlZmF1bHQ7XHJcbiR3YXJuaW5nLTEwOiAjRkRGMkU3ICFkZWZhdWx0O1xyXG4kd2FybmluZy0xMjA6ICNCRDY1MEYgIWRlZmF1bHQ7XHJcbiR3YW5pbmctMTQwOiAjOEU0QzBCICFkZWZhdWx0O1xyXG5cclxuLy8gZXJyb3I6XHJcbiRlcnJvcjogI0RGMjkzNSAhZGVmYXVsdDtcclxuJGVycm9yLTEwOiAjRkNFQUVCICFkZWZhdWx0O1xyXG4kZXJyb3ItMTIwOiAjQjIyMTJBICFkZWZhdWx0O1xyXG4kZXJyb3ItMTQwOiAjODYxOTIwICFkZWZhdWx0O1xyXG5cclxuLy8gbmV1dHJhbDpcclxuJG5ldXRyYWw6ICMxMTExMTEgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTI6ICNGQUZBRkEgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTQ6ICNGNUY1RjUgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTg6ICNFQ0VDRUMgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTEwOiAjRTdFN0U3ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xNTogI0RCREJEQiAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMjA6ICNDRkNGQ0YgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTMwOiAjQjhCOEI4ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC00MDogI0EwQTBBMCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtNTA6ICM4ODg4ODggIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTYwOiAjNzA3MDcwICFkZWZhdWx0O1xyXG4kbmV1dHJhbC03MDogIzU4NTg1OCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtODA6ICM0MTQxNDEgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLWZ1bGw6ICNGRkZGRkYgIWRlZmF1bHQ7XHJcblxyXG4vLyBtaXNjOlxyXG4kbWlzYy1jb3JhbDogICAgICAgICAgICAjZmE3MTY3ICFkZWZhdWx0O1xyXG4kbWlzYy1jb3JhbC1saWdodDogICAgICAjZmZjYWM2ICFkZWZhdWx0O1xyXG4kbWlzYy10YW5nZXJpbmU6ICAgICAgICAjZmE5YzdkICFkZWZhdWx0O1xyXG4kbWlzYy10YW5nZXJpbmUtbGlnaHQ6ICAjZmZkNGM1ICFkZWZhdWx0O1xyXG4kbWlzYy1wZWFjaDogICAgICAgICAgICAjZmRiZDJiICFkZWZhdWx0O1xyXG4kbWlzYy1wZWFjaC1saWdodDogICAgICAjZmZmMGM0ICFkZWZhdWx0O1xyXG4kbWlzYy1vbGl2ZTogICAgICAgICAgICAjYWNjOTUyICFkZWZhdWx0O1xyXG4kbWlzYy1vbGl2ZS1saWdodDogICAgICAjZTlmM2QwICFkZWZhdWx0O1xyXG4kbWlzYy10dXJxdW9pc2U6ICAgICAgICAjMmRjZmJlICFkZWZhdWx0O1xyXG4kbWlzYy10dXJxdW9pc2UtbGlnaHQ6ICAjYjRlZWVhICFkZWZhdWx0O1xyXG4kbWlzYy1hcXVhOiAgICAgICAgICAgICAjM2RjOWZjICFkZWZhdWx0O1xyXG4kbWlzYy1hcXVhLWxpZ2h0OiAgICAgICAjYmNlN2Y2ICFkZWZhdWx0O1xyXG4kbWlzYy12aWtpbmc6ICAgICAgICAgICAjNzdiMWUxICFkZWZhdWx0O1xyXG4kbWlzYy12aWtpbmctbGlnaHQ6ICAgICAjY2RlM2Y4ICFkZWZhdWx0O1xyXG4kbWlzYy1sYXZlbmRlcjogICAgICAgICAjY2Q4OWQyICFkZWZhdWx0O1xyXG4kbWlzYy1sYXZlbmRlci1saWdodDogICAjZjVkYWY3ICFkZWZhdWx0O1xyXG5cclxuLy8gZGVwcmVjYXRlZDpcclxuJHN0YXR1cy13YXJuaW5nLWRlZmF1bHQ6ICNmYTkzMmYgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTE0OiAjZjBmMGYwICFkZWZhdWx0O1xyXG4kaW5wdXQtZmllbGQtb25mb2N1czogIzg4YzVlZSAhZGVmYXVsdDtcclxuJGlucHV0LWZpZWxkLWVycm9yOiAjZjU5ZWE5ICFkZWZhdWx0O1xyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG4vLy8gVkFSUzpcclxuJGVnZW8tZm9udGZhY2Utc3JjOiAnLi9hc3NldHMvZm9udHMnICFkZWZhdWx0O1xyXG4kZWdlby1pbWFnZS1zcmM6ICdhc3NldHMvaW1hZ2VzJyAhZGVmYXVsdDtcclxuJGVnZW8tZHJvaWQtc2Fucy1tb25vOiB0cnVlICFkZWZhdWx0O1xyXG5cclxuLy8vIGZvbnQtZmFtaWx5OlxyXG4kZWdlby1udW5pdG8tc2FuczogICAgICAgICAgICAgICAgICAnTnVuaXRvIFNhbnMnICFkZWZhdWx0O1xyXG4kZWdlby1zdHJhdGlvLWljb25zOiAgICAgICAgICAgICAgICAnaWNvX3N0cmF0aW8nICFkZWZhdWx0O1xyXG5cclxuLy8vIGZvbnQtc2l6ZSAoYmFzZSAxNCk6XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xMDogMC43MTRyZW0gIWRlZmF1bHQ7IC8vIDEwcHhcclxuJGVnZW8tZm9udC1zaXplLTExOiAwLjc4NnJlbSAhZGVmYXVsdDsgLy8gMTFweFxyXG4kZWdlby1mb250LXNpemUtMTI6IDAuODU3cmVtICFkZWZhdWx0OyAvLyAxMnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xNDogMXJlbSAhZGVmYXVsdDsgICAgIC8vIDE0cHhcclxuJGVnZW8tZm9udC1zaXplLTE2OiAxLjE0M3JlbSAhZGVmYXVsdDsgLy8gMTZweFxyXG4kZWdlby1mb250LXNpemUtMTg6IDEuMjg2cmVtICFkZWZhdWx0OyAvLyAxOHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0yMDogMS40MjlyZW0gIWRlZmF1bHQ7IC8vIDIwcHhcclxuJGVnZW8tZm9udC1zaXplLTI0OiAxLjcxNHJlbSAhZGVmYXVsdDsgLy8gMjRweFxyXG4kZWdlby1mb250LXNpemUtMjg6IDJyZW0gIWRlZmF1bHQ7ICAgICAvLyAyOHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0zMjogMi4yODZyZW0gIWRlZmF1bHQ7IC8vIDMycHhcclxuJGVnZW8tZm9udC1zaXplLTM4OiAyLjcxNHJlbSAhZGVmYXVsdDsgLy8gMzhweFxyXG4kZWdlby1mb250LXNpemUtNDI6IDNyZW0gIWRlZmF1bHQ7ICAgICAvLyA0MnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS00ODogMy40MjlyZW0gIWRlZmF1bHQ7IC8vIDQ4cHhcclxuJGVnZW8tZm9udC1zaXplLTUyOiAzLjcxNHJlbSAhZGVmYXVsdDsgLy8gNTJweFxyXG5cclxuLy8vIGxpbmUtaGVpZ2h0IChiYXNlIDE0KTpcclxuJGVnZW8tbGluZS1oZWlnaHQtMTg6IDEuMjg2cmVtICFkZWZhdWx0OyAvLyAxOHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTIwOiAxLjQyOXJlbSAhZGVmYXVsdDsgLy8gMjBweFxyXG4kZWdlby1saW5lLWhlaWdodC0yMjogMS41NzFyZW0gIWRlZmF1bHQ7IC8vIDIycHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjQ6IDEuNzE0cmVtICFkZWZhdWx0OyAvLyAyNHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI2OiAxLjg1N3JlbSAhZGVmYXVsdDsgLy8gMjZweFxyXG4kZWdlby1saW5lLWhlaWdodC0yODogMnJlbSAhZGVmYXVsdDsgICAgIC8vIDI4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMzI6IDIuMjg2cmVtICFkZWZhdWx0OyAvLyAzMnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTM1OiAyLjVyZW0gIWRlZmF1bHQ7ICAgLy8gMzVweFxyXG4kZWdlby1saW5lLWhlaWdodC00MjogM3JlbSAhZGVmYXVsdDsgICAgIC8vIDQycHhcclxuJGVnZW8tbGluZS1oZWlnaHQtNDY6IDMuMjg2cmVtICFkZWZhdWx0OyAvLyA0NnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTUwOiAzLjU3MXJlbSAhZGVmYXVsdDsgLy8gNTBweFxyXG4kZWdlby1saW5lLWhlaWdodC01ODogNC4xNDNyZW0gIWRlZmF1bHQ7IC8vIDU4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtNjI6IDQuNDI5cmVtICFkZWZhdWx0OyAvLyA2MnB4XHJcblxyXG4vLyBkZXByZWNhdGVkOlxyXG4kZWdlby1mb250LXNpemUteHh4bGFyZ2U6ICAxLjgxM3JlbSAhZGVmYXVsdDsgICAvLyAyOXB4IChiYXNlIDE2KVxyXG4kZWdlby1mb250LXNpemUteHhsYXJnZTogICAxLjU2M3JlbSAhZGVmYXVsdDsgICAvLyAyNXB4IChiYXNlIDE2KVxyXG4kZWdlby1mb250LXNpemUteGxhcmdlOiAgICAxLjM3NXJlbSAhZGVmYXVsdDsgICAvLyAyMnB4IChiYXNlIDE2KVxyXG4kZWdlby1mb250LXNpemUteHNtYWxsOiAgICAwLjkzOHJlbSAhZGVmYXVsdDsgICAvLyAxNXB4IChiYXNlIDE2KVxyXG5cclxuJGVnZW8tbGluZS1oZWlnaHQteHh4bGFyZ2U6ICAgMi4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAzNHB4IChiYXNlIDE2KVxyXG4kZWdlby1saW5lLWhlaWdodC14eGxhcmdlOiAgICAxLjg3NXJlbSAhZGVmYXVsdDsgIC8vIDMwcHggKGJhc2UgMTYpXHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXNtYWxsOiAgICAgIDEuMzEzcmVtICFkZWZhdWx0OyAgLy8gMjFweCAoYmFzZSAxNilcclxuJGVnZW8tbGluZS1oZWlnaHQteHh4c21hbGw6ICAgMS4wNjNyZW0gIWRlZmF1bHQ7ICAvLyAxN3B4IChiYXNlIDE2KVxyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG4vLyB6LWluZGV4XHJcblxyXG4vLyBUaGlzIHBvc2l0aW9ucyBoYXZlIHRvIGJlIHNvcnRlZCBpbiBhIGRlc2NlbmRhbnQgb3JkZXIuIFdoZW4geW91IGFkZCBhIG5ldyBwb3NpdGlvbiwgbWFrZSBzdXJlIHRoZXkgYXJlIHNvcnRlZCBjb3JyZWN0bHkuXHJcbiRtb2RhbC16LWluZGV4OiAxMDAwMCAhZGVmYXVsdDtcclxuJGFsZXJ0LXotaW5kZXg6IDkwMDAgIWRlZmF1bHQ7XHJcbiRmdWxsc2NyZWVuLXotaW5kZXg6IDgwMDAgIWRlZmF1bHQ7XHJcbiRtZW51LXotaW5kZXg6IDc1MDAgIWRlZmF1bHQ7XHJcbiRoZWFkZXItei1pbmRleDogNzAwMCAhZGVmYXVsdDtcclxuXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/demos/st-table-demo/st-table-demo.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/demos/st-table-demo/st-table-demo.component.ts ***!
  \****************************************************************/
/*! exports provided: StTableDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StTableDemoComponent", function() { return StTableDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
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



var StTableDemoComponent = /** @class */ (function () {
    function StTableDemoComponent(_cd) {
        this._cd = _cd;
        this.configDoc = {
            html: 'demo/st-table-demo/st-table-demo.component.html',
            ts: 'demo/st-table-demo/st-table-demo.component.ts',
            component: 'lib/st-table/st-table.component.ts'
        };
        this.smallTableFields = [
            { id: 'id', label: 'Id' },
            { id: 'name', label: 'Name' },
            { id: 'lastName', label: 'Last Name' }
        ];
        this.fields = [
            { id: 'id', label: 'Id' },
            { id: 'name', label: 'Name' },
            { id: 'lastName', label: 'Last Name' },
            { id: 'phone', label: 'Phone' },
            { id: 'company', label: 'Company' },
            { id: 'completedProfile', label: 'Completed profile' }
        ];
        this.filterFields = [
            { id: 'id', label: 'Id' },
            { id: 'name', label: 'Name' },
            {
                id: 'lastName',
                label: 'Last Name',
                filters: {
                    filterConfig: [
                        {
                            id: '0',
                            name: 'López'
                        },
                        {
                            id: '1',
                            name: 'Lara'
                        }
                    ],
                    title: 'Filter By',
                    buttonText: 'Apply'
                }
            },
            {
                id: 'phone',
                label: 'Phone',
                filters: {
                    filterConfig: [
                        {
                            id: '0',
                            name: 60052520145
                        },
                        {
                            id: '1',
                            name: 600456520145
                        },
                        {
                            id: '2',
                            name: 6005276845
                        }
                    ],
                    showSettingBtn: true,
                    title: 'Filter by',
                    buttonText: 'Apply'
                }
            },
            { id: 'company', label: 'Company' },
            { id: 'completedProfile', label: 'Completed profile' }
        ];
        this.header = true;
        this.data = [
            {
                id: '4545-df56-s341',
                name: 'Antonio',
                lastName: 'López',
                phone: 60052520145,
                company: 'Stratio',
                completedProfile: '100%'
            },
            {
                id: '4545-df56-s342',
                name: 'Marina',
                lastName: 'Lara',
                phone: 600456520145,
                company: 'Stratio',
                completedProfile: '20%'
            },
            {
                id: '4545-df56-s343',
                name: 'Álvaro',
                lastName: 'García',
                phone: 60052320145,
                company: 'Stratio',
                completedProfile: '10%'
            },
            {
                id: '4545-df56-s344',
                name: 'Marina',
                lastName: 'González',
                phone: 600455640145,
                company: 'Stratio',
                completedProfile: '50%'
            }, {
                id: '4545-df56-s345',
                name: 'Pepe',
                lastName: 'Guerrero',
                phone: 6005276845,
                company: 'Stratio',
                completedProfile: '80%'
            },
            {
                id: '4545-df56-s346',
                name: 'María',
                lastName: 'Rodríguez',
                phone: 60065620145,
                company: 'Stratio',
                completedProfile: '70%'
            }
        ];
        this.selectedCheckboxes = [[], []];
        this.sortedData = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.data);
        this.filterData = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.data);
    }
    StTableDemoComponent.prototype.ngOnInit = function () {
        this.statusFilter = new Array(this.fields.length);
        this.statusFilter.fill(false);
    };
    StTableDemoComponent.prototype.checkIcon = function (index) {
        this.statusFilter[index] = !this.statusFilter[index];
        this._cd.markForCheck();
    };
    // Selectable tables
    StTableDemoComponent.prototype.onSelectRow = function (event, rowIndex, selected) {
        selected[rowIndex] = event.checked;
    };
    StTableDemoComponent.prototype.onSelectAll = function (selected, tablePosition) {
        this.selectedCheckboxes[tablePosition] = [];
        for (var i = 0; i < this.data.length; ++i) {
            this.selectedCheckboxes[tablePosition].push(selected);
        }
    };
    // Sortable tables
    StTableDemoComponent.prototype.onSortTable = function (order) {
        var reverseConst = order.type === _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__["ORDER_TYPE"].ASC ? 1 : -1;
        this.sortedData = __spread(this.data).sort(function (a, b) {
            return a[order.orderBy].toString().localeCompare(b[order.orderBy].toString()) * reverseConst;
        });
        this.filterData = __spread(this.data).sort(function (a, b) {
            return a[order.orderBy].toString().localeCompare(b[order.orderBy].toString()) * reverseConst;
        });
    };
    StTableDemoComponent.prototype.onSelectedFilters = function (event) {
        var _this = this;
        if (event.length > 0) {
            var filterElement_1 = [];
            event.map(function (filter) {
                filterElement_1.push([].concat.apply([], filter.filters.filterConfig.map(function (config) {
                    return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["filter"])(_this.data, function (user) {
                        return user[filter.id] === config.name;
                    });
                })));
            });
            this.filterData = lodash__WEBPACK_IMPORTED_MODULE_2__["intersectionBy"].apply(void 0, __spread(filterElement_1, ['id']));
        }
        else {
            this.filterData = this.data;
        }
    };
    StTableDemoComponent.prototype.onFilter = function (index) {
        // do stuff to filter table
    };
    StTableDemoComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    StTableDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-table-demo.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-table-demo/st-table-demo.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-table-demo.component.scss */ "./src/app/demos/st-table-demo/st-table-demo.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], StTableDemoComponent);
    return StTableDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-table-demo/st-table-demo.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/demos/st-table-demo/st-table-demo.module.ts ***!
  \*************************************************************/
/*! exports provided: StTableDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StTableDemoModule", function() { return StTableDemoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _st_table_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-table-demo.component */ "./src/app/demos/st-table-demo/st-table-demo.component.ts");
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




var StTableDemoModule = /** @class */ (function () {
    function StTableDemoModule() {
    }
    StTableDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StTableModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StCheckboxModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({ components: [_st_table_demo_component__WEBPACK_IMPORTED_MODULE_3__["StTableDemoComponent"]] }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StToggleButtonsModule"]
            ],
            declarations: [_st_table_demo_component__WEBPACK_IMPORTED_MODULE_3__["StTableDemoComponent"]]
        })
    ], StTableDemoModule);
    return StTableDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-table-demo-st-table-demo-module.js.map