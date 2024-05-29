import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { CalendarModule } from 'primeng/calendar';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { ContadorComponent } from './contador/contador.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './modules/home/home.component';
import { NavBarComponent } from './modules/nav-bar/nav-bar.component';
import { ProductListComponent } from './modules/product-list/product-list.component';
import { ErrorComponent } from './error/error.component';
import { Router, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



import { RouterModule } from '@angular/router';


const appRoutes:Routes=[
  { path:'',component:AppComponent},
  { path:'home',component:HomeComponent},
  { path:'lista',component:ProductListComponent},
  { path:'**',component:ErrorComponent}
]



@NgModule({
  declarations: [
    
    AppComponent,
    ContactComponent,
    ContadorComponent,
    FormComponent,
    HomeComponent,
    NavBarComponent,
    ProductListComponent,
    ErrorComponent
  ],
imports: [
  RouterModule.forRoot(appRoutes),
  BrowserModule,
  AppRoutingModule,
  InputTextModule, 
  ButtonModule, 
  CalendarModule, 
  FormsModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  HttpClientModule
],
providers: [
  provideClientHydration()
],
bootstrap: [AppComponent]
})
export class AppModule { }
  