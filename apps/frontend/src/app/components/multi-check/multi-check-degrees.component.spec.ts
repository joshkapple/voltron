import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCheckDegrees } from './multi-check-degrees.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('MultiCheckComponent', () => {
  let component: MultiCheckDegrees;
  let fixture: ComponentFixture<MultiCheckDegrees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ MultiCheckDegrees ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiCheckDegrees);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
