import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorModel } from '../models/doctor.model';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {

  private apiUrl = `${environment.apiUrl}doctors`;

  constructor(private http: HttpClient) { }

  getAllDoctors(): Observable<DoctorModel[]> {
    return this.http.get<DoctorModel[]>(this.apiUrl);
  }

  getDoctorById(id: number): Observable<DoctorModel> {
    return this.http.get<DoctorModel>(`${this.apiUrl}/${id}`);
  }

  getDoctorsByDepartment(departmentId: number): Observable<DoctorModel[]> {
    return this.http.get<DoctorModel[]>(`${this.apiUrl}/department/${departmentId}`);
  }

  createDoctor(doctor: DoctorModel): Observable<DoctorModel> {
    return this.http.post<DoctorModel>(this.apiUrl, doctor);
  }

  updateDoctor(id: number, doctor: DoctorModel): Observable<DoctorModel> {
    return this.http.put<DoctorModel>(`${this.apiUrl}/${id}`, doctor);
  }

  deleteDoctor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
