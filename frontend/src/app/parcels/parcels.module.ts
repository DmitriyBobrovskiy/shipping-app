import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParcelsComponent } from './components/parcels/parcels.component';
import { AddParcelComponent } from './components/add-parcel/add-parcel.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    ParcelsComponent,
    AddParcelComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports: [
    ParcelsComponent
  ]
})
export class ParcelsModule { }
