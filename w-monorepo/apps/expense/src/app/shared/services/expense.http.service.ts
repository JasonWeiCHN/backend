import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IExpense } from '../interfaces/expense.interface';
import { Observable } from 'rxjs'; // 导入 of

@Injectable({
  providedIn: 'root',
})
export class ExpenseHttpService {
  // http://localhost:8082/api/expenses 酷乐乐单体
  // http://localhost:8086/api/expenses 酷乐乐multiple
  // http://111.230.29.99:8080/multiple/api/expenses SASS
  // https://kulele.club/sass/api/multiple/api/expenses
  private baseUrl = 'https://kulele.club/sass/api/multiple/api/expenses';

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
