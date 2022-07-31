import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFlex2Component } from './display-flex2.component';

describe('DisplayFlex2Component', () => {
  let component: DisplayFlex2Component;
  let fixture: ComponentFixture<DisplayFlex2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFlex2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFlex2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
