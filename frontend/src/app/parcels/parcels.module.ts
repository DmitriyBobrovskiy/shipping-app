import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'

import { ParcelsComponent } from './components/parcels/parcels.component';
import { AddParcelComponent } from './components/add-parcel/add-parcel.component';
import { SortByOrderPipe } from "./sort-by-order.pipe";
import { SortByDeliveryDatePipe } from './sort-by-delivery-date.pipe';

@NgModule({
  declarations: [
    ParcelsComponent,
    AddParcelComponent,
    SortByOrderPipe,
    SortByDeliveryDatePipe,
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    FormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports: [
    ParcelsComponent
  ]
})
export class ParcelsModule { }
