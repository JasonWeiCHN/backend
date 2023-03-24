import {Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'wei-front-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {

  public task = {
    taskCode: '',
    title: '',
    description: '',
    assignedTo: '',
    status: ''
  };

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post('http://localhost:8080/tasks/add', this.task).subscribe(
        response => console.log(response),
        error => console.error(error)
    );
  }

}