import { Component } from '@angular/core';
import { ExmSessionService } from '../commons/services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  constructor(private exmSessionService: ExmSessionService) {}
  signOut(): void {
    this.exmSessionService.signOff();
  }
}
