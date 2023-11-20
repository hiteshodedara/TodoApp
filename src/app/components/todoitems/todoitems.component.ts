import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todoitems',
  templateUrl: './todoitems.component.html',
  styleUrls: ['./todoitems.component.css']
})
export class TodoitemsComponent {

@Input() curruntlist:any;

}
