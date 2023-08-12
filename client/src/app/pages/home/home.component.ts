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
  totalPages!: number;
  totalItems!: number;
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) {

  }

  ngOnInit(): void { 
    this.pokemonService.listAllPokemons().subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.totalItems = this.setAllPokemons.length;
        this.totalPages = Math.ceil((this.totalItems/this.pageSize));
        console.log(this.totalPages);
        console.log(this.totalItems);
      }
      );
    //     console.log(this.totalItems)
        // this.getAllPokemons = this.setAllPokemons;
        // this.totalItems = this.getAllPokemons.length;
        // console.log(this.setAllPokemons);

      // }
    // );
    this.listPage();
  }

  listPage() {
    if (this.currentPage == this.totalPages) {
      const remainingPokemons = this.totalItems - ((this.currentPage - 1) * this.pageSize);
      this.pokemonService.listLastPageOfPokemons(this.currentPage, this.pageSize, remainingPokemons).subscribe(
        res => {
          this.getAllPokemons = res.results;
          console.log(this.setAllPokemons);
        }
      );
    }
    else {
    this.pokemonService.listPageOfPokemons(this.currentPage, this.pageSize).subscribe(
      res => {
        this.getAllPokemons = res.results;
        // this.totalItems = this.getAllPokemons.length;
        console.log(this.setAllPokemons);
        // console.log(this.totalItems)
      }
    );
    }
  } 

  getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    })
    this.getAllPokemons = filter;
    if (value === '' || value === ' ') {
      this.listPage();
    }

  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.listPage();
  }
}
