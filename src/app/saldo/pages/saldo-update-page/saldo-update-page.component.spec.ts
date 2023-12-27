import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoUpdatePageComponent } from './saldo-update-page.component';

describe('SaldoUpdatePageComponent', () => {
  let component: SaldoUpdatePageComponent;
  let fixture: ComponentFixture<SaldoUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaldoUpdatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaldoUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
