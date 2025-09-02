import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { RouterModule, Routes } from '@angular/router';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { ComponentsModule } from '../../components/components.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ContentComponent } from './content/content.component';
import { Routing } from '../routesPages';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: Routing
  }
]

@NgModule({
  declarations: [
    CoreComponent, 
    TopMenuComponent, 
    SideMenuComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ]
})
export class CoreModule { }
