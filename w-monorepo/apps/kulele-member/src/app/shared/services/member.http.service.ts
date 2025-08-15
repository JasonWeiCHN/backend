import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMember } from '../interfaces/member.interface';

@Injectable({
  providedIn: 'root',
})
export class MemberHttpService {
  // http://localhost:8086/api/members 酷乐乐multiple
  // https://kulele.club/sass/api/multiple/api/members
  private baseUrl = 'https://kulele.club/sass/api/multiple/api/members';

  constructor(private http: HttpClient) {}

  getAllMembers(): Observable<IMember[]> {
    return this.http.get<IMember[]>(this.baseUrl);
  }

  getMemberById(id: number): Observable<IMember> {
    return this.http.get<IMember>(`${this.baseUrl}/${id}`);
  }

  createMember(member: IMember): Observable<IMember> {
    return this.http.post<IMember>(this.baseUrl, member);
  }

  updateMember(id: number, member: IMember): Observable<IMember> {
    return this.http.put<IMember>(`${this.baseUrl}/${id}`, member);
  }

  deleteMember(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getMemberDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/details/${id}`);
  }
}
