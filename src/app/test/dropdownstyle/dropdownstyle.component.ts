import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dropdownstyle',
  templateUrl: './dropdownstyle.component.html',
  styleUrls: ['./dropdownstyle.component.scss'],
  providers:[MessageService]
})
export class DropdownstyleComponent implements OnInit {
  constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }

    ngOnInit(): void {
        
    }
}
