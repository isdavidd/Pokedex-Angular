import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  

  constructor(private http: HttpClient) { 

  }

  listAllPokemons(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}?offset=${0}&limit=${600}`).pipe(
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

  listPageOfPokemons(page: number, pageSize: number): Observable<any> {
    const offset = (page - 1) * pageSize;
    const url = `${this.baseUrl}?offset=${offset}&limit=${pageSize}`; 
    
    return this.http.get<any>(url).pipe(
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

  listLastPageOfPokemons(page: number, pageSize: number, remainingPokemons: number): Observable<any> {
    const offset = (page - 1) * pageSize;
    const url = `${this.baseUrl}?offset=${offset}&limit=${remainingPokemons}`; 
    
    return this.http.get<any>(url).pipe(
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

}
