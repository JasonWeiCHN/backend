import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AnalysisHttpService {
  private baseUrl = 'http://111.230.29.99:5000'; // http://111.230.29.99:5000 请将其修改为您的Flask服务器地址

  constructor(private http: HttpClient) {
  }

  private getProjectName(): string {
    return (window as any).projectName || 'default'; // 如果项目名称未设置，默认使用 'default'
  }

  public trackPageVisit(): Observable<string> {
    const projectName = this.getProjectName();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Project-Name': projectName // 添加项目名称作为请求头
    });
    return this.http.post<string>(`${this.baseUrl}/track-page-visit`, {}, { headers });
  }

  public submitString(userString: string): Observable<string> {
    const projectName = this.getProjectName();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Project-Name': projectName // 添加项目名称作为请求头
    });
    return this.http.post<string>(`${this.baseUrl}/submit-string`, { user_string: userString }, { headers });
  }
}
