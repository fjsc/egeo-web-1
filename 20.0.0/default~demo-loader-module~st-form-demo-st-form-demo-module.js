(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-form-demo-st-form-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/form-editor/st-form-editor-demo.html":
/*!******************************************************************************************************************************!*\
  !*** D:/projects/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/form-editor/st-form-editor-demo.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<section>\r\n   <h1 class=\"title\">Try it by yourself</h1>\r\n   <p class=\"paragraph\">Dynamic forms are generating using a json schema to define its fields. Here you can try it making modifications on the json schema of the editor.</p>\r\n\r\n   <div class=\"row form-layout\">\r\n      <p class=\"col-sm-12 col-lg-12 col-xs-12 schema-error\">{{schemaError}}</p>\r\n      <div class=\"col-sm-6 col-lg-6 col-xs-12\">\r\n         <st-form class=\"form\" [schema]=\"jsonSchema\" [(ngModel)]=\"model\" sectionDescriptionLevel=\"2\" #formModel=\"ngModel\"\r\n                  [textFieldMaxWidth]=\"70\">\r\n         </st-form>\r\n         <div class=\"button-toolbar\">\r\n            <button class=\"button button-primary\" (click)=\"changeFormStatus()\">\r\n               <span>Disable/Enable form</span>\r\n            </button>\r\n         </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-6 col-lg-6 col-xs-12 form-editor-container\">\r\n         <h2 class=\"editor-title\">JSON Schema</h2>\r\n         <textarea class=\"form-editor\" spellcheck=\"false\" [ngClass]=\"{error: schemaError}\" [ngModel]=\"jsonSchema | json\"\r\n                   (ngModelChange)=\"onChangeSchema($event)\">\r\n         </textarea>\r\n      </div>\r\n   </div>\r\n\r\n   <div class=\"form-output\">\r\n      <h2>Form Output</h2>\r\n      {{model | json}}\r\n      <h2>Form Validation</h2>\r\n      <p *ngIf=\"formModel.valid\">Valid</p>\r\n      <p *ngIf=\"formModel.invalid\">Invalid</p>\r\n   </div>\r\n</section>\r\n\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/st-form-demo.html":
/*!***********************************************************************************************************!*\
  !*** D:/projects/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/st-form-demo.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\r\n   <section class=\"container-liquid demo-layout\">\r\n      <p class=\"introduction\">Dynamic forms are designed to generate forms using a json schema as input where fields are\r\n         defined</p>\r\n\r\n      <st-horizontal-tabs class=\"horizontal-tabs\" [options]=\"options\" [activeOption]=\"activeOption\" (changedOption)=\"onChangeOption($event)\"></st-horizontal-tabs>\r\n      <st-form-editor-demo [hidden]=\"activeOption.id !== 'formEditor'\"></st-form-editor-demo>\r\n      <st-visual-section-improvements-demo [hidden]=\"activeOption.id !== 'visualSectionImprovements'\"></st-visual-section-improvements-demo>\r\n      <st-visual-field-improvements-demo [hidden]=\"activeOption.id !== 'visualFieldImprovements'\"></st-visual-field-improvements-demo>\r\n   </section>\r\n</st-docs>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/visual-field-improvements/st-visual-field-improvements-editor-demo.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** D:/projects/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/visual-field-improvements/st-visual-field-improvements-editor-demo.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<section>\r\n   <h2 class=\"subtitle\">Show/Hide fields</h2>\r\n   <p class=\"paragraph\">Fields can be hidden or displayed dynamically according to the value of another field. Next, you can see an example to configure the conditions for which a field will be visible. Take into account that all conditions have to be fulfilled to display a field.</p>\r\n   <p class=\"code-demo\">\r\n      {{ {\r\n      ui: {\r\n      visible: {field_key1: 'field_value1', field_key2: 'field_value2'}\r\n      }\r\n      } | json }}\r\n   </p>\r\n   <h2 class=\"subtitle\">Related fields</h2>\r\n   <p class=\"paragraph\">When there are some fields related with each other, they can be placed together in the same line. To place a field next to the next one, you have to add this:</p>\r\n\r\n   <p class=\"code-demo\">\r\n      {{ {\r\n      ui: {\r\n      relatedTo: 'next_field_key'\r\n      }\r\n      }| json }}\r\n   </p>\r\n</section>\r\n\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/visual-section-improvements/st-visual-section-improvements-editor-demo.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** D:/projects/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/visual-section-improvements/st-visual-section-improvements-editor-demo.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<section>\r\n   <h2 class=\"subtitle\">Section Switch</h2>\r\n   <p class=\"paragraph\">This section can be used when it contains fields that depend on another one. When switch is\r\n      disabled, only field associated to switch is added to the form output. First field has to be a boolean</p>\r\n   <p class=\"code-demo\">\r\n      {{ {\r\n      ui: {\r\n      component: 'switch'\r\n      }\r\n      } | json }}\r\n   </p>\r\n\r\n   <h2 class=\"subtitle\">Section Accordion</h2>\r\n   <p class=\"paragraph\">It displays all its fields collapsed by default and its name only is visible.\r\n      This section has only visual effects and always section fields are added to the form output</p>\r\n\r\n   <p class=\"code-demo\">\r\n      {{ {\r\n      ui: {\r\n      component: 'accordion'\r\n      }\r\n      } | json }}\r\n   </p>\r\n\r\n   <h2 class=\"subtitle\">Optional Section</h2>\r\n   <p class=\"paragraph\">This type of section can be choose for fields which user does not need to modify them. This section has only visual effects and it displays all its fields hidden by default.</p>\r\n\r\n   <p class=\"code-demo\">\r\n      {{ {\r\n      ui: {\r\n      component: 'show-more'\r\n      }\r\n      } | json }}\r\n   </p>\r\n\r\n</section>\r\n\r\n");

/***/ }),

/***/ "./src/app/demos/st-form-demo/form-editor/json-schema.ts":
/*!***************************************************************!*\
  !*** ./src/app/demos/st-form-demo/form-editor/json-schema.ts ***!
  \***************************************************************/
