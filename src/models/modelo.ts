import { AppInitialization } from '../logic/app-init';
import { Operacion } from './operacion';

const logger = AppInitialization.instance().getLogger('models.modelo');

// Conjunto de operaciones necesarias para la fabricación de un modelo concreto
export class Modelo {
  // Concepto del modelo
  concepto: string;

  // Conjunto de operaciones
  operaciones: Operacion[];

  // Duracion estimada expresada en segundos para la fabricación si solo hay un trabajador
  duracionEstimadaLineal: number;

  constructor(concepto: string, operaciones: Operacion[]) {
    this.concepto = concepto;
    this.operaciones = operaciones;
    this.duracionEstimadaLineal = 0;

    // Sumamos la duracion estimada de todas las operaciones
    operaciones.forEach((operacion) => {
      this.duracionEstimadaLineal += operacion.duracionEstimada;
    });
    logger.debug('Created model' + JSON.stringify(this));
  }
}
