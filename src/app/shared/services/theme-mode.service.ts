import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeModeConfig } from '../models/theme-mode';

@Injectable({
  providedIn: 'root'
})
export class ThemeModeService {

  constructor() { }

  public mode: BehaviorSubject<ThemeModeConfig> = new BehaviorSubject<ThemeModeConfig>('light');
  
  toggleMode() {
    this.mode.next(this.mode.value === 'light' ? 'dark' : 'light');
    this.verifyClassBody();
    localStorage.setItem('theme', this.mode.value);
  }

  verifyClassBody() {
    if (this.mode.value === 'light') {
      document.body.classList.remove('theme-dark');
    } else if (this.mode.value === 'dark'){
      document.body.classList.add('theme-dark');
    }
  }

  changeMode(mode: ThemeModeConfig) {
    this.mode.next(mode);
    this.verifyClassBody();
  }

}
