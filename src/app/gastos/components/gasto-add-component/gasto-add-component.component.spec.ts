import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoAddComponentComponent } from './gasto-add-component.component';

describe('GastoAddComponentComponent', () => {
  let component: GastoAddComponentComponent;
  let fixture: ComponentFixture<GastoAddComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastoAddComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastoAddComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
