import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { heroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
        heroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports :[
        //para los ngIf y los ngFor
        CommonModule
    ]
})
export class heroesModule{}

