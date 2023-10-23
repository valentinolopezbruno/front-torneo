import { Component } from '@angular/core';
import { TorneoServiceService } from 'src/app/servicios/torneo-service/torneo-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private torneoServiceService:TorneoServiceService){}


  torneos:any = [];
  torneoSeleccionado:any
  
  //Categorias del torneo seleccionado.
  categorias:any

  verCategorias= false;

  getTorneos(){
    this.torneoServiceService.getTorneos().subscribe((data) => {
      (this.torneos = data);
      console.log(this.torneos)
    });
  }

  // Cerrar el modal que muestra las Categorias.
  modalCategorias(){
    this.verCategorias = !this.verCategorias;
  }

  //Carga la variable torneoSeleccionado
  cargarTorneo(){
    if (this.torneoSeleccionado !== null) {
      const torneoIndex = this.torneoSeleccionado;
      this.torneoSeleccionado = this.torneos[torneoIndex];
  
      console.log("Torneo seleccionado");
      console.log(this.torneoSeleccionado);
      this.categorias = this.torneoSeleccionado.categorias
      this.modalCategorias();
    } 
    
  }

  ngOnInit(){
    this.getTorneos();
  }
}
