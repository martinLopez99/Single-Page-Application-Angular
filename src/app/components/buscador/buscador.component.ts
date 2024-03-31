import { Component,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent {
  
  heroes:Heroe[] = [];
  termino:string ='';
  
  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService,
              private router:Router
    ){

  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
    })
  }

  verHeroe(index:Number){//Hay que corregir (solo me muestra el elemento del index 0)
    this.router.navigate( ['/heroe',index] ) //De esta manera me muevo por la pag web
  }
}
