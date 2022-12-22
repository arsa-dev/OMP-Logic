# Elección de la librería de logging [#24](https://github.com/arsa-dev/OMP-Logic/issues/24)

Criterios para elegir la librería de logging:
- _Soporte diferentes backends de logging, entre ellos kibana_
- _Output por consola_

Algunas opciones:
- _NGX-Logger_: Sistema de logging simple aunque muy enfocado para proyectos angular, no obstante se puede utilizar en otro tipo de proyectos y hay bastante comunidad detrás. No tiene soporte para el backend de logging kibana.
- _Winston_ ❤️: Librería de logging muy extendida (diría que la más conocida en nodejs) y con soporte para diferentes backends de logging. Cumple con todos los criterios previos.

Ambos sistemas elegidos están muy extendidos y por tanto tienen una buena comunidad detrás así como documentación sobre como realizar cualquiera de las tareas requeridas.
