import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedErrorMessageFieldsComponent } from './shared-error-message-fields.component';

describe('SharedErrorMessageFieldsComponent', () => {
  let component: SharedErrorMessageFieldsComponent;
  let fixture: ComponentFixture<SharedErrorMessageFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedErrorMessageFieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedErrorMessageFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
