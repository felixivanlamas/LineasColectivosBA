import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Chofer } from 'src/app/models/chofer.model';

@Injectable({
  providedIn: 'root',
})
export class ChoferesService {
  choferesChanged = new Subject<Chofer[]>();

  constructor(private http: HttpClient) {}

  getChoferes() {
    return this.fetchChoferes();
  }

  fetchChoferes() {
    return this.http
    .get('http://localhost:3000/api/choferes')
    .pipe(
      map((responseData) => {
        const choferesArray: Chofer[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            choferesArray.push({ ...responseData[key] });
          }
        }
        console.log(responseData);
        return choferesArray;
      }),
      catchError((errorRes) => {
        return throwError(errorRes);
      })
    );
  }

  crearChofer(nombre: string, apellido: string, documento: string) {
    const nuevoChofer: Chofer = { id: null, nombre, apellido, documento };

    this.http
    .post('http://localhost:3000/api/choferes', nuevoChofer)
    .subscribe(
      (responseData) => {
        console.log('Chofer creado exitosamente', responseData);
        this.choferesChanged.next();
        /* this.fetchChoferes().subscribe((choferes) => {
          this.choferesChanged.next(choferes);
        }); */
      },
      (error) => {
        // Maneja los errores de la solicitud HTTP aquí.
        console.error('Error al crear el chofer', error);
      }
    );
  }

  borrarChofer(id: number) {
    this.http
    .delete(`http://localhost:3000/api/choferes/${id}`)
    .subscribe(
      () => {
        console.log(`Chofer con ID ${id} eliminado en el servidor`);
        this.fetchChoferes().subscribe((choferes) => {
          this.choferesChanged.next(choferes);
        });
      },
      (error) => {
        console.error(`Error al eliminar el chofer con ID ${id}`, error);
      }
    );
  }

  editarChofer(chofer: Chofer) {
    this.http
      .put(`http://localhost:3000/api/choferes/${chofer.id}`, chofer)
      .subscribe(
        () => {
          console.log(`Chofer con ID ${chofer.id} actualizado en el servidor`);
          this.fetchChoferes().subscribe((choferes) => {
            this.choferesChanged.next(choferes);
          });
        },
        (error) => {
          console.error(`Error al actualizar el chofer con ID ${chofer.id}`, error);
        }
      );
  }
}
