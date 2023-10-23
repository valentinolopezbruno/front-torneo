import { Component } from '@angular/core';
import { Jugador } from 'src/app/models/jugador';
import { EquipoServiceService } from 'src/app/servicios/equipo-service/equipo-service.service';
import { TorneoServiceService } from 'src/app/servicios/torneo-service/torneo-service.service';

@Component({
  selector: 'app-mi-equipo',
  templateUrl: './mi-equipo.component.html',
  styleUrls: ['./mi-equipo.component.css']
})
export class MiEquipoComponent {

  constructor(private equipoServiceService:EquipoServiceService,
    private torneoServiceService:TorneoServiceService){}
  //Variable donde serán guardados los jugadores.
  equipos:any[] = [];
  equipoSeleccionado:any;
  idEquipo:any=1;
  torneos:any = [];

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

  getTorneos(){
    this.torneoServiceService.getTorneos().subscribe((data) => {
      (this.torneos = data);
      console.log(this.torneos)
    });
  }

  // Calculo el torneo que esta jugando el equipo seleccionado.
  calcularTorneo(){
    if(this.equipoSeleccionado){
      for(let i= 0; i < this.torneos.length; i++){
        for(let j=0; j < this.torneos[i].categorias.length;j++){
          if(this.equipoSeleccionado.idCategoria === this.torneos[i].categorias[j].id){
            
            var torneoJugado = this.torneos[i].nombre /* + this.torneos[i].categorias[j].nombre */
            return torneoJugado
          }
        }
      }
    } 
  }

  ngOnInit(){
    this.getJugadoresPorEquipo();
    this.getTorneos();
  }
}
