import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class heroeComponent {
    nombre: string = 'Iroman';
    edad: number = 45


    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }


    cambiarNombre(): void {
        this.nombre = 'spiderman';
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
        //return this.nombre 
    }
cambiarEdad(): void {
    this.edad = 30;
}



}