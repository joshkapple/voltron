import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProgramFinderComponent} from './components/program-finder/program-finder.component';
import {ProgramDetailComponent} from './components/program-detail/program-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'finder', pathMatch: 'full' },
  { path: 'finder', component: ProgramFinderComponent },
  { path: 'program/:id', component: ProgramDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
