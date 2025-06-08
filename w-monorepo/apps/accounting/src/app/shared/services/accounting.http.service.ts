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
  getGameList1(): Observable<IGame[]> {
    return this.http.get<IGame[]>(this.gameUrl);
  }

  getGameList(): Observable<IGame[]> {
    const mockGames: IGame[] = [
      {
        id: 1,
        name: '双影奇境',
        image: 'assets/game-images/双影奇境.png',
        tags: ['双人', '亲子', 'PS5'],
        searchKeywords: '双影奇境 SYQJ',
        releaseDate: '2023-03-07',
        description: '深入《双影奇境》的多重世界，体验惊心动魄的合作冒险。',
        video: 'assets/game-videos/双影奇境.mp4',
        genres: [
          { id: '1', name: '动作', description: '动作类游戏' },
          { id: '25', name: '冒险', description: '冒险类游戏' },
        ],
        guides: [
          {
            title: '全剧情流程通关攻略',
            description: '全任务 全收集',
            author: '11的游戏世界',
            sourceUrl: 'bilibili/BV1AmRKYBEXQ',
          },
        ],
      },
      {
        id: 2,
        name: '马力欧赛车1',
        image: 'assets/game-images/马力欧赛车8.png',
        tags: ['竞速', 'Switch', '多人'],
        searchKeywords: '马力欧 赛车 Mario Kart',
        releaseDate: '2017-04-28',
        description: '经典竞速游戏，支持本地和线上多人对战。',
        video: '',
        genres: [{ id: '2', name: '竞速', description: '赛车类游戏' }],
        guides: [],
      },
      {
        id: 2,
        name: '马力欧赛车2',
        image: 'assets/game-images/马力欧赛车8.png',
        tags: ['竞速', 'Switch', '多人'],
        searchKeywords: '马力欧 赛车 Mario Kart',
        releaseDate: '2017-04-28',
        description: '经典竞速游戏，支持本地和线上多人对战。',
        video: '',
        genres: [{ id: '2', name: '竞速', description: '赛车类游戏' }],
        guides: [],
      },
      {
        id: 2,
        name: '马力欧赛车3',
        image: 'assets/game-images/马力欧赛车8.png',
        tags: ['竞速', 'Switch', '多人'],
        searchKeywords: '马力欧 赛车 Mario Kart',
        releaseDate: '2017-04-28',
        description: '经典竞速游戏，支持本地和线上多人对战。',
        video: '',
        genres: [{ id: '2', name: '竞速', description: '赛车类游戏' }],
        guides: [],
      },
      {
        id: 2,
        name: '马力欧赛车4',
        image: 'assets/game-images/马力欧赛车8.png',
        tags: ['竞速', 'Switch', '多人'],
        searchKeywords: '马力欧 赛车 Mario Kart',
        releaseDate: '2017-04-28',
        description: '经典竞速游戏，支持本地和线上多人对战。',
        video: '',
        genres: [{ id: '2', name: '竞速', description: '赛车类游戏' }],
        guides: [],
      },
      {
        id: 2,
        name: '马力欧赛车5',
        image: 'assets/game-images/马力欧赛车8.png',
        tags: ['竞速', 'Switch', '多人'],
        searchKeywords: '马力欧 赛车 Mario Kart',
        releaseDate: '2017-04-28',
        description: '经典竞速游戏，支持本地和线上多人对战。',
        video: '',
        genres: [{ id: '2', name: '竞速', description: '赛车类游戏' }],
        guides: [],
      },
      {
        id: 2,
        name: '马力欧赛车6',
        image: 'assets/game-images/马力欧赛车8.png',
        tags: ['竞速', 'Switch', '多人'],
        searchKeywords: '马力欧 赛车 Mario Kart',
        releaseDate: '2017-04-28',
        description: '经典竞速游戏，支持本地和线上多人对战。',
        video: '',
        genres: [{ id: '2', name: '竞速', description: '赛车类游戏' }],
        guides: [],
      },
    ];

    return new Observable((observer) => {
      observer.next(mockGames);
      observer.complete();
    });
  }
}
