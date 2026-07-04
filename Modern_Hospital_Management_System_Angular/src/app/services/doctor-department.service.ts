import {  } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorDepartmentModel } from '../models/doctorDepartment.model';


export class DoctorDepartmentService {


private apiUrl = environment.apiUrl + "departments/";

  constructor(private http: HttpClient) { }

  getAllDepartments(): Observable<DoctorDepartmentModel[]> {
    return this.http.get<DoctorDepartmentModel[]>(this.apiUrl);
  }

  getDepartmentById(id: number): Observable<DoctorDepartmentModel> {
    return this.http.get<DoctorDepartmentModel>(`${this.apiUrl}/${id}`);
  }

  createDepartment(department: DoctorDepartmentModel): Observable<DoctorDepartmentModel> {
    return this.http.post<DoctorDepartmentModel>(this.apiUrl, department);
  }

  updateDepartment(id: number, department: DoctorDepartmentModel): Observable<DoctorDepartmentModel> {
    return this.http.put<DoctorDepartmentModel>(`${this.apiUrl}/${id}`, department);
  }

  deleteDepartment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


}
