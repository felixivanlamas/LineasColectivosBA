import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Chofer } from 'src/app/models/chofer.model';

@Component({
  selector: 'app-choferes-create',
  templateUrl: './choferes-create.component.html',
  styleUrls: ['./choferes-create.component.css']
})
export class ChoferesCreateComponent {
  @Output() cerrar = new EventEmitter<Chofer>();

  form: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      documento: ['', Validators.required],
    });
  }

  crear(){
    const nuevoChofer: Chofer = {
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      documento: this.form.value.documento,
    };
    this.cerrar.emit(nuevoChofer)
    this._snackBar.open('Chofer creado correctamente!', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

}
