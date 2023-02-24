import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parcel } from '../models/parcel.entity';

@Injectable({
  providedIn: 'root'
})
export class ParcelsService {
  private url = "http://localhost:3000/parcels"

  constructor(private httpClient: HttpClient) { }

  getParcels() : Observable<Parcel[]> {
    return this.httpClient.get<Parcel[]>(`${this.url}`);
  }
}
