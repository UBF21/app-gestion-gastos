import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoListPageComponent } from './saldo-list-page.component';

describe('SaldoListPageComponent', () => {
  let component: SaldoListPageComponent;
  let fixture: ComponentFixture<SaldoListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaldoListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaldoListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
