import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PseudoClassesComponent } from './pseudo-classes.component';

describe('PseudoClassesComponent', () => {
  let component: PseudoClassesComponent;
  let fixture: ComponentFixture<PseudoClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PseudoClassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PseudoClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
