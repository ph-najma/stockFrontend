import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopOrdersComponent } from './stop-orders.component';

describe('StopOrdersComponent', () => {
  let component: StopOrdersComponent;
  let fixture: ComponentFixture<StopOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StopOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
