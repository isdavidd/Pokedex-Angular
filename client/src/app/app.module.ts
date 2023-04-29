import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
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
<<<<<<< HEAD
    NgbModule
=======
    MatToolbarModule,
>>>>>>> 93c9cb13f2ae3a3d55fa2b5b0346b5625d23910d
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
