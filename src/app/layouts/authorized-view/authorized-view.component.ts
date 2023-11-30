import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
import { BoardsService } from 'src/app/services/boards.service';
import { LocaldataService } from 'src/app/services/localdata.service';

@Component({
  selector: 'app-authorized-view',
  templateUrl: './authorized-view.component.html',
  styleUrls: ['./authorized-view.component.sass']
})
export class AuthorizedViewComponent implements OnInit {
  issidebar: boolean = true

  curruntboard:any;//come from sidebar

  constructor(private boardservice: BoardsService, private dbdata: LocaldataService) {
    

  }

  ngOnInit() {
    
    
  }




  onsidebartoggle() {
    this.issidebar = !this.issidebar
  }


  curruntboardassign(cboard: any) {
    console.log("on Authorized Comp:", cboard);

  }


}
