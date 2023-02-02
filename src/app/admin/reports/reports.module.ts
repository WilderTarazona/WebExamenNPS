import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportNpsComponent } from './pages/report-nps/report-nps.component';

import { MatCardModule } from '@angular/material/card';

const ANGULAR_MODULES = [
  CommonModule,
  ReportsRoutingModule,
  FormsModule,
  // HttpClientModule,
];
const MATERIAL_MODULES = [MatCardModule];

@NgModule({
  declarations: [ReportNpsComponent],
  imports: [...ANGULAR_MODULES, ...MATERIAL_MODULES],
})
export class ReportsModule {}
