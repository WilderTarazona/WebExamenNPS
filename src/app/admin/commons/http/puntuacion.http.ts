import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IGenericResponse, IGenericResponseTwo } from "src/app/commons/interfaces";
import { environment } from "src/environments/environment";
import { PuntuacionRequest } from "../interfaces/puntuacion/puntuacion-request.interface";
import { AdminHttpModule } from "./http.module";

@Injectable({
  providedIn: AdminHttpModule
})
export class PuntuacionHttp {
  endpoint = `${environment.api}/api/Puntuacion`;

  constructor(private http: HttpClient) {}

  insertVotation(request: PuntuacionRequest): Observable<IGenericResponseTwo> {
    return this.http.post<IGenericResponseTwo>(this.endpoint, request);
  }

  validateVotation(idUser: number): Observable<IGenericResponse<boolean>> {
    return this.http.get<IGenericResponse<boolean>>(
      `${this.endpoint}/${idUser}`
    );
  }
}
