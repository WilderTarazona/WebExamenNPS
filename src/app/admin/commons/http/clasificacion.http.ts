import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGenericResponse } from 'src/app/commons/interfaces';
import { environment } from 'src/environments/environment';
import { ClasificationListResponse } from '../interfaces/clasificacion/clasificacion-response.interface';
import { map } from 'rxjs';
import { AdminHttpModule } from './http.module';

@Injectable({
  providedIn: AdminHttpModule,
})
export class SignInHttp {
  endpoint = `${environment.api}/api/Clasificacion`;

  constructor(private http: HttpClient) {}

  save(request: any): Observable<any> {
    return this.http.post<IGenericResponse<any>>(
      `${this.endpoint}/Clasificacion`,
      request
    );
  }

  getList(): Observable<ClasificationListResponse[]> {
    return this.http
      .get<IGenericResponse<ClasificationListResponse[]>>(`${this.endpoint}`)
      .pipe(map((res) => res.data));
  }
}
