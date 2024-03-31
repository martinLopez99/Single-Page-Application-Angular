import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent {

  @Input() heroe:any = {};     // Esto me indica que una propiedad que yo quiero especificar va a ser recibida desde afuera 
  @Input() index:any;  //Esta es otra propiedad que voy a recibir , lo que me va a ayudar a mostrar la infor del Heroe.
  @Output() heroeSeleccionado:EventEmitter<number>;//Evento que quiero que el padre este escuchando
  constructor(private router:Router){
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(){

  }
  verHeroe(){
    this.router.navigate(['/heroe',this.index]);
    //this.heroeSeleccionado.emit(this.index); //Puedo emitir cualquier cosa
  }

}
