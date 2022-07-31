import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFlexComponent } from './display-flex.component';

describe('DisplayFlexComponent', () => {
  let component: DisplayFlexComponent;
  let fixture: ComponentFixture<DisplayFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFlexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
