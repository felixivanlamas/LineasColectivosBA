import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Chofer } from 'src/app/models/chofer.model';
import { ChoferesService } from 'src/app/services/choferes.service';

@Component({
  selector: 'app-choferes-list',
  templateUrl: './choferes-list.component.html',
  styleUrls: ['./choferes-list.component.css']
})
export class ChoferesListComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellido', 'documento', 'acciones'];
  viewEdit = false;
  listaChoferes: Chofer[] = [];
  @Output() choferSeleccionado = new EventEmitter<Chofer>()

  constructor(private choferesService:ChoferesService){
  }

  ngOnInit(){
    this.listaChoferes = this.choferesService.getChoferes();
    this.choferesService.choferesChanged.subscribe(
      (choferes: Chofer[]) => {
        this.listaChoferes = choferes
      }
    );
  }

  editChofer(element: Chofer) {
    this.choferSeleccionado.emit(element)
  }

  deleteChofer(element: Chofer) {
    if (confirm('¿Estás seguro de que deseas eliminar al chofer?')) {
      const index = this.listaChoferes.indexOf(element); // Encuentra el índice del elemento a eliminar
      if (index !== -1) {
        this.choferesService.borrarChofer(index)
      }
    }
  }
}
