import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ClansHttpService {
  private baseUrl = 'http://localhost:8080/clan';

  constructor(private http: HttpClient) {
  }

  public downloadClansAsJson(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/downloadClansAsJson`, { responseType: 'blob' });
  }
}
