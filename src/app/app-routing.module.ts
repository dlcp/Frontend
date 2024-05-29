import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { FormComponent } from './form/form.component';
import { ContactComponent } from './contact/contact.component';
import { ContadorComponent } from './contador/contador.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'form', component:FormComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'contador', component:ContadorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
