import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRoom } from '../interfaces/room.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomHttpService {
  // http://localhost:8086/api/room 酷乐乐multiple - local
  // https://kulele.club/sass/api/multiple/api/room 酷乐乐multiple - sass
  private baseUrl = 'http://localhost:8086/api/room';

  constructor(private http: HttpClient) {}

  getAllRooms(): Observable<IRoom[]> {
    return this.http.get<IRoom[]>(this.baseUrl);
  }

  getRoomById(id: number): Observable<IRoom> {
    return this.http.get<IRoom>(`${this.baseUrl}/${id}`);
  }

  createRoom(room: IRoom): Observable<IRoom> {
    return this.http.post<IRoom>(this.baseUrl, room);
  }

  updateRoom(id: number, room: IRoom): Observable<IRoom> {
    return this.http.put<IRoom>(`${this.baseUrl}/${id}`, room);
  }

  deleteRoom(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
