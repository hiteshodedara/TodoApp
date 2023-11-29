import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu-bar',
    templateUrl: './menu-bar.component.html',
    styleUrls: ['./menu-bar.component.sass']
})
export class MenuBarComponent implements OnInit {
    main_manu_item: MenuItem[] | undefined;
    user_menu: MenuItem[] | undefined;

    ngOnInit() {
        this.main_manu_item = [
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





        //   users menu assigneing

        this.user_menu = [
            {
                label: 'Profile',
                icon: 'pi pi-fw pi-file',
                
                
            },
            {
                label: 'Setting',
                icon: 'pi pi-fw pi-pencil',
               
            },
            {
                separator: true
            },
            {
                label: 'Log Out',
                icon: 'pi pi-fw pi-power-off'
            }
        ];

    }
}
