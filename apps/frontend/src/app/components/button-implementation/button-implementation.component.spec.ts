import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonImplementationComponent } from './button-implementation.component';
import { ButtonComponent } from "@voltron/ui";

describe('ButtonImplementationComponent', () => {
  let component: ButtonImplementationComponent;
  let fixture: ComponentFixture<ButtonImplementationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonImplementationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Button'`, () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const button = fixture.componentInstance;
    expect(button.label).toEqual('Button');
  });

});
