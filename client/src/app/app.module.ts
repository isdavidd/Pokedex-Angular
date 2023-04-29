import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './app/components/nav-bar/nav-bar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokemoncardComponent } from './components/pokemoncard/pokemoncard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavbarComponent,
    PokemoncardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
