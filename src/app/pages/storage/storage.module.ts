import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageComponent } from './storage.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from "../../components/components.module";



@NgModule({
  declarations: [StorageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
        {
            path: '',
            component: StorageComponent
        }
    ]),
    ComponentsModule
]
})
export class StorageModule { }
