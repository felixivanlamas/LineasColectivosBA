import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Chofer } from 'src/app/models/chofer.model';

@Component({
  selector: 'app-choferes-edit',
  templateUrl: './choferes-edit.component.html',
  styleUrls: ['./choferes-edit.component.css'],
})
export class ChoferesEditComponent implements OnChanges {
  form: FormGroup;

  @Input() choferSeleccionado: Chofer | undefined;
  @Output() cerrar = new EventEmitter<void>(); // Agrega este evento personalizado

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      documento: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['choferSeleccionado'] && this.choferSeleccionado) {
      // Cargar los datos del chofer en el formulario cuando cambie choferSeleccionado
      this.form.patchValue({
        nombre: this.choferSeleccionado['nombre'],
        apellido: this.choferSeleccionado['apellido'],
        documento: this.choferSeleccionado['documento'],
      });
    }
  }

  editar() {
    // Realiza la edición del chofer aquí
    this.cerrar.emit()
    this._snackBar.open('Chofer editado correctamente!', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  cerrarEditor() {
    this.cerrar.emit();
  }
}
