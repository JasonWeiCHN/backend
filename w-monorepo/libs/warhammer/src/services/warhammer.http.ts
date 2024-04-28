import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  IClanUpload,
  IWarhammerClassifierBase
} from '../interfaces/warhammer-classifier/warhammer-classifier.interface';

@Injectable()
export class WarhammerHttpService {
  private baseUrl = 'http://localhost:8080'; // 修改为您的后端地址

  constructor(private http: HttpClient) {
  }

  public findAllWarhammerClassifiers(): Observable<IWarhammerClassifierBase[]> {
    return this.http.get<IWarhammerClassifierBase[]>(`${this.baseUrl}/warhammerClassifier/findAll`);
  }

  public saveClan(data: IClanUpload): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/clan/saveClan`, data);
  }
}
