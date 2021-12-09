import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilesTestComponent } from './miles-test.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('MilesTestComponent', () => {
  let component: MilesTestComponent;
  let fixture: ComponentFixture<MilesTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ MilesTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilesTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
