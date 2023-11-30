import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BoardsService } from 'src/app/services/boards.service';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.sass']
})
export class SideBarComponent implements OnInit {

    @Output() cuuruntboard: EventEmitter<any> = new EventEmitter();//sent data to auth

    allboards!: any[];



    constructor(private boardservice: BoardsService) {

    }

    ngOnInit() {
        this.boardservice.getallboards().subscribe(res => {
            this.allboards = res
        })
    }

    sentcurruntboard(item:any){
        console.log(item);
        
    }



}
