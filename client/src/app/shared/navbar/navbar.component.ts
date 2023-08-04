import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { PokemonService } from '../services/pokemon-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit{
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  isCollapsed = true;
  pokemonName!: string;
  searchh!: string;
  searchResults: any[] = [];
  userName: string = "Veliok";

  constructor(private pokemonService: PokemonService) {
    
  }

  ngOnInit() {
    
  }

  search(value: string){
    this.emmitSearch.emit(value);
  }

  searchPokemonName () {
    
  }



}
