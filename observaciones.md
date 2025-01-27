# Comentarios Generales

Meli, qué lindo trabajo!! Me gusta que te la jugaste por darle tu estilo con mucho color!! 💕

En cuanto al Responsive, los menues de _Imagen_ y _Texto_ no se ven en *mobile*, por lo que no se puede usar el generador de memes. En tablet y pantallas mas grandes sí se ven. Además, fijate que al entrar al sitio, se muestran ambos menúes (uno arriba y el otro debajo a continuación), parecen uno sólo y genera un scroll vertical. Pero cuando haces click en los botones de `imagen` o `texto` se muestra uno solo y parece "cortado" porque no cubre el alto de la pantalla. Aún así, el sitio FUNCIONA! 💪

En cuanto al código, algunas pequeñas observaciones:

* HTML:
  * En la línea 34 quisiste incluir un favicon, lo cual me puso contenta, pero el favicon no se ve en la web, porque la ruta es incorrecta y no tenes el archivo en ninguna parte del proyecto. La carpeta que tenes creada se llama `img` y tiene dentro sólo una captura de pantalla.
  * En el documento tenes varias estructuras de código comentado. Recordá que si no se utiliza, mejor eliminarlo para no tener código innecesario. Todos los comentarios de código que no tengan función deben ser removidos antes de entregar un trabajo final.

* En el CSS:  
  * Qué bueno que incluiste variables! Estan muy bien implementadas, Congrats!
  * En la línea 220 tenes una clase que no se está aplicando: `.aside_imagen .aside_texto`. Esas dos clases con un espacio lo que significan es que se van a aplicar a los elementos con la clase `.aside_texto` que sea descendiente del elemento con la clase `.aside_imagen`. Por lo que esos estilos no se están aplicando. De hecho, si se aplicaran, al renderizar la página, no verías ninguno de los dos meníes. De todos modos, ojo con el `height=100%` que sólo tiene sentido si el contenedor padre de los aside tiene una medida absoluta (que no la tiene!). En su caso, para tal fin te conviene usar una medida relativa (100vh por ejemplo).  
  * Hay unos cuantos estilados sobre TAGS HTML. Recordá que hablamos mucho en clase que esta es una práctica muy desaconsejada que puede traer muchos dolores de cabeza. Mi recomendación siempre es que estilen utilizando clases, y según el caso, algún ID. 
  * Tenes mucho código comentado. Está bien durante el desarrollo, pero para la entrega es importante eliminar todo código que no tiene una función específica en uso.

* En el JS:
  * En la línea 227, declaras una variable `let` para asignar un elemento del *DOM*. *OJO!* Porque esa relación no cambia aunque cambie el contenido dentro del contenedor. Para declarar elementos del DOM siempre usamos `const` para evitar que alguien por error sobreescriba la variable y ya no estemos llamando a ese elemento.
  * Otra vez código comentado jaja... Lamento ser reiterativa pero es importante, los segmentos de código que comentamos mientras codeamos, tenemos que asegurarnos que no queden en la entrega final.

* En el README:
  * Muy bueno!!! Bien usados los estilos de markdown, y espectaculares todas las explicaciones y detalles!

Meli, ¡Excelente trabajo! ¡A seguir aprendiendo! 💪

## Nota final: 8 (ocho)

### Nota desagregada:

- **Menos de 6 (No aprobado)**
- **6 (Aprobado)**
    ✅ Respeta la consigna
    ✅ Estructura correcta de documento HTML
    ✅ Respeta el diseño dado
    ✅ Respeta el funcionamiento
    ❌* Responsive funciona correctamente
- **7 (Bueno)**
    ✅ Buena estructura de proyecto
    ✅ Código bien indentado
    ✅* Comentarios que permiten mejorar la legibilidad del código
- **8 (Muy bueno)**
    ✅ Uso correcto de etiquetas semánticas
    ❌ Buenos nombres de clases
    ✅ Buenos nombres de funciones y variables
- **9 (Muy bueno)**
    ✅ Reutilización de estilos
    ✅ Funciones pequeñas
- **10 (Excelente)**
    ✅ Cumple con las condiciones de accesibilidad avanzada
    ❌ Reutilización de lógica / funciones
    ✅ Commits con mensajes adecuados

❌ ✅