import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }         from './app/app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroSearchComponent }      from './hero-search.component';
import { HeroService }          from './hero-service';

import { AppRoutingModule }     from './app-routing.module';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api'

import {InMemoryDataService} from './in-memory-data-service'



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
   InMemoryWebApiModule.forRoot(InMemoryDataService),


  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class HeroesModule { }