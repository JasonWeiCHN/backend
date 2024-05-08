import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AnalysisHttpService {
  private baseUrl = 'http://111.230.29.99:5000'; // http://127.0.0.1:5000 请将其修改为您的Flask服务器地址

  constructor(private http: HttpClient) {
  }

  public trackPageVisit(): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/track-page-visit`, {});
  }

  public submitString(userString: string): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/submit-string`, { user_string: userString });
  }
}
