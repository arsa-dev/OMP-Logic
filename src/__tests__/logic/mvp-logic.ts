import {expect} from 'chai';
import {describe, it} from 'mocha';
import {checkManufacturingOrder} from '../../logic/check-problems';
import {Modelo} from '../../models/modelo';
import {Operacion} from '../../models/operacion';
import {OrdenDeFabricacion} from '../../models/orden_de_fabricacion';
import {PaqueteFabricacion} from '../../models/paquete_fabricacion';

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

  it('Overall time exceded without package time exceded', () => {
    const modelo = new Modelo('camisa test', [
      new Operacion('coser bolsillo', 30),
      new Operacion('coser botones', 15),
    ]);
    const paquete = new PaqueteFabricacion(modelo, 50, new Date());
    const paquete2 = new PaqueteFabricacion(modelo, 100);
    const orden = new OrdenDeFabricacion([paquete, paquete2], new Date(0));

    const ret = checkManufacturingOrder(orden);
    expect(ret).to.have.lengthOf(1);
    expect(ret[0].code).to.be.equal('overall_time');
    expect(ret[0].ref).to.be.equal(orden);
  });
  it('Package time exceded without overall time exceded', () => {
    const d = new Date(Date.now() - 46 * 1000 * 50);
    const modelo = new Modelo('camisa test', [
      new Operacion('coser bolsillo', 30),
      new Operacion('coser botones', 15),
    ]);
    const paquete = new PaqueteFabricacion(modelo, 50, d);
    const paquete2 = new PaqueteFabricacion(modelo, 100);
    const orden = new OrdenDeFabricacion([paquete, paquete2]);

    const ret = checkManufacturingOrder(orden);
    expect(ret).to.have.lengthOf(1);
    expect(ret[0].code).to.be.equal('package_time');
    expect(ret[0].ref).to.be.equal(paquete);
  });
  it('Exceded but finished should not return errors', () => {
    const d = new Date(Date.now() - 46 * 1000 * 50);
    const modelo = new Modelo('camisa test', [
      new Operacion('coser bolsillo', 30),
      new Operacion('coser botones', 15),
    ]);
    const paquete = new PaqueteFabricacion(modelo, 50, d, new Date());
    const paquete2 = new PaqueteFabricacion(modelo, 100);
    const orden = new OrdenDeFabricacion([paquete, paquete2]);

    const ret = checkManufacturingOrder(orden);
    expect(ret).to.have.lengthOf(0);
  });
  it('In time unfinished should not return errors', () => {
    const d = new Date(Date.now() - 13 * 1000);
    const modelo = new Modelo('camisa test', [
      new Operacion('coser bolsillo', 30),
      new Operacion('coser botones', 15),
    ]);
    const paquete = new PaqueteFabricacion(modelo, 50, d);
    const paquete2 = new PaqueteFabricacion(modelo, 100, d);
    const orden = new OrdenDeFabricacion([paquete, paquete2]);

    const ret = checkManufacturingOrder(orden);
    expect(ret).to.have.lengthOf(0);
  });
});
