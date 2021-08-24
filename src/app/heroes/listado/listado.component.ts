import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

heroes: string []=['spiderman','iromasn','thor','capitan america'];


heroeBorrado: string = '';

borarHeroe(){
 // console.log('borrando');
  //this.heroes = [];
 // const heroeBorrado = this.heroes.shift();
  //console.log(heroeBorrado);
  this.heroeBorrado = this.heroes.shift() || '';
}





}
