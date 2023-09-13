import { Component } from '@angular/core';
import { Parada } from 'src/app/models/parada.model';

@Component({
  selector: 'app-paradas-list',
  templateUrl: './paradas-list.component.html',
  styleUrls: ['./paradas-list.component.css'],
})
export class ParadasListComponent {
  displayedColumns: string[] = ['nombre', 'direccion', 'acciones'];
  viewEdit = false;

  editParada(element: any) {
    this.viewEdit = !this.viewEdit;
  }

  deleteParada(element: Parada) {
 
  }
}
