import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {AcademicProgramService} from '../../services/academic-program.service';
import {FinderParams} from '../../models/finder-params';
import {AcademicProgram} from '../../models/academic-program';
import {MultiCheckInterests} from '../multi-check/multi-check-interests.component';
import {MultiCheckDegrees} from '../multi-check/multi-check-degrees.component';

@Component({
  selector: 'finder-form',
  templateUrl: './finder-form.component.html',
  styleUrls: ['./finder-form.component.scss']
})
export class FinderFormComponent implements OnInit, AfterViewInit {
  allDurations: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  allTuitions: number[] = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
  allInterests: string[] = []
  allDegrees: string[] = []

  params: FinderParams = {
    maxDuration: 0,
    maxTuition: 0,
    interests: [],
    degrees: []
  }

  @Output() filteredPrograms = new EventEmitter<AcademicProgram[]>()

  constructor(private academicProgramService: AcademicProgramService) { }

  updateParams(
    duration?: number,
    tuition?: number,
    interests?: string[],
    degrees?: string[]
  ): void {
    if (duration !== undefined) this.params.maxDuration = duration;
    if (tuition !== undefined) this.params.maxTuition = tuition;
    if (interests !== undefined) this.params.interests = interests;
    if (degrees !== undefined) this.params.degrees = degrees;
    this.academicProgramService.byFinderParams(this.params).subscribe(ps => this.filteredPrograms.emit(ps))
  }

  updateDuration(dur: number){ this.updateParams(dur)}
  updateTuition(tui: number){ this.updateParams(undefined, tui)}
  updateInterests(is: string[]){ this.updateParams(undefined, undefined, is)}
  updateDegrees(ds: string[]){ this.updateParams(undefined, undefined, undefined, ds)}

  resetParams(): void { this.updateParams(0, 0, [], [])}

  @ViewChild('mci')
  mci?: MultiCheckInterests;

  @ViewChild('mcd')
  mcd?: MultiCheckDegrees;

  resetFilters(): void {
    this.mcd?.clearAll();
    this.mci?.clearAll();
    this.resetParams();
  }

  ngOnInit(): void {
    this.academicProgramService.allInterests().subscribe(is => this.allInterests = is)
    this.academicProgramService.allDegrees().subscribe(is => this.allDegrees = is)
  }

  ngAfterViewInit() {}

}
