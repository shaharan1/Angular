import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { WardModel } from '../models/ward.model';
import { BedModel } from '../models/bed.model';

@Injectable({
  providedIn: 'root',
})
export class AdmissionService {


  api = environment.apiUrl + "infrastructure";

  constructor(private http: HttpClient) { }

  getAllWards() {
    return this.http.get<WardModel[]>(this.api + "/wards");
  }

  getBedsByWard(id: number) {
    return this.http.get<BedModel[]>(`${this.api}/wards/${id}/beds`);
  }

}
