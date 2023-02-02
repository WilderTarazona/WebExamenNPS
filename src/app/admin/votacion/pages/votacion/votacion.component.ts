import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PuntuacionHttp } from 'src/app/admin/commons/http/puntuacion.http';
import { PuntuacionRequest } from 'src/app/admin/commons/interfaces/puntuacion/puntuacion-request.interface';
import { ExmSessionService } from 'src/app/commons/services';

@Component({
  selector: 'app-votacion',
  templateUrl: './votacion.component.html',
  styleUrls: ['./votacion.component.scss'],
})
export class VotacionComponent implements OnInit {
  voted: boolean = false;
  numberSelected: string = '';
  seasons: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  constructor(
    private puntuacionHttp: PuntuacionHttp,
    private activatedRoute: ActivatedRoute,
    private sessionService: ExmSessionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.validate();
  }

  qualify(): void {
    const idUsuario = Number(this.sessionService.user?.idUsuario);
    const puntuacion = Number(this.numberSelected);
    const request: PuntuacionRequest = {
      idUsuario,
      puntuacion,
    };
    this.puntuacionHttp.insertVotation(request).subscribe((rest) => {
      console.log(rest);
      console.log(puntuacion);
      this.voted = true;
    });
  }

  validate(): void {
    this.activatedRoute.data.subscribe(({ exists }) => {
      console.log('Validar Usuario', exists);
      if (exists) {
        this.router.navigate(['existing-vote'], {
          relativeTo: this.route,
        });
      }
    });
  }
}
