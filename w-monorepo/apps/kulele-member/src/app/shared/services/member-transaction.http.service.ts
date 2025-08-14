import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MemberTransactionHttpService {
  // http://localhost:8086/api/member-transactions 酷乐乐multiple
  // https://kulele.club/sass/api/multiple/api/member-transactions
  private baseUrl = 'http://localhost:8086/api/member-transactions';

  constructor(private http: HttpClient) {}

  recharge(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/recharge`, data);
  }

  consume(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/consume`, data);
  }

  getRecharges(memberId: number) {
    return this.http.get<any[]>(`${this.baseUrl}/recharges/${memberId}`);
  }

  getConsumptions(memberId: number) {
    return this.http.get<any[]>(`${this.baseUrl}/consumptions/${memberId}`);
  }
}
