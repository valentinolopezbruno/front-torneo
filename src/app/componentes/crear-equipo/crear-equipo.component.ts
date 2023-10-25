import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css']
})
export class CrearEquipoComponent {
  nuevoEquipoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.nuevoEquipoForm = this.fb.group({
      nombre: ['', Validators.required],
      localidad: ['', [Validators.required, Validators.email]],
      descripcion: ['', Validators.required],
      /* imagen:['', Validators.required] */
    });
  }

  onSubmit() {
    if (this.nuevoEquipoForm.valid) {
      // Realiza la lógica de registro aquí
      console.log(this.nuevoEquipoForm.value);
    }
  }
}
