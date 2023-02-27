import { Component, Input } from '@angular/core';

import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import * as countries from "country-list";

import { Parcel } from '../../models/parcel.entity';
import { AddParcelComponent } from '../add-parcel/add-parcel.component';
import { ParcelsService } from "../../services/parcels.service";

@Component({
             selector: 'app-parcels',
             templateUrl: './parcels.component.html',
             styleUrls: ['./parcels.component.css']
           })
export class ParcelsComponent {
  @Input() parcels: Parcel[] = [];

  readonly countries: string[] = countries.getNames();

  showFilters: boolean = false;
  loading: boolean = false;

  readonly countryLabel: string = 'All countries';
  country: string = this.countryLabel;
  description: string = '';

  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService,
              private parcelsService: ParcelsService) {
  }

  openModalWithComponent() {
    const options: ModalOptions<AddParcelComponent> = {
      initialState: {
        countries: this.countries
      }
    };
    this.bsModalRef = this.modalService.show(AddParcelComponent, options);
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  public filter() {
    const country = this.country === this.countryLabel ? '' : this.country;

    this.loading = true;
    this.parcelsService.getParcels(country, this.description).subscribe(parcels => {
      this.parcels = parcels;
      this.loading = false;
    });

  }
}
