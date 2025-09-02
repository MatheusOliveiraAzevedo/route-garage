import { Component, HostBinding, input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Car } from '../../shared/models/storage-models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-storage',
  templateUrl: './list-storage.component.html',
  styleUrl: './list-storage.component.scss'
})
export class ListStorageComponent implements OnInit{

    constructor(
      private modalService: NgbModal
    ) { }

  @HostBinding('class') class = 'd-flex flex-wrap gap-3'
  @ViewChild('modalStorage') modalStorage!: TemplateRef<any>
  storageCar = input.required<Car[]>()

  ngOnInit(): void {
      
  }

  openModal() {
    this.modalService.open(this.modalStorage, {
      size: 'xl'
    });
  }

}
