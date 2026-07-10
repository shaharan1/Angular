import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { TestMasterModel } from '../models/testMasterModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestMasterService {


  private apiUrl = environment.apiUrl + 'tests';

  constructor(private http: HttpClient) { }

  search(keyword: string): Observable<TestMasterModel[]> {
    return this.http.get<TestMasterModel[]>(
      `${this.apiUrl}/search?keyword=${keyword}`
    );
  }


}
