## Documentacion MongoDB
#### Aserca de MongoDB
1. ` Base de datos NoSQL`: MongoDB es una base de datos NoSQL, lo que implica que no utiliza tablas, filas y columnas como las bases de datos SQL tradicionales. En su lugar, almacena los datos en forma de documentos BSON (Binary JSON) en colecciones. Cada documento puede tener una estructura flexible y diferente de otros documentos dentro de la misma colección.

2. `Documentos y Colecciones`: En MongoDB, los datos se organizan en documentos, que son objetos BSON que contienen pares clave-valor. Los documentos relacionados se agrupan en colecciones, que son equivalentes a tablas en las bases de datos SQL.

3. ` Clave Primaria (_id)`: Cada documento en una colección debe tener una clave única llamada "_id", que actúa como identificador único del documento.

4. `Flexibilidad del esquema`: MongoDB es conocido por su esquema flexible, lo que significa que los documentos en una colección no necesitan tener la misma estructura. Esto permite una fácil adaptación a cambios en los requisitos de datos.

5. ` Consultas`: MongoDB admite consultas ricas y flexibles. Puedes buscar documentos utilizando criterios complejos, realizar búsquedas de texto completo y realizar consultas de agregación para obtener resultados más avanzados.

6. `Escalabilidad`: MongoDB está diseñado para escalar horizontalmente, lo que significa que puedes agregar más servidores a medida que crece la cantidad de datos y tráfico, lo que permite un manejo eficiente de grandes volúmenes de datos y cargas de trabajo.

7. `Replica Sets y Sharding`: Para lograr alta disponibilidad y rendimiento, MongoDB utiliza conjuntos de réplicas (replica sets) para la tolerancia a fallos y el sharding para la distribución de datos en clústeres.

8. `Drivers y APIs`: MongoDB ofrece una variedad de controladores (drivers) para diferentes lenguajes de programación, lo que facilita la interacción con la base de datos desde diversas plataformas.

9. `Comunidad y Soporte`: MongoDB es una base de datos de código abierto con una gran comunidad de usuarios y desarrolladores. También hay soporte comercial disponible para proyectos empresariales.

10. ` Uso común`: MongoDB es especialmente popular para aplicaciones web, aplicaciones móviles y proyectos que requieren almacenamiento de datos flexible y escalable.

#### Respuestas al ejecutar una peticion o hacer un tramite

Al insertar un dato o en mejor llamado un documento en mongoDB
- En este caso ``acknowledged`` indica que los datos se han ingresado correctamente
y ``insertedId`` este ma muestra el id del documento recien creado

```json
{
  "acknowledged": true,
  "insertedId": ObjectId("64c805b0b84939118b414073")
}
```
- Actualizacion de un documento o dato `matchedCount` muestra la cantidad de documentos que coincidieron con los criterios de búsqueda y `modifiedCount` muestra la cantidad de documentos que se actualizaron.

```json 
{
  "acknowledged": true,
  "matchedCount": 1,
  "modifiedCount": 1
}
```
##### Comparacion grafica
- Esta es una comparacion entre mongoDB(Que es un sistema no relacional) y SQL(Sistema relacional)

```md 
 MongoDB                |    SQL (Base de datos relacional)
--------------------------------------------------------------
  Colecciones           |    Tablas
    |                   |      |
 Documentos (BSON)      |      | Filas (Registros)
    |                   |      |   |
 Campos (Clave-Valor)   |      |   | Columnas (Atributos)
```

#### Consultas en mongoDB Multitablas

```json
use("db_campus_alquiler");
db.getCollection('cliente').aggregate([
    {
        $lookup:{
            from:"alquiler",
            localField:"_id",
            foreignField:"ID_Cliente",
            as:"alquiler_FK"
        }
    }
])
```


$lookup parámetros:

- `from: "alquiler":` Especifica la colección con la que queremos realizar la unión, en este caso, "alquiler".
- `localField: "ID_Alquiler":` Especifica el campo de la coleccion actual ("cliente") que se utilizará para la unión.
- `foreignField: "ID_Cliente":` Especifica el campo de la coleccion con la que estamos haciendo la unión ("alquiler") que se utilizará para la unión.
- `as: "alquiler_FK":` Este es el nombre del nuevo campo que se creará en cada documento de la colección "cliente" que contendrá los datos de la coleccion "alquiler" que coincidan con la unión.

#### Operadores en MongoDB

- `$lt:` Less Than - Busca documentos donde el valor de un campo sea menor que el valor especificado.
- `$gte:` Greater Than or Equal - Busca documentos donde el valor de un campo sea mayor o igual al valor especificado.
- `$lte:` Less Than or Equal - Busca documentos donde el valor de un campo sea menor o igual al valor especificado.
- `$eq:` Equal - Busca documentos donde el valor de un campo sea igual al valor especificado.
- `$ne:` Not Equal - Busca documentos donde el valor de un campo no sea igual al valor especificado.

