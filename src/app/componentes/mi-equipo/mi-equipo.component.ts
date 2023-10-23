import { Component } from '@angular/core';
import { Jugador } from 'src/app/models/jugador';
import { EquipoServiceService } from 'src/app/servicios/equipo-service/equipo-service.service';

@Component({
  selector: 'app-mi-equipo',
  templateUrl: './mi-equipo.component.html',
  styleUrls: ['./mi-equipo.component.css']
})
export class MiEquipoComponent {

  constructor(private equipoServiceService:EquipoServiceService){}
  //Variable donde serán guardados los jugadores.
  equipos:any[] = [];
  equipoSeleccionado:any;
  idEquipo:any=1;

  // Traigo los Jugadores.
  getJugadoresPorEquipo(){
    this.equipoServiceService.getJugadoresPorEquipo().subscribe((data) => {
      (this.equipos = data);
      console.log(this.equipos)
      // Una vez cargada la variable de equipos, cargo la de equipo seleccinado
      this.filtrarEquipoPorID();
    });
  }

  // Con la variable idEquipo busco el que necesito
  filtrarEquipoPorID(){
    for(let i = 0; i < this.equipos.length; i++){
      if(this.equipos){
        if(this.equipos[i].id === this.idEquipo){
          this.equipoSeleccionado = this.equipos[i];
          console.log("Equipo Seleccionado")
          console.log(this.equipoSeleccionado)
        }
      }
    }
  }

  ngOnInit(){
    this.getJugadoresPorEquipo();
  }
}
