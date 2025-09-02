import { Component } from '@angular/core';
import { ThemeModeService } from './shared/services/theme-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(
    private themeService: ThemeModeService
  ) { 
    const theme: any = localStorage.getItem('theme')
    themeService.changeMode(theme ? theme : 'light');
  }

}
