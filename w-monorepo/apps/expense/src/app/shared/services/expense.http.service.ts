import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IExpense } from '../interfaces/expense.interface';
import { Observable } from 'rxjs'; // 导入 of

@Injectable({
  providedIn: 'root',
})
export class ExpenseHttpService {
  private baseUrl = 'http://localhost:8086/api/expenses'; // 替换为你的后端地址 酷乐乐单体 8082  酷乐乐multiple 8086

  constructor(private http: HttpClient) {}

  getAllExpenses(): Observable<IExpense[]> {
    return this.http.get<IExpense[]>(this.baseUrl);
  }

  getExpenseById(id: number): Observable<IExpense> {
    return this.http.get<IExpense>(`${this.baseUrl}/${id}`);
  }

  createExpense(expense: IExpense): Observable<IExpense> {
    return this.http.post<IExpense>(this.baseUrl, expense);
  }

  updateExpense(id: number, expense: IExpense): Observable<IExpense> {
    return this.http.put<IExpense>(`${this.baseUrl}/${id}`, expense);
  }

  deleteExpense(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
