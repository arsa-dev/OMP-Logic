import { Operacion } from './operacion'

// Conjunto de operaciones necesarias para la fabricación de un modelo concreto
export class Modelo {
  // Concepto del modelo
  concepto: string

  // Conjunto de operaciones
  operaciones: Operacion[]

  // Duracion estimada expresada en segundos para la fabricación si solo hay un trabajador
  duracionEstimadaLineal: number

  constructor (conceptoParametro: string, operacionesParametro: Operacion[]) {
    this.concepto = conceptoParametro
    this.operaciones = operacionesParametro
    this.duracionEstimadaLineal = 0

    // Sumamos la duracion estimada de todas las operaciones
    operacionesParametro.forEach(operacionParametro => {
      this.duracionEstimadaLineal += operacionParametro.duracionEstimada
    })
  }
}
