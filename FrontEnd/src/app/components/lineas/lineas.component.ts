import { Component } from '@angular/core';
import { Linea } from 'src/app/models/linea.model';

@Component({
  selector: 'app-lineas',
  templateUrl: './lineas.component.html',
  styleUrls: ['./lineas.component.css'],
})
export class LineasComponent {
  public title:string = 'Lineas'
  public onLineaSeleccionada: Linea
  public showCrearLinea = false

  showcrearLinea(){
    this.onLineaSeleccionada = null
    this.showCrearLinea = !this.showCrearLinea
  }

}
