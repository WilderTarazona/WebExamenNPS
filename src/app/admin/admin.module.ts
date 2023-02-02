import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHttpModule } from './commons/http/http.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ExmSessionModule } from '../commons/services';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminHttpModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ExmSessionModule,
  ],
})
export class AdminModule {}
