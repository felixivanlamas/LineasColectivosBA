import { Component } from '@angular/core';
import { Colectivo } from 'src/app/models/colectivo.model';
import { colectivos } from 'src/app/repisitorio';

const ELEMENT_DATA: Colectivo[] = colectivos;

@Component({
  selector: 'app-colectivos-list',
  templateUrl: './colectivos-list.component.html',
  styleUrls: ['./colectivos-list.component.css']
})
export class ColectivosListComponent {
  displayedColumns: string[] = ['chofer', 'recorrido', 'pasajeros', 'acciones'];
  dataSource = ELEMENT_DATA;
  viewEdit = false;

  editColectivo(element: any) {
    this.viewEdit = !this.viewEdit;
  }

  deleteColectivo(element: Colectivo) {
    if (confirm('¿Estás seguro de que deseas eliminar el colectivo?')) {
      const index = ELEMENT_DATA.indexOf(element); // Encuentra el índice del elemento a eliminar
      if (index !== -1) {
        ELEMENT_DATA.splice(index, 1); // Elimina el elemento del arreglo
        this.dataSource = [...ELEMENT_DATA]; // Actualiza el origen de datos
      }
    }
  }
}
