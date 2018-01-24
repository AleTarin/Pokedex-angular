import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { Routes, RouterModule } from '@angular/router';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'search', component: PokemonListComponent},
      {path: 'list', component: PokemonSearchComponent},
      {path: ' ', redirectTo: 'search', pathMatch: 'full'},
      {path: '**', redirectTo: 'search', pathMatch: 'full'}
    ])
   ],
  declarations: [ AppComponent, PokemonSearchComponent, PokemonListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
