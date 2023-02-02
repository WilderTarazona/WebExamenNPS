import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VotacionRoutingModule } from './votacion-routing.module';
import { VotacionComponent } from './pages/votacion/votacion.component';

import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ExmSessionModule } from 'src/app/commons/services';

import { ExistingVoteComponent } from './pages/existing-vote/existing-vote.component';
import { AdminHttpModule } from '../commons/http/http.module';


const ANGULAR_MODULES = [
  CommonModule,
  VotacionRoutingModule,
  FormsModule,
  ReactiveFormsModule,
];
const MATERIAL_MODULES = [MatRadioModule, MatCardModule, MatButtonModule];
const LIBS_MODULES = [ExmSessionModule];
const HTTP_MODULES = [AdminHttpModule];

@NgModule({
  declarations: [VotacionComponent, ExistingVoteComponent],
  imports: [
    ...ANGULAR_MODULES,
    ...MATERIAL_MODULES,
    ...LIBS_MODULES,
    ...HTTP_MODULES,
  ],
  //providers: [VotacionResolver],
})
export class VotacionModule {}
