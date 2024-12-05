import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NurseLoginComponent } from './nurse-login/nurse-login.component'; 
import { ListadoEnfermerosComponent } from './listado-enfermeros/listado-enfermeros.component'; 
import { SearchNursesComponent } from './search-nurses/search-nurses.component'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NurseLoginComponent,         
    ListadoEnfermerosComponent,   
    SearchNursesComponent,       
    FormsModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

