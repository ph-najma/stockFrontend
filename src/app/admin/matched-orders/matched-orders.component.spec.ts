import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchedOrdersComponent } from './matched-orders.component';

describe('MatchedOrdersComponent', () => {
  let component: MatchedOrdersComponent;
  let fixture: ComponentFixture<MatchedOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchedOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