#### Metodos de ordenamiento

- `sort:` .sort({ "Marca": 1, "Modelo": 1 }): Agrega el método sort para ordenar los resultados. En este caso, los automóviles se ordenarán de forma ascendente (1) según el campo "Marca" y, en caso de empate, se ordenarán por el campo "Modelo" también de forma ascendente.

- `sort:`  Ordena los documentos en función de uno o más campos en orden ascendente (1) o descendente (-1).
- `limit:`  Limita la cantidad de documentos que se devuelven en la consulta.
- `skip:`  Omite una cantidad específica de documentos en los resultados de la consulta.
- `count:`  Devuelve el número total de documentos que cumplen con los criterios de la consulta.
- `countDocuments:` Me cuenta la cantidad de documentos que cumplen con una condicion
- `distinct:`  Encuentra valores únicos para un campo específico en la colección.
- `aggregate:`  Permite realizar operaciones de agregación más avanzadas, como $group, $match, $project, etc.
- `find:`  Recupera documentos que coinciden con los criterios de consulta especificados.
- `findOne:`  Recupera el primer documento que cumpla con los criterios de consulta especificados.
- `deleteOne  y deleteMany:` Eliminan uno o varios documentos que cumplan con los criterios de consulta.
- `updateOne  y updateMany:` Actualizan uno o varios documentos que cumplan con los criterios de consulta.

## Que se hace en este proyecto?

- En este mini proyecto hacemos un menejo de una base de datos de mongodb, hacienlo la conexion algunas consultas.

### Librerias usadas


```json
{
  "name": "node_mongo",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "type": "module",
  "scripts": {
    "dev": "nodemon ./app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "body-parser": "1.20.2",
    "class-transformer": "0.5.1",
    "class-validator": "0.14.0",
    "dotenv": "16.3.1",
    "express": "4.18.2",
    "express-rate-limit": "6.8.1",
    "mongodb": "5.7.0",
    "mysql2": "3.5.1",
    "nodemon": "3.0.1",
    "reflect-metadata": "0.1.13",
    "typescript": "5.1.6"
  }
}
```

#### Explicacion de cada una de estas librerias usadas y para que sirven 

cada una se puede instalar de la siguiente forma
``` 
 npm -i -E -E _NombreLibreria
 ```

`body-parser`: Esta biblioteca se utiliza para analizar los cuerpos de las solicitudes HTTP entrantes. Es especialmente útil para obtener datos enviados desde formularios o en formato JSON y convertirlos en objetos JavaScript utilizables.

`class-transformer`: Esta biblioteca ayuda a transformar objetos JavaScript en instancias de clases personalizadas y viceversa. Puede ser útil para validar y manipular datos en tu aplicación.

`class-validator`: Se usa junto con class-transformer para validar los objetos transformados en instancias de clases personalizadas. Permite definir reglas de validación en las clases, como campos requeridos o formatos específicos.

`dotenv`: Esta biblioteca carga variables de entorno desde un archivo .env, lo que es útil para almacenar configuraciones sensibles o ajustes específicos de la aplicación fuera del código fuente.

`express`: Express es un framework web para Node.js que simplifica la creación de aplicaciones web y APIs. Proporciona una capa de abstracción sobre HTTP y ofrece herramientas para manejar rutas, middleware y solicitudes HTTP.

`express-rate-limit`: Esta biblioteca permite establecer límites en las solicitudes entrantes a tu servidor Express. Puede ser útil para prevenir ataques de fuerza bruta o abusos.

`mongodb`: MongoDB es una base de datos NoSQL que se utiliza para almacenar datos en formato JSON-like (BSON). La biblioteca proporciona métodos para interactuar con la base de datos MongoDB desde Node.js.

`mysql2`: mysql2 es un controlador de MySQL para Node.js. Permite conectarse a bases de datos MySQL, ejecutar consultas y gestionar los resultados.

`nodemon`: Nodemon es una herramienta que supervisa los cambios en los archivos de tu aplicación y automáticamente reinicia el servidor cuando detecta cambios. Es útil para agilizar el proceso de desarrollo.

`reflect-metadata`: Esta biblioteca se utiliza junto con TypeScript y decoradores para habilitar la reflexión en tiempo de ejecución. Esto es útil para algunas técnicas avanzadas y para frameworks como TypeORM.

`typescript`: TypeScript es un superconjunto de JavaScript que agrega tipado estático y otras características a JavaScript. Se compila a JavaScript estándar y proporciona herramientas para escribir código más seguro y escalable.