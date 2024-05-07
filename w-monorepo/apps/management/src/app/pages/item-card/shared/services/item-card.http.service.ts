import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAddItemCard } from '../../item-card.component';
import { IItemCard } from '@w-monorepo/ui';
import { Injectable } from '@angular/core';
import { Page } from '@w-monorepo/interfaces';

@Injectable()
export class ItemCardHttpService {
  private baseUrl = 'http://localhost:8080/itemCard';

  constructor(private http: HttpClient) {
  }

  public searchItemCards(column: string, keyword: string): Observable<IItemCard[]> {
    return this.http.get<IItemCard[]>(`http://localhost:8080/itemCard/search?column=${column}&keyword=${keyword}`);
  }

  public getAllItemCards(): Observable<IItemCard[]> {
    return this.http.get<IItemCard[]>(`${this.baseUrl}/findAll`);
  }

  public getAllItemCardsPaginated(page: number, size: number): Observable<Page<IItemCard>> {
    return this.http.get<Page<IItemCard>>(`http://localhost:8080/itemCard/findAllPaginated?page=${page}&size=${size}`);
  }

  public addItemCard(addItemCard: IAddItemCard): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/saveItemCard`, addItemCard);
  }

  public deleteItemCard(itemId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${itemId}`);
  }

  public downloadItemCardsAsJson(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/downloadItemCardsAsJson`, { responseType: 'blob' });
  }
}
