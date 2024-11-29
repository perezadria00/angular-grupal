import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NurseLoginComponent } from './nurse-login/nurse-login.component';  // Importa el componente

@NgModule({
  declarations: [AppComponent],  // No declaramos NurseLoginComponent aquí
  imports: [BrowserModule, AppRoutingModule, NurseLoginComponent],  // Importa NurseLoginComponent en lugar de declararlo
  bootstrap: [AppComponent]
})
export class AppModule { }
