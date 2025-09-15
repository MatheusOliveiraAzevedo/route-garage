import { Component, HostBinding, HostListener, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { linksSideMenu } from '../../../../shared/models/links-menus';
import { MenuMobileService } from '../../../../shared/services/menu-mobile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent implements OnInit, OnDestroy {

  constructor(
    private menuMobileService: MenuMobileService
  ) {}

  @HostBinding('class.active') isActive = false
  links = linksSideMenu
  showMenu: boolean = false
  subscriptionMenuMobile!: Subscription

  ngOnInit(): void {
    this.subscriptionMenuMobile = this.menuMobileService.showMenu.subscribe((showMenu) => { 
      this.isActive = showMenu
    })
  }

  ngOnDestroy(): void {
    if (this.subscriptionMenuMobile) {
      this.subscriptionMenuMobile.unsubscribe();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isActive = window.innerWidth > 767 ? true : false
  }

}
