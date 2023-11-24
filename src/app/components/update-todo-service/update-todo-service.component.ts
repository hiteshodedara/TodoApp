import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Todo } from 'src/app/models/todo';
import { LocaldataService } from 'src/app/services/localdata.service';
import { UIdataService } from 'src/app/services/uidata.service';


interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-update-todo-service',
  templateUrl: './update-todo-service.component.html',
  styleUrls: ['./update-todo-service.component.css']
})
export class UpdateTodoServiceComponent implements OnInit {
  titlevalue!: string;
  descvalue!: string;
  clistvalue!: any;//todoitem value(text)
  utodo!: Todo;
  isAddMode!: boolean;

  lists: any;
  selectedlistname!: any;

  constructor(public config: DynamicDialogConfig, private dbdata: LocaldataService,
     private uidata: UIdataService) {

      this.uidata.TodoListUI().subscribe(res => {
        this.lists = res
      })

    //TO ADD DATA FORM
    if (this.config.data.curruntlist ) {
      this.clistvalue = this.config.data.curruntlist;
      this.isAddMode = true
      this.selectedlistname = this.clistvalue.name
      console.log("i am add");
    }
    
    
    //TO UPDATE DATA FORM
    if (this.config.data.todovalues && this.config.data.cfromupdate) {
      
      this.utodo = this.config.data.todovalues;
      this.selectedlistname = this.config.data.cfromupdate
      

      console.log(this.selectedlistname);
      

      this.titlevalue = this.utodo.title
      this.descvalue = this.utodo.discription
      this.isAddMode = false
    }

  }


  ngOnInit(): void {
   


  }

  addcardinlist() {
    if (this.titlevalue) {

      const currentDate: Date = new Date();



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

      this.dbdata.addTodo(obj)
      window.location.reload();
    }
  }

  Updatetodo() {
    let id=this.utodo.id;
    let val=this.selectedlistname.key;
    let tit=this.titlevalue;
    let dis=this.descvalue;
    console.log("id=",id,"val=",val);
    this.dbdata.updateTodoKey(id,val,tit,dis)
    window.location.reload()
  }
}
