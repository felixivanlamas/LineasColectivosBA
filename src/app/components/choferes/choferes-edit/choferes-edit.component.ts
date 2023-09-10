import { ChoferesService } from 'src/app/services/choferes.service';
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

  @Input() choferSeleccionado!: Chofer;
  @Output() cerrar = new EventEmitter<void>(); // Agrega este evento personalizado

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private choferesService: ChoferesService
  ) {
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
    if (confirm('¿Estás seguro de que deseas editar al chofer?')) {
      const index = this.choferesService.getChoferes().indexOf(this.choferSeleccionado);
      if (index !== -1) {
        let choferEditado = new Chofer(this.form.value.nombre,
          this.form.value.apellido,
          this.form.value.documento)
        this.choferesService.editarChofer(index, choferEditado);
        this.cerrar.emit();
        this._snackBar.open('Chofer editado correctamente!', '', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      }
    }
  }

  cerrarEditor() {
    this.cerrar.emit();
  }
}
