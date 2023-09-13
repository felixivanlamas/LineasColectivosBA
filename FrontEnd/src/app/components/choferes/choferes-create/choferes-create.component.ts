import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ChoferesService } from './../../../services/choferes.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-choferes-create',
  templateUrl: './choferes-create.component.html',
  styleUrls: ['./choferes-create.component.css'],
})
export class ChoferesCreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private _snackBar: MatSnackBar,
    private choferesService: ChoferesService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      documento: new FormControl(null, Validators.required),
    });
  }

  crear() {
    if (confirm('¿Estás seguro de que deseas crear al chofer?')) {
      this.choferesService.crearChofer(
        this.form.value.nombre,
        this.form.value.apellido,
        this.form.value.documento
      );
      this._snackBar.open('Chofer creado correctamente!', '', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    }
  }

  onSubmit() {
    this.crear();
  }
}
