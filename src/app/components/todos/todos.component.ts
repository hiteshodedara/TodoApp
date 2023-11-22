import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { LocaldataService } from 'src/app/services/localdata.service';
import { UIdataService } from 'src/app/services/uidata.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: []
})
export class TodosComponent implements OnInit{


  blocks!: any[];


  constructor(private uiService: UIdataService, private dbdata: LocaldataService) {

    uiService.TodoListUI().subscribe((data) => {
      data.sort((a, b) => a.index - b.index)
      this.blocks = data.map(res => res)
    })

  }

  ngOnInit() {
  }


  

  //to add a todo item in todolist 
  addtodo(item: Todo) {
    this.dbdata.addTodo(item)
    window.location.reload();
  }


  




}
