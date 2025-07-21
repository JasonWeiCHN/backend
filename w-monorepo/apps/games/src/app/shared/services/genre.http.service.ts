import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGenre } from '../interfaces/genre.interface';

@Injectable({
  providedIn: 'root',
})
export class GenreHttpService {
  // http://localhost:8081/api/genres 酷乐乐单体
  // http://111.230.29.99:8080/games/api/genres SASS
  // https://kulele.club/sass/api/games/api/genres
  private genreUrl = 'https://kulele.club/sass/api/games/api/genres';

  constructor(private http: HttpClient) {}

  getAllGenres(): Observable<IGenre[]> {
    return this.http.get<IGenre[]>(this.genreUrl);
  }
}
