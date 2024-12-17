import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NurseLoginComponent } from './nurse-login/nurse-login.component';
import { ListadoEnfermerosComponent } from './listado-enfermeros/listado-enfermeros.component';
import { SearchNursesComponent } from './search-nurses/search-nurses.component';
import { NurseProfileComponent } from './nurse-profile/nurse-profile.component'; 
import { NurseRegisterComponent } from './nurse-register/nurse-register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige la raíz a login
  { path: 'login', component: NurseLoginComponent }, // Ruta para el componente de login
  { path: 'register', component: NurseRegisterComponent }, //Ruta para el componente de registro
  { path: 'listado', component: ListadoEnfermerosComponent }, // Ruta para ListadoEnfermeros
  { path: 'buscar', component: SearchNursesComponent }, // Ruta para Buscar Enfermeros
  { path: 'perfil', component: NurseProfileComponent }, // Ruta para el perfil de un enfermero
  { path: '**', redirectTo: 'login' }, // Redirige a login para rutas no válidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

