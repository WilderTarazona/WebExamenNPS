import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SignInHttp } from '../../commons/http/sign-in.http';
import { ISignInRequest } from '../../commons/interfaces/sign-in-request.interface';
import { finalize } from 'rxjs';
import { RolEnum } from 'src/app/commons/constants/rol.constant';
import {
  ExmSessionService,
  ExmSweetAlertService,
} from 'src/app/commons/services';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  form: FormGroup;

  get formValid(): boolean {
    return this.form.pristine || this.form.invalid;
  }

  get usernameControl(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }

  get remembermeControl(): FormControl {
    return this.form.get('rememberme') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private sweetAlertService: ExmSweetAlertService,
    private router: Router,
    private signInHttp: SignInHttp,
    private sessionService: ExmSessionService
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  signIn(): void {
    if (this.form.valid) {
      this.validateCredentials();
    }
  }

  validateCredentials(): void {
    this.sweetAlertService.showLoading();
    const username = this.usernameControl.value as string;
    const password = this.passwordControl.value as string;
    const request: ISignInRequest = {
      username,
      password,
    };
    this.signInHttp
      .signIn(request)
      .pipe(finalize(() => this.sweetAlertService.closeLoading()))
      .subscribe((user) => {
        this.sessionService.saveUser(user.data);
        this.goToHome(user.data.idRol);
      });
  }

  goToHome(idRol: number): void {
    if (idRol === RolEnum.ADMINISTRADOR) {
      console.log('administrador');
      this.router.navigateByUrl('/admin/reports/nps');
    } else {
      console.log('votante');
      this.router.navigateByUrl('/admin/votacion');
    }
  }
}
