import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of } from "rxjs";
import { Country } from "../interfaces/pais.interface";
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PaisService{

    private apiUrl: string = 'https://restcountries.com/v2';

    fields: string = 'name,capital,alpha2Code,flag,population';

    constructor(private http: HttpClient) {}

    get httpParams(){
        return new HttpParams().set('fields', this.fields);
    }

    buscarPaisPorNombre(termino: string): Observable<Country[]>{
        const url = `${this.apiUrl}/name/${termino}`;
        return this.http.get<Country[]>(url, {params: this.httpParams});
            // .pipe(
            //     catchError( err => of(['hola']))
            // );
    }

    buscarPaisPorCapital(termino: string): Observable<Country[]>{
        const url = `${this.apiUrl}/capital/${termino}`;
        return this.http.get<Country[]>(url, {params: this.httpParams});
    }

    buscarPaisPorCodigo(codigo: string): Observable<Country>{
        const url = `${this.apiUrl}/alpha/${codigo}`;
        return this.http.get<Country>(url);
    }
    
    buscarPaisPorContinente(continente: string) : Observable<Country[]>{
        const url = `${this.apiUrl}/region/${continente}`;
        
        return this.http.get<Country[]>(url, {params: this.httpParams})
            .pipe(
                tap(console.log)
            );
    }
}