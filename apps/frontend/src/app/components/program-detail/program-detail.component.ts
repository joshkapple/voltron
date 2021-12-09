import {Component, Input, OnInit} from '@angular/core';
import {AcademicProgram} from '../../models/academic-program';
import {ActivatedRoute} from '@angular/router';
import {AcademicProgramService} from '../../services/academic-program.service';
import { Location } from "@angular/common";

@Component({
  selector: 'program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.scss']
})
export class ProgramDetailComponent implements OnInit {

  @Input() program?: AcademicProgram;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private academicProgramService: AcademicProgramService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.academicProgramService.getProgramById(id).subscribe(prog => this.program = prog);
  }

  goBack(): void {
    this.location.back();
  }

}
