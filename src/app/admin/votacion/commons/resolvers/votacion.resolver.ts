import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { PuntuacionHttp } from 'src/app/admin/commons/http/puntuacion.http';
import { ExmSessionService } from 'src/app/commons/services';

@Injectable()
export class VotacionResolver implements Resolve<boolean> {
  constructor(
    private puntuacionHttp: PuntuacionHttp,
    private sessionService: ExmSessionService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    if (this.sessionService.user) {
      const res = this.puntuacionHttp
        .validateVotation(this.sessionService.user.idUsuario)
        .pipe(map((data) => data.data));
      return res;
    }
    return of(false);
  }
}
