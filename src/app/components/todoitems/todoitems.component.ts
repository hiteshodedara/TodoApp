import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Todo } from 'src/app/models/todo';
import { LocaldataService } from 'src/app/services/localdata.service';
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

  confirmPopupStyles: { [klass: string]: any } = {
    'background-color': '#76db9b',
    'color': '#000'  
  }

 

  //for Delete items in list
  showConfirmationDialog(id: number,event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to Delete?',
      icon: 'pi pi-trash',
      acceptLabel: 'Yes',
      rejectLabel: 'No',
      acceptButtonStyleClass: 'p-button-success', // the custom class for the accept button
      rejectButtonStyleClass: 'p-button-danger', // the custom class for the reject button
      accept: async () => {
         this.messageService.add( { severity: 'success', summary: 'Todo ', detail: 'Deleted' });
         setTimeout(() => {
          this.emitedeletedata(id)
         }, 1000);
        },
        reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Todo ', detail: 'Not Deleted' });
        },
       
      });
      
    }
    
    emitedeletedata(id:number){
    this.tododelete.emit(id)
  }

  //for sent data to update component
  Updatetodo(item: Todo) {
    this.ref = this.dialogService.open(UpdateTodoServiceComponent, {
      header: 'Update Todo',
      width: '50%',
      contentStyle: {'background-color': '#76db9b', 'color': 'black','overflow':'hidden'},
      baseZIndex: 10000,
      maximizable: false,
      draggable:true,
      position:'center',
      data: {
        todovalues: item, 
        cfromupdate:this.curruntlist    
      },
    });
  }


}
