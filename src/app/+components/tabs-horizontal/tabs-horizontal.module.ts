
/*
 * Copyright (c) 2017. Stratio Big Data Inc., Sucursal en España. All rights reserved.
 *
 * This software is licensed under the Apache Licence 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared';
import { TabsHorizontalComponent } from './tabs-horizontal.component';
import { routing } from './tabs-horizontal.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [TabsHorizontalComponent]
})
export class TabsHorizontalModule { }

