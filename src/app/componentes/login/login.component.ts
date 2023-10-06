import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-loogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {

  constructor(
    private fb: FormBuilder,
  ){

  }

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  //Mensaje de retorno si no rellena los campos
  get username(){
    return this.loginForm.controls.username;
  }
  get password(){
    return this.loginForm.controls.password;
  }
  
  onSubmit() {
/*     if(this.username.value != null){
     if(this.password.value != null){
      this.UsuarioServiceService.validarUsuario(this.username.value, this.password.value).subscribe((data) => {
        console.log(data)
        if(data.code == 1){
          alert("Ingresaste Correctamente")
          this.loginForm.reset();
          this.router.navigateByUrl('dashboard');
        } 
        if(data.code == 0 ){
          alert("Datos Inctamente")
        }
      });
     } else alert("No se ingreso usuario o contraseña")
    }  else alert("No se ingreso usuario o contraseña")

 */
  }
}

