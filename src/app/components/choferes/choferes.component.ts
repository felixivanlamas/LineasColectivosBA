import { Component } from '@angular/core';
import { Chofer } from 'src/app/models/chofer.model';
import { choferes } from 'src/app/repisitorio';

const ELEMENT_DATA: Chofer[] = choferes;

@Component({
  selector: 'app-choferes',
  templateUrl: './choferes.component.html',
  styleUrls: ['./choferes.component.css']
})
export class ChoferesComponent {
  public title:string = 'Choferes'
  public listaChoferes = choferes
  public onChoferSeleccionado: any | undefined
  public showCrearChofer = false

  showcrearChofer(){
    this.onChoferSeleccionado = undefined
    this.showCrearChofer = !this.showCrearChofer
  }

  crearChofer(chofer:Chofer){
    choferes.push(new Chofer(chofer.nombre,chofer.apellido,chofer.documento))
    
  }
}
