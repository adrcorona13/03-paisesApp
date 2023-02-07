import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-continente',
  templateUrl: './por-continente.component.html',
  styles: [`
    button{
      margin-right: 5px;
    }
  `]
})
export class PorContinenteComponent {

  continenteActivo: string = '';

  continentes: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']

  paises: Country[] = [];

  hayError:boolean = false;

  constructor(private paisService:PaisService){}

  activarcontinente(continente: string){

    if(continente === this.continenteActivo) return ;

    this.continenteActivo = continente;
    this.paises = [];
    this.hayError = false;
    this.paisService.buscarPaisPorContinente(continente).subscribe({
      next:(paises) => {
        this.paises = paises;
      },
      error:() => {
        this.paises = [];
        this.hayError = true;
      }
    })
  }

  getClaseCSS(continente: string){
    return (continente === this.continenteActivo)?
      'btn btn-primary':'btn btn-outline-primary'
  }
}


