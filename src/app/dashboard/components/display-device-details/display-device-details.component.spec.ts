import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDeviceDetailsComponent } from './display-device-details.component';

describe('DisplayDeviceDetailsComponent', () => {
  let component: DisplayDeviceDetailsComponent;
  let fixture: ComponentFixture<DisplayDeviceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDeviceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDeviceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
