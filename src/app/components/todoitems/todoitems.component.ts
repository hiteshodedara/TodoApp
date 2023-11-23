import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';
import { LocaldataService } from 'src/app/services/localdata.service';
import { UIdataService } from 'src/app/services/uidata.service';
import { UsersService } from 'src/app/services/users.service';
import { UpdateTodoServiceComponent } from '../update-todo-service/update-todo-service.component';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-todoitems',
  templateUrl: './todoitems.component.html',
  styleUrls: ['./todoitems.component.css'],
  providers: [DialogService,ConfirmationService, MessageService]
})
export class TodoitemsComponent implements OnInit {

  @Input() curruntlist: any;

  @Input() items!: Todo;

  @Output() tododelete: EventEmitter<number> = new EventEmitter();

  ref: DynamicDialogRef | undefined;//ref data for dynamicdialog

  oplist: any[] | undefined;
  selectedvalue!: string;//For Selected Item list Option Name or Key



  constructor(private dbdata: LocaldataService, public dialogService: DialogService, 
    private confirmationService: ConfirmationService, private messageService: MessageService) {

  }

  ngOnInit() {
    this.selectedvalue = this.curruntlist.key

  }

  //for Delete items in list
  ondelete(id: number,event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to Delete?',
      icon: 'pi pi-exclamation-triangle',
      accept: async () => {
         this.messageService.add( { severity: 'info', summary: 'Todo ', detail: 'Deleted' });
         setTimeout(() => {
          this.emitedeletedata(id)
         }, 1200);
        },
        reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Todo ', detail: 'Not Deleted' });
        }
      });
      
    }
    
    
    emitedeletedata(id:number){
    this.tododelete.emit(id)

  }

  // for Update item list name
  onupdate(id: number) {
    this.dbdata.updateTodoKey(id, this.selectedvalue);
    window.location.reload();
  }

  //for sent data to update component
  Updatetodo(item: Todo) {
    this.ref = this.dialogService.open(UpdateTodoServiceComponent, {
      header: 'Update Todo',
      width: '50%',
      contentStyle: { "overflow": "auto" },
      baseZIndex: 10000,
      maximizable: true,
      data: {
        values: item,

      }
    });
  }


}
