import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Linea } from 'src/app/models/linea.model';
import { LineasService } from 'src/app/services/lineas.service';

@Component({
  selector: 'app-lineas-edit',
  templateUrl: './lineas-edit.component.html',
  styleUrls: ['./lineas-edit.component.css'],
})
export class LineasEditComponent implements OnChanges {
  form: FormGroup;

  @Input() lineaSeleccionada: Linea;
  @Output() cerrar = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private lineasService: LineasService
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['lineaSeleccionada'] && this.lineaSeleccionada) {
      this.form.patchValue({
        nombre: this.lineaSeleccionada['nombre'],
      });
    }
  }

  editar() {
    if (confirm('¿Estás seguro de que deseas editar la linea?')) {
      let lineaEditada = new Linea(
        this.lineaSeleccionada.id,
        this.form.value.nombre
      );
      this.lineasService.editarLinea(lineaEditada);
      this.cerrar.emit();
      this._snackBar.open('Linea editada correctamente!', '', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    }
  }

  onSubmit() {
    this.editar();
    this.cerrarEditor;
  }

  cerrarEditor() {
    this.cerrar.emit();
  }
}
