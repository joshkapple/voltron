import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ProgramFinderComponent} from "./components/program-finder/program-finder.component";
import {ProgramDetailComponent} from "./components/program-detail/program-detail.component";
import {ApfHeaderComponent} from "./components/apf-header/apf-header.component";
import {MilesTestComponent} from "./components/miles-test/miles-test.component";
import {TuitionPipe} from "./pipes/tuition.pipe";
import {DegreePipe} from "./pipes/degree.pipe";
import {FinderFormComponent} from "./components/finder-form/finder-form.component";
import {MultiCheckInterests} from "./components/multi-check/multi-check-interests.component";
import {MultiCheckDegrees} from "./components/multi-check/multi-check-degrees.component";
import {BrowserTestingModule} from "@angular/platform-browser/testing";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserTestingModule,
      ],
      declarations: [
        AppComponent,
        ApfHeaderComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'glidepath-voltron'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('glidepath-voltron');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('GlidepathVoltron');
  // });
});
