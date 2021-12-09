import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgramFinderComponent } from './components/program-finder/program-finder.component';
import { ProgramDetailComponent } from './components/program-detail/program-detail.component';
import { ApfHeaderComponent } from './components/apf-header/apf-header.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MockDataService} from "./services/mock-data.service";
import { MilesTestComponent } from './components/miles-test/miles-test.component';
import {TuitionPipe} from './pipes/tuition.pipe';
import {DegreePipe} from './pipes/degree.pipe';
import { FinderFormComponent } from './components/finder-form/finder-form.component';
import { MultiCheckInterests } from './components/multi-check/multi-check-interests.component';
import { MultiCheckDegrees } from './components/multi-check/multi-check-degrees.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgramFinderComponent,
    ProgramDetailComponent,
    ApfHeaderComponent,
    MilesTestComponent,
    TuitionPipe,
    DegreePipe,
    FinderFormComponent,
    MultiCheckInterests,
    MultiCheckDegrees
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockDataService, {dataEncapsulation: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
