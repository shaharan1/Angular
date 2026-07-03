import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private apiUrl = environment.apiUrl + "users/";

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.apiUrl}/${id}`);
  }

  // getUsersByRole(role: Role): Observable<UserModel[]> {
  //   return this.http.get<UserModel[]>(`${`${this.apiUrl}/role/${role}`}`);
  // }

  createUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.apiUrl, user);
  }

  updateUser(id: number, user: UserModel): Observable<UserModel> {
    return this.http.put<UserModel>(`${this.apiUrl}/${id}`, user);
  }

  toggleUserStatus(id: number): Observable<UserModel> {
    return this.http.patch<UserModel>(`${this.apiUrl}/${id}/toggle-status`, {});
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
