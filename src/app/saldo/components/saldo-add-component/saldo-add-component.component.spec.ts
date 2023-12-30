import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoAddComponentComponent } from './saldo-add-component.component';

describe('SaldoAddComponentComponent', () => {
  let component: SaldoAddComponentComponent;
  let fixture: ComponentFixture<SaldoAddComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaldoAddComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaldoAddComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
