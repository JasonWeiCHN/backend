import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITag } from '../interfaces/tag.interface';

@Injectable({
  providedIn: 'root',
})
export class TagHttpService {
  // http://localhost:8081/api/tags 酷乐乐单体
  // http://111.230.29.99:8080/games/api/tags SASS
  // https://kulele.club/sass/api/games/api/tags
  private tagUrl = 'https://kulele.club/sass/api/games/api/tags';

  constructor(private http: HttpClient) {}

  getAllTags(): Observable<ITag[]> {
    return this.http.get<ITag[]>(this.tagUrl);
  }
}
