import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UserLoginService } from './user-login/user-login.service';
import { UserRegisterService } from './user-register/user-register.service';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ViewProductComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    
    AppRoutingModule
  ],
  providers: [
    UserLoginService,
    UserRegisterService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
