import { Injectable } from '@angular/core';
import { ISignInResponse } from 'src/app/portal/commons/interfaces/sign-in-response.interface';
import { ExmSessionModule } from './session.module';
import { Router } from '@angular/router';

@Injectable({
  providedIn: ExmSessionModule,
})
export class ExmSessionService {
  private _keyUser: string;

  get user(): ISignInResponse | null {
    const strUser = localStorage.getItem(this._keyUser);
    return strUser ? (JSON.parse(strUser) as ISignInResponse) : null;
  }

  constructor(private router: Router) {
    this._keyUser = 'user';
  }

  saveUser(user: ISignInResponse): void {
    localStorage.setItem(this._keyUser, JSON.stringify(user));
  }

  signOff(): void {
    localStorage.clear();
    this.router.navigateByUrl('/sign-in');
  }
}
