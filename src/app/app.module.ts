import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NurseLoginComponent } from './nurse-login/nurse-login.component'; // Componente standalone
import { ListadoEnfermerosComponent } from './listado-enfermeros/listado-enfermeros.component'; // También standalone
import { SearchNursesComponent } from './search-nurses/search-nurses.component'; // Componente standalone
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NurseLoginComponent,         // Importa componentes standalone
    ListadoEnfermerosComponent,   // Importa componentes standalone
    SearchNursesComponent,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

