import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { EquipoIndividualComponent } from './componentes/equipo-individual/equipo-individual.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { CrearEquipoComponent } from './componentes/crear-equipo/crear-equipo.component';
import { CalendarioPartidosComponent } from './componentes/calendario-partidos/calendario-partidos.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MiEquipoComponent } from './componentes/mi-equipo/mi-equipo.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EquipoIndividualComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    CrearEquipoComponent,
    CalendarioPartidosComponent,
    SearchbarComponent,
    MiEquipoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
