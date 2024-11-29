import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NurseLoginComponent } from './nurse-login/nurse-login.component';  // Importa el componente

const routes: Routes = [
  { path: '', component: NurseLoginComponent }  // Ruta para mostrar el componente NurseLogin
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
