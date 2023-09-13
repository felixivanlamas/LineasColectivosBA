import { Component } from '@angular/core';
import { Chofer } from 'src/app/models/chofer.model';

@Component({
  selector: 'app-choferes',
  templateUrl: './choferes.component.html',
  styleUrls: ['./choferes.component.css']
})
export class ChoferesComponent {
  public title:string = 'Choferes'
  public onChoferSeleccionado: Chofer
  public showCrearChofer = false

  showcrearChofer(){
    this.onChoferSeleccionado = null
    this.showCrearChofer = !this.showCrearChofer
  }

}
