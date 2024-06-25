# Editor de Memes

Este proyecto es un sencillo editor de memes creado utilizando HTML, CSS y JavaScript. Permite a los usuarios cargar imágenes, agregar texto y personalizar el diseño de sus memes.

## Características

- Cargar imágenes desde tu computadora.
- Añadir texto en la parte superior e inferior de la imagen.
- Personalizar el estilo del texto (color, tamaño, fuente).
- Descargar el meme creado como una imagen.

## Capturas de Pantalla

![Captura de pantalla](../editor_meme/img/captura.png)

## Uso

1. Clona este repositorio en tu máquina local.
    ```bash
    git clone https://github.com/melina8444/editor_meme.git
    ```
2. Navega a la carpeta del proyecto.
    ```bash
    cd editor_meme
    ```
3. Abre el archivo `index.html` en tu navegador web preferido.

## Estructura del Proyecto
editor-de-memes/
│
├── css/
│ └── styles.css # Estilos CSS para el editor de memes
│
├── js/
│ └── script.js # Lógica JavaScript para la funcionalidad del editor
│
├── images/
│ └── ... # (Opcional) Carpeta para imágenes de muestra o recursos
│
├── index.html # Página principal del editor de memes
├── README.md # Este archivo
└── ...

## Tecnologías Utilizadas

- HTML5
- CSS3
    - FLEX
- JavaScript
    - Funciones flechas / Arrow Function
    - DOM
    <!-- - IF -->
- Etiquetas semánticas


## Funcionalidades

### Cargar Imagen

- **Descripción:** Permite al usuario seleccionar y cargar una imagen desde su dispositivo para usarla como base del meme.
- **Cómo usarlo:** Haz clic en el botón "Cargar Imagen" y selecciona una imagen desde tu computadora.
- **Detalles técnicos:** Utiliza la etiqueta `<input type="file">` en HTML para seleccionar el archivo y FileReader en JavaScript para mostrar la imagen cargada.

### Añadir Texto

- **Descripción:** El usuario puede añadir texto en la parte superior e inferior de la imagen cargada.
- **Cómo usarlo:** 
  - Ingresa el texto deseado en los campos de texto proporcionados para la parte superior e inferior.
  - El texto se actualizará en tiempo real sobre la imagen.
- **Detalles técnicos:** 
  - El texto se posiciona utilizando elementos `<div>` sobre la imagen.
  - Se actualiza dinámicamente con eventos `input` de JavaScript.

### Personalizar Estilo del Texto

- **Descripción:** Permite a los usuarios personalizar el estilo del texto, incluyendo color, tamaño y fuente.
- **Cómo usarlo:** 
  - Utiliza los controles proporcionados para cambiar el color del texto, tamaño de fuente y tipo de fuente.
  - Los cambios se aplican en tiempo real al texto sobre la imagen.
- **Detalles técnicos:** 
  - Utiliza propiedades CSS como `color`, `font-size` y `font-family`.
  - Los valores se actualizan dinámicamente con JavaScript.


### Descargar Meme

- **Descripción:** Permite a los usuarios descargar la imagen del meme con el texto personalizado.
- **Cómo usarlo:** Haz clic en el botón "Descargar Meme" para guardar la imagen editada en tu dispositivo.
- **Detalles técnicos:** 
  - Utiliza el método `toDataURL()` del canvas HTML5 para generar la imagen final.
  - Se crea un enlace de descarga dinámicamente con JavaScript.

### Previsualización en Tiempo Real

- **Descripción:** Muestra una vista previa en tiempo real de cómo se verá el meme a medida que el usuario agrega y edita el texto.
- **Cómo usarlo:** Todos los cambios en el texto y estilo se reflejan instantáneamente en la previsualización.
- **Detalles técnicos:** 
  - Utiliza eventos de JavaScript para actualizar la vista previa en tiempo real.
  - Aplica los cambios de estilo y texto directamente sobre la imagen cargada.

### Controles de Alineación de Texto

- **Descripción:** Permite al usuario alinear el texto (izquierda, centro, derecha) tanto en la parte superior como en la inferior.
- **Cómo usarlo:** Utiliza los botones de alineación proporcionados para cambiar la alineación del texto.
- **Detalles técnicos:** 
  - Utiliza propiedades CSS como `text-align`.
  - Los valores se actualizan dinámicamente con JavaScript.


## Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el proyecto, no dudes en abrir un issue o enviar un pull request.

1. Haz un fork del proyecto.
2. Crea una nueva rama con tu característica (`git checkout -b caracteristica/nueva-caracteristica`).
3. Realiza los cambios necesarios y realiza commits (`git commit -m 'Añadir nueva característica'`).
4. Empuja los cambios a la rama (`git push origin caracteristica/nueva-caracteristica`).
5. Abre un pull request.


## Contacto

- **Autor:** Melina Yangüez
- **Correo Electrónico:** melinayanguez@gmail.com
- **GitHub:** [Melina8444](https://github.com/melina8444)

---

¡Gracias por utilizar el Editor de Memes! ¡Diviértete creando memes!

