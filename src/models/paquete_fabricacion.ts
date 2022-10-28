import { Modelo } from './modelo';

// Objeto valor intermedio asociando cada modelo con las unidades que deben fabricarse
export class PaqueteFabricacion {
  // Modelo asociado
  modelo: Modelo;

  // Cantidad asociado al modelo
  cantidad: number;

  // Timestamp de comienzo de fabricación
  startDate: Date | null;
  // Timestamp de finalización de fabricación
  endDate: Date | null;

  constructor(modelo: Modelo, cantidad: number, startDate: Date | null = null, endDate: Date | null = null) {
    this.modelo = modelo;
    this.cantidad = cantidad;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
