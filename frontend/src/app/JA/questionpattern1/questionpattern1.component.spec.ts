import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Questionpattern1Component } from './questionpattern1.component';

describe('Questionpattern1Component', () => {
  let component: Questionpattern1Component;
  let fixture: ComponentFixture<Questionpattern1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Questionpattern1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Questionpattern1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
