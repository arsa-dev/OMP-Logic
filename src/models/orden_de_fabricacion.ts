import { PaqueteFabricacion } from './paquete_fabricacion';

// Contiene uno o más paquetes de modelos y el número de unidades por modelo que deben fabricarse
export class OrdenDeFabricacion {
  // Conjunto de modelos con los números de unidades
  paquetes: PaqueteFabricacion[];

  // Timestamp de comienzo de fabricación
  startDate: Date | null;
  // Timestamp de finalización de la fabricación
  endDate: Date | null;

  constructor(paquetes: PaqueteFabricacion[], startDate: Date | null = null, endDate: Date | null = null) {
    this.paquetes = paquetes;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
