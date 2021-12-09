import { TestBed } from '@angular/core/testing';

import { AcademicProgramService } from './academic-program.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AcademicProgramService', () => {
  let service: AcademicProgramService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(AcademicProgramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
