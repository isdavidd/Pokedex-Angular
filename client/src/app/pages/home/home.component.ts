import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/shared/services/pokemon-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  getAllPokemons: any;
  currentPage = 1;
  pageSize = 25;
  totalItems!: number;

  constructor(private pokemonService: PokemonService) {

  }

  ngOnInit(): void { 
    this.pokemonService.listAllPokemons().subscribe(
      res => {
        this.getAllPokemons = res.results;
        console.log(this.getAllPokemons);
        this.totalItems = this.getAllPokemons.length;
      }
    );
   
  }

  getSearch(value: string) {
    console.log(value);
  }
}
