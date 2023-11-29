import { Component, OnInit } from '@angular/core';
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


  constructor(private uiService: UIdataService, private dbdata: LocaldataService) {

    //get data from service to show ui
    uiService.TodoListUI().subscribe((data) => {
      data.sort((a, b) => a.index - b.index)
      this.blocks = data.map(res => res)
    })

  }

  ngOnInit() {
  }



}
