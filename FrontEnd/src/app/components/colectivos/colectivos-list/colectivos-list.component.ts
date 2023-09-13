import { Component } from '@angular/core';
import { Colectivo } from 'src/app/models/colectivo.model';


@Component({
  selector: 'app-colectivos-list',
  templateUrl: './colectivos-list.component.html',
  styleUrls: ['./colectivos-list.component.css']
})
export class ColectivosListComponent {
  displayedColumns: string[] = ['chofer', 'recorrido', 'pasajeros', 'acciones'];
  viewEdit = false;

  editColectivo(element: any) {
    this.viewEdit = !this.viewEdit;
  }

  deleteColectivo(element: Colectivo) {

  }
}
