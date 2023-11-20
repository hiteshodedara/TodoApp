import { Component } from '@angular/core';
import { UIdataService } from 'src/app/services/uidata.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  blocks!: any[];

  constructor(private uiService:UIdataService ) {
    uiService.TodoListUI().subscribe((data) => {
      data.sort((a, b) => a.index - b.index)
      this.blocks = data.map(res => res)
    })

    
  }
}
