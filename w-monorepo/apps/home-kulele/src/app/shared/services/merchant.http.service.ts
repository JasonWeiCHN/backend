import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MerchantRegisterRequest {
  name: string;
  username: string;
  password: string;
  databaseName: string;
}

export interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class MerchantHttpService {
  private baseUrl = 'http://localhost:8085/api/merchants';

  constructor(private http: HttpClient) {}

  register(data: MerchantRegisterRequest): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/register`, data);
  }

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, {
      username,
      password,
    });
  }
}
