import {Component, EventEmitter, Input, OnInit, Output, Pipe, PipeTransform} from '@angular/core';
import {Observable, of} from 'rxjs';
import {AcademicProgramService} from '../../services/academic-program.service';

@Component({template: ''})
export abstract class MultiCheck<T> implements OnInit {
  checkboxValues: T[]  = []
  checkedBoxes: T[] = []

  @Input() multiCheckId: string = ""
  label: string = "Multi-Check"

  pipe: PipeTransform = {transform(value: T, ...args: any[]): T{ return value}};

  formatted(cbv: T): T {return this.pipe.transform(cbv)};

  constructor() { }

  @Output() checkedBoxesUpdated = new EventEmitter<T[]>()

  toggleCheckbox(cb: T, checked: boolean): void {
    checked ? this.checkedBoxes.push(cb) : this.checkedBoxes = Array.from(this.checkedBoxes.filter(t => t !== cb));
    this.checkedBoxesUpdated.emit(this.checkedBoxes)
  }

  selectAll(): void {
    let boxes = document.querySelectorAll( `#${this.multiCheckId} .multi-checkbox`)
    boxes.forEach(b => {
      let box = b as HTMLInputElement;
      if (!box.checked) box.click();
    });
    this.checkedBoxes = Array.from(this.checkboxValues);
    this.checkedBoxesUpdated.emit(this.checkedBoxes)
  }

  alert(){
    alert(`HEY LOOK AT ME: ${this.multiCheckId}`)
  }

  clearAll(): void {
    let boxes = document.querySelectorAll( `#${this.multiCheckId} .multi-checkbox`)
    boxes.forEach(b => {
      let box = b as HTMLInputElement
      if (box.checked) box.click()
    });
    this.checkedBoxes = [];
    this.checkedBoxesUpdated.emit(this.checkedBoxes)
  }

  populateCheckboxes(): Observable<T[]> {
    return of([])
  }

  ngOnInit(): void {
    this.populateCheckboxes().subscribe(cs => this.checkboxValues = cs)
  }

}
