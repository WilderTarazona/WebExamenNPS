import { Injectable } from '@angular/core';
import { ExmSweetAlertModule } from './sweet-alert.module';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: ExmSweetAlertModule,
})
export class ExmSweetAlertService {
  iconColor!: string;

  showLoading(title = 'Cargando ...'): void {
    Swal.fire({
      title,
      allowEscapeKey: false,
      allowOutsideClick: false,
      heightAuto: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  closeLoading(): void {
    Swal.close();
  }

  showMessage(icon: SweetAlertIcon, title: string, timer = undefined): void {
    if (icon == 'success') {
      this.iconColor = '#80D2CE';
    } else if (icon == 'error') {
      this.iconColor = '#E64442';
    }

    setTimeout(() => {
      Swal.fire({
        title,
        icon,
        iconColor: this.iconColor,
        showConfirmButton: false,
        timer,
        heightAuto: false
      });
    });
  }
}
