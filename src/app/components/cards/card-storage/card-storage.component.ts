import { Component, HostBinding, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Car } from '../../../shared/models/storage-models';
import { style } from '@angular/animations';

@Component({
  selector: 'app-card-storage',
  templateUrl: './card-storage.component.html',
  styleUrl: './card-storage.component.scss'
})
export class CardStorageComponent implements OnChanges {

  @HostBinding('class') class = 'card rounded-4 overflow-hidden shadow-sm border-0 h-100'
  carInfo = input.required<Car>()
  price: any

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['carInfo']) {
        this.price = this.carInfo().price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      }
  }

  onImageError(event: any) {
    event.target.src = 'assets/placeholder.jpg'
  }

}
