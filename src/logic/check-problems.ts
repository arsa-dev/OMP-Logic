import { OrdenDeFabricacion } from '../models/orden_de_fabricacion';
import { PaqueteFabricacion } from '../models/paquete_fabricacion';
import { AppInitialization } from './app-init';

const logger = AppInitialization.instance().getLogger('logic.check-problems');

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
      logger.info(`checkManufacturingOrder - Adding problem: ${JSON.stringify(res[res.length - 1])}`);
    }
    return acc + segsEstimados;
  }, 0);
  logger.info(`checkManufacturingOrder.segsTotalEstimados: ${segsTotalEstimados}`);

  if (
    order.endDate == null &&
    (order.startDate != null) &&
    order.startDate.getTime() + (segsTotalEstimados * 1000) < Date.now()
  ) {
    res.push({ code: 'overall_time', ref: order });
    logger.info(`checkManufacturingOrder - Adding problem: ${JSON.stringify(res[res.length - 1])}`);
  }

  return res;
}
