import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IGame } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root',
})
export class GameHttpService {
  private gameUrl = 'http://localhost:8081/api/games'; // 替换为你的后端地址

  constructor(private http: HttpClient) {}

  /** 获取全部游戏列表 */
  getAllGames1(): Observable<IGame[]> {
    return this.http.get<IGame[]>(this.gameUrl);
  }

  getAllGames(): Observable<IGame[]> {
    const mockGames: IGame[] = [
      {
        id: 1,
        name: '双影奇境',
        image: 'https://example.com/image1.jpg',
        tags: ['双人', '冒险'],
        searchKeywords: 'SYQJ',
        description: '一款充满幻想的双人合作冒险游戏。',
        video: 'https://bilibili.com/video/BV1x...',
      },
      {
        id: 2,
        name: '赛车英雄',
        image: 'https://example.com/image2.jpg',
        tags: ['竞速', '单人'],
        searchKeywords: 'SCYX',
        description: '极速竞速体验，挑战极限操作！',
        video: '',
      },
    ];

    return of(mockGames);
  }

  /** 根据 ID 获取游戏 */
  getGameById(id: number): Observable<IGame> {
    return this.http.get<IGame>(`${this.gameUrl}/${id}`);
  }

  /** 创建新游戏 */
  createGame(game: IGame): Observable<IGame> {
    return this.http.post<IGame>(this.gameUrl, game);
  }

  /** 更新游戏 */
  updateGame(id: number, game: IGame): Observable<IGame> {
    return this.http.put<IGame>(`${this.gameUrl}/${id}`, game);
  }

  /** 删除游戏 */
  deleteGame(id: number): Observable<void> {
    return this.http.delete<void>(`${this.gameUrl}/${id}`);
  }
}
