import { Pipe, PipeTransform } from '@angular/core';
import { Parcel } from "./models/parcel.entity";

@Pipe({
        name: 'sortByDeliveryDate'
      })
export class SortByDeliveryDatePipe implements PipeTransform {
  transform(value: Parcel[]): Parcel[] {
    // Ascending - the oldest ones come first
    return value.sort((p1, p2) => {
      return p1.deliveryDate > p2.deliveryDate ? 1 : -1;
    });
  }
}
