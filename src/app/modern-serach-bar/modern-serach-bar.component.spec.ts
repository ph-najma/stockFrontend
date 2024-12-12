import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernSerachBarComponent } from './modern-serach-bar.component';

describe('ModernSerachBarComponent', () => {
  let component: ModernSerachBarComponent;
  let fixture: ComponentFixture<ModernSerachBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModernSerachBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModernSerachBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
