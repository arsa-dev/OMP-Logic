# [IV-22-23] Antonio Ramón Sánchez Morales

## Problemas planteados

Tengo conocimiento personal de un problema que se plantea en las empresas donde existe una cadena de producción en la que cada uno de los operarios se encarga de unas determinadas operaciones.



_Problema 1. Determinar la rentabilidad de un trabajador._
Los productos tienen un coste total, el cual se divide en un precio específico por cada una de las operaciones que se deben de realizar para fabricarlo. El precio que supone el tiempo que tarda el trabajador en realizar dicha operación nunca puede ser mayor al precio determiando de la operación, ya que si así fuera ese trabajador estaría generando pérdidas a la empresa.
Esto se soluciona por medio de la aplicación simplemente consultando las operaciones marcadas como realizadas por el operario en ese día.

_Problema 2. Determinar si hay un cuello de botella en la producción._
Es importante conocer el estado de fabricación de los distintos productos en una orden de fabricación, de este modo, la empresa puede tener capacidad de respuesta ante cuellos de botella en una operación concreta, por ejemplo asignando a un segundo operario en esa operación, y así tener una mayor capacidad de respuesta. Esto se soluciona por medio de la solución permitiendo la consulta de los paquetes de operaciones aún no marcadas como realizadas

## Objetos de negocio

- Operaciones. Define las acciones que realizan los operarios.
- Modelos. Conjunto de operaciones necesarias para la fabricación de un modelo concreto, dos modelos distintos pueden requerir de una misma operación.
- Órdenes de fabricación. Es un modelo que contiene uno o más paquetes de modelos y el número de unidades por modelo que deben de fabricarse

## Configuración inicial objetivo 0

- [Configuración claves SSH y GPG](docs/20220915_11-07-25_AR_SSH%20and%20GPG%20keys.jpg)
- [Configuración repositorio local](docs/20220915_11-10-56_AR_git-config.jpg)
