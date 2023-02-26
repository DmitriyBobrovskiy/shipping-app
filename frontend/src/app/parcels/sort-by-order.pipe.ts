import { Pipe, PipeTransform } from '@angular/core';
import { Parcel } from "./models/parcel.entity";

@Pipe({
        name: 'sortByOrder'
      })
export class SortByOrderPipe implements PipeTransform {
  transform(value: Parcel[]): Parcel[] {
    // Highest order on the top
    return value.sort((p1, p2) => {
      return (p2.order ?? 0) - (p1.order ?? 0);
    });
  }
}
