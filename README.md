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

# Datos y funcionamiento del api


### Rutas para la tabla cliente


###### Ruta 1
- Method = GET
http://127.121.12.10:9110/Cliente

- Esta ruta me lista todos los de clientes en la base de datos


###### Ruta 2
- Method = GET
http://127.121.12.10:9110/Cliente/espesifico/SAL-123

- Esta ruta me lista los clientes con el DNI específico

###### Ruta 3
- Method = GET
http://127.121.12.10:9110/Cliente/alquiler

- Esta ruta me obtiene los datos de los clientes que realizaron al menos un
alquiler.


###### Ruta 4
- Method = GET
http://127.121.12.10:9110/Cliente/reserva

- Esta ruta me obtiene los datos del cliente que realizó la reserva con un
Automovil espesifico

### Rutas para la tabla Automoviles 
###### Ruta 1
  - Method: GET
  http://127.121.12.10:9110/Automoviles/disponibles

- Esta ruta me obtiene todos los automóviles disponibles para alquiler.

###### Ruta 2
- Method = GET
http://127.121.12.10:9110/Automoviles/sucursal

- Esta ruta me obtiene la cantidad total de automóviles disponibles en cada
sucursal

###### Ruta 3
- Method = GET
http://127.121.12.10:9110/Automoviles/capacidad

- Esta ruta me obtiene todos los automóviles con una capacidad mayor a 5
personas.

###### Ruta 4
- Method = GET
http://127.121.12.10:9110/Automoviles/orden

- Esta ruta me obtiene todos los automóviles ordenados por marca y modelo.


###### Ruta 5
- Method = GET
http://127.121.12.10:9110/Automoviles/total

- Esta ruta me obtiene la cantidad total de automóviles en cada sucursal junto
con su dirección


###### Ruta 6
- Method = GET
http://127.121.12.10:9110/Automoviles/capadisponibles

- Esta ruta me obtiene los automóviles con capacidad igual a 5 personas y que
estén disponibles.

### Rutas para la tabla Alquiler 
###### Ruta 1
  - Method: GET
  http://127.121.12.10:9110/Alquiler

- Esta ruta me obtiene todos los alquileres activos junto con los datos de los 
clientes relacionados. 

###### Ruta 2
  - Method: GET
  http://127.121.12.10:9110/Alquiler/uno/:id

- Esta ruta me obtiene los detalles del alquiler con el ID_Alquiler específico. 
``Nota:`` Se debe pasar el id del alquiler reemplazando a :id

###### Ruta 3
  - Method: GET
  http://127.121.12.10:9110/Alquiler/costo/:id

- Esta ruta me obtiene el costo total de un alquiler específico.  
``Nota:`` Se debe pasar el id del alquiler reemplazando a :id


###### Ruta 4
  - Method: GET
  http://127.121.12.10:9110/Alquiler/fecha

- Esta ruta me obtiene los detalles del alquiler que tiene fecha de inicio en
 '2023-07-05'.

###### Ruta 5
- Method: GET
http://127.121.12.10:9110/Alquiler/total

- Esta ruta me obtiene la cantidad total de alquileres registrados en la base de
datos.

###### Ruta 6
- Method: GET
http://127.121.12.10:9110/Alquiler/intervalo

- Esta ruta me obtiene los alquileres con fecha de inicio entre '2023-07-05' y
'2023-07-10'


### Rutas para la tabla Reserva 
###### Ruta 1
  - Method: GET
  http://127.121.12.10:9110/Alquiler

- Esta ruta me obtiene todas las reservas pendientes con los datos del cliente
y el automóvil reservado.

###### Ruta 2
  - Method: GET
  http://127.121.12.10:9110/Alquiler/pendientes/:id

- Esta ruta me obtiene el costo total de un alquiler específico.  
``Nota:`` Se debe pasar el id del reserva reemplazando a :id

### Rutas para la tabla Reserva 
###### Ruta 1
  - Method: GET
  http://127.121.12.10:9110/Empleados

- Esta ruta me Lista los empleados con el cargo de "Vendedor".

###### Ruta 2
  - Method: GET
  http://127.121.12.10:9110/Empleados/cargo

- Esta ruta me Lista los empleados con cargo de "Gerente" o "Asistente"





