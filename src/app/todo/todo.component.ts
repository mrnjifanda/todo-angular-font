import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo!: Todo;
  tasks!: any[];
  poductivity!: string;

  constructor(
    private todoService: TodoService,
  ) { }

  ngOnInit(): void {
    // this.todo = {
    //   'id': 1,
    //   'user_id': 1,
    //   'name': 'Eric task',
    //   'slug': 'eric-task',
    //   'activity': 'Build a to do app',
    //   'status': 'processing',
    //   'created_at': new Date(),
    //   'updated_at': new Date(),
    //   'deleted_at': new Date()
    // };

    this.tasks = this.getListTasks();
    this.poductivity = this.getProductivity();
  }

  addTask(form: NgForm) {
  
    // console.log(form.value)
    const name = form.value["name"];
    const activity = form.value["activity"];
    const date = form.value["date"];
    this.todoService.create(name, activity, date);
    this.poductivity = this.getProductivity();
  }

  completedTask(form: NgForm) {
  
    const id = form.value["id"];
    this.todoService.completed(id);
  }

  deleteTask(form: NgForm) {
  
    const id = form.value["id"];
    this.todoService.delete(id);
  }

  getProductivity() {

    const productivity = this.todoService.productivities();
    return productivity.completed + ' / ' + productivity.total;
  }

  getListTasks() {

    return this.todoService.getTasks();
  }



}
