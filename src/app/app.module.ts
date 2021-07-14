import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { UsersComponent } from './users/users.component';
import { StatusColorComponent } from './status-color/status-color.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {InterceptorServiceService} from './services/interceptor-service.service';
import { HomeComponent } from './home/home.component';
import { EmailComponent } from './validation/email/email.component';
import { PasswordComponent } from './validation/password/password.component';
import { NameComponent } from './validation/name/name.component';
import { ConfirmPasswordComponent } from './validation/confirm-password/confirm-password.component'

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ContainerComponent,
    UsersComponent,
    StatusColorComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    EmailComponent,
    PasswordComponent,
    NameComponent,
    ConfirmPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorServiceService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
