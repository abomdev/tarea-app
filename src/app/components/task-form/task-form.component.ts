import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  newTask: Task = {
    id: Date.now(),
    title: '',
    description: '',
    completed: false
  };

  @Output() taskCreated = new EventEmitter<Task>();

  addTask() {
    if (this.newTask.title.trim() && this.newTask.description.trim()) {
      this.taskCreated.emit({ ...this.newTask });
      this.newTask = {
        id: Date.now(),
        title: '',
        description: '',
        completed: false
      };
    }
  }
}
