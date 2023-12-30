import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCharPieComponentComponent } from './shared-char-pie-component.component';

describe('SharedCharPieComponentComponent', () => {
  let component: SharedCharPieComponentComponent;
  let fixture: ComponentFixture<SharedCharPieComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedCharPieComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedCharPieComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
