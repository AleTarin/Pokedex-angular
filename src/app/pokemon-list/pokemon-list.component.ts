import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokeArray: Pokemon[];

  constructor(private pokemonService: PokemonService) { }


  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe( res =>
      this.pokeArray = res['results']);
  }

}
