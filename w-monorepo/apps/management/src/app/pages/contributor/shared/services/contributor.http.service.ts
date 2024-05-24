import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddContributor, IContributor } from '@w-monorepo/interfaces';

@Injectable()
export class ContributorHttpService {
  private baseUrl = 'http://localhost:8080/contributor';

  constructor(private http: HttpClient) {
  }

  public searchContributors(column: string, keyword: string): Observable<IContributor[]> {
    return this.http.get<IContributor[]>(`${this.baseUrl}/search?column=${column}&keyword=${keyword}`);
  }

  public getAllContributors(): Observable<IContributor[]> {
    return this.http.get<IContributor[]>(`${this.baseUrl}/findAll`);
  }

  public getContributorById(id: number): Observable<IContributor> {
    return this.http.get<IContributor>(`${this.baseUrl}/findById/${id}`);
  }

  public saveContributor(contributor: IAddContributor): Observable<IAddContributor> {
    return this.http.post<IAddContributor>(`${this.baseUrl}/saveContributor`, contributor);
  }

  public deleteContributor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  public downloadContributorsAsJson(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/downloadContributorsAsJson`, { responseType: 'blob' });
  }
}
