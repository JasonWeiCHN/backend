import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGenre } from '../interfaces/genre.interface';

@Injectable({
  providedIn: 'root',
})
export class GenreHttpService {
  private genreUrl = 'http://localhost:8081/api/genres';

  constructor(private http: HttpClient) {}

  getAllGenres(): Observable<IGenre[]> {
    return this.http.get<IGenre[]>(this.genreUrl);
  }
}
