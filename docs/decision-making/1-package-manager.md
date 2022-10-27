# Elección del gestor de dependencias [#13](https://github.com/arsa-dev/OMP-Logic/issues/13)

Algunos gestores de dependencias:
- _npm_: es el gestor de paquetes (dependencias) que fue originalmente desarrollado por el proyecto Node.js, nos permite generar paquetes y compartir estos módulos entre distintos proyectos, se desarrolló junto a npmjs.com, que es el repositorio de paquetes más extendido.
- _yarn_: desarrollado por Facebook, utiliza la misma jerarquía de directorios en node_modules pero instala dependencias en paralelo brindando una velocidad un poco mayor.
- _pnpm_: trata de simplificar el proceso de instalación de paquetes en las aplicaciones, de este modo se consiguen instalaciones mucho más rápidas y un gran ahorro de disco mediante el uso de hardlinks y softlinks. Además este gestor de paquetes no utiliza la misma jerarquía de directorios que npm y yarn, lo que simplica el proces de importación de dependencias en paquetes.
- ❤️ _bun_: este gestor de paquetes está muy enfocado en la velocidad, también por medio de uso de hardlinks y softlinks, así como de uso de ficheros binarios para el fichero lock, lo que aporta mayor velocidad en la serialización y deserialización. Se elige bun ya que es más rápido en benchmarks y además ya se ha elegido como runtime para node.

Todos estos gestores de dependencias nacen partiendo de la definición de paquete y dependencias (fichero package.json) que inicalmente implementa npm. Por ello todos funcionan a través de este paquete inicial aunque luego muestran comportamientos distintos en cuanto al fichero lock, y gestionan de forma distinta la instalación de dependencias.
