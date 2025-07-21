import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAppointment } from '../interfaces/appointment.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentHttpService {
  // http://localhost:8083/api/accounting 酷乐乐单体
  // http://localhost:8086/api/accounting 酷乐乐multiple
  // http://111.230.29.99:8080/multiple/api/appointments SASS
  // https://kulele.club/sass/api/multiple/api/appointments
  private baseUrl = 'https://kulele.club/sass/api/multiple/api/appointments';

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
