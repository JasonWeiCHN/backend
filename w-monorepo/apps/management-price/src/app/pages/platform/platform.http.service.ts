import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '@w-monorepo/interfaces';
import { IAddPlatform, IPlatform } from './platform.interface';

@Injectable()
export class PlatformHttpService {
  private baseUrl = 'http://localhost:8080/platforms'; // 后端接口地址

  constructor(private http: HttpClient) {}

  // 获取所有商品（分页）
  public getAllPlatformsPaginated(
    page: number,
    size: number
  ): Observable<Page<IPlatform>> {
    return this.http.get<Page<IPlatform>>(
      `${this.baseUrl}/getAllPlatformsPaginated?page=${page}&size=${size}`
    );
  }

  // 新增商品
  public createPlatform(platform: IAddPlatform): Observable<IPlatform> {
    return this.http.post<IPlatform>(this.baseUrl, platform);
  }

  // 修改商品
  public updatePlatform(
    id: string,
    platform: IAddPlatform
  ): Observable<IPlatform> {
    return this.http.put<IPlatform>(`${this.baseUrl}/${id}`, platform);
  }

  // 删除商品
  public deletePlatform(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
