# [IV-22-23] Antonio Ramón Sánchez Morales

## Documentación sobre la implementación
 - [Historias de usuario](docs/1-user-stories.md)
 - [Milestones](docs/2-milestones.md)

## Problemas planteados

Tengo conocimiento personal de un problema que se plantea en las empresas donde existe una cadena de producción en la que cada uno de los operarios se encarga de unas determinadas operaciones.

_Determinar si hay un cuello de botella en la producción._
Es importante conocer el estado de fabricación de los distintos productos en una orden de fabricación, de este modo, la empresa puede tener capacidad de respuesta ante cuellos de botella en una operación concreta, por ejemplo asignando a un segundo operario en esa operación, y así tener una mayor capacidad de respuesta. Esto se soluciona por medio de la solución permitiendo la consulta de los paquetes de operaciones aún no marcadas como realizadas, así como la aplicación implementará una lógica para determinar automáticamente aquellas órdenes de fabricación no están desarrollándose a un ritmo adecuado.

Los cuellos de botella en una cadena de producción los pueden producir los operarios que se encuentran realizando las distintas operaciones, por ejemplo, si para la fabricación de un modelo de camisa hay que realizar tres operaciones (coser bolsillo, coser botones, planchar), si el operario que está cosiendo botones trabaja más lento que el resto, se estaría produciendo un cuello de botella para la realización de esa orden de fabricación.

Con la solución que se ofrece, se podrán obtener avisos cuando la realización de una operación esté tardando más que usualmente, o, cuando haya operarios que no tengan o tengan poco trabajo asignado porque requieran de operaciones previas.

Además este es un problema que tiene cualquier empresa de fabricación por lo que la arquitectura de despliegue en la nube es algo que nos permitirá extender el producto a otras empresas a un coste mucho menor.

## Objetos de negocio

- Operaciones. Define las acciones que realizan los operarios.
- Modelos. Conjunto de operaciones necesarias para la fabricación de un modelo concreto, dos modelos distintos pueden requerir de una misma operación.
- Órdenes de fabricación. Es un modelo que contiene uno o más paquetes de modelos y el número de unidades por modelo que deben de fabricarse
