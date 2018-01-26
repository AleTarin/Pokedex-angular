import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './errors/error404/error404.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path: 'search', component: PokemonSearchComponent},
    {path: 'pokemons', component: PokemonListComponent},
    {path: 'home', component: HomeComponent},
    {path: 'stats/:id', component: PokemonDetailComponent},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    // {path: '**', redirectTo: '404', pathMatch: 'full'}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class RoutingModule {}
