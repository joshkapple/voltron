import {Component, OnInit, PipeTransform} from '@angular/core';
import {Observable, of} from 'rxjs';
import {MultiCheck} from './multi-check';
import {AcademicProgramService} from '../../services/academic-program.service';
import {DegreePipe} from '../../pipes/degree.pipe';

@Component({
  selector: 'multi-check-degrees',
  templateUrl: './multi-check.template.html',
  styleUrls: ['./multi-check.styles.scss']
})
export class MultiCheckDegrees extends MultiCheck<string> {
  constructor(private academicProgramService: AcademicProgramService) {
    super();
  }

  override label: string = "Degree awarded:"

  override pipe: PipeTransform = new DegreePipe()

  override populateCheckboxes(): Observable<string[]> {
    return this.academicProgramService.allDegrees()
  }

}
