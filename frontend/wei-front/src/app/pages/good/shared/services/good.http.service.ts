import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GoodHttpService {
  private baseUrl = 'http://localhost:8080/goods';

  constructor(private http: HttpClient) {}

  addGood(goodData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, goodData);
  }
}