/*! exports provided: JSON_SCHEMA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSON_SCHEMA", function() { return JSON_SCHEMA; });
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
var JSON_SCHEMA = {
    'type': 'object',
    'additionalProperties': false,
    'properties': {
        'general': {
            'type': 'object',
            'additionalProperties': false,
            'ui': {
                'component': 'standard'
            },
            'name': 'general',
            'title': 'General',
            'description': '',
            'properties': {
                'serviceId': {
                    'description': 'Service ID of the Service',
                    'type': 'string',
                    'required': true,
                    'readOnly': false,
                    'pattern': '(.*)',
                    'title': 'Service ID',
                    'default': '/discovery/discovery'
                },
                'marathonlb': {
                    'type': 'object',
                    'additionalProperties': false,
                    'ui': {
                        'component': 'standard'
                    },
                    'name': 'marathonlb',
                    'title': 'Marathon LB',
                    'description': 'Host & Path to connect to our Discovery service.',
                    'properties': {
                        'haproxyhost': {
                            'description': 'HA Proxy host',
                            'type': 'string',
                            'required': true,
                            'title': 'HA Proxy host',
                            'default': 'discovery.labs.demo.com'
                        },
                        'haproxypath': {
                            'description': 'HA Proxy path to expose',
                            'type': 'string',
                            'required': true,
                            'title': 'Path HA Proxy',
                            'default': '/discovery'
                        }
                    },
                    'required': [
                        'haproxyhost',
                        'haproxypath'
                    ]
                },
                'datastore': {
                    'type': 'object',
                    'additionalProperties': false,
                    'ui': {
                        'component': 'standard'
                    },
                    'name': 'datastore',
                    'title': 'PostgreSQL',
                    'description': 'Datastore where Discovery will place the configuration settings.',
                    'properties': {
                        'dbSslEnabled': {
                            'description': 'TLS secured connection with PostgreSQL',
                            'type': 'boolean',
                            'required': false,
                            'readOnly': true,
                            'title': 'Connection with SSL',
                            'default': true
                        },
                        'dbType': {
                            'description': '',
                            'type': 'string',
                            'readOnly': false,
                            'title': 'Type of database',
                            'default': 'postgres'
                        },
                        'metadataDbHost': {
                            'description': 'The host of the database uses as metadata repository',
                            'type': 'string',
                            'maxLength': 100,
                            'minLength': 3,
                            'required': true,
                            'readOnly': false,
                            'title': 'Host',
                            'default': 'pg-0001.test.mesos'
                        },
                        'dbPort': {
                            'description': 'The port of the database used as metadata repository',
                            'type': 'integer',
                            'minimum': 1,
                            'required': true,
                            'readOnly': false,
                            'title': 'Port of the database',
                            'default': 5432
                        },
                        'metadataDbName': {
                            'description': 'The database name used in the database with the metadata repository',
                            'type': 'string',
                            'maxLength': 100,
                            'minLength': 3,
                            'required': false,
                            'readOnly': false,
                            'title': 'Database name',
                            'default': 'discovery'
                        },
                        'tenantName': {
                            'description': 'The tenant name used in vault to store de secrets of this instance',
                            'type': 'string',
                            'maxLength': 100,
                            'minLength': 3,
                            'required': false,
                            'readOnly': false,
                            'title': 'Tenant Name',
                            'default': 'discovery'
                        },
                        'metadataDbUser': {
                            'description': 'The user name of the database with the metabase repository if we are using user to connect to the database',
                            'type': 'string',
                            'maxLength': 100,
                            'minLength': 3,
                            'required': false,
                            'readOnly': false,
                            'title': 'Database user'
                        }
                    },
                    'required': [
                        'metadataDbHost',
                        'dbPort'
                    ]
                },
                'identity': {
                    'type': 'object',
                    'additionalProperties': false,
                    'ui': {
                        'component': 'standard'
                    },
                    'name': 'identity',
                    'title': 'Service indentity',
                    'description': '',
                    'properties': {
                        'approlename': {
                            'description': 'App role used to recover a Vault token with a pre-defined policy',
                            'type': 'string',
                            'readOnly': false,
                            'title': 'Vault role',
                            'default': 'open'
                        }
                    },
                    'required': []
                },
                'calico': {
                    'type': 'object',
                    'additionalProperties': false,
                    'ui': {
                        'component': 'standard'
                    },
                    'name': 'calico',
                    'title': 'Calico Network',
                    'description': '',
                    'properties': {
                        'networkSegmentation': {
                            'description': 'Enable Calico network for PostgreSQL Agent.',
                            'type': 'boolean',
                            'readOnly': true,
                            'title': 'Network segmentation',
                            'default': true
                        },
                        'useDynamicAuthentication': {
                            'description': 'Enable dynamic authentication',
                            'type': 'boolean',
                            'required': false,
                            'readOnly': true,
                            'title': 'Dynamic authentication',
                            'default': true
                        },
                        'calicoNetwork': {
                            'description': 'Network\'s name where PostgreSQL Agent will be added.',
                            'type': 'string',
                            'readOnly': false,
                            'title': 'Calico network'
                        },
                        'networkName': {
                            'description': 'Docker user network name',
                            'type': 'string',
                            'required': true,
                            'readOnly': false,
                            'title': 'Network name',
                            'enum': [
                                'demo'
                            ]
                        }
                    },
                    'required': [
                        'networkName'
                    ]
                },
                'resources': {
                    'type': 'object',
                    'additionalProperties': false,
                    'ui': {
                        'component': 'accordion'
                    },
                    'name': 'resources',
                    'title': 'Resources',
                    'description': '',
                    'properties': {
                        'instances': {
                            'description': 'Number of Discovery instances to run.',
                            'type': 'integer',
                            'required': true,
                            'readOnly': false,
                            'title': 'Instances',
                            'default': 1
                        },
                        'cpus': {
                            'description': 'CPU shares to allocate to each Discovery instance.',
                            'type': 'integer',
                            'required': true,
                            'readOnly': false,
                            'level': 1,
                            'title': 'CPU',
                            'default': 1
                        },
                        'mem': {
                            'description': 'Memory (MB) to allocate to each Bootstrap instance.',
                            'type': 'integer',
                            'required': true,
                            'readOnly': false,
                            'title': 'Memory (MB)',
                            'default': 2048
                        }
                    },
                    'required': [
                        'instances',
                        'cpus',
                        'mem'
                    ]
                }
            },
            'required': [
                'serviceId'
            ]
        },
        'settings': {
            'type': 'object',
            'additionalProperties': false,
            'ui': {
                'component': 'standard'
            },
            'name': 'settings',
            'title': 'Settings',
            'description': '',
            'properties': {
                'jdbcParameters': {
                    'description': 'An optional variable to append to the connection string additional JDBC configuration parameters',
                    'type': 'string',
                    'maxLength': 100,
                    'minLength': 3,
                    'required': false,
                    'readOnly': false,
                    'title': 'Additional JDBC configuration parameters',
                    'default': 'prepareThreshold=0'
                },
                'calico': {
                    'type': 'object',
                    'additionalProperties': false,
                    'ui': {
                        'component': 'switch'
                    },
                    'name': 'calico',
                    'title': 'Calico security',
                    'description': 'Use Calico security to this Sparta instance',
                    'properties': {
                        'calicoEnabled': {
                            'description': 'Whether or not enable the Calico security.',
                            'type': 'boolean',
                            'readOnly': false,
                            'ui': {
                                'name': 'scp-sc-sparta-andromeda-calicoenabled'
                            },
                            'title': 'Use calico',
                            'default': true
                        },
                        'networkName': {
                            'description': 'Docker user network name',
                            'type': 'string',
                            'readOnly': false,
                            'ui': {
                                'name': 'scp-sc-sparta-andromeda-networkname'
                            },
                            'title': 'Network name',
                            'enum': [
                                'stratio'
                            ]
                        },
                        'calicoNetwork': {
                            'description': 'Name of the calico network where sparta and the workflows' +
                                'are deployed if calico security is enabled. It uses the same value of Network name.',
                            'type': 'string',
                            'required': false,
                            'readOnly': false,
                            'ui': {
                                'name': 'scp-sc-sparta-andromeda-caliconetwork'
                            },
                            'title': 'Calico network'
                        }
                    },
                    'required': [
                        'networkName'
                    ]
                },
                'init': {
                    'type': 'object',
                    'additionalProperties': false,
                    'ui': {
                        'component': 'standard'
                    },
                    'name': 'init',
                    'title': 'Admin user',
                    'description': 'When installing discovery for the first time, It will create an admin user with this parameters',
                    'properties': {
                        'mb-init-admin-user': {
                            'description': 'The name of the admin user created as admin when Discovery is deployed.',
                            'type': 'string',
                            'maxLength': 100,
                            'minLength': 3,
                            'readOnly': false,
                            'title': 'Name of the admin user',
                            'default': 'Demo'
                        },
                        'mb-init-admin-password': {
                            'description': 'The password of the admin user created as admin when Discovery is deployed.',
                            'type': 'integer',
                            'minimum': 1,
                            'required': false,
                            'readOnly': false,
                            'title': 'Password of the admin user',
                            'default': 123456
                        },
                        'mb-init-admin-mail': {
                            'description': 'The mail of the admin user created as admin when Discovery is deployed.',
                            'type': 'string',
                            'maxLength': 100,
                            'minLength': 3,
                            'required': false,
                            'readOnly': false,
                            'title': 'Mail of the admin user',
                            'default': 'demo@demo.com'
                        }
                    },
                    'required': []
                },
                'Login': {
                    'type': 'object',
                    'additionalProperties': false,
                    'ui': {
                        'component': 'standard'
                    },
                    'name': 'Login',
                    'title': 'Login by headers',
                    'description': '',
                    'properties': {
                        'mb-user-header': {
                            'description': '',
                            'type': 'string',
                            'required': false,
                            'readOnly': false,
                            'title': 'User'
                        },
                        'mb-group-header': {
                            'description': '',
                            'type': 'string',
                            'readOnly': false,
                            'title': 'Group'
                        },
                        'mb-admin-group-header': {
                            'description': '',
                            'type': 'string',
                            'readOnly': false,
                            'title': 'Admin groups'
                        }
                    },
                    'required': []
                }
            },
            'required': []
        },
        'environment': {
            'type': 'object',
            'additionalProperties': false,
            'ui': {
                'component': 'standard'
            },
            'name': 'environment',
            'title': 'Environment',
            'description': '',
            'properties': {
                'VAULT_HOST': {
                    'type': 'string',
                    'maxLength': 100,
                    'minLength': 3,
                    'required': false,
                    'readOnly': true,
                    'title': 'Vault host',
                    'default': 'vault.service.paas.labs.demo.com'
                },
                'VAULT_PORT': {
                    'type': 'integer',
                    'minimum': 1,
                    'required': false,
                    'readOnly': true,
                    'level': 1,
                    'title': 'Vault port',
                    'default': 8200
                }
            },
            'required': []
        }
    }
};


/***/ }),

