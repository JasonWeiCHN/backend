import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAddUser, IUser } from '../models/user.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class UserHttpService {
  private baseUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.baseUrl}/`);
  }

  addUser(user: IAddUser): Observable<any> {
    return this.http.post(`${this.baseUrl}/`, user);
  }
}
