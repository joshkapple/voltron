import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCheckInterests } from './multi-check-interests.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('MultiCheckComponent', () => {
  let component: MultiCheckInterests;
  let fixture: ComponentFixture<MultiCheckInterests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ MultiCheckInterests ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiCheckInterests);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
