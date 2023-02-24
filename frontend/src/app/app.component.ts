import { Component, OnInit } from '@angular/core';
import { Parcel } from './parcels/models/parcel.entity';
import { ParcelsService } from './parcels/services/parcels.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  parcels: Parcel[] = [];

  constructor(private parcelsService: ParcelsService) {}

  ngOnInit(): void {
      this.parcelsService.getParcels()
        .subscribe(parcels => this.parcels = parcels);
  }
}
