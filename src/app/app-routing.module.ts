import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { EquipoIndividualComponent } from './componentes/equipo-individual/equipo-individual.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'equipo-individual', component: EquipoIndividualComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
