import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './pages/home/navbar/navbar.component';
import { LoginAndRegisterComponent } from './pages/login-register/login-register.component';

const routes: Routes = [
  {path: "", component: NavbarComponent},
  {path: "/login", component: LoginAndRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
