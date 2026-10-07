# Laboratorio metodos constructores en js
## Pregunta analitica 1: ¿ Qué ventaja técnica tiene crear un molde (función constructora) en lugar de escribir un objeto literal estructurado individualmente para cada computador? 
* Respuesta : La ventaja se encuentra en la optimizacion, y preguntarnos, vamos a necesitar varios computadores con los mismo atributos(caracteristicas) y metodos(acciones)? Si la respuesta es si, entonces conviene mucho crear un molde para hacer reutilizable la funcion.
## Pregunta analitica 2: ¿ Por qué un método interno puede acceder de manera precisa y aislada a las propiedades específicas de su propio objeto utilizando la palabra clave this?
* Respuesta: Podemos hacer de cuenta que this es como un puntero generico para cada atributo del objeto en si, entonces, de esta manera podemos acceder sin hacer más específiaciones.
## Pregunta analiica 3: ¿ Qué ventajas a nivel de cohesión de software presenta el hecho de que el objeto conozca por si mismo su estado lógico (si aprobó o no)?
* Respuesta : Todo queda mas agrupado al calcular adentro del objeto, esto aumenta la cohesion, evita duplicar la logica en otro codigo por ejemplo y facilita el mantenimiento
## Pregunta analitica 4: ¿Qué ocurriría si el libro ya estaba prestado y alguien intenta prestarlo nuevamente sin controles de estado internos?
* Respuesta : Aparaceria como true ya que no se tiene en cuenta el valor logico del libro prestado, entonces es muy complicado saber si la persona que esta intentando tomar el libro prestado sabe si ya lo esta, no hay una forma de saberlo.
