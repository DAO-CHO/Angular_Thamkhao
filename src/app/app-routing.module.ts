import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component'
import { LoginComponent } from './auth/login/login.component'
import { ProfileComponent } from './auth/profile/profile.component'
import { HomeComponent } from './home/home.component'
import { RegisterComponent} from './auth/register/register.component'
import { AuthGuardService } from './services/auth-guard.service' 
import { from } from 'rxjs';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full'},
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'register', component: RegisterComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile', component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'users', component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
