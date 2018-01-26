import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { Routes, RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { Error404Component } from './errors/error404/error404.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot( appRoutes )
   ],
  declarations: [
    AppComponent,
    PokemonSearchComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    Error404Component,
    HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
