import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFooterComponentComponent } from './shared-footer-component.component';

describe('SharedFooterComponentComponent', () => {
  let component: SharedFooterComponentComponent;
  let fixture: ComponentFixture<SharedFooterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedFooterComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedFooterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