/***/ "./src/app/demos/st-form-demo/form-editor/st-form-editor-demo.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/demos/st-form-demo/form-editor/st-form-editor-demo.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n:host {\n  padding: 20px 0; }\n:host .form-editor-container {\n    position: relative; }\n:host .form-editor-container .form-editor {\n      font-family: monospace;\n      font-size: 14px;\n      line-height: 1.6em;\n      color: #707070;\n      width: 100%;\n      border: 1px solid #CFCFCF;\n      padding: 20px;\n      background-color: #FAFAFA;\n      position: absolute;\n      top: 70px;\n      right: 0;\n      bottom: 0; }\n:host .form-editor-container .form-editor.error {\n        color: #DF2935; }\n:host .form-editor-container .editor-title {\n      font-weight: bold;\n      font-size: 1.375rem;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: 1.857rem;\n      letter-spacing: normal;\n      color: #111111;\n      padding: 26px 0;\n      display: inline-block; }\n:host .schema-error {\n    color: #DF2935;\n    font-weight: 100;\n    font-size: 0.938rem;\n    width: 100%; }\n:host .form {\n    padding-right: 15px;\n    display: block; }\n:host .button-toolbar {\n    text-align: right; }\n:host .button-toolbar .button {\n      margin-left: 20px; }\n:host .form-output {\n    background-color: #FAFAFA;\n    padding: 5px 20px 20px;\n    margin-top: 20px;\n    font-weight: 100;\n    font-size: 1rem;\n    line-height: 1.286rem; }\n:host .form-output h2 {\n      font-weight: bold;\n      font-size: 1.143rem;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: 1.143rem;\n      letter-spacing: normal;\n      color: #707070;\n      padding-bottom: 15px;\n      padding-top: 15px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby9mb3JtLWVkaXRvci9zdC1mb3JtLWVkaXRvci1kZW1vLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtZm9ybS1kZW1vL2Zvcm0tZWRpdG9yL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlby1kZW1vXFxzcmNcXGFwcFxcZGVtb3NcXHN0LWZvcm0tZGVtb1xcZm9ybS1lZGl0b3JcXHN0LWZvcm0tZWRpdG9yLWRlbW8uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1mb3JtLWRlbW8vZm9ybS1lZGl0b3IvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9jb2xvcnMuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby9mb3JtLWVkaXRvci9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW9cXHNyY1xcdGhlbWVcXGNvbnN0YW50c1xcX2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7Ozs7RURVRTtBRVZGOzs7Ozs7Ozs7RUZvQkU7QUdwQkY7Ozs7Ozs7OztFSDhCRTtBQ2pCRjtFQUNHLGVBQWUsRUFBQTtBQURsQjtJQUlNLGtCQUFrQixFQUFBO0FBSnhCO01BTVMsc0JBQXNCO01BQ3RCLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsY0MwQ1c7TUR6Q1gsV0FBVztNQUNYLHlCQ29DVztNRG5DWCxhQUFhO01BQ2IseUJDNkJVO01ENUJWLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsUUFBUTtNQUNSLFNBQVMsRUFBQTtBQWpCbEI7UUFvQlksY0NlRyxFQUFBO0FEbkNmO01BeUJTLGlCQUFpQjtNQUNqQixtQkVlMEI7TUZkMUIsa0JBQWtCO01BQ2xCLG9CQUFvQjtNQUNwQixxQkVEcUI7TUZFckIsc0JBQXNCO01BQ3RCLGNDVVE7TURUUixlQUFlO01BQ2YscUJBQXFCLEVBQUE7QUFqQzlCO0lBc0NNLGNDSFM7SURJVCxnQkFBZ0I7SUFDaEIsbUJFRTZCO0lGRDdCLFdBQVcsRUFBQTtBQXpDakI7SUE2Q00sbUJBQW1CO0lBQ25CLGNBQWMsRUFBQTtBQTlDcEI7SUFrRE0saUJBQWlCLEVBQUE7QUFsRHZCO01Bb0RTLGlCQUFpQixFQUFBO0FBcEQxQjtJQXlETSx5QkNmYTtJRGdCYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlRWxEa0I7SUZtRGxCLHFCRWpEc0IsRUFBQTtBRmI1QjtNQWlFUyxpQkFBaUI7TUFDakIsbUJFdERtQjtNRnVEbkIsa0JBQWtCO01BQ2xCLG9CQUFvQjtNQUNwQixxQkV6RG1CO01GMERuQixzQkFBc0I7TUFDdEIsY0NwQlc7TURxQlgsb0JBQW9CO01BQ3BCLGlCQUFpQixFQUFBIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby9mb3JtLWVkaXRvci9zdC1mb3JtLWVkaXRvci1kZW1vLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuOmhvc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7IH1cbiAgOmhvc3QgLmZvcm0tZWRpdG9yLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgOmhvc3QgLmZvcm0tZWRpdG9yLWNvbnRhaW5lciAuZm9ybS1lZGl0b3Ige1xuICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbiAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0ZDRkNGO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDcwcHg7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDsgfVxuICAgICAgOmhvc3QgLmZvcm0tZWRpdG9yLWNvbnRhaW5lciAuZm9ybS1lZGl0b3IuZXJyb3Ige1xuICAgICAgICBjb2xvcjogI0RGMjkzNTsgfVxuICAgIDpob3N0IC5mb3JtLWVkaXRvci1jb250YWluZXIgLmVkaXRvci10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMS4zNzVyZW07XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjg1N3JlbTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICBjb2xvcjogIzExMTExMTtcbiAgICAgIHBhZGRpbmc6IDI2cHggMDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICA6aG9zdCAuc2NoZW1hLWVycm9yIHtcbiAgICBjb2xvcjogI0RGMjkzNTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMC45MzhyZW07XG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgOmhvc3QgLmZvcm0ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgOmhvc3QgLmJ1dHRvbi10b29sYmFyIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxuICAgIDpob3N0IC5idXR0b24tdG9vbGJhciAuYnV0dG9uIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4OyB9XG4gIDpob3N0IC5mb3JtLW91dHB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgICBwYWRkaW5nOiA1cHggMjBweCAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMjg2cmVtOyB9XG4gICAgOmhvc3QgLmZvcm0tb3V0cHV0IGgyIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxLjE0M3JlbTtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMTQzcmVtO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgICBwYWRkaW5nLXRvcDogMTVweDsgfVxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5AaW1wb3J0ICdjb25zdGFudHMvY29sb3JzJztcclxuQGltcG9ydCAnY29uc3RhbnRzL2ZvbnRzJztcclxuXHJcbjpob3N0IHtcclxuICAgcGFkZGluZzogMjBweCAwO1xyXG5cclxuICAgLmZvcm0tZWRpdG9yLWNvbnRhaW5lciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLmZvcm0tZWRpdG9yIHtcclxuICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICBsaW5lLWhlaWdodDogMS42ZW07XHJcbiAgICAgICAgIGNvbG9yOiAkbmV1dHJhbC02MDtcclxuICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRuZXV0cmFsLTIwO1xyXG4gICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmV1dHJhbC0yO1xyXG4gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgIHRvcDogNzBweDtcclxuICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgIGJvdHRvbTogMDtcclxuXHJcbiAgICAgICAgICYuZXJyb3Ige1xyXG4gICAgICAgICAgICBjb2xvcjogJGVycm9yO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5lZGl0b3ItdGl0bGUge1xyXG4gICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgZm9udC1zaXplOiAkZWdlby1mb250LXNpemUteGxhcmdlO1xyXG4gICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICAgICBsaW5lLWhlaWdodDogJGVnZW8tbGluZS1oZWlnaHQtMjY7XHJcbiAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgICAgIGNvbG9yOiAkbmV1dHJhbDtcclxuICAgICAgICAgcGFkZGluZzogMjZweCAwO1xyXG4gICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLnNjaGVtYS1lcnJvciB7XHJcbiAgICAgIGNvbG9yOiAkZXJyb3I7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLXhzbWFsbDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgIH1cclxuXHJcbiAgIC5mb3JtIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIH1cclxuXHJcbiAgIC5idXR0b24tdG9vbGJhciB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAuYnV0dG9uIHtcclxuICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLmZvcm0tb3V0cHV0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5ldXRyYWwtMjtcclxuICAgICAgcGFkZGluZzogNXB4IDIwcHggMjBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgZm9udC1zaXplOiAkZWdlby1mb250LXNpemUtMTQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAkZWdlby1mb250LXNpemUtMTg7XHJcblxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS0xNjtcclxuICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgICAgbGluZS1oZWlnaHQ6ICRlZ2VvLWZvbnQtc2l6ZS0xNjtcclxuICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgICAgY29sb3I6ICRuZXV0cmFsLTYwO1xyXG4gICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vIGJyYW5kOlxyXG4kYnJhbmQ6ICMzN0I1RTQgIWRlZmF1bHQ7XHJcblxyXG4vLyBhY3Rpb246XHJcbiRhY3Rpb246ICMwNzc2REYgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tMTA6ICNFNkYxRkMgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tNDA6ICM5Q0M4RjIgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tNjA6ICM2QUFERUMgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tODA6ICMzOTkxRTUgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tMTIwOiAjMDY1RUIyICFkZWZhdWx0O1xyXG4kYWN0aW9uLTE1MDogIzAzM0I3MCAhZGVmYXVsdDtcclxuXHJcbi8vIHNwYWNlOlxyXG4kc3BhY2U6ICMyNzMyM0QgIWRlZmF1bHQ7XHJcbiRzcGFjZS01OiAjRjNGNkY4ICFkZWZhdWx0O1xyXG4kc3BhY2UtMTA6ICNFQUVGRjUgIWRlZmF1bHQ7XHJcbiRzcGFjZS0yMDogI0NERDZERiAhZGVmYXVsdDtcclxuJHNwYWNlLTMwOiAjQUFCN0M0ICFkZWZhdWx0O1xyXG4kc3BhY2UtNDA6ICNBNUIxQkMgIWRlZmF1bHQ7XHJcbiRzcGFjZS01MDogIzg4OThBNyAhZGVmYXVsdDtcclxuJHNwYWNlLTcwOiAjNkM3QjhCICFkZWZhdWx0O1xyXG4kc3BhY2UtODA6ICM1NjY1NzQgIWRlZmF1bHQ7XHJcbiRzcGFjZS0xMTA6ICMwRjFCMjcgIWRlZmF1bHQ7XHJcblxyXG4vLyBzdWNjZXNzOlxyXG4kc3VjY2VzczogIzBDQUE3MCAhZGVmYXVsdDtcclxuJHN1Y2Nlc3MtMTA6ICNFN0Y3RjEgIWRlZmF1bHQ7XHJcbiRzdWNjZXNzLTEyMDogIzBBODg1QSAhZGVmYXVsdDtcclxuJHN1Y2Nlc3MtMTQwOiAjMDc2NjQzICFkZWZhdWx0O1xyXG5cclxuLy8gd2FybmluZzpcclxuJHdhcm5pbmc6ICNFQzdFMTMgIWRlZmF1bHQ7XHJcbiR3YXJuaW5nLTEwOiAjRkRGMkU3ICFkZWZhdWx0O1xyXG4kd2FybmluZy0xMjA6ICNCRDY1MEYgIWRlZmF1bHQ7XHJcbiR3YW5pbmctMTQwOiAjOEU0QzBCICFkZWZhdWx0O1xyXG5cclxuLy8gZXJyb3I6XHJcbiRlcnJvcjogI0RGMjkzNSAhZGVmYXVsdDtcclxuJGVycm9yLTEwOiAjRkNFQUVCICFkZWZhdWx0O1xyXG4kZXJyb3ItMTIwOiAjQjIyMTJBICFkZWZhdWx0O1xyXG4kZXJyb3ItMTQwOiAjODYxOTIwICFkZWZhdWx0O1xyXG5cclxuLy8gbmV1dHJhbDpcclxuJG5ldXRyYWw6ICMxMTExMTEgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTI6ICNGQUZBRkEgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTQ6ICNGNUY1RjUgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTg6ICNFQ0VDRUMgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTEwOiAjRTdFN0U3ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xNTogI0RCREJEQiAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMjA6ICNDRkNGQ0YgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTMwOiAjQjhCOEI4ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC00MDogI0EwQTBBMCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtNTA6ICM4ODg4ODggIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTYwOiAjNzA3MDcwICFkZWZhdWx0O1xyXG4kbmV1dHJhbC03MDogIzU4NTg1OCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtODA6ICM0MTQxNDEgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLWZ1bGw6ICNGRkZGRkYgIWRlZmF1bHQ7XHJcblxyXG4vLyBtaXNjOlxyXG4kbWlzYy1jb3JhbDogICAgICAgICAgICAjZmE3MTY3ICFkZWZhdWx0O1xyXG4kbWlzYy1jb3JhbC1saWdodDogICAgICAjZmZjYWM2ICFkZWZhdWx0O1xyXG4kbWlzYy10YW5nZXJpbmU6ICAgICAgICAjZmE5YzdkICFkZWZhdWx0O1xyXG4kbWlzYy10YW5nZXJpbmUtbGlnaHQ6ICAjZmZkNGM1ICFkZWZhdWx0O1xyXG4kbWlzYy1wZWFjaDogICAgICAgICAgICAjZmRiZDJiICFkZWZhdWx0O1xyXG4kbWlzYy1wZWFjaC1saWdodDogICAgICAjZmZmMGM0ICFkZWZhdWx0O1xyXG4kbWlzYy1vbGl2ZTogICAgICAgICAgICAjYWNjOTUyICFkZWZhdWx0O1xyXG4kbWlzYy1vbGl2ZS1saWdodDogICAgICAjZTlmM2QwICFkZWZhdWx0O1xyXG4kbWlzYy10dXJxdW9pc2U6ICAgICAgICAjMmRjZmJlICFkZWZhdWx0O1xyXG4kbWlzYy10dXJxdW9pc2UtbGlnaHQ6ICAjYjRlZWVhICFkZWZhdWx0O1xyXG4kbWlzYy1hcXVhOiAgICAgICAgICAgICAjM2RjOWZjICFkZWZhdWx0O1xyXG4kbWlzYy1hcXVhLWxpZ2h0OiAgICAgICAjYmNlN2Y2ICFkZWZhdWx0O1xyXG4kbWlzYy12aWtpbmc6ICAgICAgICAgICAjNzdiMWUxICFkZWZhdWx0O1xyXG4kbWlzYy12aWtpbmctbGlnaHQ6ICAgICAjY2RlM2Y4ICFkZWZhdWx0O1xyXG4kbWlzYy1sYXZlbmRlcjogICAgICAgICAjY2Q4OWQyICFkZWZhdWx0O1xyXG4kbWlzYy1sYXZlbmRlci1saWdodDogICAjZjVkYWY3ICFkZWZhdWx0O1xyXG5cclxuLy8gZGVwcmVjYXRlZDpcclxuJHN0YXR1cy13YXJuaW5nLWRlZmF1bHQ6ICNmYTkzMmYgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTE0OiAjZjBmMGYwICFkZWZhdWx0O1xyXG4kaW5wdXQtZmllbGQtb25mb2N1czogIzg4YzVlZSAhZGVmYXVsdDtcclxuJGlucHV0LWZpZWxkLWVycm9yOiAjZjU5ZWE5ICFkZWZhdWx0O1xyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG4vLy8gVkFSUzpcclxuJGVnZW8tZm9udGZhY2Utc3JjOiAnLi9hc3NldHMvZm9udHMnICFkZWZhdWx0O1xyXG4kZWdlby1pbWFnZS1zcmM6ICdhc3NldHMvaW1hZ2VzJyAhZGVmYXVsdDtcclxuJGVnZW8tZHJvaWQtc2Fucy1tb25vOiB0cnVlICFkZWZhdWx0O1xyXG5cclxuLy8vIGZvbnQtZmFtaWx5OlxyXG4kZWdlby1udW5pdG8tc2FuczogICAgICAgICAgICAgICAgICAnTnVuaXRvIFNhbnMnICFkZWZhdWx0O1xyXG4kZWdlby1zdHJhdGlvLWljb25zOiAgICAgICAgICAgICAgICAnaWNvX3N0cmF0aW8nICFkZWZhdWx0O1xyXG5cclxuLy8vIGZvbnQtc2l6ZTpcclxuJGVnZW8tZm9udC1zaXplLTEwOiAwLjYyNXJlbSAhZGVmYXVsdDsgLy8gMTBweFxyXG4kZWdlby1mb250LXNpemUtMTE6IDAuNzg2cmVtICFkZWZhdWx0OyAvLyAxMXB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xMjogMC44NTdyZW0gIWRlZmF1bHQ7IC8vIDEycHhcclxuJGVnZW8tZm9udC1zaXplLTE0OiAxcmVtICFkZWZhdWx0OyAgICAgLy8gMTRweFxyXG4kZWdlby1mb250LXNpemUtMTY6IDEuMTQzcmVtICFkZWZhdWx0OyAvLyAxNnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xODogMS4yODZyZW0gIWRlZmF1bHQ7IC8vIDE4cHhcclxuJGVnZW8tZm9udC1zaXplLTIwOiAxLjQyOXJlbSAhZGVmYXVsdDsgLy8gMjBweFxyXG4kZWdlby1mb250LXNpemUtMjQ6IDEuNzE0cmVtICFkZWZhdWx0OyAvLyAyNHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0yODogMnJlbSAhZGVmYXVsdDsgICAgIC8vIDI4cHhcclxuJGVnZW8tZm9udC1zaXplLTMyOiAyLjI4NnJlbSAhZGVmYXVsdDsgLy8gMzJweFxyXG4kZWdlby1mb250LXNpemUtMzg6IDIuNzE0cmVtICFkZWZhdWx0OyAvLyAzOHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS00MjogM3JlbSAhZGVmYXVsdDsgICAgIC8vIDQycHhcclxuJGVnZW8tZm9udC1zaXplLTQ4OiAzLjQyOXJlbSAhZGVmYXVsdDsgLy8gNDhweFxyXG4kZWdlby1mb250LXNpemUtNTI6IDMuNzE0cmVtICFkZWZhdWx0OyAvLyA1MnB4XHJcblxyXG4vLy8gbGluZS1oZWlnaHQ6XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTE4OiAxLjI4NnJlbSAhZGVmYXVsdDsgLy8gMThweFxyXG4kZWdlby1saW5lLWhlaWdodC0yMDogMS40MjlyZW0gIWRlZmF1bHQ7IC8vIDIwcHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjI6IDEuNTcxcmVtICFkZWZhdWx0OyAvLyAyMnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI0OiAxLjcxNHJlbSAhZGVmYXVsdDsgLy8gMjRweFxyXG4kZWdlby1saW5lLWhlaWdodC0yNjogMS44NTdyZW0gIWRlZmF1bHQ7IC8vIDI2cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjg6IDJyZW0gIWRlZmF1bHQ7ICAgICAvLyAyOHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTMyOiAyLjI4NnJlbSAhZGVmYXVsdDsgLy8gMzJweFxyXG4kZWdlby1saW5lLWhlaWdodC0zNTogMi41cmVtICFkZWZhdWx0OyAgIC8vIDM1cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtNDI6IDNyZW0gIWRlZmF1bHQ7ICAgICAvLyA0MnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTQ2OiAzLjI4NnJlbSAhZGVmYXVsdDsgLy8gNDZweFxyXG4kZWdlby1saW5lLWhlaWdodC01MDogMy41NzFyZW0gIWRlZmF1bHQ7IC8vIDUwcHhcclxuJGVnZW8tbGluZS1oZWlnaHQtNTg6IDQuMTQzcmVtICFkZWZhdWx0OyAvLyA1OHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTYyOiA0LjQyOXJlbSAhZGVmYXVsdDsgLy8gNjJweFxyXG5cclxuLy8gZGVwcmVjYXRlZDpcclxuJGVnZW8tZm9udC1zaXplLXh4eGxhcmdlOiAgMS44MTNyZW0gIWRlZmF1bHQ7ICAgLy8gMjlweFxyXG4kZWdlby1mb250LXNpemUteHhsYXJnZTogICAxLjU2M3JlbSAhZGVmYXVsdDsgICAvLyAyNXB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14bGFyZ2U6ICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgIC8vIDIycHhcclxuJGVnZW8tZm9udC1zaXplLXhzbWFsbDogICAgMC45MzhyZW0gIWRlZmF1bHQ7ICAgLy8gMTVweFxyXG5cclxuJGVnZW8tbGluZS1oZWlnaHQteHh4bGFyZ2U6ICAgMi4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAzNHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4bGFyZ2U6ICAgIDEuODc1cmVtICFkZWZhdWx0OyAgLy8gMzBweFxyXG4kZWdlby1saW5lLWhlaWdodC1zbWFsbDogICAgICAxLjMxM3JlbSAhZGVmYXVsdDsgIC8vIDIxcHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHh4c21hbGw6ICAgMS4wNjNyZW0gIWRlZmF1bHQ7ICAvLyAxN3B4XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/demos/st-form-demo/form-editor/st-form-editor-demo.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demos/st-form-demo/form-editor/st-form-editor-demo.ts ***!
  \***********************************************************************/
