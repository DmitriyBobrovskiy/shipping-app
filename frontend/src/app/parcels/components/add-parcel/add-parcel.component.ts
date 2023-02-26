import { Component } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-parcel',
  templateUrl: './add-parcel.component.html',
  styleUrls: ['./add-parcel.component.css']
})
export class AddParcelComponent {

  constructor(public bsModalRef: BsModalRef) {}

}
