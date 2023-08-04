import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';
  

  constructor(private http: HttpClient) { 

  }

  listAllPokemons(): Observable<any>{
    return this.http.get<any>(this.baseUrl).pipe(
      tap(res => res),
      tap (res => { 
        res.results.map((pokemons: any) => {
          this.getAllPokemons(pokemons.url).subscribe(
            res => pokemons.status = res
          );
        })
       })
    );
  }

  getAllPokemons(pokemonUrl: string): Observable<any> {
    return this.http.get<any>(pokemonUrl).pipe(
      map(
        res => res
      )
    )
  }

}
