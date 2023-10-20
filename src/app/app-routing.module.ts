import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipoIndividualComponent } from './componentes/equipo-individual/equipo-individual.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { CrearEquipoComponent } from './componentes/crear-equipo/crear-equipo.component';
import { CalendarioPartidosComponent } from './componentes/calendario-partidos/calendario-partidos.component';
import { LoginComponent } from './componentes/login/login.component';
import { MiEquipoComponent } from './componentes/mi-equipo/mi-equipo.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'equipo-individual', component: EquipoIndividualComponent },
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'crear-equipo', component: CrearEquipoComponent },
  { path: 'calendario-partidos', component: CalendarioPartidosComponent },
  { path: 'mi-equipo', component: MiEquipoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