/*! exports provided: StFormEditorDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StFormEditorDemoComponent", function() { return StFormEditorDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _json_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json-schema */ "./src/app/demos/st-form-demo/form-editor/json-schema.ts");
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



var StFormEditorDemoComponent = /** @class */ (function () {
    function StFormEditorDemoComponent() {
        this.model = {};
        this.jsonSchema = _json_schema__WEBPACK_IMPORTED_MODULE_2__["JSON_SCHEMA"];
    }
    StFormEditorDemoComponent.prototype.onChange = function (model) {
        this.model = model;
    };
    StFormEditorDemoComponent.prototype.changeFormStatus = function () {
        if (this.formModel.control.enabled) {
            this.formModel.control.disable();
        }
        else {
            this.formModel.control.enable();
        }
    };
    StFormEditorDemoComponent.prototype.onChangeSchema = function (jsonSchema) {
        try {
            this.jsonSchema = JSON.parse(jsonSchema);
            this.schemaError = undefined;
        }
        catch (error) {
            this.schemaError = error;
            console.log(error);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('formModel', { static: false }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], StFormEditorDemoComponent.prototype, "formModel", void 0);
    StFormEditorDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-form-editor-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-form-editor-demo.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/form-editor/st-form-editor-demo.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-form-editor-demo.component.scss */ "./src/app/demos/st-form-demo/form-editor/st-form-editor-demo.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], StFormEditorDemoComponent);
    return StFormEditorDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-form-demo/st-form-demo.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/demos/st-form-demo/st-form-demo.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.horizontal-tabs {\n  width: 100%;\n  display: block;\n  margin-bottom: 30px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby9zdC1mb3JtLWRlbW8uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1mb3JtLWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvLWRlbW9cXHNyY1xcYXBwXFxkZW1vc1xcc3QtZm9ybS1kZW1vXFxzdC1mb3JtLWRlbW8uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1mb3JtLWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9jb2xvcnMuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW9cXHNyY1xcdGhlbWVcXGNvbnN0YW50c1xcX2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7Ozs7RURVRTtBRVZGOzs7Ozs7Ozs7RUZvQkU7QUdwQkY7Ozs7Ozs7OztFSDhCRTtBQ2pCRjtFQUNHLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUJBQW1CLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtZm9ybS1kZW1vL3N0LWZvcm0tZGVtby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbi5ob3Jpem9udGFsLXRhYnMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuQGltcG9ydCAnY29uc3RhbnRzL2NvbG9ycyc7XHJcbkBpbXBvcnQgJ2NvbnN0YW50cy9mb250cyc7XHJcblxyXG4uaG9yaXpvbnRhbC10YWJzIHtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG4vLyBicmFuZDpcclxuJGJyYW5kOiAjMzdCNUU0ICFkZWZhdWx0O1xyXG5cclxuLy8gYWN0aW9uOlxyXG4kYWN0aW9uOiAjMDc3NkRGICFkZWZhdWx0O1xyXG4kYWN0aW9uLTEwOiAjRTZGMUZDICFkZWZhdWx0O1xyXG4kYWN0aW9uLTQwOiAjOUNDOEYyICFkZWZhdWx0O1xyXG4kYWN0aW9uLTYwOiAjNkFBREVDICFkZWZhdWx0O1xyXG4kYWN0aW9uLTgwOiAjMzk5MUU1ICFkZWZhdWx0O1xyXG4kYWN0aW9uLTEyMDogIzA2NUVCMiAhZGVmYXVsdDtcclxuJGFjdGlvbi0xNTA6ICMwMzNCNzAgIWRlZmF1bHQ7XHJcblxyXG4vLyBzcGFjZTpcclxuJHNwYWNlOiAjMjczMjNEICFkZWZhdWx0O1xyXG4kc3BhY2UtNTogI0YzRjZGOCAhZGVmYXVsdDtcclxuJHNwYWNlLTEwOiAjRUFFRkY1ICFkZWZhdWx0O1xyXG4kc3BhY2UtMjA6ICNDREQ2REYgIWRlZmF1bHQ7XHJcbiRzcGFjZS0zMDogI0FBQjdDNCAhZGVmYXVsdDtcclxuJHNwYWNlLTQwOiAjQTVCMUJDICFkZWZhdWx0O1xyXG4kc3BhY2UtNTA6ICM4ODk4QTcgIWRlZmF1bHQ7XHJcbiRzcGFjZS03MDogIzZDN0I4QiAhZGVmYXVsdDtcclxuJHNwYWNlLTgwOiAjNTY2NTc0ICFkZWZhdWx0O1xyXG4kc3BhY2UtMTEwOiAjMEYxQjI3ICFkZWZhdWx0O1xyXG5cclxuLy8gc3VjY2VzczpcclxuJHN1Y2Nlc3M6ICMwQ0FBNzAgIWRlZmF1bHQ7XHJcbiRzdWNjZXNzLTEwOiAjRTdGN0YxICFkZWZhdWx0O1xyXG4kc3VjY2Vzcy0xMjA6ICMwQTg4NUEgIWRlZmF1bHQ7XHJcbiRzdWNjZXNzLTE0MDogIzA3NjY0MyAhZGVmYXVsdDtcclxuXHJcbi8vIHdhcm5pbmc6XHJcbiR3YXJuaW5nOiAjRUM3RTEzICFkZWZhdWx0O1xyXG4kd2FybmluZy0xMDogI0ZERjJFNyAhZGVmYXVsdDtcclxuJHdhcm5pbmctMTIwOiAjQkQ2NTBGICFkZWZhdWx0O1xyXG4kd2FuaW5nLTE0MDogIzhFNEMwQiAhZGVmYXVsdDtcclxuXHJcbi8vIGVycm9yOlxyXG4kZXJyb3I6ICNERjI5MzUgIWRlZmF1bHQ7XHJcbiRlcnJvci0xMDogI0ZDRUFFQiAhZGVmYXVsdDtcclxuJGVycm9yLTEyMDogI0IyMjEyQSAhZGVmYXVsdDtcclxuJGVycm9yLTE0MDogIzg2MTkyMCAhZGVmYXVsdDtcclxuXHJcbi8vIG5ldXRyYWw6XHJcbiRuZXV0cmFsOiAjMTExMTExICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0yOiAjRkFGQUZBICFkZWZhdWx0O1xyXG4kbmV1dHJhbC00OiAjRjVGNUY1ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC04OiAjRUNFQ0VDICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xMDogI0U3RTdFNyAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTU6ICNEQkRCREIgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTIwOiAjQ0ZDRkNGICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0zMDogI0I4QjhCOCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtNDA6ICNBMEEwQTAgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTUwOiAjODg4ODg4ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC02MDogIzcwNzA3MCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtNzA6ICM1ODU4NTggIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTgwOiAjNDE0MTQxICFkZWZhdWx0O1xyXG4kbmV1dHJhbC1mdWxsOiAjRkZGRkZGICFkZWZhdWx0O1xyXG5cclxuLy8gbWlzYzpcclxuJG1pc2MtY29yYWw6ICAgICAgICAgICAgI2ZhNzE2NyAhZGVmYXVsdDtcclxuJG1pc2MtY29yYWwtbGlnaHQ6ICAgICAgI2ZmY2FjNiAhZGVmYXVsdDtcclxuJG1pc2MtdGFuZ2VyaW5lOiAgICAgICAgI2ZhOWM3ZCAhZGVmYXVsdDtcclxuJG1pc2MtdGFuZ2VyaW5lLWxpZ2h0OiAgI2ZmZDRjNSAhZGVmYXVsdDtcclxuJG1pc2MtcGVhY2g6ICAgICAgICAgICAgI2ZkYmQyYiAhZGVmYXVsdDtcclxuJG1pc2MtcGVhY2gtbGlnaHQ6ICAgICAgI2ZmZjBjNCAhZGVmYXVsdDtcclxuJG1pc2Mtb2xpdmU6ICAgICAgICAgICAgI2FjYzk1MiAhZGVmYXVsdDtcclxuJG1pc2Mtb2xpdmUtbGlnaHQ6ICAgICAgI2U5ZjNkMCAhZGVmYXVsdDtcclxuJG1pc2MtdHVycXVvaXNlOiAgICAgICAgIzJkY2ZiZSAhZGVmYXVsdDtcclxuJG1pc2MtdHVycXVvaXNlLWxpZ2h0OiAgI2I0ZWVlYSAhZGVmYXVsdDtcclxuJG1pc2MtYXF1YTogICAgICAgICAgICAgIzNkYzlmYyAhZGVmYXVsdDtcclxuJG1pc2MtYXF1YS1saWdodDogICAgICAgI2JjZTdmNiAhZGVmYXVsdDtcclxuJG1pc2MtdmlraW5nOiAgICAgICAgICAgIzc3YjFlMSAhZGVmYXVsdDtcclxuJG1pc2MtdmlraW5nLWxpZ2h0OiAgICAgI2NkZTNmOCAhZGVmYXVsdDtcclxuJG1pc2MtbGF2ZW5kZXI6ICAgICAgICAgI2NkODlkMiAhZGVmYXVsdDtcclxuJG1pc2MtbGF2ZW5kZXItbGlnaHQ6ICAgI2Y1ZGFmNyAhZGVmYXVsdDtcclxuXHJcbi8vIGRlcHJlY2F0ZWQ6XHJcbiRzdGF0dXMtd2FybmluZy1kZWZhdWx0OiAjZmE5MzJmICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xNDogI2YwZjBmMCAhZGVmYXVsdDtcclxuJGlucHV0LWZpZWxkLW9uZm9jdXM6ICM4OGM1ZWUgIWRlZmF1bHQ7XHJcbiRpbnB1dC1maWVsZC1lcnJvcjogI2Y1OWVhOSAhZGVmYXVsdDtcclxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5cclxuLy8vIFZBUlM6XHJcbiRlZ2VvLWZvbnRmYWNlLXNyYzogJy4vYXNzZXRzL2ZvbnRzJyAhZGVmYXVsdDtcclxuJGVnZW8taW1hZ2Utc3JjOiAnYXNzZXRzL2ltYWdlcycgIWRlZmF1bHQ7XHJcbiRlZ2VvLWRyb2lkLXNhbnMtbW9ubzogdHJ1ZSAhZGVmYXVsdDtcclxuXHJcbi8vLyBmb250LWZhbWlseTpcclxuJGVnZW8tbnVuaXRvLXNhbnM6ICAgICAgICAgICAgICAgICAgJ051bml0byBTYW5zJyAhZGVmYXVsdDtcclxuJGVnZW8tc3RyYXRpby1pY29uczogICAgICAgICAgICAgICAgJ2ljb19zdHJhdGlvJyAhZGVmYXVsdDtcclxuXHJcbi8vLyBmb250LXNpemU6XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xMDogMC42MjVyZW0gIWRlZmF1bHQ7IC8vIDEwcHhcclxuJGVnZW8tZm9udC1zaXplLTExOiAwLjc4NnJlbSAhZGVmYXVsdDsgLy8gMTFweFxyXG4kZWdlby1mb250LXNpemUtMTI6IDAuODU3cmVtICFkZWZhdWx0OyAvLyAxMnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xNDogMXJlbSAhZGVmYXVsdDsgICAgIC8vIDE0cHhcclxuJGVnZW8tZm9udC1zaXplLTE2OiAxLjE0M3JlbSAhZGVmYXVsdDsgLy8gMTZweFxyXG4kZWdlby1mb250LXNpemUtMTg6IDEuMjg2cmVtICFkZWZhdWx0OyAvLyAxOHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0yMDogMS40MjlyZW0gIWRlZmF1bHQ7IC8vIDIwcHhcclxuJGVnZW8tZm9udC1zaXplLTI0OiAxLjcxNHJlbSAhZGVmYXVsdDsgLy8gMjRweFxyXG4kZWdlby1mb250LXNpemUtMjg6IDJyZW0gIWRlZmF1bHQ7ICAgICAvLyAyOHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0zMjogMi4yODZyZW0gIWRlZmF1bHQ7IC8vIDMycHhcclxuJGVnZW8tZm9udC1zaXplLTM4OiAyLjcxNHJlbSAhZGVmYXVsdDsgLy8gMzhweFxyXG4kZWdlby1mb250LXNpemUtNDI6IDNyZW0gIWRlZmF1bHQ7ICAgICAvLyA0MnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS00ODogMy40MjlyZW0gIWRlZmF1bHQ7IC8vIDQ4cHhcclxuJGVnZW8tZm9udC1zaXplLTUyOiAzLjcxNHJlbSAhZGVmYXVsdDsgLy8gNTJweFxyXG5cclxuLy8vIGxpbmUtaGVpZ2h0OlxyXG4kZWdlby1saW5lLWhlaWdodC0xODogMS4yODZyZW0gIWRlZmF1bHQ7IC8vIDE4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjA6IDEuNDI5cmVtICFkZWZhdWx0OyAvLyAyMHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTIyOiAxLjU3MXJlbSAhZGVmYXVsdDsgLy8gMjJweFxyXG4kZWdlby1saW5lLWhlaWdodC0yNDogMS43MTRyZW0gIWRlZmF1bHQ7IC8vIDI0cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjY6IDEuODU3cmVtICFkZWZhdWx0OyAvLyAyNnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI4OiAycmVtICFkZWZhdWx0OyAgICAgLy8gMjhweFxyXG4kZWdlby1saW5lLWhlaWdodC0zMjogMi4yODZyZW0gIWRlZmF1bHQ7IC8vIDMycHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMzU6IDIuNXJlbSAhZGVmYXVsdDsgICAvLyAzNXB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTQyOiAzcmVtICFkZWZhdWx0OyAgICAgLy8gNDJweFxyXG4kZWdlby1saW5lLWhlaWdodC00NjogMy4yODZyZW0gIWRlZmF1bHQ7IC8vIDQ2cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtNTA6IDMuNTcxcmVtICFkZWZhdWx0OyAvLyA1MHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTU4OiA0LjE0M3JlbSAhZGVmYXVsdDsgLy8gNThweFxyXG4kZWdlby1saW5lLWhlaWdodC02MjogNC40MjlyZW0gIWRlZmF1bHQ7IC8vIDYycHhcclxuXHJcbi8vIGRlcHJlY2F0ZWQ6XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eHhsYXJnZTogIDEuODEzcmVtICFkZWZhdWx0OyAgIC8vIDI5cHhcclxuJGVnZW8tZm9udC1zaXplLXh4bGFyZ2U6ICAgMS41NjNyZW0gIWRlZmF1bHQ7ICAgLy8gMjVweFxyXG4kZWdlby1mb250LXNpemUteGxhcmdlOiAgICAxLjM3NXJlbSAhZGVmYXVsdDsgICAvLyAyMnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14c21hbGw6ICAgIDAuOTM4cmVtICFkZWZhdWx0OyAgIC8vIDE1cHhcclxuXHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eGxhcmdlOiAgIDIuMTI1cmVtICFkZWZhdWx0OyAgLy8gMzRweFxyXG4kZWdlby1saW5lLWhlaWdodC14eGxhcmdlOiAgICAxLjg3NXJlbSAhZGVmYXVsdDsgIC8vIDMwcHhcclxuJGVnZW8tbGluZS1oZWlnaHQtc21hbGw6ICAgICAgMS4zMTNyZW0gIWRlZmF1bHQ7ICAvLyAyMXB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eHNtYWxsOiAgIDEuMDYzcmVtICFkZWZhdWx0OyAgLy8gMTdweFxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/demos/st-form-demo/st-form-demo.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/demos/st-form-demo/st-form-demo.module.ts ***!
  \***********************************************************/
/*! exports provided: StFormDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StFormDemoModule", function() { return StFormDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _st_form_demo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-form-demo */ "./src/app/demos/st-form-demo/st-form-demo.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _form_editor_st_form_editor_demo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-editor/st-form-editor-demo */ "./src/app/demos/st-form-demo/form-editor/st-form-editor-demo.ts");
/* harmony import */ var _visual_section_improvements_st_visual_section_improvements_editor_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visual-section-improvements/st-visual-section-improvements-editor-demo */ "./src/app/demos/st-form-demo/visual-section-improvements/st-visual-section-improvements-editor-demo.ts");
/* harmony import */ var _visual_field_improvements_st_visual_field_improvements_editor_demo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visual-field-improvements/st-visual-field-improvements-editor-demo */ "./src/app/demos/st-form-demo/visual-field-improvements/st-visual-field-improvements-editor-demo.ts");
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








var StFormDemoModule = /** @class */ (function () {
    function StFormDemoModule() {
    }
    StFormDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StFormModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StTextareaModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StHorizontalTabsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({ components: [_st_form_demo__WEBPACK_IMPORTED_MODULE_3__["StFormDemoComponent"]] })
            ],
            declarations: [_st_form_demo__WEBPACK_IMPORTED_MODULE_3__["StFormDemoComponent"], _form_editor_st_form_editor_demo__WEBPACK_IMPORTED_MODULE_5__["StFormEditorDemoComponent"], _visual_field_improvements_st_visual_field_improvements_editor_demo__WEBPACK_IMPORTED_MODULE_7__["StVisualFieldImprovementsDemoComponent"],
                _visual_section_improvements_st_visual_section_improvements_editor_demo__WEBPACK_IMPORTED_MODULE_6__["StVisualSectionImprovementsDemoComponent"]]
        })
    ], StFormDemoModule);
    return StFormDemoModule;
}());



