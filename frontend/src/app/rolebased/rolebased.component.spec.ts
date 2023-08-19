import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolebasedComponent } from './rolebased.component';

describe('RolebasedComponent', () => {
  let component: RolebasedComponent;
  let fixture: ComponentFixture<RolebasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolebasedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolebasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
