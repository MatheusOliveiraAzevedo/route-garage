import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from "../../components/components.module";



@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
        {
            path: '',
            component: CustomersComponent
        }
    ]),
    ComponentsModule
]
})
export class CustomersModule { }
