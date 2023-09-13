import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Linea } from '../models/linea.model';

@Injectable({
  providedIn: 'root'
})
export class LineasService {
  lineasChanged = new Subject<Linea[]>();

  constructor(private http: HttpClient) {}

  getLineas() {
    return this.fetchLineas();
  }

  fetchLineas() {
    return this.http
    .get('http://localhost:3000/api/lineas')
    .pipe(
      map((responseData) => {
        const LineaesArray: Linea[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            LineaesArray.push({ ...responseData[key] });
          }
        }
        console.log(responseData);
        return LineaesArray;
      }),
      catchError((errorRes) => {
        return throwError(errorRes);
      })
    );
  }

  crearLinea(nombre: string) {
    const nuevaLinea: Linea = { id: null, nombre};

    this.http
    .post('http://localhost:3000/api/lineas', nuevaLinea)
    .subscribe(
      (responseData) => {
        console.log('Linea creada exitosamente', responseData);
        this.fetchLineas().subscribe((Lineas) => {
          this.lineasChanged.next(Lineas);
        });
      },
      (error) => {
        // Maneja los errores de la solicitud HTTP aquí.
        console.error('Error al crear el Linea', error);
      }
    );
  }

  borrarLinea(id: number) {
    this.http
    .delete(`http://localhost:3000/api/lineas/${id}`)
    .subscribe(
      () => {
        console.log(`Linea con ID ${id} eliminado en el servidor`);
        this.fetchLineas().subscribe((lineas) => {
          this.lineasChanged.next(lineas);
        });
      },
      (error) => {
        console.error(`Error al eliminar el Linea con ID ${id}`, error);
      }
    );
  }

  editarLinea(linea: Linea) {
    this.http
      .put(`http://localhost:3000/api/lineas/${linea.id}`, linea)
      .subscribe(
        () => {
          console.log(`Linea con ID ${linea.id} actualizado en el servidor`);
          this.fetchLineas().subscribe((lineas) => {
            this.lineasChanged.next(lineas);
          });
        },
        (error) => {
          console.error(`Error al actualizar el Linea con ID ${linea.id}`, error);
        }
      );
  }
}
