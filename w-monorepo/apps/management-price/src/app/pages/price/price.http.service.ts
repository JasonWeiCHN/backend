import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAddPrice, IPrice } from './price.interface';
import { Page } from '@w-monorepo/interfaces';

@Injectable()
export class PriceHttpService {
  private baseUrl = 'http://localhost:8080/prices'; // 后端接口地址

  constructor(private http: HttpClient) {}

  // 获取所有价格（分页）
  public getAllPricesPaginated(
    page: number,
    size: number
  ): Observable<Page<IPrice>> {
    return this.http.get<Page<IPrice>>(
      `${this.baseUrl}/getAllPricesPaginated?page=${page}&size=${size}`
    );
  }

  // 新增价格
  public createPrice(price: IAddPrice): Observable<IPrice> {
    return this.http.post<IPrice>(this.baseUrl, price);
  }

  // 修改价格
  public updatePrice(id: string, price: IPrice): Observable<IPrice> {
    return this.http.put<IPrice>(`${this.baseUrl}/${id}`, price);
  }

  // 删除价格
  public deletePrice(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
