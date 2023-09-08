import { Sube } from "../app/models/sube.model";
import { Pasajero } from "./models/pasajero.model";
import { Parada } from "./models/parada.model";
import { Recorrido } from "./models/recorrido.model";
import { Chofer } from "./models/chofer.model";
import { Colectivo } from "./models/colectivo.model";
import { Linea } from "./models/linea.model";

// Arreglos para almacenar tus datos
export const subes: Sube[] = [
    new Sube("ABCD1234"),
    new Sube("EFGH5678"),
    new Sube("IJKL9012")
];

export const pasajeros: Pasajero[] = [
    new Pasajero("Juan", "Pérez", "12345678", subes[0]),
    new Pasajero("María", "López", "23456789", subes[1]),
    new Pasajero("Carlos", "Gómez", "34567890", subes[2])
];

export const paradas: Parada[] = [
    new Parada("Parada 1", "Dirección 1"),
    new Parada("Parada 2", "Dirección 2"),
    new Parada("Parada 3", "Dirección 3")
];

export const recorridos: Recorrido[] = [
    new Recorrido([paradas[0], paradas[1]]),
    new Recorrido([paradas[1], paradas[2]]),
    new Recorrido([paradas[2], paradas[0]])
];

export const choferes: Chofer[] = [
    new Chofer("Pedro", "Martínez", "12345"),
    new Chofer("Laura", "Rodríguez", "67890"),
    new Chofer("Roberto", "González", "54321"),
    new Chofer("Felix", "Lamas", "11111"),
    new Chofer("Esteban", "Quito", "22222"),
    new Chofer("Leo", "Diario", "33333")
];

export const colectivos: Colectivo[] = [
    new Colectivo(choferes[0], recorridos[0], [pasajeros[0], pasajeros[1]]),
    new Colectivo(choferes[1], recorridos[1], [pasajeros[1], pasajeros[2]]),
    new Colectivo(choferes[2], recorridos[2], [pasajeros[2], pasajeros[0]])
];

export const lineas: Linea[] = [
    new Linea("Línea 1", [colectivos[0], colectivos[1]]),
    new Linea("Línea 2", [colectivos[1], colectivos[2]]),
    new Linea("Línea 3", [colectivos[2], colectivos[0]])
];
