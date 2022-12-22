import { AppInitialization } from '../logic/app-init';

const logger = AppInitialization.instance().getLogger('models.operacion');

// Define las acciones que realizan los operarios
export class Operacion {
  // Descripcion de la accion que un operario debe llevar a cabo
  accion: string;

  // Duracion estimada de la operacion expresada en segundos
  duracionEstimada: number;

  constructor(accion: string, duracionEstimada: number) {
    this.accion = accion;
    this.duracionEstimada = duracionEstimada;
    logger.debug('Created model' + JSON.stringify(this));
  }
}
