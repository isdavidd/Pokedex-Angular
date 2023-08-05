import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/shared/services/pokemon-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  getAllPokemons: any;
  setAllPokemons: any;
  currentPage = 1;
  pageSize = 52;
  totalItems!: number;
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) {

  }

  ngOnInit(): void { 
    this.pokemonService.listAllPokemons().subscribe(
      res => {
        this.setAllPokemons = res.results;
        // this.getAllPokemons = this.setAllPokemons;
        // this.totalItems = this.getAllPokemons.length;
        // console.log(this.setAllPokemons);

      }
    );
    this.listPage();
  }

  listPage() {
    this.pokemonService.listPageOfPokemons(this.currentPage, this.pageSize).subscribe(
      res => {
        this.getAllPokemons = res.results;
        this.totalItems = this.getAllPokemons.length;
        console.log(this.setAllPokemons);

      }
    );
  } 

  getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    })
    this.getAllPokemons = filter;
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.listPage();
  }
}
