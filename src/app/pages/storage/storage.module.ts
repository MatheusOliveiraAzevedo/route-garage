import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageComponent } from './storage.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from "../../components/components.module";
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from "lucide-angular";
import { MatTooltip } from "@angular/material/tooltip";



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
    ComponentsModule,
    SelectButtonModule,
    FormsModule,
    LucideAngularModule,
    MatTooltip
]
})
export class StorageModule { }
