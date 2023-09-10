import { Chofer } from 'src/app/models/chofer.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChoferesService {
  choferesChanged = new EventEmitter<Chofer[]>();

  private choferes: Chofer[] = [
    { nombre: 'Pedro', apellido: 'Martínez', documento: '12345' },
    { nombre: 'Laura', apellido: 'Rodríguez', documento: '67890' },
    { nombre: 'Roberto', apellido: 'González', documento: '54321' },
    { nombre: 'Felix', apellido: 'Lamas', documento: '11111' },
    { nombre: 'Esteban', apellido: 'Quito', documento: '22222' },
    { nombre: 'Leo', apellido: 'Diario', documento: '33333' },
  ];

  getChoferes() {
    return this.choferes.slice();
  }

  crearChofer(nombre: string, appelido: string, documento: string) {
    this.choferes.push(new Chofer(nombre, appelido, documento));
    this.choferesChanged.emit(this.choferes.slice());
  }

  borrarChofer(id: number) {
    if (id >= 0 && id < this.choferes.length) {
      this.choferes.splice(id, 1);
      this.choferesChanged.emit(this.choferes.slice());
      console.log(`Chofer con ID ${id} eliminado.`);
    } else {
      console.error(`ID de chofer no válido: ${id}`);
    }
  }

  editarChofer(id: number, chofer: Chofer) {
    if (id >= 0 && id < this.choferes.length) {
      this.choferes[id] = chofer;
      this.choferesChanged.emit(this.choferes.slice());
      console.log(`Chofer con ID ${id} eliminado.`);
    } else {
      console.error(`ID de chofer no válido: ${id}`);
    }
  }
}
