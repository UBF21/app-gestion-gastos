import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoAddPageComponent } from './saldo-add-page.component';

describe('SaldoAddPageComponent', () => {
  let component: SaldoAddPageComponent;
  let fixture: ComponentFixture<SaldoAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaldoAddPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaldoAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
