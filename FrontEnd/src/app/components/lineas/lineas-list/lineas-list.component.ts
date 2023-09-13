import { Component, EventEmitter,
  OnDestroy,
  OnInit,
  Output, } from '@angular/core';
import { Subscription } from 'rxjs';
import { Linea } from 'src/app/models/linea.model';
import { LineasService } from 'src/app/services/lineas.service';


@Component({
  selector: 'app-lineas-list',
  templateUrl: './lineas-list.component.html',
  styleUrls: ['./lineas-list.component.css'],
})
export class LineasListComponent implements OnInit{
  displayedColumns: string[] = ['nombre', 'acciones'];
  viewEdit = false;
  listaLineas: Linea[] = [];
  private lnChangeSub: Subscription;

  @Output() lineaSeleccionada = new EventEmitter<Linea>();

  constructor(private lineasService: LineasService) {}

  ngOnInit() {
    this.lineasService.fetchLineas().subscribe((lineas) => {
      this.listaLineas = lineas;
    });
    this.lineasService.lineasChanged.subscribe((lineas) => {
      this.listaLineas = lineas;
    });
  }


  editLinea(element: Linea) {
    this.lineaSeleccionada.emit(element);
    this.showEditLinea
  }

  deleteLinea(element: Linea) {
    if (confirm('¿Estás seguro de que deseas eliminar al chofer?')) {
      this.lineasService.borrarLinea(element.id);
    }
  }

  showEditLinea() {
    this.viewEdit = !this.viewEdit;
  }


}
