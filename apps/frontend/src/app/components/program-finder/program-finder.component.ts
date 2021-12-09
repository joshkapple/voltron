import {AfterViewInit, Component, OnInit, Query, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {AcademicProgram} from '../../models/academic-program';
import {AcademicProgramService} from '../../services/academic-program.service';
import {MultiCheck} from '../multi-check/multi-check';
import {FinderFormComponent} from '../finder-form/finder-form.component';

@Component({
  selector: 'program-finder',
  templateUrl: './program-finder.component.html',
  styleUrls: ['./program-finder.component.scss']
})
export class ProgramFinderComponent implements OnInit, AfterViewInit {

  visiblePrograms: AcademicProgram[] = [];

  used: boolean = false

  constructor(private academicProgramService: AcademicProgramService) { }

  @ViewChild('ff')
  finderForm?: FinderFormComponent;

  showAllPrograms(): void {
    this.resetFilters();
    if (!this.used) this.used = true;
  }

  showPrograms(aps: AcademicProgram[]): void {
    this.visiblePrograms = aps;
    if (!this.used) this.used = true;
  }

  resetFilters(): void { (this.finderForm) ? this.finderForm.resetFilters() : {}}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
