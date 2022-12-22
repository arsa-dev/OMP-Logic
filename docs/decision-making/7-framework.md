# Elección del framework [#28](https://github.com/arsa-dev/OMP-Logic/issues/28)

Criterios para elegir el framework:
- _Uso sencillo de verbos HTTP en controladores_
- _Definición de rutas personalizadas e integración con path y query parameters_
- _Generación automática de OpenAPI_

Algunas opciones:
- _express_: Framework HTTP simple, no gestiona serialización ni entiende de OpenAPI aunque está muy extendido.
- _loopback_ ❤️: Framework REST diseñado para generar aplicaciones de un modo simple y muy veloz, implementa conceptos como datasources (no necesariamente bases de datos), modelos, controladores...; además de generación automática de openapi a partir de modelos y controladores mediante el uso de decorators en typescript (reflect-metadata), etc. Además está mantenido por IBM y aunque no cuenta con la mejor documentación casi siempre se encuentran recursos de la comunidad para conocer como implementar casi cualquier problema al que nos enfrentemos.
