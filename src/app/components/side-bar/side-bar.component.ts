import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.sass']
})
export class SideBarComponent implements OnInit {
  items: MenuItem[] | undefined;

  
  ngOnInit() {
      this.items = [
          {
              label: 'Board Members',
              items: [
                  {
                      label: 'Members',
                      icon: 'pi pi-users',
                  }
              ]
          },
          {
              label: 'All Boards',
              items: [
                  {
                      label: 'Todos Project',
                      icon: 'pi pi-table',
                  }
              ]
          }
      ];
  }

}
