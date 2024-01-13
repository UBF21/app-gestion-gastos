import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoUpdateComponentComponent } from './gasto-update-component.component';

describe('GastoUpdateComponentComponent', () => {
  let component: GastoUpdateComponentComponent;
  let fixture: ComponentFixture<GastoUpdateComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastoUpdateComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastoUpdateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
