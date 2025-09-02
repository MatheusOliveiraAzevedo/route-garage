import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMenuDashboardComponent } from './button-menu-dashboard.component';

describe('ButtonMenuDashboardComponent', () => {
  let component: ButtonMenuDashboardComponent;
  let fixture: ComponentFixture<ButtonMenuDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonMenuDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonMenuDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
