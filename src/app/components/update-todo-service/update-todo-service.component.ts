import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-update-todo-service',
  templateUrl: './update-todo-service.component.html',
  styleUrls: ['./update-todo-service.component.css']
})
export class UpdateTodoServiceComponent implements OnInit {

  Tvalue!:string;

  constructor(public config: DynamicDialogConfig) {

    console.log (this.Tvalue=this.config.data.values);
  }


  ngOnInit(): void { 
    
  }
}
