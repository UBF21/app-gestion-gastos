import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoUpdateComponentComponent } from './saldo-update-component.component';

describe('SaldoUpdateComponentComponent', () => {
  let component: SaldoUpdateComponentComponent;
  let fixture: ComponentFixture<SaldoUpdateComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaldoUpdateComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaldoUpdateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
