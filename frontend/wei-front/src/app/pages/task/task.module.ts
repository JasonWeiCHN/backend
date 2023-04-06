import { NgModule } from '@angular/core';
import { TaskComponent } from './task.component';
import { MatTableModule } from '@angular/material/table';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [TaskComponent, AddTaskComponent],
  imports: [MatTableModule, MatCardModule, MatInputModule, MatSelectModule, FormsModule, MatButtonModule, RouterLink],
  exports: [TaskComponent, AddTaskComponent],
})
export class TaskModule {}
