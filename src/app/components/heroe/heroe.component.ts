import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Con estor resivimos el id del elemento 
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {};

  constructor( private activatedRouter:ActivatedRoute,
               private _heroesService:HeroesService
  ){
    
    this.activatedRouter.params.subscribe(params => {
        this.heroe=this._heroesService.getHeroe(params['id']);
        console.log(this.heroe);
        
    })

  }
}
