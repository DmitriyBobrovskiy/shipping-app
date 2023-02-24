import { Component, Input } from '@angular/core';
import { Parcel } from '../../models/parcel.entity';

@Component({
  selector: 'app-parcels',
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.css']
})
export class ParcelsComponent {
  @Input() parcels: Parcel[] = [];
}
