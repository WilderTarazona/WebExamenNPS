import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotacionComponent } from './pages/votacion/votacion.component';
import { VotacionResolver } from './commons/resolvers/votacion.resolver';
import { ExistingVoteComponent } from './pages/existing-vote/existing-vote.component';

const routes: Routes = [
  {
    path: '',
    component: VotacionComponent,
    //canActivate: [ExmAuthGuardGuard]
    resolve: { exists: VotacionResolver },
  },
  {
    path: 'existing-vote',
    component: ExistingVoteComponent,
    //canActivate: [ExmAuthGuardGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [VotacionResolver],
})
export class VotacionRoutingModule {}
