# Elección del gestor de tareas [#14](https://github.com/arsa-dev/OMP-Logic/issues/14)

Algunos gestores de tareas:
- ❤️ _npm/bun_: proporcionan un task runner genérico que se puede utilizar más para documentación que para la propia ejecución de tareas, debido a que en la mayoría de tareas que deberemos utilizar en el proyecto serán comandos simples del sistema y no serán tareas paralelas o con un modelo complejo de ejecución, este gestor de tareas nos será más que suficiente en el proyecto.
- _grunt_ y _gulp_: ambos gestores de tareas son bastante similares tanto en concepto como en modo de uso, ambos tienen un fichero de configuración donde se definen las tareas a ejecutar, se pueden extender mediante módulos y son proyectos marudados que ya apenas requieren mantenimiento (casi todo se hace mediante módulos). Actualmente no tenemos otra serie de tareas que no sean fácilmente integrables directamente en bun, por lo que no se usará por el momento.
- ❤️ _eslint_: se utiliza para hacer una validación del formato de código, para asegurarnos de que se utilizan las buenas prácticas del lenguaje o al menos unas definidas en la aplicación. Lo considero task runner aunque sea muy específico porque por medio de ese fichero de especificación de reglas/tareas realizará o avisará de las transformaciones a realizar en el código.

A diferencia de los gestores de dependencias, los gestores de tareas se pueden combinar sin problema ya que nos pueden ser beneficioso el uso de uno concreto para la ejecución de alguna tarea determinada.
