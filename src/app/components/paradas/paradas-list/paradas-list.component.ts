import { Component } from '@angular/core';
import { Parada } from 'src/app/models/parada.model';
import { paradas } from 'src/app/repisitorio';

const ELEMENT_DATA: Parada[] = paradas;

@Component({
  selector: 'app-paradas-list',
  templateUrl: './paradas-list.component.html',
  styleUrls: ['./paradas-list.component.css'],
})
export class ParadasListComponent {
  displayedColumns: string[] = ['nombre', 'direccion', 'acciones'];
  dataSource = ELEMENT_DATA;
  viewEdit = false;

  editParada(element: any) {
    this.viewEdit = !this.viewEdit;
  }

  deleteParada(element: Parada) {
    if (confirm('¿Estás seguro de que deseas eliminar la línea?')) {
      const index = ELEMENT_DATA.indexOf(element); // Encuentra el índice del elemento a eliminar
      if (index !== -1) {
        ELEMENT_DATA.splice(index, 1); // Elimina el elemento del arreglo
        this.dataSource = [...ELEMENT_DATA]; // Actualiza el origen de datos
      }
    }
  }
}
