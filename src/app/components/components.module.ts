import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDefaultComponent } from './buttons/button-default/button-default.component';
import { ImageDefaultComponent } from './images/image-default/image-default.component';
import { HeaderPagesComponent } from './header-pages/header-pages.component';
import { MenuDashboardComponent } from './menu-dashboard/menu-dashboard.component';
import { ButtonMenuDashboardComponent } from './buttons/button-menu-dashboard/button-menu-dashboard.component';
import { InfoDashboardComponent } from './info-dashboard/info-dashboard.component';
import { ListStorageComponent } from './list-storage/list-storage.component';
import { CardStorageComponent } from './cards/card-storage/card-storage.component';
import { ModalStorageComponent } from './modals/modal-storage/modal-storage.component';
import { ReactiveFormsModule, ɵInternalFormsSharedModule } from "@angular/forms";
import { TableCustomersComponent } from './tables/table-customers/table-customers.component';
import { TagLabelComponent } from './tag-label/tag-label.component';



@NgModule({
  declarations: [
    ButtonDefaultComponent,
    ImageDefaultComponent,
    HeaderPagesComponent,
    MenuDashboardComponent,
    ButtonMenuDashboardComponent,
    InfoDashboardComponent,
    ListStorageComponent,
    CardStorageComponent,
    ModalStorageComponent,
    TableCustomersComponent,
    TagLabelComponent
  ],
  imports: [
    CommonModule,
    ɵInternalFormsSharedModule,
    ReactiveFormsModule
],
  exports: [
    ButtonDefaultComponent,
    ImageDefaultComponent,
    HeaderPagesComponent,
    MenuDashboardComponent,
    ButtonMenuDashboardComponent,
    InfoDashboardComponent,
    ListStorageComponent,
    CardStorageComponent,
    ModalStorageComponent,
    TableCustomersComponent,
    TagLabelComponent
  ]
})
export class ComponentsModule { }
