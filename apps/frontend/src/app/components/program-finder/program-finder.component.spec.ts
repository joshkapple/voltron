import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramFinderComponent } from './program-finder.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {FinderFormComponent} from "../finder-form/finder-form.component";
import {MultiCheckInterests} from "../multi-check/multi-check-interests.component";
import {MultiCheckDegrees} from "../multi-check/multi-check-degrees.component";
import {TuitionPipe} from "../../pipes/tuition.pipe";
import {FormsModule} from "@angular/forms";

describe('ProgramFinderComponent', () => {
  let component: ProgramFinderComponent;
  let fixture: ComponentFixture<ProgramFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule, FormsModule],
      declarations: [
        ProgramFinderComponent,
        FinderFormComponent,
        MultiCheckInterests,
        MultiCheckDegrees,
        TuitionPipe
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
