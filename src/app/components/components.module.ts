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
import { ModalBaseComponent } from './modals/modal-base/modal-base.component';
import { ModalCustomersComponent } from './modals/modal-customers/modal-customers.component';
import { FooterModalComponent } from './modals/footer-modal/footer-modal.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbDropdownModule, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { Car, Ellipsis, ListX, LucideAngularModule, Plus, SquarePen, Trash2 } from 'lucide-angular';
import { EmptyListComponent } from './empty-list/empty-list.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TableStorageComponent } from './tables/table-storage/table-storage.component';
import { CardPlaceholderComponent } from './placeholders/card-placeholder/card-placeholder.component';
import { TablePlaceholderComponent } from './placeholders/table-placeholder/table-placeholder.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ModalConfirmComponent } from './modals/modal-confirm/modal-confirm.component';



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
    TagLabelComponent,
    ModalBaseComponent,
    ModalCustomersComponent,
    FooterModalComponent,
    EmptyListComponent,
    TableStorageComponent,
    CardPlaceholderComponent,
    TablePlaceholderComponent,
    ModalConfirmComponent
  ],
  imports: [
    CommonModule,
    ɵInternalFormsSharedModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgbDropdownModule,
    LucideAngularModule.pick({ ListX, Ellipsis, SquarePen, Trash2, Car, Plus }),
    NgbSlide,
    MatTooltipModule,
    NgApexchartsModule
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
    TagLabelComponent,
    ModalBaseComponent,
    EmptyListComponent,
    TableStorageComponent,
    CardPlaceholderComponent,
    TablePlaceholderComponent,
    ModalCustomersComponent,
    ModalConfirmComponent
  ],
  providers: []
})
export class ComponentsModule { }
