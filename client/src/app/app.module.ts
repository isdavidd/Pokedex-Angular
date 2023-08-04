import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

/* Angular Material Components */
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';


/* Components */
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './pages/login/login-component';
import { RegisterComponent } from './pages/register/register-component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { PokemonCardComponent } from './pages/home/pokemon-card/pokemon-card.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contacts/contact/contact.component';

/* Services */
import { PokemonService } from './shared/services/pokemon-service.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ContactsComponent,
    ContactComponent,
    AboutComponent,
    PokemonCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { 
  constructor() {
  }
}
