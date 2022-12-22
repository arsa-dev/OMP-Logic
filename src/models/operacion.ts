import { AppInitialization } from '../logic/app-init';

AppInitialization.instance();

// Define las acciones que realizan los operarios
export class Operacion {
  // Descripcion de la accion que un operario debe llevar a cabo
  accion: string;

  // Duracion estimada de la operacion expresada en segundos
  duracionEstimada: number;

  constructor(accion: string, duracionEstimada: number) {
    this.accion = accion;
    this.duracionEstimada = duracionEstimada;
  }
}
