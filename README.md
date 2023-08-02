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
- `localField: "ID_Alquiler":` Especifica el campo de la colección actual ("cliente") que se utilizará para la unión.
- `foreignField: "ID_Cliente":` Especifica el campo de la colección con la que estamos haciendo la unión ("alquiler") que se utilizará para la unión.
- `as: "alquiler_FK":` Este es el nombre del nuevo campo que se creará en cada documento de la colección "cliente" que contendrá los datos de la colección "alquiler" que coincidan con la unión.

