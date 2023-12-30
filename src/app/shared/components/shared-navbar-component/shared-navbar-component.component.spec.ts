import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedNavbarComponentComponent } from './shared-navbar-component.component';

describe('SharedNavbarComponentComponent', () => {
  let component: SharedNavbarComponentComponent;
  let fixture: ComponentFixture<SharedNavbarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedNavbarComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedNavbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
