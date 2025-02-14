import { Injectable } from '@angular/core';
import { IGood } from './good.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '@w-monorepo/interfaces';

@Injectable()
export class GoodHttpService {
  private baseUrl = 'http://localhost:8080/goods';

  constructor(private http: HttpClient) {}

  public getAllGoods(): Observable<IGood[]> {
    return this.http.get<IGood[]>(`${this.baseUrl}/getAllGoods`);
  }

  public getAllGoodsPaginated(
    page: number,
    size: number
  ): Observable<Page<IGood>> {
    return this.http.get<Page<IGood>>(
      `${this.baseUrl}/getAllGoodsPaginated?page=${page}&size=${size}`
    );
  }
}
