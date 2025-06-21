import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAppointment } from '../interfaces/appointment.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentHttpService {
  private baseUrl = 'http://localhost:8083/api/appointments'; // 修改为你的后端地址

  constructor(private http: HttpClient) {}

  getAllAppointments(): Observable<IAppointment[]> {
    return this.http.get<IAppointment[]>(this.baseUrl);
  }

  getAppointmentById(id: number): Observable<IAppointment> {
    return this.http.get<IAppointment>(`${this.baseUrl}/${id}`);
  }

  createAppointment(appointment: IAppointment): Observable<IAppointment> {
    return this.http.post<IAppointment>(this.baseUrl, appointment);
  }

  updateAppointment(
    id: number,
    appointment: IAppointment
  ): Observable<IAppointment> {
    return this.http.put<IAppointment>(`${this.baseUrl}/${id}`, appointment);
  }

  deleteAppointment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
