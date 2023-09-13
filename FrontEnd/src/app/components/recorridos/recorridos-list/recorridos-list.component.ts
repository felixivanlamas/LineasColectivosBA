import { Component } from '@angular/core';
import { Recorrido } from 'src/app/models/recorrido.model';

@Component({
  selector: 'app-recorridos-list',
  templateUrl: './recorridos-list.component.html',
  styleUrls: ['./recorridos-list.component.css'],
})
export class RecorridosListComponent {
  displayedColumns: string[] = ['paradas', 'acciones'];
  viewEdit = false;

  editRecorrido(element: any) {
    this.viewEdit = !this.viewEdit;
  }

  deleteRecorrido(element: Recorrido) {
    
  }
}
