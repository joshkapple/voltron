import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderFormComponent } from './finder-form.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TuitionPipe} from "../../pipes/tuition.pipe";
import {MultiCheckDegrees} from "../multi-check/multi-check-degrees.component";
import {MultiCheckInterests} from "../multi-check/multi-check-interests.component";
import {FormsModule} from "@angular/forms";

describe('FinderFormComponent', () => {
  let component: FinderFormComponent;
  let fixture: ComponentFixture<FinderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FormsModule],
      declarations: [
        FinderFormComponent,
        TuitionPipe,
        MultiCheckDegrees,
        MultiCheckInterests
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
