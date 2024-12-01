import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NurseLoginComponent } from './nurse-login/nurse-login.component';
import { ListadoEnfermerosComponent } from './listado-enfermeros/listado-enfermeros.component';
import { SearchNursesComponent } from './search-nurses/search-nurses.component';

const routes: Routes = [
  { path: 'login', component: NurseLoginComponent }, // Ruta raíz para el componente de login
  { path: 'listado', component: ListadoEnfermerosComponent }, // Ruta para ListadoEnfermeros
  { path: 'buscar', component: SearchNursesComponent } // Ruta para Buscar Enfermeros
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
