import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Chofer } from 'src/app/models/chofer.model';

@Component({
  selector: 'app-choferes-list',
  templateUrl: './choferes-list.component.html',
  styleUrls: ['./choferes-list.component.css']
})
export class ChoferesListComponent {
  displayedColumns: string[] = ['nombre', 'apellido', 'documento', 'acciones'];
  viewEdit = false;
  @Input() listaChoferes: Chofer[] = [];
  @Output() choferSeleccionado = new EventEmitter<Chofer>()

  editChofer(element: Chofer) {
    this.choferSeleccionado.emit(element)
  }

  deleteChofer(element: Chofer) {
    if (confirm('¿Estás seguro de que deseas eliminar la línea?')) {
      const index = this.listaChoferes.indexOf(element); // Encuentra el índice del elemento a eliminar
      if (index !== -1) {
        this.listaChoferes.splice(index, 1); // Elimina el elemento del arreglo
        this.listaChoferes = [...this.listaChoferes]; // Actualiza el origen de datos
      }
    }
  }
}
