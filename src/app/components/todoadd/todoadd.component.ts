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


  //have one bug here but fix after development ↓ :(id can have same raise delete bug)
  onaddtodo() {

    if (this.inputdata) {

      const currentDate: Date = new Date();

      // If you only want the date without the time, you can use the toDateString() method
      const currentDateOnly: string = currentDate.toDateString();

      let obj: Todo = {
        id: Math.round(Math.random() * 2000),
        key: 'todo',
        value: this.inputdata,
        todocreater: {
          uid: 1,
          username: 'Hitesh',
          sdate: currentDateOnly,
          edate: currentDateOnly
        }
      }

      this.dbdata.addTodo(obj)
      window.location.reload();

      this.inputdata = ''

    } else {
      console.log("input is not given...");

    }

  }

}
