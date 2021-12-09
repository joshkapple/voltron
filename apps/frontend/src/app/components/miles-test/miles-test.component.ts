import { Component, OnInit } from '@angular/core';
import {AcademicProgramService} from '../../services/academic-program.service';

@Component({
  selector: 'miles-test',
  templateUrl: './miles-test.component.html',
  styleUrls: ['./miles-test.component.scss']
})
export class MilesTestComponent implements OnInit {
  milesData: string[] = []

  constructor(private academicProgramService: AcademicProgramService) { }

  miles(): void {
    this.academicProgramService.allInterests().subscribe(stuff => this.milesData = stuff)
  }

  ngOnInit(): void {
  }

}
