import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class VoteHttpService {
  private baseUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {
  }

  private getProjectName(): string {
    return (window as any).projectName || 'default'; // 如果项目名称未设置，默认使用 'default'
  }

  public submitVote(subjectId: string, mechanismId: string): Observable<string> {
    const projectName = this.getProjectName();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Project-Name': projectName // 添加项目名称作为请求头
    });
    const body = { subject_id: subjectId, mechanism_id: mechanismId };
    return this.http.post<string>(`${this.baseUrl}/vote`, body, { headers });
  }

  public getVoteResult(subjectId: string, mechanismId: string): Observable<any> {
    const projectName = this.getProjectName();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Project-Name': projectName // 添加项目名称作为请求头
    });
    const params = { subject_id: subjectId, mechanism_id: mechanismId };
    return this.http.get<any>(`${this.baseUrl}/vote-count`, { headers, params });
  }

  public getSubjectVotes(subjectId: string): Observable<any> {
    const projectName = this.getProjectName();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Project-Name': projectName // 添加项目名称作为请求头
    });
    const params = { subject_id: subjectId };
    return this.http.get<any>(`${this.baseUrl}/subject-votes`, { headers, params });
  }
}
