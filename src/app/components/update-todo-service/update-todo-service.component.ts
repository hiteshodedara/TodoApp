import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-update-todo-service',
  templateUrl: './update-todo-service.component.html',
  styleUrls: ['./update-todo-service.component.css']
})
export class UpdateTodoServiceComponent implements OnInit {

  Tvalue!:string;//todoitem value(text)

  constructor(public config: DynamicDialogConfig) {

    this.Tvalue=this.config.data.values.title
    console.log(this.Tvalue);

  }


  ngOnInit(): void { 
    
  }
}
