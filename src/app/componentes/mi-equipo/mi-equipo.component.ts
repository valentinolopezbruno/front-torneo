import { Component } from '@angular/core';
import { Jugador } from 'src/app/models/jugador';
import { EquipoServiceService } from 'src/app/servicios/equipo-service/equipo-service.service';
import { JugadorServiceService } from 'src/app/servicios/jugador-service/jugador-service.service';
import { TorneoServiceService } from 'src/app/servicios/torneo-service/torneo-service.service';

@Component({
  selector: 'app-mi-equipo',
  templateUrl: './mi-equipo.component.html',
  styleUrls: ['./mi-equipo.component.css']
})
export class MiEquipoComponent {

  constructor(private equipoServiceService:EquipoServiceService,
    private torneoServiceService:TorneoServiceService,
    private jugadorServiceService:JugadorServiceService){}
  //Variable donde serán guardados los jugadores.
  equipos:any[] = [];
  equipoSeleccionado:any;
  idEquipo:any=1;
  torneos:any = [];
  editarEquipo= false;
  editarJugadores = false;
  nuevosJugadores:any=[];

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

  modalAdministrarEquipo(){
    this.editarEquipo = !this.editarEquipo
  }

  modalAdministrarJugadores(){
    this.editarJugadores = !this.editarJugadores
  }

  agregarJugador(){
    this.nuevosJugadores.push({nombre:"",dni:""})
  }

  // Creo los jugadores que se agregaron en el modal desde el front.
  agregarJugadores(){
    for(let i = 0; i < this.nuevosJugadores.length; i++){
      this.nuevosJugadores[i].idEquipo = this.equipoSeleccionado.id
      this.nuevosJugadores[i].roll = 0 // Roll: Jugador
      this.nuevosJugadores[i].imagen = "asd" // Roll: Jugador

      this.jugadorServiceService.crearJugador(this.nuevosJugadores[i]).subscribe((data) => {
        console.log(data)
      });
    }
  }

  eliminarJugadores(jugador:Jugador){
    console.log("eliminar jugador")
    console.log(jugador)
    this.jugadorServiceService.eliminarJugador(jugador).subscribe((data) => {
      this.equipoSeleccionado.jugadores = this.equipoSeleccionado.jugadores.filter((jugador: Jugador) => jugador.id !== data.id);
      console.log(data)
    });
  }

  ngOnInit(){
    this.getJugadoresPorEquipo();
    this.getTorneos();
  }
}
