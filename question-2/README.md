# Enunciado 2

> En la carpeta [question-2](https://bitbucket.org/vestua-com/questions/src/main/question-2/) se ha exportado eventos de navegación de usuarios anonimizados de la plataforma Vestuá. Se le pide al equipo de Ingeniería que hagan un análisis sobre los datos de navegación. En particular se solicita:
>
> - Calcular la cantidad de visitas únicas por cada producto.
> - Calcular la cantidad de clicks únicos por cada producto.
> - Calular el CTR (*Clickthrough Rate*) de cada producto.
> 
> El set de datos contiene la siguiente estructura:
> 
> - `user`: id del usuario que ejecutó el evento.
> - `entityId`: id de la entidad al que el usuario ejecutó el evento.
> - `entityType`: tipo de entidad al que se ejecutó el evento.
> - `eventType`: tipo de evento. Puede ser `impression` o `click`.
> 
> Como miembro del equipo de ingeniería, te solicitan modificar el archivo [script.js](https://bitbucket.org/vestua-com/questions/src/main/question-2/script.js) para que pueda leer el set de datos y generar un archivo `output.csv` con las siguientes columnas:
> 
> - `productId`: id del producto.
> - `clicks`: cantidad de *clicks* únicos que tiene el producto
> - `impressions`: cantidad de impresiones únicas que tiene el producto.
> - `ctr`: métrica CTR del producto.

# Razonamiento

_Para resolver este problema, se ha considerado los siguientes puntos:
 - Cuando un usuario realiza el evento 'click', como mínimo, hay una visita realizada por el usuario.
 - La métrica 'ctr' es equivalente a la división de la cantidad de clicks únicos entre la cantidad de visitas únicas.
 - El manejo de los datos del archivo .csv se hizo a través de un array de cadenas, de tal manera que la ubicación del elemento que se requiera, se maneje con el índice del bucle que recorra al array.
 
 Sobre el algoritmo:
  Se propuso resolver el problema haciendo uso de una **tabla hash**, en el cual está representada de la siguiente forma:
   **{ clave : valor } => { productId : { users, visitasUnicas, clicksUnicos } }**, donde:
    -productId: Es el id del producto
    -users: Es una tabla hash que contiene los usuarios correspondientes a cada producto **{ user : user }**
    -visitasUnicas: Es la cantidad de visitas únicas por cada producto._
    -clicksUnicos: Es la cantidad de clicks únicos por cada producto.
    
  - En cada iteración, validamos la existencia del producto en el hash. Si no existe, creamos el objeto {clave:valor} para el producto, siguiendo la estructura mencionada anteriormente; así como también el objeto para el usuario, de esta manera almacenamos en el campo de usuarios **(users)** cada objeto usuario que corresponde al producto.
  - Si existe el producto, verificamos que no exista el mismo usuario en el producto, de esta forma garantizamos la unicidad. Luego de ello, almacenamos este nuevo usuario en el hash de usuarios, para así actualizar el campo 'users' del objeto producto.
  - Comparamos el valor del evento (impression o click) del registro correspondiente, y según el valor que se tenga, se aumentará en una unidad el valor del campo 'visitasUnicas' o 'clicksUnicos', según corresponda en la condición.
  - Ya obtenidos los valores finales de las visitas únicas o los clicks únicos por cada producto, iteramos el hash de productos, y en cada iteración, calculamos el 'ctr' por cada producto.
  - Finalmente, damos el formato deseado concatenando cada registro en forma de cadena, para así guardar en un archivo.
   _