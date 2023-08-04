import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { RegisterComponent } from './pages/register/register-component';
import { LoginComponent } from './pages/login/login-component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
