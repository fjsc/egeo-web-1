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
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StBreadcrumbsModule, StDemoGeneratorModule, StDocsModule } from '@stratio/egeo';

import { StBreadcrumbsDemoComponent } from './st-breadcrumbs-demo';
import { StDemoLoggerModule } from '../shared/st-demo-logger/st-demo-logger.module';

@NgModule({
   imports: [
      CommonModule,
      StDemoLoggerModule.withService(),
      StBreadcrumbsModule,
      StDocsModule,
      StDemoGeneratorModule.withComponents({
         components: [StBreadcrumbsDemoComponent]
      })
   ],
   declarations: [StBreadcrumbsDemoComponent],
   providers: []
})
export class StBreadcrumbsDemoModule { }
