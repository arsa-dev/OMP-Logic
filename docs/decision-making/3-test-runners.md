# Elección de test runner y librería de aserciones [#16](https://github.com/arsa-dev/OMP-Logic/issues/16)

Algunos test runners:
- _Jest_: Este test runner viene con su propia biblioteca de aserciones por lo que no habría posibilidad de elección en esto, además está muy enfocado a proyectos de react ya que facebook ha invertido gran parte de desarrollo en este test runner para integrarlo en react.
- _Jasmine_: Jasmine al igual que Mocha también está bastante extendido aunque, la instalación puede ser algo más compleja que Jest y requiere de una librería de aserciones externa para poder funcionar.
- _Mocha_ ❤️: Mocha es muy extensible y flexible ya que viene sin librería de aserciones ni mocking, gracias a ello el desarrollador puede elegir cuál utilizar, además está bastante extendido y muchos CI runners tienen soporte para el mismo.

Algunas librerías de aserciones:
- _Expect.JS_: Librería simple de aserciones basada en should.js
- _Chai_ ❤️: Está muy extendida con mantenimiento reciente y permite tres estilos de aserciones (expect(), assert() y should) que puede dar más juego y facilidad en el desarrollo de tests. Además tiene mejor soporte para aserciones de promesas.
