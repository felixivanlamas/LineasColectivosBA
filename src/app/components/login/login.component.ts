import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      contrasenia: ['', Validators.required],
    });
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const contrasenia = this.form.value.contrasenia;

    if(usuario=='admin' && contrasenia == '123'){
      this.router.navigate(['dashboard'])
    } else{
      this.error()
    }
  }

  error(){
    this._snackBar.open('Usuario y/o contraseña ingresado es invalido', '',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}
