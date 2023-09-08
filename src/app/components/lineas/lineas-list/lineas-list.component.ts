import { Component } from '@angular/core';
import { Linea } from 'src/app/models/linea.model';
import { lineas } from '../../../repisitorio';

const ELEMENT_DATA: Linea[] = lineas;

@Component({
  selector: 'app-lineas-list',
  templateUrl: './lineas-list.component.html',
  styleUrls: ['./lineas-list.component.css'],
})
export class LineasListComponent {
  displayedColumns: string[] = ['nombre', 'colectivos', 'acciones'];
  dataSource = ELEMENT_DATA;
  viewEdit = false;

  editLinea(element: any) {
    this.viewEdit = !this.viewEdit;
  }

  deleteLinea(element: Linea) {
    if (confirm('¿Estás seguro de que deseas eliminar la línea?')) {
      const index = ELEMENT_DATA.indexOf(element); // Encuentra el índice del elemento a eliminar
      if (index !== -1) {
        ELEMENT_DATA.splice(index, 1); // Elimina el elemento del arreglo
        this.dataSource = [...ELEMENT_DATA]; // Actualiza el origen de datos
      }
    }
  }
}
