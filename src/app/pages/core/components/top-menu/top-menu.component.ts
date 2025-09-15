import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeMode, ThemeModeIcon } from '../../../../shared/models/theme-mode';
import { ThemeModeService } from '../../../../shared/services/theme-mode.service';
import { Subscription } from 'rxjs';
import { MenuMobileService } from '../../../../shared/services/menu-mobile.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss'
})
export class TopMenuComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private themeModeService: ThemeModeService,
    private menuMobileService: MenuMobileService
  ) {}

  @HostBinding('class') class = 'd-flex flex-row align-items-center justify-content-between ps-4 pe-3 py-3 h-80px w-100';
  mode: 'dark' | 'light' = 'light';
  private subscriptionThemeMode!: Subscription

  ngOnInit() {
    this.subscriptionThemeMode = this.themeModeService.mode.subscribe((mode) => {
      this.mode = mode;
    });
  }

  ngOnDestroy(): void {
    if (this.subscriptionThemeMode) {
      this.subscriptionThemeMode.unsubscribe();
    }
  }

  logoff() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  toggleMode() {
    this.themeModeService.toggleMode();
  }

  returnLabelMode() {
    return ThemeMode[this.mode];
  }

  returnIconThemeMode() {
    return ThemeModeIcon[this.mode];
  }

  openSideMenu() {
    this.menuMobileService.toggleMenu();
  }

}
