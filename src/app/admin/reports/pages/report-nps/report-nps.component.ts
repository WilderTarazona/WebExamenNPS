import { Component } from '@angular/core';
import { SignInHttp } from 'src/app/admin/commons/http/clasificacion.http';
import { ClasificationListResponse } from 'src/app/admin/commons/interfaces/clasificacion/clasificacion-response.interface';

@Component({
  selector: 'app-report-nps',
  templateUrl: './report-nps.component.html',
  styleUrls: ['./report-nps.component.scss'],
})
export class ReportNpsComponent {
  cantidadPromotores: number = 0;
  cantidadNeutros: number = 0;
  cantidadDetractores: number = 0;
  cantidadEncuestados: number = 0;
  nps: number = 0;
  data: ClasificationListResponse[] = [];

  constructor(private clasificationHttp: SignInHttp) {}
  
  ngOnInit(): void {
    this.onList();
  }
  
  onList(): void {
    this.clasificationHttp.getList().subscribe((res) => {
      this.data = res;
      console.log(this.data);
      this.cantidadPromotores = res[0].puntuacion;
      this.cantidadNeutros = res[1].puntuacion;
      this.cantidadDetractores = res[2].puntuacion;
      this.cantidadEncuestados =
        res[0].puntuacion + res[1].puntuacion + res[2].puntuacion;
      this.nps = this.calcularNPS(
        this.cantidadPromotores,
        this.cantidadDetractores,
        this.cantidadEncuestados
      );
    });
  }

  calcularNPS(
    cantidadPromotores: number,
    cantidadDetractores: number,
    cantidadEncuestados: number
  ) {
    return (
      ((cantidadPromotores - cantidadDetractores) / cantidadEncuestados) * 100
    );
  }
}
