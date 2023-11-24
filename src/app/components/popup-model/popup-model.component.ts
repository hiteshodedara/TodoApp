import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Todo } from 'src/app/models/todo';
import { LocaldataService } from 'src/app/services/localdata.service';
import { UIdataService } from 'src/app/services/uidata.service';


@Component({
  selector: 'app-popup-model',
  templateUrl: './popup-model.component.html',
  styleUrls: ['./popup-model.component.scss']
})
export class PopupModelComponent implements OnInit {

  clistvalue!: any;
  uptodo!: Todo;
  isAddMode!: boolean;
  lists: any;
  selectedlistname!: any;
  titlevalue!: string;
  descvalue!: string;


  constructor(public config: DynamicDialogConfig, private dbdata: LocaldataService,
     private uidata: UIdataService) {

      //geting data from uidata serveice for select option 
      this.uidata.TodoListUI().subscribe(res => {
        this.lists = res
      })

    //this data use whan add todo called to add
    if (this.config.data.curruntlist ) {
      this.clistvalue = this.config.data.curruntlist//currunt list value meance currunt uielement list data
     
      this.isAddMode = true//set addmode for form ui for is add or update
      
      this.selectedlistname = this.clistvalue.name //it's only to show currunt list name
      
      console.log("i am add");
    }
    
    
    //this condition work for whan data come from todoitem for update
    if (this.config.data.todovalues && this.config.data.cfromupdate) {
      
      this.uptodo = this.config.data.todovalues;//this variable have todoitem data that come for update

      this.selectedlistname = this.config.data.cfromupdate//this variable for store currunt list data for selected option
      

      console.log(this.selectedlistname);
      

      this.titlevalue = this.uptodo.title//variable for ngmodal to show title value in input

      this.descvalue = this.uptodo.discription//variable for ngmodal to show discription value in input

      this.isAddMode = false//set addmode for form ui for is add or update
    }

  }


  ngOnInit(): void {
   
  }

  //whan user click on add todo
  addcardinlist() {
    if (this.titlevalue) {

      const currentDate: Date = new Date();


      //get all data for todo object
      let obj: Todo = {
        id: Math.round(Math.random() * 2000),
        key: this.clistvalue.key,
        title: this.titlevalue,
        discription: this.descvalue,
        todocreater: {
          uid: 1,
          username: 'Hitesh',
          sdate: currentDate,
          edate: currentDate
        }
      }

      this.dbdata.addTodo(obj)//sent data to service for store data in local storage
      window.location.reload();//bug but use for update ui 
    }
  }

  //whan user click on update button
  Updatetodo() {
    let id=this.uptodo.id;//todo id for find todo in storage
    let val=this.selectedlistname.key;//todo key for is list storage
    let tit=this.titlevalue;//value for is title text
    let dis=this.descvalue;//value for is discription

    this.dbdata.updateTodoKey(id,val,tit,dis)//sent data to service to update todo data
    window.location.reload()//bug but use for update ui
  }
}
