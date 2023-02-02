import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportNpsComponent } from './pages/report-nps/report-nps.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'nps',
    pathMatch: 'full'
  },
  {
    path: 'nps',
    component: ReportNpsComponent,
    //canActivate: [ExmAuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
