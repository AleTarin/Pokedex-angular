import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { Routes } from '@angular/router';
import { Error404Component } from './errors/error404/error404.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
    {path: 'search', component: PokemonSearchComponent},
    {path: 'pokemons', component: PokemonListComponent},
    {path: 'home', component: HomeComponent},
    {path: 'pokemons/:id', component: PokemonDetailComponent},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '', pathMatch: 'full'},
    {path: '**', redirectTo: '404', pathMatch: 'full'}
];
