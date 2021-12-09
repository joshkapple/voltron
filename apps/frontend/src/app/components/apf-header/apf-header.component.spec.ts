import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApfHeaderComponent } from './apf-header.component';

describe('AppHeaderComponent', () => {
  let component: ApfHeaderComponent;
  let fixture: ComponentFixture<ApfHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApfHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApfHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
