import { PaqueteFabricacion } from './paquete_fabricacion';

// Contiene uno o más paquetes de modelos y el número de unidades por modelo que deben fabricarse
export class OrdenDeFabricacion {
  // Conjunto de modelos con los números de unidades
  paquetes: PaqueteFabricacion[];

  // Timestamp de comienzo de fabricación
  startDate: Date | null;
  // Timestamp de finalización de la fabricación
  endDate: Date | null;

  constructor(paquetes: PaqueteFabricacion[]) {
    this.paquetes = paquetes;
    this.startDate = null;
    this.endDate = new Date(0);
    for (const p of paquetes) {
      if (p.startDate != null && (this.startDate == null || this.startDate > p.startDate)) {
        this.startDate = p.startDate;
      }
      if (p.endDate == null) { // Hay al menos algún paquete sin terminar
        this.endDate = null;
      } else if (this.endDate != null && this.endDate < p.endDate) { // Nos vamos quedando con la ultima fecha de finalización
        this.endDate = p.endDate;
      }
      if (p.endDate != null && (this.endDate == null || this.endDate < p.endDate)) {
        this.endDate = p.endDate;
      }
    }
  }
}
