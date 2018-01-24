import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent {
  specificPokemon: Pokemon[];
  pokemonId: number;

  constructor(private pokemonService: PokemonService) {
    this.pokemonId = 1;
  }

  getPokemonInfo() {
    console.log(this.pokemonId);
    const pokemonInfo = this.pokemonService.getPokemon(this.pokemonId);

    pokemonInfo.subscribe(poke =>
      this.specificPokemon = poke
    );

    // this.pokemonService.getSpecificPokemon(this.pokemonId).subscribe(
    //   ArrayPokemon => this.pokeArray = ArrayPokemon,
    //   error => console.log(error)
    // );
    // console.log(this.pokeArray);
        // return this.http
      //   .get(this.all_pkm + pokemonId)
      //   .map((response: Response) => {
      //     const bodyResponse = response['_body'];
      //     console.log();
      //     return <Pokemon[]>JSON.parse(bodyResponse);
      //   })
      //   .catch(this.handleError);
  }

}
