import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { LocaldataService } from 'src/app/services/localdata.service';
import { UIdataService } from 'src/app/services/uidata.service';
import { UpdateTodoServiceComponent } from '../update-todo-service/update-todo-service.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [DialogService]
})
export class TodosComponent implements OnInit{


  blocks!: any[];

  ref: DynamicDialogRef | undefined;//ref data for dynamicdialog

  constructor(private uiService: UIdataService, private dbdata: LocaldataService, public dialogService: DialogService) {

    uiService.TodoListUI().subscribe((data) => {
      data.sort((a, b) => a.index - b.index)
      this.blocks = data.map(res => res)
    })

  }

  ngOnInit() {
  }


  Updatetodo() {
    this.ref = this.dialogService.open(UpdateTodoServiceComponent, {
      header: 'Update Todo',
      width: '50%',
      contentStyle: {'background-color': '#76db9b', 'color': 'black','overflow':'hidden'},
      baseZIndex: 10000,
      maximizable: false,
      draggable:true,
      position:'center',
      data: {
        values: "item",     
      },
    });
  }


  

  //to add a todo item in todolist 
  addtodo(item: Todo) {
    
  }


  




}
