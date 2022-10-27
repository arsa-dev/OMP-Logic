// Define las acciones que realizan los operarios
export class Operacion {
  // Descripcion de la accion que un operario debe llevar a cabo
  accion: string

  // Duracion estimada de la operacion expresada en segundos
  duracionEstimada: number

  constructor (accionParametro: string, duracionEstimadaParametro: number) {
    this.accion = accionParametro
    this.duracionEstimada = duracionEstimadaParametro
  }
}
