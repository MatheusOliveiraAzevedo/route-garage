import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCustomersComponent } from './modal-customers.component';

describe('ModalCustomersComponent', () => {
  let component: ModalCustomersComponent;
  let fixture: ComponentFixture<ModalCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalCustomersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
