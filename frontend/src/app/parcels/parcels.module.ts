import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParcelsComponent } from './components/parcels/parcels.component';
import { AddParcelComponent } from './components/add-parcel/add-parcel.component';

@NgModule({
  declarations: [
    ParcelsComponent,
    AddParcelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParcelsComponent
  ]
})
export class ParcelsModule { }
