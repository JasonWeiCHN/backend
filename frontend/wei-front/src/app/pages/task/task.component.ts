import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Task {
  taskId: number;
  taskCode: string;
  title: string;
  description: string;
  assignedTo: string;
  status: string;
}

@Component({
  selector: 'wei-front-task',
  template: `
    <wei-front-add-task></wei-front-add-task>
    <div class="mat-elevation-z8">
      <table mat-table [dataSource]="tasks">
        <ng-container matColumnDef="taskId">
          <th mat-header-cell *matHeaderCellDef> Task ID </th>
          <td mat-cell *matCellDef="let element"> {{element.taskId}} </td>
        </ng-container>
        <ng-container matColumnDef="taskCode">
          <th mat-header-cell *matHeaderCellDef> Task Code </th>
          <td mat-cell *matCellDef="let element"> {{element.taskCode}} </td>
        </ng-container>
        <ng-container matColumnDef="title">
          <th mat-header-cell *matHeaderCellDef> Title </th>
          <td mat-cell *matCellDef="let element"> {{element.title}} </td>
        </ng-container>
        <ng-container matColumnDef="description">
          <th mat-header-cell *matHeaderCellDef> Description </th>
          <td mat-cell *matCellDef="let element"> {{element.description}} </td>
        </ng-container>
        <ng-container matColumnDef="assignedTo">
          <th mat-header-cell *matHeaderCellDef> Assigned To </th>
          <td mat-cell *matCellDef="let element"> {{element.assignedTo}} </td>
        </ng-container>
        <ng-container matColumnDef="status">
          <th mat-header-cell *matHeaderCellDef> Status </th>
          <td mat-cell *matCellDef="let element"> {{element.status}} </td>
        </ng-container>
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    </div>
  `,
  styles: [`
    table {
      width: 100%;
    }
  `]
})
export class TaskComponent implements OnInit{
  tasks: Task[] = [];
  displayedColumns: string[] = ['taskId', 'taskCode', 'title', 'description', 'assignedTo', 'status'];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Task[]>('http://localhost:8080/tasks/').subscribe(data => {
      this.tasks = data;
    });
  }
}
