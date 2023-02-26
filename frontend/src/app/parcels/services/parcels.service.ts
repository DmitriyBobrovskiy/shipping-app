import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, Subject, firstValueFrom, catchError, ObservableInput } from 'rxjs';

import { Parcel } from '../models/parcel.entity';

@Injectable({
              providedIn: 'root'
            })
export class ParcelsService {
  private url = "http://localhost:3000/parcels";
  parcels: Subject<Parcel[]> = new Subject<Parcel[]>();

  constructor(private httpClient: HttpClient) {
  }

  getParcels(): Observable<Parcel[]>{
    let url = this.url;
    // if (sku) {
    //   url += `?sku=${sku}`
    // }
    return this.httpClient.get<Parcel[]>(url);
  }

  updateParcels() : void {
    this.getParcels().subscribe(parcels => this.parcels.next(parcels));
  }

  async skuExists(sku?: string) : Promise<boolean>{
    const url = this.url + '/' + sku;
    const parcel = await firstValueFrom(this.httpClient.get<Parcel[]>(url));
    return parcel != null;
  }

  async createParcel(parcel: Parcel): Promise<boolean> {
    const createdParcel = await firstValueFrom(this.httpClient.post(this.url, parcel)
      .pipe(catchError(this.errorHandler)));
    if (createdParcel) {
      this.updateParcels();
      return true;
    }
    return false;
  }

  errorHandler(error: HttpErrorResponse) : ObservableInput<any>{
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    console.error(error);
    throw new Error(
      'Something bad happened; please try again later.');
  }

  getOrder(country: string): number {
    if (country.toLowerCase() === 'estonia') {
      return 1;
    }
    return 0;
  }
}
