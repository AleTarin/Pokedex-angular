import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  @Input()
  pokeArray: Pokemon[];
  pokemon: Pokemon;

  constructor(private pokemonService: PokemonService) { }

  onSelect(pokemon: Pokemon) {
    this.pokemon = pokemon;
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe( response =>
      this.pokeArray = response['results']);
  }

}
