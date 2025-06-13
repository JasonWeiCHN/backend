import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAccountingRecord } from '../interfaces/accounting-record.interface';
import { IGame } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root',
})
export class AccountingHttpService {
  private accountingUrl = 'http://localhost:8080/api/accounting'; // 替换为你的后端地址
  private gameUrl = 'http://localhost:8081/api/games';

  constructor(private http: HttpClient) {}

  getAllRecords(): Observable<IAccountingRecord[]> {
    return this.http.get<IAccountingRecord[]>(this.accountingUrl);
  }

  getRecordById(id: number): Observable<IAccountingRecord> {
    return this.http.get<IAccountingRecord>(`${this.accountingUrl}/${id}`);
  }

  createRecord(record: IAccountingRecord): Observable<IAccountingRecord> {
    return this.http.post<IAccountingRecord>(this.accountingUrl, record);
  }

  updateRecord(
    id: number,
    record: IAccountingRecord
  ): Observable<IAccountingRecord> {
    return this.http.put<IAccountingRecord>(
      `${this.accountingUrl}/${id}`,
      record
    );
  }

  deleteRecord(id: number): Observable<void> {
    return this.http.delete<void>(`${this.accountingUrl}/${id}`);
  }

  // ✅ 新增：获取游戏列表
  getGameList(): Observable<IGame[]> {
    return this.http.get<IGame[]>(this.gameUrl);
  }
}
