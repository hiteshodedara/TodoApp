import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-board-menu-bar',
  templateUrl: './board-menu-bar.component.html',
  styleUrls: ['./board-menu-bar.component.sass']
})
export class BoardMenuBarComponent implements OnInit{
  board_menu_item: MenuItem[] | undefined;

  ngOnInit() {
    this.board_menu_item = [
      {
        label: 'WorkSpaces',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
          },
          {
            separator: true
          },
          {
            label: 'All',
            icon: 'pi pi-fw pi-external-link'
          }
        ]
      },
      {
        label: 'Recent',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Todos',
            icon: 'pi pi-fw pi-align-left'
          }
        ]
      },
      {
        label: 'Starred',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus'
          }
        ]
      }
    ];
  }

}
