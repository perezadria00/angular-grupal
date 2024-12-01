import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NurseLoginComponent } from './nurse-login/nurse-login.component'; // Componente standalone
import { ListadoEnfermerosComponent } from './listado-enfermeros/listado-enfermeros.component'; // También standalone

@NgModule({
  declarations: [
    AppComponent, // Solo incluye componentes NO standalone, como AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NurseLoginComponent,         // Importa componentes standalone
    ListadoEnfermerosComponent   // Importa componentes standalone
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
