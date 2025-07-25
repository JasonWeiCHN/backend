import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGameRelation } from '../interfaces/game-relation.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GameRelationHttpService {
  // http://localhost:8086/api/games 酷乐乐单体
  // http://111.230.29.99:8080/multiple/api/games SASS
  // https://kulele.club/sass/api/multiple/api/games
  private baseUrl = 'https://kulele.club/sass/api/multiple/api/games'; // 按需替换

  constructor(private http: HttpClient) {}

  getAll(): Observable<IGameRelation[]> {
    return this.http.get<IGameRelation[]>(this.baseUrl);
  }

  getById(id: number): Observable<IGameRelation> {
    return this.http.get<IGameRelation>(`${this.baseUrl}/${id}`);
  }

  create(
    data: Omit<IGameRelation, 'id' | 'addedAt'>
  ): Observable<IGameRelation> {
    return this.http.post<IGameRelation>(this.baseUrl, data);
  }

  update(
    id: number,
    data: Omit<IGameRelation, 'id' | 'addedAt'>
  ): Observable<IGameRelation> {
    return this.http.put<IGameRelation>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  createBatch(
    data: { gameId: number; note?: string }[]
  ): Observable<IGameRelation[]> {
    return this.http.post<IGameRelation[]>(`${this.baseUrl}/batch`, data);
  }
}
