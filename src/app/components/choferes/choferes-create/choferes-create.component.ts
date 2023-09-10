import { ChoferesService } from './../../../services/choferes.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Chofer } from 'src/app/models/chofer.model';

@Component({
  selector: 'app-choferes-create',
  templateUrl: './choferes-create.component.html',
  styleUrls: ['./choferes-create.component.css']
})
export class ChoferesCreateComponent{
  form: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private choferesService:ChoferesService) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      documento: ['', Validators.required],
    });
  }

  crear(){
    this.choferesService.crearChofer(
      this.form.value.nombre,
      this.form.value.apellido,
      this.form.value.documento)
    this._snackBar.open('Chofer creado correctamente!', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

}
