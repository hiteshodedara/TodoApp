import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';
import { LocaldataService } from 'src/app/services/localdata.service';
import { UIdataService } from 'src/app/services/uidata.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-todoitems',
  templateUrl: './todoitems.component.html',
  styleUrls: ['./todoitems.component.css']
})
export class TodoitemsComponent implements OnInit {

  @Input() curruntlist: any;
  @Input() items: any;
  @Output() tododelete: EventEmitter<number> = new EventEmitter();


  oplist: any[] | undefined;
  selectedvalue!: string;//For Selected Item list Option Name or Key

  constructor(private uiService: UIdataService, private dbdata: LocaldataService, private userdata: UsersService) {
    uiService.TodoListUI().subscribe(res => {
      this.oplist = res
    })
  }

  ngOnInit() {
    this.selectedvalue = this.curruntlist.key

  }

  //for Delete items in list
  ondelete(id: any) {
    this.tododelete.emit(id)
  }

  // for Update item list name
  onupdate(id: number) {
    this.dbdata.updateTodoKey(id, this.selectedvalue);
    window.location.reload();
  }



}
