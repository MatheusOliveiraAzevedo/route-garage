import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuMobileService {

  constructor() { }

  showMenu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)

  toggleMenu() {
    this.showMenu.next(!this.showMenu.value)
  }
}
