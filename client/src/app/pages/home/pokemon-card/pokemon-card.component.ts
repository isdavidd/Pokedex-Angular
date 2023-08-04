import { Component, Input, OnInit } from '@angular/core';

import { PokemonService } from 'src/app/shared/services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit{
  @Input() pokemon: any;


  constructor(private pokemonService: PokemonService) {

  }

  ngOnInit(): void {
    
  }

}
