import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LineasService } from 'src/app/services/lineas.service';


@Component({
  selector: 'app-lineas-create',
  templateUrl: './lineas-create.component.html',
  styleUrls: ['./lineas-create.component.css']
})
export class LineasCreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private _snackBar: MatSnackBar,
    private choferesService: LineasService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      nombre: new FormControl(null, Validators.required),
    });
  }

  crear() {
    if (confirm('¿Estás seguro de que deseas crear al chofer?')) {
      this.choferesService.crearLinea(
        this.form.value.nombre,
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
