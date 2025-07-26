import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAccountingRecord } from '../interfaces/accounting-record.interface';
import { IGame } from '../interfaces/game.interface';
import { IRoom } from '../interfaces/room.interface';

@Injectable({
  providedIn: 'root',
})
export class AccountingHttpService {
  // http://localhost:8080/api/accounting 酷乐乐单体
  // http://localhost:8086/api/accounting 酷乐乐multiple
  // http://111.230.29.99:8080/multiple/api/accounting SASS
  // https://kulele.club/sass/api/multiple/api/accounting
  private accountingUrl = 'http://localhost:8086/api/accounting';
  private roomUrl = 'http://localhost:8086/api/room';
  // http://localhost:8081/api/accounting 酷乐乐单体
  // http://111.230.29.99:8080/games/api/games SASS
  // https://kulele.club/sass/api/games/api/games
  private gameUrl = 'https://kulele.club/sass/api/games/api/games';

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

  getAllRooms(): Observable<IRoom[]> {
    return this.http.get<IRoom[]>(this.roomUrl);
  }
}
