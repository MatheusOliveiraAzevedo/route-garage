import { Component, HostBinding, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-menu-dashboard',
  templateUrl: './button-menu-dashboard.component.html',
  styleUrl: './button-menu-dashboard.component.scss'
})
export class ButtonMenuDashboardComponent {

  constructor(
    private router: Router
  ) { }

  @HostBinding('class') class = 'm-2';
  urlGoTo = input<string>();

  goTo() {
    if (this.urlGoTo()) {
      this.router.navigate([this.urlGoTo()]);
    }
  }
}
