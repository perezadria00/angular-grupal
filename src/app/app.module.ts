import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Importación de componentes standalone
import { NurseLoginComponent } from './nurse-login/nurse-login.component';
import { ListadoEnfermerosComponent } from './listado-enfermeros/listado-enfermeros.component';
import { SearchNursesComponent } from './search-nurses/search-nurses.component';
import { NurseRegisterComponent } from './nurse-register/nurse-register.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NurseLoginComponent,
    ListadoEnfermerosComponent,
    SearchNursesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

