import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';

import { ExmSessionModule, ExmSweetAlertModule } from '../commons/services';

import { PortalHttpModule } from './commons/http/http.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';

const ANGULAR_MODULES = [
  PortalRoutingModule,
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
];

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatRadioModule,
];

const LIB_MODULES = [PortalHttpModule, ExmSweetAlertModule, ExmSessionModule];

const COMPONENTS = [SignInComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...ANGULAR_MODULES, ...MATERIAL_MODULES, ...LIB_MODULES],
})
export class PortalModule {}
