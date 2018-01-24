import { Pokemon } from './pokemon';
import { Injectable } from '@angular/core';
import { HttpModule, Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class PokemonService {
  private url_pkm = 'http://pokeapi.salestock.net/api/v2/';
  private all_pkm = 'http://pokeapi.salestock.net/api/v2/pokemon/';
  pokemon: Pokemon;

  constructor(private http: Http) {
  }

  getPokemons() {
    return this.http.get(this.url_pkm + 'pokemon/' )
    .map(res => {
      console.log(res.json());
      return res.json();
    })
    .catch(this.handleError);
  }

  getPokemon(pokemonId?: number)/*: Observable<Pokemon[]>*/ {
    // return this.http
    //   .get(this.all_pkm + pokemonId)
    //   .map((response: Response) => {
    //     const bodyResponse = response['_body'];
    //     console.log();
    //     return <Pokemon[]>JSON.parse(bodyResponse);
    //   })
    //   .catch(this.handleError);

      return this.http.get(this.url_pkm + 'pokemon/' + pokemonId + '/')
      .map(res => {
          const pokemon: Pokemon = {name: res.json().name, image: res.json().sprites.front_default};
          return pokemon;
      })
      .catch(this.handleError);
  }

  // getPokemonForm(pokemonId) {
  //   return this.http.get(this.url_pkm + 'pokemon-form/' + pokemonId)
  //     .map(res => res.json());
  // }

  private handleError(err: HttpErrorResponse) {
  console.log(err.message);
  return Observable.throw(err.message);
  }
}

