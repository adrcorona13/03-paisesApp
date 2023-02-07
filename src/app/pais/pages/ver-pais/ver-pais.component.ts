import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit{
  
  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ){}
  
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.paisService.buscarPaisPorCodigo(id)),
        tap(console.log) // imprime lo que devuelve el obs anterior
      )
      .subscribe(pais => {
        this.pais = pais;
      }
        
      )
  }

  // ngOnInit(): void {
  //   this.activatedRoute.params
  //     .subscribe(
  //       ({id}) =>{
  //         console.log(id);
  //         this.paisService.buscarPaisPorCodigo(id)
  //           .subscribe(pais => {
  //             console.log(pais);
  //           })
  //       }
  //     )
  // }

}
