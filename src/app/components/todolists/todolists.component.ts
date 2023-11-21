import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { LocaldataService } from 'src/app/services/localdata.service';

@Component({
  selector: 'app-todolists',
  templateUrl: './todolists.component.html',
  styleUrls: ['./todolists.component.css']
})
export class TodolistsComponent implements OnInit {
  @Input() curruntlist: any
  totaltodos!: Todo[];
  currunttodos!: Todo[];

  constructor(private dbdata: LocaldataService) {
  }
  
  ngOnInit() {
    this.getalltodos();
    this.currunttodos= this.getcurrunttodolist();
  }

  getalltodos() {
    this.dbdata.getTodos().subscribe(res => {
      this.totaltodos = res
    });
  }

  getcurrunttodolist() {
    return this.totaltodos.filter((item: { key: string }) => item.key === this.curruntlist.key);
  }

  deleletodo(id: number) {
    this.dbdata.deleteTodo(id);
    this.ngOnInit()
  }

  
}
