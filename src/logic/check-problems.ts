import { OrdenDeFabricacion } from '../models/orden_de_fabricacion';
import { PaqueteFabricacion } from '../models/paquete_fabricacion';
import { AppInitialization } from './app-init';

AppInitialization.instance();

export interface ManufacturingProblem {
  code: 'overall_time' | 'package_time'
  ref: OrdenDeFabricacion | PaqueteFabricacion
}

export function checkManufacturingOrder(order: OrdenDeFabricacion): ManufacturingProblem[] {
  const res: ManufacturingProblem[] = [];

  const segsTotalEstimados = order.paquetes.reduce((acc, curr) => {
    const segsEstimados = curr.cantidad * curr.modelo.duracionEstimadaLineal;
    if (
      curr.endDate == null &&
      (curr.startDate != null) &&
      curr.startDate.getTime() + (segsEstimados * 1000) < Date.now()
    ) {
      res.push({ code: 'package_time', ref: curr });
    }
    return acc + segsEstimados;
  }, 0);

  if (
    order.endDate == null &&
    (order.startDate != null) &&
    order.startDate.getTime() + (segsTotalEstimados * 1000) < Date.now()
  ) {
    res.push({ code: 'overall_time', ref: order });
  }

  return res;
}
