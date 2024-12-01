import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NurseLoginComponent } from './nurse-login/nurse-login.component';
import { ListadoEnfermerosComponent } from './listado-enfermeros/listado-enfermeros.component';

const routes: Routes = [
  { path: 'login', component: NurseLoginComponent }, // Ruta raíz para el componente de login
  { path: 'listado', component: ListadoEnfermerosComponent } // Ruta para ListadoEnfermeros
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
