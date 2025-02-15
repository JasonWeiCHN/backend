import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAddGood, IGood } from './good.interface';
import { Page } from '@w-monorepo/interfaces';

@Injectable()
export class GoodHttpService {
  private baseUrl = 'http://localhost:8080/goods'; // 后端接口地址

  constructor(private http: HttpClient) {}

  // 获取所有商品（分页）
  public getAllGoodsPaginated(
    page: number,
    size: number
  ): Observable<Page<IGood>> {
    return this.http.get<Page<IGood>>(
      `${this.baseUrl}/getAllGoodsPaginated?page=${page}&size=${size}`
    );
  }

  // 新增商品
  public createGood(good: IAddGood): Observable<IGood> {
    return this.http.post<IGood>(this.baseUrl, good);
  }

  // 修改商品
  public updateGood(id: string, good: IAddGood): Observable<IGood> {
    return this.http.put<IGood>(`${this.baseUrl}/${id}`, good);
  }

  // 删除商品
  public deleteGood(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
