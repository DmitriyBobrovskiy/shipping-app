import { Component, Input } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { ParcelsService } from "../../services/parcels.service";
import { Parcel } from "../../models/parcel.entity";

@Component({
             selector: 'app-add-parcel',
             templateUrl: './add-parcel.component.html',
             styleUrls: ['./add-parcel.component.css']
           })
export class AddParcelComponent {
  sku: string = "";
  skuError?: string;

  description: string = "";
  street: string = "";
  town: string = "";
  country: string = "";
  deliveryDate: Date = new Date();

  @Input() countries: string[] = [];


  constructor(public bsModalRef: BsModalRef,
              private parcelsService: ParcelsService) {
  }

  async createParcel() {
    // TODO: that should be done differently
    const invalidForm = document.getElementsByClassName('invalid-feedback')[0] as HTMLFormElement;
    if (invalidForm) {
      return;
    }
    const parcel: Parcel = {
      sku: this.sku,
      country: this.country,
      town: this.town,
      streetAddress: this.street,
      deliveryDate: this.deliveryDate,
      description: this.description,
      order: this.parcelsService.getOrder(this.country)
    };
    const created = await this.parcelsService.createParcel(parcel);
    if (created) {
      this.bsModalRef.hide();
    }
    // TODO: some output to the user should be displayed
  }

  async skuFocusOut() {
    if (!this.sku) {
      this.skuError = 'SKU cannot be empty';
      return;
    }
    const skuExists = await this.parcelsService.skuExists(this.sku);
    if (skuExists) {
      this.skuError = "Such SKU already exists";
    } else {
      this.skuError = "";
    }
  }
}
