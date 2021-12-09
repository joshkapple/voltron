import {Component, OnInit, PipeTransform} from '@angular/core';
import {Observable, of} from 'rxjs';
import {MultiCheck} from './multi-check';
import {AcademicProgramService} from '../../services/academic-program.service';
import {TitleCasePipe} from '@angular/common';

@Component({
  selector: 'multi-check-interests',
  templateUrl: './multi-check.template.html',
  styleUrls: ['./multi-check.styles.scss']
})
export class MultiCheckInterests extends MultiCheck<string> {
  constructor(private academicProgramService: AcademicProgramService) {
    super();
  }

  override label: string = "Areas of interest:"

  override pipe: PipeTransform = new TitleCasePipe()

  override populateCheckboxes(): Observable<string[]> {
    return this.academicProgramService.allInterests()
  }

}
