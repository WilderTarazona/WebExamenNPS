import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ISignInResponse } from "../interfaces/sign-in-response.interface";
import { PortalHttpModule } from "./http.module";

import { ISignInRequest } from "../interfaces/sign-in-request.interface";
import { IGenericResponse } from "src/app/commons/interfaces";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: PortalHttpModule
})
export class SignInHttp {
  endpoint = `${environment.api}/api/Usuario`;

  constructor(private http: HttpClient) { }

  signIn(request: ISignInRequest): Observable<IGenericResponse<ISignInResponse>> {
    return this.http
      .post<IGenericResponse<ISignInResponse>>(`${this.endpoint}/login`, request);
  }
}
