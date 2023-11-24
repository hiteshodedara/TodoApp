import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { LocaldataService } from 'src/app/services/localdata.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PopupModelComponent } from '../popup-model/popup-model.component';


@Component({
  selector: 'app-todolists',
  templateUrl: './todolists.component.html',
  styleUrls: ['./todolists.component.sass'],
  providers: [DialogService]
})
export class TodolistsComponent implements OnInit {
  @Input() curruntlist: any//currunt list data come from todos 

  totaltodos!: Todo[];//total todoitems

  currunttodos!: Todo[];//currunt list total todositems

  ref: DynamicDialogRef | undefined;//ref data for dynamicdialog


  constructor(private dbdata: LocaldataService, public dialogService: DialogService) {
  }


  ngOnInit() {
    this.getalltodos();
    this.getcurrunttodolist().subscribe(res => {
      this.currunttodos = res;
    });
  }

  //use for get all todos 
  getalltodos() {
    this.dbdata.getTodos().subscribe(res => {
      this.totaltodos = res
    });
  }

  //use for get specific list of todos
  getcurrunttodolist(): Observable<Todo[]> {
    return of(this.totaltodos.filter((item: { key: string }) => item.key === this.curruntlist.key));
  }

  //main delete function for delete todo item and update todos
  deleletodo(id: number) {
    this.dbdata.deleteTodo(id);
    this.ngOnInit()
  }

  //call add popup model for add todo
  Addtodo(clist: any) {
    this.ref = this.dialogService.open(PopupModelComponent, {
      header: 'Add Card',
      width: '50%',
      contentStyle: { 'background-color': '#76db9b', 'color': 'black', 'overflow': 'hidden' },
      baseZIndex: 10000,
      maximizable: false,
      draggable: true,
      position: 'center',
      data: {
        curruntlist: clist,//data of currunt todolist for is name and key
      },
    });
  }

}
