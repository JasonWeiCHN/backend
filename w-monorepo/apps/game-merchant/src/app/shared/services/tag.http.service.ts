import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITag } from '../interfaces/tag.interface';

@Injectable({
  providedIn: 'root',
})
export class TagHttpService {
  private tagUrl = 'http://localhost:8081/api/tags';

  constructor(private http: HttpClient) {}

  getAllTags(): Observable<ITag[]> {
    return this.http.get<ITag[]>(this.tagUrl);
  }
}
