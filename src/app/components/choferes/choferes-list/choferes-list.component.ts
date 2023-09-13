import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ChoferesService } from 'src/app/services/choferes.service';
import { Chofer } from 'src/app/models/chofer.model';

@Component({
  selector: 'app-choferes-list',
  templateUrl: './choferes-list.component.html',
  styleUrls: ['./choferes-list.component.css'],
})
export class ChoferesListComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellido', 'documento', 'acciones'];
  viewEdit = false;
  listaChoferes: Chofer[] = [];
  private cfChangeSub: Subscription;

  @Output() choferSeleccionado = new EventEmitter<Chofer>();

  constructor(private choferesService: ChoferesService) {}

  ngOnInit() {
    this.choferesService.fetchChoferes().subscribe((choferes) => {
      this.listaChoferes = choferes;
    });
    this.choferesService.choferesChanged.subscribe((choferes) => {
      this.listaChoferes = choferes;
    });
  }

  editChofer(element: Chofer) {
    this.choferSeleccionado.emit(element);
  }

  deleteChofer(element: Chofer) {
    if (confirm('¿Estás seguro de que deseas eliminar al chofer?')) {
      this.choferesService.borrarChofer(element.id);
    }
  }
}
