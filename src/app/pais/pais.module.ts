import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorContinenteComponent } from './pages/por-continente/por-continente.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PaisTabla } from './components/pais-tabla/pais-tabla.component';
import { PaisInput } from './components/pais-input/pais-input.component';



@NgModule({
    declarations:[
        PorCapitalComponent,
        PorPaisComponent,
        PorContinenteComponent,
        VerPaisComponent, 
        PaisTabla,
        PaisInput
    ],
    exports:[
        PorCapitalComponent,
        PorPaisComponent,
        PorContinenteComponent,
        VerPaisComponent
    ],
    imports:[
        FormsModule,
        CommonModule,
        RouterModule
    ]
})
export class PaisModule{}