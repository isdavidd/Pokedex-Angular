import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/home/navbar/navbar.component';
import { LoginAndRegisterComponent } from './pages/login-register/login-register.component';
import { LoginComponent } from './pages/login-register/components/login-component.ts/login-component';
import { RegisterComponent } from './pages/login-register/components/register-component.ts/register-component';
import { ContactsComponent } from './pages/contacts/contacts/contacts.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginAndRegisterComponent,
    LoginComponent,
    RegisterComponent,
    ContactsComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
