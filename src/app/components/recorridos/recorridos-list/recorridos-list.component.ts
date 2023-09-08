import { Component } from '@angular/core';
import { Recorrido } from 'src/app/models/recorrido.model';
import { recorridos } from 'src/app/repisitorio';

const ELEMENT_DATA: Recorrido[] = recorridos;

@Component({
  selector: 'app-recorridos-list',
  templateUrl: './recorridos-list.component.html',
  styleUrls: ['./recorridos-list.component.css'],
})
export class RecorridosListComponent {
  displayedColumns: string[] = ['paradas', 'acciones'];
  dataSource = ELEMENT_DATA;
  viewEdit = false;

  editRecorrido(element: any) {
    this.viewEdit = !this.viewEdit;
  }

  deleteRecorrido(element: Recorrido) {
    if (confirm('¿Estás seguro de que deseas eliminar la línea?')) {
      const index = ELEMENT_DATA.indexOf(element); // Encuentra el índice del elemento a eliminar
      if (index !== -1) {
        ELEMENT_DATA.splice(index, 1); // Elimina el elemento del arreglo
        this.dataSource = [...ELEMENT_DATA]; // Actualiza el origen de datos
      }
    }
  }
}
