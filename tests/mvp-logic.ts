import { expect } from 'chai';
import { describe, it } from 'mocha';
import { Operacion } from '../src/models/operacion';
import { Modelo } from '../src/models/modelo';

describe('Validate logic MVP', () => {
  it('Checking basic object constructors', () => {
    const operacion = new Operacion('coser bolsillo', 30);
    expect(operacion.accion).to.be.equal('coser bolsillo');
    expect(operacion.duracionEstimada).to.be.equal(30);
    const operacion2 = new Operacion('coser botones', 15);
    expect(operacion2.accion).to.be.equal('coser botones');
    expect(operacion2.duracionEstimada).to.be.equal(15);

    const modelo = new Modelo('camisa test', [operacion, operacion2]);
    expect(modelo.concepto).to.be.equal('camisa test');
    expect(modelo.operaciones).to.have.lengthOf(2);
    expect(modelo.operaciones).to.include(operacion);
    expect(modelo.operaciones).to.include(operacion2);
    expect(modelo.duracionEstimadaLineal).to.be.equal(30 + 15);
  });
});
