import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-board-menu-bar',
  templateUrl: './board-menu-bar.component.html',
  styleUrls: ['./board-menu-bar.component.sass']
})
export class BoardMenuBarComponent implements OnInit{
  board_menu_item: MenuItem[] | undefined;

  isfavorite:boolean=true;
  ngOnInit() {
    
  }

  onclickfavorite(){
    this.isfavorite=!this.isfavorite
  }

}
