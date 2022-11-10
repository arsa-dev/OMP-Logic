# Elección del sistema de integración continua [#22](https://github.com/arsa-dev/OMP-Logic/issues/22)

Criterios para elegir el sistema de integración continua:
- _Compatibilidad con Github Checks API_
- _Ofrecido como servicio SasS_
- _Gratuito para proyectos públicos_

Algunas opciones:
- _Done.io_: Sistema gratuito para proyectos públicos y ofrecido como SaaS, no es compatible con Github Checks API aunque está en el roadmap y hay alguna solución no oficial aportada por la comunidad.
- _codefresh.io_: Sistema gratuito para proyectos públicos y ofrecido como SaaS, no especifica si es o no compatible con Github Checks API aunque sí que dispone de autentificación a través de aplicación de github.
- _appveyor_: Sistema gratuito para proyectos públicos y ofrecido como SaaS, no es compatible con Github Checks API.
- _Semaphore_: Sistema gratuito para proyectos públicos y ofrecido como SaaS, es compatible con Github Checks API, pero me ha parecido menos intuitivo la configuración inicial del workflow.
- _circleci_ ❤️: Sistema gratuito para proyectos públicos y ofrecido como SaaS, se puede autentificar directamente como aplicación de github (lo que le da acceso a github checks api) a nivel de organización, por tanto es muy cómodo integrarlo correctamente con github para validaciones en PR's y demás.
- _github-actions_ ❤️: Sistema gratuito para proyectos públicos y ofrecido como SaaS, como lo proporciona github, está totalmente ingtegrado con github checks api

Ambos sistemas elegidos están muy extendidos y por tanto tienen una gran comunidad detrás así como documentación sobre como realizar cualquiera de las tareas requeridas.
