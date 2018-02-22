import { Todo } from './../../../models/todo';
import { TodoService } from './../../../services/todo.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddTodoComponent implements OnInit {
  todo: Todo = {
    title: '',
    description: ''
  }

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
  
  onSubmit(){
    if(this.todo.title != '' && this.todo.description != ''){
      this.todoService.addTodo(this.todo);
      this.todo.title = '';
      this.todo.description = '';
    }
  }

}
