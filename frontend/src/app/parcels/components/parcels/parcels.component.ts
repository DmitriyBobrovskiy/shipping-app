import { Component, Input } from '@angular/core';

import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

import { Parcel } from '../../models/parcel.entity';
import { AddParcelComponent } from '../add-parcel/add-parcel.component';

@Component({
  selector: 'app-parcels',
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.css']
})
export class ParcelsComponent {
  @Input() parcels: Parcel[] = [];

  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModalWithComponent() {
    this.bsModalRef = this.modalService.show(AddParcelComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
