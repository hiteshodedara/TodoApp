import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardsService } from 'src/app/services/boards.service';
import { LocaldataService } from 'src/app/services/localdata.service';
import { UIdataService } from 'src/app/services/uidata.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass'],
  providers: []
})
export class TodosComponent implements OnInit {


  blocks!: any[];//variable for set ui element in display

  boardid:any;
  curruntboard:any;


  constructor(private activetedrout:ActivatedRoute,private uiService:UIdataService,private boardservice:BoardsService) {

    
    //get data from service to show ui
    uiService.TodoListUI().subscribe((data) => {
      data.sort((a, b) => a.index - b.index)
      this.blocks = data.map(res => res)
    })

  }

  ngOnInit() {
    
    this.boardid=this.activetedrout.snapshot.paramMap.get('id')
    if(this.boardid){

      this.boardservice.getoneboard(this.boardid).subscribe(res=>{
        setTimeout(() => {
          console.log(res);
          
        }, 10000);
        
      })
    }
    
  }



}
