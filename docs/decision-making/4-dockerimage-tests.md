# Elección de imagen de docker para ejecutar los tests [#18](https://github.com/arsa-dev/OMP-Logic/issues/18)

Algunas imágenes:
- _dvlprtech/bun_: Imagen de docker no oficial de bun, aparentemente funciona correctamente en 64bits pero no en arm64.
- _imagen propia de bun_: Se ha intentado encarecidamente generar una imagen para este runtime compatible con mi equipo pero tras varias horas de desarrollo se ha descartado la opción por el tiempo que requiere y motivos de compatibilidad.
- _node:latest_ ❤️: Finalmente he optado por utilizar la imagen oficial de node, ya que mocha utiliza el runtime node y los problemas de commpatibilidad experimentados con bun en la arquitectura de mi equipo.