/***/ }),

/***/ "./src/app/demos/st-form-demo/st-form-demo.ts":
/*!****************************************************!*\
  !*** ./src/app/demos/st-form-demo/st-form-demo.ts ***!
  \****************************************************/
/*! exports provided: StFormDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StFormDemoComponent", function() { return StFormDemoComponent; });
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

var StFormDemoComponent = /** @class */ (function () {
    function StFormDemoComponent() {
        this.configDoc = {
            html: 'demo/st-form-demo/st-form-demo.html',
            ts: 'demo/st-form-demo/st-form-demo.ts',
            component: 'lib/st-form/st-form.component.ts'
        };
        this.options = [
            { id: 'formEditor', text: 'Demo' },
            { id: 'visualSectionImprovements', text: 'Visual Section improvements' },
            { id: 'visualFieldImprovements', text: 'Visual Field improvements' }
        ];
        this.activeOption = this.options[0];
    }
    StFormDemoComponent.prototype.onChangeOption = function (selectedOption) {
        this.activeOption = selectedOption;
    };
    StFormDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-form-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-form-demo.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/st-form-demo.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-form-demo.component.scss */ "./src/app/demos/st-form-demo/st-form-demo.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], StFormDemoComponent);
    return StFormDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-form-demo/visual-field-improvements/st-visual-field-improvements-demo.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/demos/st-form-demo/visual-field-improvements/st-visual-field-improvements-demo.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.subtitle {\n  font-weight: bold;\n  font-size: 1.286rem;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.286rem;\n  letter-spacing: normal;\n  color: #414141;\n  padding: 26px 0; }\n.code-demo {\n  font-family: monospace;\n  font-size: 14px;\n  line-height: 1.6em;\n  color: #707070;\n  padding: 20px;\n  background-color: #fafafafa; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby92aXN1YWwtZmllbGQtaW1wcm92ZW1lbnRzL3N0LXZpc3VhbC1maWVsZC1pbXByb3ZlbWVudHMtZGVtby5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby92aXN1YWwtZmllbGQtaW1wcm92ZW1lbnRzL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlby1kZW1vXFxzcmNcXGFwcFxcZGVtb3NcXHN0LWZvcm0tZGVtb1xcdmlzdWFsLWZpZWxkLWltcHJvdmVtZW50c1xcc3QtdmlzdWFsLWZpZWxkLWltcHJvdmVtZW50cy1kZW1vLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtZm9ybS1kZW1vL3Zpc3VhbC1maWVsZC1pbXByb3ZlbWVudHMvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9jb2xvcnMuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby92aXN1YWwtZmllbGQtaW1wcm92ZW1lbnRzL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfZm9udHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7OztFRFVFO0FFVkY7Ozs7Ozs7OztFRm9CRTtBR3BCRjs7Ozs7Ozs7O0VIOEJFO0FDakJGO0VBQ0csaUJBQWlCO0VBQ2pCLG1CRVd5QjtFRlZ6QixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHFCRVF5QjtFRlB6QixzQkFBc0I7RUFDdEIsY0M4Q2lCO0VEN0NqQixlQUFlLEVBQUE7QUFHbEI7RUFDRyxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQ29DaUI7RURuQ2pCLGFBQWE7RUFDYiwyQkFBMkIsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1mb3JtLWRlbW8vdmlzdWFsLWZpZWxkLWltcHJvdmVtZW50cy9zdC12aXN1YWwtZmllbGQtaW1wcm92ZW1lbnRzLWRlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4uc3VidGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjI4NnJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMjg2cmVtO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzQxNDE0MTtcbiAgcGFkZGluZzogMjZweCAwOyB9XG5cbi5jb2RlLWRlbW8ge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmFmYTsgfVxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5AaW1wb3J0ICdjb25zdGFudHMvY29sb3JzJztcclxuQGltcG9ydCAnY29uc3RhbnRzL2ZvbnRzJztcclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS0xODtcclxuICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgbGluZS1oZWlnaHQ6ICRlZ2VvLWZvbnQtc2l6ZS0xODtcclxuICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgY29sb3I6ICRuZXV0cmFsLTgwO1xyXG4gICBwYWRkaW5nOiAyNnB4IDA7XHJcbn1cclxuXHJcbi5jb2RlLWRlbW8ge1xyXG4gICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcclxuICAgY29sb3I6ICRuZXV0cmFsLTYwO1xyXG4gICBwYWRkaW5nOiAyMHB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhZmE7XHJcbn1cclxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5cclxuLy8gYnJhbmQ6XHJcbiRicmFuZDogIzM3QjVFNCAhZGVmYXVsdDtcclxuXHJcbi8vIGFjdGlvbjpcclxuJGFjdGlvbjogIzA3NzZERiAhZGVmYXVsdDtcclxuJGFjdGlvbi0xMDogI0U2RjFGQyAhZGVmYXVsdDtcclxuJGFjdGlvbi00MDogIzlDQzhGMiAhZGVmYXVsdDtcclxuJGFjdGlvbi02MDogIzZBQURFQyAhZGVmYXVsdDtcclxuJGFjdGlvbi04MDogIzM5OTFFNSAhZGVmYXVsdDtcclxuJGFjdGlvbi0xMjA6ICMwNjVFQjIgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tMTUwOiAjMDMzQjcwICFkZWZhdWx0O1xyXG5cclxuLy8gc3BhY2U6XHJcbiRzcGFjZTogIzI3MzIzRCAhZGVmYXVsdDtcclxuJHNwYWNlLTU6ICNGM0Y2RjggIWRlZmF1bHQ7XHJcbiRzcGFjZS0xMDogI0VBRUZGNSAhZGVmYXVsdDtcclxuJHNwYWNlLTIwOiAjQ0RENkRGICFkZWZhdWx0O1xyXG4kc3BhY2UtMzA6ICNBQUI3QzQgIWRlZmF1bHQ7XHJcbiRzcGFjZS00MDogI0E1QjFCQyAhZGVmYXVsdDtcclxuJHNwYWNlLTUwOiAjODg5OEE3ICFkZWZhdWx0O1xyXG4kc3BhY2UtNzA6ICM2QzdCOEIgIWRlZmF1bHQ7XHJcbiRzcGFjZS04MDogIzU2NjU3NCAhZGVmYXVsdDtcclxuJHNwYWNlLTExMDogIzBGMUIyNyAhZGVmYXVsdDtcclxuXHJcbi8vIHN1Y2Nlc3M6XHJcbiRzdWNjZXNzOiAjMENBQTcwICFkZWZhdWx0O1xyXG4kc3VjY2Vzcy0xMDogI0U3RjdGMSAhZGVmYXVsdDtcclxuJHN1Y2Nlc3MtMTIwOiAjMEE4ODVBICFkZWZhdWx0O1xyXG4kc3VjY2Vzcy0xNDA6ICMwNzY2NDMgIWRlZmF1bHQ7XHJcblxyXG4vLyB3YXJuaW5nOlxyXG4kd2FybmluZzogI0VDN0UxMyAhZGVmYXVsdDtcclxuJHdhcm5pbmctMTA6ICNGREYyRTcgIWRlZmF1bHQ7XHJcbiR3YXJuaW5nLTEyMDogI0JENjUwRiAhZGVmYXVsdDtcclxuJHdhbmluZy0xNDA6ICM4RTRDMEIgIWRlZmF1bHQ7XHJcblxyXG4vLyBlcnJvcjpcclxuJGVycm9yOiAjREYyOTM1ICFkZWZhdWx0O1xyXG4kZXJyb3ItMTA6ICNGQ0VBRUIgIWRlZmF1bHQ7XHJcbiRlcnJvci0xMjA6ICNCMjIxMkEgIWRlZmF1bHQ7XHJcbiRlcnJvci0xNDA6ICM4NjE5MjAgIWRlZmF1bHQ7XHJcblxyXG4vLyBuZXV0cmFsOlxyXG4kbmV1dHJhbDogIzExMTExMSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMjogI0ZBRkFGQSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtNDogI0Y1RjVGNSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtODogI0VDRUNFQyAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTA6ICNFN0U3RTcgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTE1OiAjREJEQkRCICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0yMDogI0NGQ0ZDRiAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMzA6ICNCOEI4QjggIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTQwOiAjQTBBMEEwICFkZWZhdWx0O1xyXG4kbmV1dHJhbC01MDogIzg4ODg4OCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtNjA6ICM3MDcwNzAgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTcwOiAjNTg1ODU4ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC04MDogIzQxNDE0MSAhZGVmYXVsdDtcclxuJG5ldXRyYWwtZnVsbDogI0ZGRkZGRiAhZGVmYXVsdDtcclxuXHJcbi8vIG1pc2M6XHJcbiRtaXNjLWNvcmFsOiAgICAgICAgICAgICNmYTcxNjcgIWRlZmF1bHQ7XHJcbiRtaXNjLWNvcmFsLWxpZ2h0OiAgICAgICNmZmNhYzYgIWRlZmF1bHQ7XHJcbiRtaXNjLXRhbmdlcmluZTogICAgICAgICNmYTljN2QgIWRlZmF1bHQ7XHJcbiRtaXNjLXRhbmdlcmluZS1saWdodDogICNmZmQ0YzUgIWRlZmF1bHQ7XHJcbiRtaXNjLXBlYWNoOiAgICAgICAgICAgICNmZGJkMmIgIWRlZmF1bHQ7XHJcbiRtaXNjLXBlYWNoLWxpZ2h0OiAgICAgICNmZmYwYzQgIWRlZmF1bHQ7XHJcbiRtaXNjLW9saXZlOiAgICAgICAgICAgICNhY2M5NTIgIWRlZmF1bHQ7XHJcbiRtaXNjLW9saXZlLWxpZ2h0OiAgICAgICNlOWYzZDAgIWRlZmF1bHQ7XHJcbiRtaXNjLXR1cnF1b2lzZTogICAgICAgICMyZGNmYmUgIWRlZmF1bHQ7XHJcbiRtaXNjLXR1cnF1b2lzZS1saWdodDogICNiNGVlZWEgIWRlZmF1bHQ7XHJcbiRtaXNjLWFxdWE6ICAgICAgICAgICAgICMzZGM5ZmMgIWRlZmF1bHQ7XHJcbiRtaXNjLWFxdWEtbGlnaHQ6ICAgICAgICNiY2U3ZjYgIWRlZmF1bHQ7XHJcbiRtaXNjLXZpa2luZzogICAgICAgICAgICM3N2IxZTEgIWRlZmF1bHQ7XHJcbiRtaXNjLXZpa2luZy1saWdodDogICAgICNjZGUzZjggIWRlZmF1bHQ7XHJcbiRtaXNjLWxhdmVuZGVyOiAgICAgICAgICNjZDg5ZDIgIWRlZmF1bHQ7XHJcbiRtaXNjLWxhdmVuZGVyLWxpZ2h0OiAgICNmNWRhZjcgIWRlZmF1bHQ7XHJcblxyXG4vLyBkZXByZWNhdGVkOlxyXG4kc3RhdHVzLXdhcm5pbmctZGVmYXVsdDogI2ZhOTMyZiAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMTQ6ICNmMGYwZjAgIWRlZmF1bHQ7XHJcbiRpbnB1dC1maWVsZC1vbmZvY3VzOiAjODhjNWVlICFkZWZhdWx0O1xyXG4kaW5wdXQtZmllbGQtZXJyb3I6ICNmNTllYTkgIWRlZmF1bHQ7XHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vLyBWQVJTOlxyXG4kZWdlby1mb250ZmFjZS1zcmM6ICcuL2Fzc2V0cy9mb250cycgIWRlZmF1bHQ7XHJcbiRlZ2VvLWltYWdlLXNyYzogJ2Fzc2V0cy9pbWFnZXMnICFkZWZhdWx0O1xyXG4kZWdlby1kcm9pZC1zYW5zLW1vbm86IHRydWUgIWRlZmF1bHQ7XHJcblxyXG4vLy8gZm9udC1mYW1pbHk6XHJcbiRlZ2VvLW51bml0by1zYW5zOiAgICAgICAgICAgICAgICAgICdOdW5pdG8gU2FucycgIWRlZmF1bHQ7XHJcbiRlZ2VvLXN0cmF0aW8taWNvbnM6ICAgICAgICAgICAgICAgICdpY29fc3RyYXRpbycgIWRlZmF1bHQ7XHJcblxyXG4vLy8gZm9udC1zaXplOlxyXG4kZWdlby1mb250LXNpemUtMTA6IDAuNjI1cmVtICFkZWZhdWx0OyAvLyAxMHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xMTogMC43ODZyZW0gIWRlZmF1bHQ7IC8vIDExcHhcclxuJGVnZW8tZm9udC1zaXplLTEyOiAwLjg1N3JlbSAhZGVmYXVsdDsgLy8gMTJweFxyXG4kZWdlby1mb250LXNpemUtMTQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLyAxNHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xNjogMS4xNDNyZW0gIWRlZmF1bHQ7IC8vIDE2cHhcclxuJGVnZW8tZm9udC1zaXplLTE4OiAxLjI4NnJlbSAhZGVmYXVsdDsgLy8gMThweFxyXG4kZWdlby1mb250LXNpemUtMjA6IDEuNDI5cmVtICFkZWZhdWx0OyAvLyAyMHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0yNDogMS43MTRyZW0gIWRlZmF1bHQ7IC8vIDI0cHhcclxuJGVnZW8tZm9udC1zaXplLTI4OiAycmVtICFkZWZhdWx0OyAgICAgLy8gMjhweFxyXG4kZWdlby1mb250LXNpemUtMzI6IDIuMjg2cmVtICFkZWZhdWx0OyAvLyAzMnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0zODogMi43MTRyZW0gIWRlZmF1bHQ7IC8vIDM4cHhcclxuJGVnZW8tZm9udC1zaXplLTQyOiAzcmVtICFkZWZhdWx0OyAgICAgLy8gNDJweFxyXG4kZWdlby1mb250LXNpemUtNDg6IDMuNDI5cmVtICFkZWZhdWx0OyAvLyA0OHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS01MjogMy43MTRyZW0gIWRlZmF1bHQ7IC8vIDUycHhcclxuXHJcbi8vLyBsaW5lLWhlaWdodDpcclxuJGVnZW8tbGluZS1oZWlnaHQtMTg6IDEuMjg2cmVtICFkZWZhdWx0OyAvLyAxOHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTIwOiAxLjQyOXJlbSAhZGVmYXVsdDsgLy8gMjBweFxyXG4kZWdlby1saW5lLWhlaWdodC0yMjogMS41NzFyZW0gIWRlZmF1bHQ7IC8vIDIycHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjQ6IDEuNzE0cmVtICFkZWZhdWx0OyAvLyAyNHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI2OiAxLjg1N3JlbSAhZGVmYXVsdDsgLy8gMjZweFxyXG4kZWdlby1saW5lLWhlaWdodC0yODogMnJlbSAhZGVmYXVsdDsgICAgIC8vIDI4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMzI6IDIuMjg2cmVtICFkZWZhdWx0OyAvLyAzMnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTM1OiAyLjVyZW0gIWRlZmF1bHQ7ICAgLy8gMzVweFxyXG4kZWdlby1saW5lLWhlaWdodC00MjogM3JlbSAhZGVmYXVsdDsgICAgIC8vIDQycHhcclxuJGVnZW8tbGluZS1oZWlnaHQtNDY6IDMuMjg2cmVtICFkZWZhdWx0OyAvLyA0NnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTUwOiAzLjU3MXJlbSAhZGVmYXVsdDsgLy8gNTBweFxyXG4kZWdlby1saW5lLWhlaWdodC01ODogNC4xNDNyZW0gIWRlZmF1bHQ7IC8vIDU4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtNjI6IDQuNDI5cmVtICFkZWZhdWx0OyAvLyA2MnB4XHJcblxyXG4vLyBkZXByZWNhdGVkOlxyXG4kZWdlby1mb250LXNpemUteHh4bGFyZ2U6ICAxLjgxM3JlbSAhZGVmYXVsdDsgICAvLyAyOXB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eGxhcmdlOiAgIDEuNTYzcmVtICFkZWZhdWx0OyAgIC8vIDI1cHhcclxuJGVnZW8tZm9udC1zaXplLXhsYXJnZTogICAgMS4zNzVyZW0gIWRlZmF1bHQ7ICAgLy8gMjJweFxyXG4kZWdlby1mb250LXNpemUteHNtYWxsOiAgICAwLjkzOHJlbSAhZGVmYXVsdDsgICAvLyAxNXB4XHJcblxyXG4kZWdlby1saW5lLWhlaWdodC14eHhsYXJnZTogICAyLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDM0cHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHhsYXJnZTogICAgMS44NzVyZW0gIWRlZmF1bHQ7ICAvLyAzMHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXNtYWxsOiAgICAgIDEuMzEzcmVtICFkZWZhdWx0OyAgLy8gMjFweFxyXG4kZWdlby1saW5lLWhlaWdodC14eHhzbWFsbDogICAxLjA2M3JlbSAhZGVmYXVsdDsgIC8vIDE3cHhcclxuIl19 */");

/***/ }),

/***/ "./src/app/demos/st-form-demo/visual-field-improvements/st-visual-field-improvements-editor-demo.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/demos/st-form-demo/visual-field-improvements/st-visual-field-improvements-editor-demo.ts ***!
  \**********************************************************************************************************/
/*! exports provided: StVisualFieldImprovementsDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StVisualFieldImprovementsDemoComponent", function() { return StVisualFieldImprovementsDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
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

var StVisualFieldImprovementsDemoComponent = /** @class */ (function () {
    function StVisualFieldImprovementsDemoComponent() {
    }
    StVisualFieldImprovementsDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-visual-field-improvements-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-visual-field-improvements-editor-demo.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/visual-field-improvements/st-visual-field-improvements-editor-demo.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-visual-field-improvements-demo.component.scss */ "./src/app/demos/st-form-demo/visual-field-improvements/st-visual-field-improvements-demo.component.scss")).default]
        })
    ], StVisualFieldImprovementsDemoComponent);
    return StVisualFieldImprovementsDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-form-demo/visual-section-improvements/st-visual-section-improvements-demo.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/demos/st-form-demo/visual-section-improvements/st-visual-section-improvements-demo.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.subtitle {\n  font-weight: bold;\n  font-size: 1.286rem;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.286rem;\n  letter-spacing: normal;\n  color: #414141;\n  padding: 26px 0 10px 0; }\n.code-demo {\n  font-family: monospace;\n  font-size: 14px;\n  line-height: 1.6em;\n  color: #707070;\n  padding: 20px;\n  background-color: #FAFAFA; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby92aXN1YWwtc2VjdGlvbi1pbXByb3ZlbWVudHMvc3QtdmlzdWFsLXNlY3Rpb24taW1wcm92ZW1lbnRzLWRlbW8uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1mb3JtLWRlbW8vdmlzdWFsLXNlY3Rpb24taW1wcm92ZW1lbnRzL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlby1kZW1vXFxzcmNcXGFwcFxcZGVtb3NcXHN0LWZvcm0tZGVtb1xcdmlzdWFsLXNlY3Rpb24taW1wcm92ZW1lbnRzXFxzdC12aXN1YWwtc2VjdGlvbi1pbXByb3ZlbWVudHMtZGVtby5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby92aXN1YWwtc2VjdGlvbi1pbXByb3ZlbWVudHMvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9jb2xvcnMuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby92aXN1YWwtc2VjdGlvbi1pbXByb3ZlbWVudHMvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9mb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7O0VEVUU7QUVWRjs7Ozs7Ozs7O0VGb0JFO0FHcEJGOzs7Ozs7Ozs7RUg4QkU7QUNqQkY7RUFDRyxpQkFBaUI7RUFDakIsbUJFV3lCO0VGVnpCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIscUJFUXlCO0VGUHpCLHNCQUFzQjtFQUN0QixjQzhDaUI7RUQ3Q2pCLHNCQUFzQixFQUFBO0FBR3pCO0VBQ0csc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0NvQ2lCO0VEbkNqQixhQUFhO0VBQ2IseUJDeUJnQixFQUFBIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby92aXN1YWwtc2VjdGlvbi1pbXByb3ZlbWVudHMvc3QtdmlzdWFsLXNlY3Rpb24taW1wcm92ZW1lbnRzLWRlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4uc3VidGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjI4NnJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMjg2cmVtO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzQxNDE0MTtcbiAgcGFkZGluZzogMjZweCAwIDEwcHggMDsgfVxuXG4uY29kZS1kZW1vIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS42ZW07XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBOyB9XG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcbkBpbXBvcnQgJ2NvbnN0YW50cy9jb2xvcnMnO1xyXG5AaW1wb3J0ICdjb25zdGFudHMvZm9udHMnO1xyXG5cclxuLnN1YnRpdGxlIHtcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLTE4O1xyXG4gICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICBsaW5lLWhlaWdodDogJGVnZW8tZm9udC1zaXplLTE4O1xyXG4gICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICBjb2xvcjogJG5ldXRyYWwtODA7XHJcbiAgIHBhZGRpbmc6IDI2cHggMCAxMHB4IDA7XHJcbn1cclxuXHJcbi5jb2RlLWRlbW8ge1xyXG4gICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcclxuICAgY29sb3I6ICRuZXV0cmFsLTYwO1xyXG4gICBwYWRkaW5nOiAyMHB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmV1dHJhbC0yO1xyXG59XHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vIGJyYW5kOlxyXG4kYnJhbmQ6ICMzN0I1RTQgIWRlZmF1bHQ7XHJcblxyXG4vLyBhY3Rpb246XHJcbiRhY3Rpb246ICMwNzc2REYgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tMTA6ICNFNkYxRkMgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tNDA6ICM5Q0M4RjIgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tNjA6ICM2QUFERUMgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tODA6ICMzOTkxRTUgIWRlZmF1bHQ7XHJcbiRhY3Rpb24tMTIwOiAjMDY1RUIyICFkZWZhdWx0O1xyXG4kYWN0aW9uLTE1MDogIzAzM0I3MCAhZGVmYXVsdDtcclxuXHJcbi8vIHNwYWNlOlxyXG4kc3BhY2U6ICMyNzMyM0QgIWRlZmF1bHQ7XHJcbiRzcGFjZS01OiAjRjNGNkY4ICFkZWZhdWx0O1xyXG4kc3BhY2UtMTA6ICNFQUVGRjUgIWRlZmF1bHQ7XHJcbiRzcGFjZS0yMDogI0NERDZERiAhZGVmYXVsdDtcclxuJHNwYWNlLTMwOiAjQUFCN0M0ICFkZWZhdWx0O1xyXG4kc3BhY2UtNDA6ICNBNUIxQkMgIWRlZmF1bHQ7XHJcbiRzcGFjZS01MDogIzg4OThBNyAhZGVmYXVsdDtcclxuJHNwYWNlLTcwOiAjNkM3QjhCICFkZWZhdWx0O1xyXG4kc3BhY2UtODA6ICM1NjY1NzQgIWRlZmF1bHQ7XHJcbiRzcGFjZS0xMTA6ICMwRjFCMjcgIWRlZmF1bHQ7XHJcblxyXG4vLyBzdWNjZXNzOlxyXG4kc3VjY2VzczogIzBDQUE3MCAhZGVmYXVsdDtcclxuJHN1Y2Nlc3MtMTA6ICNFN0Y3RjEgIWRlZmF1bHQ7XHJcbiRzdWNjZXNzLTEyMDogIzBBODg1QSAhZGVmYXVsdDtcclxuJHN1Y2Nlc3MtMTQwOiAjMDc2NjQzICFkZWZhdWx0O1xyXG5cclxuLy8gd2FybmluZzpcclxuJHdhcm5pbmc6ICNFQzdFMTMgIWRlZmF1bHQ7XHJcbiR3YXJuaW5nLTEwOiAjRkRGMkU3ICFkZWZhdWx0O1xyXG4kd2FybmluZy0xMjA6ICNCRDY1MEYgIWRlZmF1bHQ7XHJcbiR3YW5pbmctMTQwOiAjOEU0QzBCICFkZWZhdWx0O1xyXG5cclxuLy8gZXJyb3I6XHJcbiRlcnJvcjogI0RGMjkzNSAhZGVmYXVsdDtcclxuJGVycm9yLTEwOiAjRkNFQUVCICFkZWZhdWx0O1xyXG4kZXJyb3ItMTIwOiAjQjIyMTJBICFkZWZhdWx0O1xyXG4kZXJyb3ItMTQwOiAjODYxOTIwICFkZWZhdWx0O1xyXG5cclxuLy8gbmV1dHJhbDpcclxuJG5ldXRyYWw6ICMxMTExMTEgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTI6ICNGQUZBRkEgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTQ6ICNGNUY1RjUgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTg6ICNFQ0VDRUMgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTEwOiAjRTdFN0U3ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC0xNTogI0RCREJEQiAhZGVmYXVsdDtcclxuJG5ldXRyYWwtMjA6ICNDRkNGQ0YgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTMwOiAjQjhCOEI4ICFkZWZhdWx0O1xyXG4kbmV1dHJhbC00MDogI0EwQTBBMCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtNTA6ICM4ODg4ODggIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTYwOiAjNzA3MDcwICFkZWZhdWx0O1xyXG4kbmV1dHJhbC03MDogIzU4NTg1OCAhZGVmYXVsdDtcclxuJG5ldXRyYWwtODA6ICM0MTQxNDEgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLWZ1bGw6ICNGRkZGRkYgIWRlZmF1bHQ7XHJcblxyXG4vLyBtaXNjOlxyXG4kbWlzYy1jb3JhbDogICAgICAgICAgICAjZmE3MTY3ICFkZWZhdWx0O1xyXG4kbWlzYy1jb3JhbC1saWdodDogICAgICAjZmZjYWM2ICFkZWZhdWx0O1xyXG4kbWlzYy10YW5nZXJpbmU6ICAgICAgICAjZmE5YzdkICFkZWZhdWx0O1xyXG4kbWlzYy10YW5nZXJpbmUtbGlnaHQ6ICAjZmZkNGM1ICFkZWZhdWx0O1xyXG4kbWlzYy1wZWFjaDogICAgICAgICAgICAjZmRiZDJiICFkZWZhdWx0O1xyXG4kbWlzYy1wZWFjaC1saWdodDogICAgICAjZmZmMGM0ICFkZWZhdWx0O1xyXG4kbWlzYy1vbGl2ZTogICAgICAgICAgICAjYWNjOTUyICFkZWZhdWx0O1xyXG4kbWlzYy1vbGl2ZS1saWdodDogICAgICAjZTlmM2QwICFkZWZhdWx0O1xyXG4kbWlzYy10dXJxdW9pc2U6ICAgICAgICAjMmRjZmJlICFkZWZhdWx0O1xyXG4kbWlzYy10dXJxdW9pc2UtbGlnaHQ6ICAjYjRlZWVhICFkZWZhdWx0O1xyXG4kbWlzYy1hcXVhOiAgICAgICAgICAgICAjM2RjOWZjICFkZWZhdWx0O1xyXG4kbWlzYy1hcXVhLWxpZ2h0OiAgICAgICAjYmNlN2Y2ICFkZWZhdWx0O1xyXG4kbWlzYy12aWtpbmc6ICAgICAgICAgICAjNzdiMWUxICFkZWZhdWx0O1xyXG4kbWlzYy12aWtpbmctbGlnaHQ6ICAgICAjY2RlM2Y4ICFkZWZhdWx0O1xyXG4kbWlzYy1sYXZlbmRlcjogICAgICAgICAjY2Q4OWQyICFkZWZhdWx0O1xyXG4kbWlzYy1sYXZlbmRlci1saWdodDogICAjZjVkYWY3ICFkZWZhdWx0O1xyXG5cclxuLy8gZGVwcmVjYXRlZDpcclxuJHN0YXR1cy13YXJuaW5nLWRlZmF1bHQ6ICNmYTkzMmYgIWRlZmF1bHQ7XHJcbiRuZXV0cmFsLTE0OiAjZjBmMGYwICFkZWZhdWx0O1xyXG4kaW5wdXQtZmllbGQtb25mb2N1czogIzg4YzVlZSAhZGVmYXVsdDtcclxuJGlucHV0LWZpZWxkLWVycm9yOiAjZjU5ZWE5ICFkZWZhdWx0O1xyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG4vLy8gVkFSUzpcclxuJGVnZW8tZm9udGZhY2Utc3JjOiAnLi9hc3NldHMvZm9udHMnICFkZWZhdWx0O1xyXG4kZWdlby1pbWFnZS1zcmM6ICdhc3NldHMvaW1hZ2VzJyAhZGVmYXVsdDtcclxuJGVnZW8tZHJvaWQtc2Fucy1tb25vOiB0cnVlICFkZWZhdWx0O1xyXG5cclxuLy8vIGZvbnQtZmFtaWx5OlxyXG4kZWdlby1udW5pdG8tc2FuczogICAgICAgICAgICAgICAgICAnTnVuaXRvIFNhbnMnICFkZWZhdWx0O1xyXG4kZWdlby1zdHJhdGlvLWljb25zOiAgICAgICAgICAgICAgICAnaWNvX3N0cmF0aW8nICFkZWZhdWx0O1xyXG5cclxuLy8vIGZvbnQtc2l6ZTpcclxuJGVnZW8tZm9udC1zaXplLTEwOiAwLjYyNXJlbSAhZGVmYXVsdDsgLy8gMTBweFxyXG4kZWdlby1mb250LXNpemUtMTE6IDAuNzg2cmVtICFkZWZhdWx0OyAvLyAxMXB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xMjogMC44NTdyZW0gIWRlZmF1bHQ7IC8vIDEycHhcclxuJGVnZW8tZm9udC1zaXplLTE0OiAxcmVtICFkZWZhdWx0OyAgICAgLy8gMTRweFxyXG4kZWdlby1mb250LXNpemUtMTY6IDEuMTQzcmVtICFkZWZhdWx0OyAvLyAxNnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xODogMS4yODZyZW0gIWRlZmF1bHQ7IC8vIDE4cHhcclxuJGVnZW8tZm9udC1zaXplLTIwOiAxLjQyOXJlbSAhZGVmYXVsdDsgLy8gMjBweFxyXG4kZWdlby1mb250LXNpemUtMjQ6IDEuNzE0cmVtICFkZWZhdWx0OyAvLyAyNHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0yODogMnJlbSAhZGVmYXVsdDsgICAgIC8vIDI4cHhcclxuJGVnZW8tZm9udC1zaXplLTMyOiAyLjI4NnJlbSAhZGVmYXVsdDsgLy8gMzJweFxyXG4kZWdlby1mb250LXNpemUtMzg6IDIuNzE0cmVtICFkZWZhdWx0OyAvLyAzOHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS00MjogM3JlbSAhZGVmYXVsdDsgICAgIC8vIDQycHhcclxuJGVnZW8tZm9udC1zaXplLTQ4OiAzLjQyOXJlbSAhZGVmYXVsdDsgLy8gNDhweFxyXG4kZWdlby1mb250LXNpemUtNTI6IDMuNzE0cmVtICFkZWZhdWx0OyAvLyA1MnB4XHJcblxyXG4vLy8gbGluZS1oZWlnaHQ6XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTE4OiAxLjI4NnJlbSAhZGVmYXVsdDsgLy8gMThweFxyXG4kZWdlby1saW5lLWhlaWdodC0yMDogMS40MjlyZW0gIWRlZmF1bHQ7IC8vIDIwcHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjI6IDEuNTcxcmVtICFkZWZhdWx0OyAvLyAyMnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI0OiAxLjcxNHJlbSAhZGVmYXVsdDsgLy8gMjRweFxyXG4kZWdlby1saW5lLWhlaWdodC0yNjogMS44NTdyZW0gIWRlZmF1bHQ7IC8vIDI2cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjg6IDJyZW0gIWRlZmF1bHQ7ICAgICAvLyAyOHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTMyOiAyLjI4NnJlbSAhZGVmYXVsdDsgLy8gMzJweFxyXG4kZWdlby1saW5lLWhlaWdodC0zNTogMi41cmVtICFkZWZhdWx0OyAgIC8vIDM1cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtNDI6IDNyZW0gIWRlZmF1bHQ7ICAgICAvLyA0MnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTQ2OiAzLjI4NnJlbSAhZGVmYXVsdDsgLy8gNDZweFxyXG4kZWdlby1saW5lLWhlaWdodC01MDogMy41NzFyZW0gIWRlZmF1bHQ7IC8vIDUwcHhcclxuJGVnZW8tbGluZS1oZWlnaHQtNTg6IDQuMTQzcmVtICFkZWZhdWx0OyAvLyA1OHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTYyOiA0LjQyOXJlbSAhZGVmYXVsdDsgLy8gNjJweFxyXG5cclxuLy8gZGVwcmVjYXRlZDpcclxuJGVnZW8tZm9udC1zaXplLXh4eGxhcmdlOiAgMS44MTNyZW0gIWRlZmF1bHQ7ICAgLy8gMjlweFxyXG4kZWdlby1mb250LXNpemUteHhsYXJnZTogICAxLjU2M3JlbSAhZGVmYXVsdDsgICAvLyAyNXB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS14bGFyZ2U6ICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgIC8vIDIycHhcclxuJGVnZW8tZm9udC1zaXplLXhzbWFsbDogICAgMC45MzhyZW0gIWRlZmF1bHQ7ICAgLy8gMTVweFxyXG5cclxuJGVnZW8tbGluZS1oZWlnaHQteHh4bGFyZ2U6ICAgMi4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAzNHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4bGFyZ2U6ICAgIDEuODc1cmVtICFkZWZhdWx0OyAgLy8gMzBweFxyXG4kZWdlby1saW5lLWhlaWdodC1zbWFsbDogICAgICAxLjMxM3JlbSAhZGVmYXVsdDsgIC8vIDIxcHhcclxuJGVnZW8tbGluZS1oZWlnaHQteHh4c21hbGw6ICAgMS4wNjNyZW0gIWRlZmF1bHQ7ICAvLyAxN3B4XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/demos/st-form-demo/visual-section-improvements/st-visual-section-improvements-editor-demo.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/demos/st-form-demo/visual-section-improvements/st-visual-section-improvements-editor-demo.ts ***!
  \**************************************************************************************************************/
/*! exports provided: StVisualSectionImprovementsDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StVisualSectionImprovementsDemoComponent", function() { return StVisualSectionImprovementsDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
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

var StVisualSectionImprovementsDemoComponent = /** @class */ (function () {
    function StVisualSectionImprovementsDemoComponent() {
    }
    StVisualSectionImprovementsDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-visual-section-improvements-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-visual-section-improvements-editor-demo.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/visual-section-improvements/st-visual-section-improvements-editor-demo.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-visual-section-improvements-demo.component.scss */ "./src/app/demos/st-form-demo/visual-section-improvements/st-visual-section-improvements-demo.component.scss")).default]
        })
    ], StVisualSectionImprovementsDemoComponent);
    return StVisualSectionImprovementsDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-form-demo-st-form-demo-module.js.map