import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStorageComponent } from './card-storage.component';

describe('CardStorageComponent', () => {
  let component: CardStorageComponent;
  let fixture: ComponentFixture<CardStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardStorageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
