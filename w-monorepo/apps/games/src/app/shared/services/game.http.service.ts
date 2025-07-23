import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  IAddGameRequest,
  IGame,
  IGameGuide,
} from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root',
})
export class GameHttpService {
  // http://localhost:8081/api/games 酷乐乐单体
  // http://111.230.29.99:8080/games/api/games SASS
  // https://kulele.club/sass/api/games/api/games
  private gameUrl = 'https://kulele.club/sass/api/games/api/games';

  constructor(private http: HttpClient) {}

  /** 获取全部游戏列表 */
  getAllGames(): Observable<IGame[]> {
    return this.http.get<IGame[]>(this.gameUrl);
  }

  /** 根据 ID 获取游戏 */
  getGameById(id: number): Observable<IGame> {
    return this.http.get<IGame>(`${this.gameUrl}/${id}`);
  }

  /** 创建新游戏 */
  createGame(game: IAddGameRequest): Observable<IGame> {
    return this.http.post<IGame>(this.gameUrl, game);
  }

  /** 更新游戏 */
  updateGame(id: number, game: IAddGameRequest): Observable<IGame> {
    return this.http.put<IGame>(`${this.gameUrl}/${id}`, game);
  }

  /** 删除游戏 */
  deleteGame(id: number): Observable<void> {
    return this.http.delete<void>(`${this.gameUrl}/${id}`);
  }

  // 新增这个方法，调用后台 PUT /api/games/{id}/guides 接口
  updateGuidesByGameId(
    id: number,
    guidesPayload: { guides: IGameGuide[] }
  ): Observable<IGameGuide[]> {
    return this.http.put<IGameGuide[]>(
      `${this.gameUrl}/${id}/guides`,
      guidesPayload
    );
  }
}
