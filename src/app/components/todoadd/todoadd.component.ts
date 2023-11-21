import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { LocaldataService } from 'src/app/services/localdata.service';

@Component({
  selector: 'app-todoadd',
  templateUrl: './todoadd.component.html',
  styleUrls: ['./todoadd.component.css']
})
export class TodoaddComponent {
  inputdata: any;
  count!: number;

  @Output() todoadd: EventEmitter<Todo> = new EventEmitter();

  constructor(private dbdata: LocaldataService) {

  }
  onaddtodo() {


    //have one bug here but fix after development ↓ :(id can have same raise delete bug)
    let obj: Todo = {
      id: Math.round(Math.random() * 2000),
      key: 'todo',
      value: this.inputdata
    }
    this.todoadd.emit(obj)

    this.inputdata = ''
  }

}
