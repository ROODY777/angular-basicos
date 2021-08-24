import {NgModule} from '@angular/core';
import { contadorcomponents } from './contador/contador.component';

@NgModule({
    declarations:[
        contadorcomponents
    ],
    exports: [
        contadorcomponents
    ]
})

export class ContadorModule{}