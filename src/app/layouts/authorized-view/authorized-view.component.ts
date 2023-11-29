import { Component } from '@angular/core';

@Component({
  selector: 'app-authorized-view',
  templateUrl: './authorized-view.component.html',
  styleUrls: ['./authorized-view.component.sass']
})
export class AuthorizedViewComponent {
  issidebar: boolean = true

  onsidebartoggle() {
    this.issidebar = !this.issidebar
  }
}
