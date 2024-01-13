import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoListPageComponent } from './gasto-list-page.component';

describe('GastoListPageComponent', () => {
  let component: GastoListPageComponent;
  let fixture: ComponentFixture<GastoListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastoListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastoListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
