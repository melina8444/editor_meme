const boton_imagen = document.getElementById("boton_imagen");
const boton_texto = document.getElementById("boton_texto");
const boton_modo = document.getElementById("boton_modo");
const header = document.getElementById("mi_header");
let aside_texto = document.getElementById("aside_texto");
let aside_imagen = document.getElementById("aside_imagen");
const autor = document.getElementById("autor")
const h2_texto_superior = document.getElementById("h2_texto_superior");
const h2_texto_inferior = document.getElementById("h2_texto_inferior");
const texto_superior_input = document.getElementById("texto_superior_input");
const texto_inferior_input = document.getElementById("texto_inferior_input");

// BOTONES
boton_imagen.addEventListener("click", () => {
  aside_texto.style.display = "none";
  aside_imagen.style.display = "block";
});

boton_texto.addEventListener("click", () => {
  aside_texto.style.display = "block";
  aside_imagen.style.display = "none";
});

let cambioModo = "Modo claro";
boton_modo.addEventListener("click", () => {
  if (cambioModo === "Modo oscuro") {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "black";
    header.style.backgroundColor = "#7b6d99";
    h2_texto_superior.style.color = "black";
    h2_texto_superior.style.color = "black";
    aside_texto.style.backgroundColor = "rgb(171, 172, 174)";
    aside_imagen.style.backgroundColor = "rgb(171, 172, 174)";
    boton_modo.textContent = cambioModo;
    cambioModo = "Modo claro";
  } else if (cambioModo === "Modo claro") {
    document.body.style.backgroundColor = "#75777e89";
    document.body.style.color = "#fff";
    header.style.backgroundColor = "#4614de";
    aside_texto.style.backgroundColor = "rgb(40, 41, 53)";
    aside_imagen.style.backgroundColor = "rgb(40, 41, 53)";
    h2_texto_superior.style.color = "black";
    h2_texto_superior.style.color = "black";
    autor.style.color = "white";

    boton_modo.textContent = cambioModo;
    cambioModo = "Modo oscuro";
  }
});

// bootom text
texto_superior_input.addEventListener("keyup", () => {
  h2_texto_superior.textContent = texto_superior_input.value;
});

texto_inferior_input.addEventListener("keyup", () => {
  h2_texto_inferior.textContent = texto_inferior_input.value;
});

/*CHECKBOX SUPERIOR E INFERIOR*/
const sin_texto_superior = document.getElementById("sin_texto_superior");
const sin_texto_inferior = document.getElementById("sin_texto_inferior");

sin_texto_superior.addEventListener("change", sinTextoSup);
sin_texto_inferior.addEventListener("change", sinTextoInf);

function sinTextoSup() {
  if (h2_texto_superior.style.visibility === "hidden") {
    h2_texto_superior.style.visibility = "visible";
  } else {
    h2_texto_superior.style.visibility = "hidden";
  }
}

function sinTextoInf() {
  if (h2_texto_inferior.style.visibility === "hidden") {
    h2_texto_inferior.style.visibility = "visible";
  } else {
    h2_texto_inferior.style.visibility = "hidden";
  }
}

// IMAGEN URL

const imagen_div = document.getElementById("imagen_div");
const imagen_url_input = document.getElementById("imagen_url_input");

imagen_url_input.addEventListener("input", () => {
  imagen_div.style.backgroundImage = `url("${imagen_url_input.value}")`;
  imagen_div.style.backgroundSize = "cover";
  imagen_div.style.backgroundPosition = "center";
  imagen_div.style.backgroundRepeat = "no-repeat";
  imagen_url_input.value = "";
});

// BOTON DESCARGAR IMAGEN
const btn_download = document.getElementById('btn_download');

function descargarImagen () {
  domtoimage.toBlob(document.getElementById('contenedor_principal'))
      .then(function (blob) {
          window.saveAs(blob, 'meme.png');
      });
}

btn_download.addEventListener('click', descargarImagen);



// FUENTES
const tipo_fuente = document.getElementById("tipo_fuente");

tipo_fuente.addEventListener("change", () => {
  if (tipo_fuente.value === "arial") {
    h2_texto_superior.style.fontFamily = "Arial";
    h2_texto_inferior.style.fontFamily = "Arial";
  } else if (tipo_fuente.value === "arialblack") {
    h2_texto_superior.style.fontFamily = "Arial black";
    h2_texto_inferior.style.fontFamily = "Arial black";
  } else if (tipo_fuente.value === "americantypewrite") {
    h2_texto_superior.style.fontFamily = "American Typewriter";
    h2_texto_inferior.style.fontFamily = "American Typewriter";
  } else if (tipo_fuente.value === "andalemono") {
    h2_texto_superior.style.fontFamily = "andalemono";
    h2_texto_inferior.style.fontFamily = "andalemono";
  } else if (tipo_fuente.value === "comicSans") {
    h2_texto_superior.style.fontFamily = "Comic Sans MS";
    h2_texto_inferior.style.fontFamily = "Comic Sans MS";
  } else if (tipo_fuente.value === "helvetica") {
    h2_texto_superior.style.fontFamily = "helvetica";
    h2_texto_inferior.style.fontFamily = "helvetica";
  } else if (tipo_fuente.value === "impact") {
    h2_texto_superior.style.fontFamily = "impact";
    h2_texto_inferior.style.fontFamily = "impact";
  } else if (tipo_fuente.value === "verdana") {
    h2_texto_superior.style.fontFamily = "verdana";
    h2_texto_inferior.style.fontFamily = "verdana";
  } else if (tipo_fuente.value === "timesnewroman") {
    h2_texto_superior.style.fontFamily = "Times New Roman";
    h2_texto_inferior.style.fontFamily = "Times New Roman";
  }
});

// TAMAÑO FUENTES
const tamanio_fuente = document.getElementById("tamanio_fuente");

tamanio_fuente.addEventListener("change", () => {
  h2_texto_superior.style.fontSize = `${tamanio_fuente.value}px`;
  h2_texto_inferior.style.fontSize = `${tamanio_fuente.value}px`;
});

//   ALINEAR TEXTO

// Izquierda
const btn_alinear_izquierda = document.getElementById("btn_alinear_izquierda");
const btn_alinear_derecha = document.getElementById("btn_alinear_derecha");
const btn_alinear_center = document.getElementById("btn_alinear_center");

btn_alinear_izquierda.addEventListener("click", () => {
  h2_texto_superior.style.textAlign = 'left';
  h2_texto_inferior.style.textAlign = 'left';
});

// Derecha
btn_alinear_derecha.addEventListener("click", () => {
  h2_texto_superior.style.textAlign = 'right';
  h2_texto_inferior.style.textAlign = 'right';
});

// Centrado
btn_alinear_center.addEventListener("click", () => {
  h2_texto_superior.style.textAlign = 'center';
  h2_texto_inferior.style.textAlign = 'center';
});


// COLOR
const colorTexto = document.getElementById("colorTexto");

colorTexto.addEventListener("input", () => {
  h2_texto_superior.style.color = colorTexto.value;
  h2_texto_inferior.style.color = colorTexto.value;
});

//  FONDO

const color_fondo_texto = document.getElementById("color_fondo_texto");

color_fondo_texto.addEventListener("input", () => {
  h2_texto_superior.style.backgroundColor = color_fondo_texto.value;
  h2_texto_inferior.style.backgroundColor = color_fondo_texto.value;
});

// FONDO TRANPARENTE

const fondo_transparente = document.getElementById("fondo_transparente");
let contenedor_principal = document.getElementById("contenedor_principal");
fondo_transparente.addEventListener("input", () => {
  if (fondo_transparente.checked) {
    console.log("entro al if");
    contenedor_principal.style.backgroundColor = "transparent";
    h2_texto_superior.style.backgroundColor = "transparent";
    h2_texto_inferior.style.backgroundColor = "transparent";
  } else {
    console.log("entro al 2 if");

    contenedor_principal.style.backgroundColor = "white";
    h2_texto_superior.style.backgroundColor = contenedor_principal;
    h2_texto_inferior.style.backgroundColor = contenedor_principal;
  }
});

// CONTORNO
const btn_sin_contorno = document.getElementById("btn_sin_contorno");
btn_sin_contorno.addEventListener("click", () => {
  h2_texto_superior.style.textShadow = "0 0 transparent";
  h2_texto_inferior.style.textShadow = "0 0 transparent";
});



// COLOR FONDO IMAGEN
const color_fondo_imagen = document.getElementById("color_fondo_imagen");

color_fondo_imagen.addEventListener("click", ()=>{
    imagen_div.style.backgroundColor = color_fondo_imagen.value;
})

// EFECTO FONDO IMAGEN
const efecto_fondo_imagen = document.getElementById("efecto_fondo_imagen");

efecto_fondo_imagen.addEventListener("click", ()=>{
    if(efecto_fondo_imagen.value === 'ninguno'){
        imagen_div.style.backgroundBlendMode ='normal'
    }
    if(efecto_fondo_imagen.value === 'aclarar'){
        imagen_div.style.backgroundBlendMode ='lighten'
    }
    if(efecto_fondo_imagen.value === 'oscurecer'){
        imagen_div.style.backgroundBlendMode ='darken'
    }
    if(efecto_fondo_imagen.value === 'diferencia'){
        imagen_div.style.backgroundBlendMode ='difference'
    }
    if(efecto_fondo_imagen.value === 'iluminosidad'){
        imagen_div.style.backgroundBlendMode ='luminosity'
    }
    if(efecto_fondo_imagen.value === 'multiplicar'){
        imagen_div.style.backgroundBlendMode ='multiply'
    }
})

/*Efectos de filtros de la imágen*/
brillo.addEventListener('change', modificarFiltros);
opacidad.addEventListener('change', modificarFiltros);
contraste.addEventListener('change', modificarFiltros);
desenfoque.addEventListener('change', modificarFiltros);
escala_de_grises.addEventListener('change', modificarFiltros);
sepia.addEventListener('change', modificarFiltros);
hue.addEventListener('change', modificarFiltros);
saturado.addEventListener('change', modificarFiltros);
negativo.addEventListener('change', modificarFiltros);

function modificarFiltros(){
    let filtro ='';

    if (brillo.value !== '1'){
        filtro += `brightness(${brillo.value}) `;
}
    if (opacidad.value !== '1'){
        filtro += `opacity(${opacidad.value}) `;
}
    if (contraste.value !== '100'){
        filtro += `contrast(${contraste.value}%) `;
}
    if (desenfoque.value !== '0'){
        filtro += `blur(${desenfoque.value}px) `;
}
    if (escala_de_grises.value !== '0'){
        filtro += `grayscale(${escala_de_grises.value}%) `;
}
    if (sepia.value !== '0'){
        filtro += `sepia(${sepia.value}%) `;
}
    if (hue.value !== '0'){
        filtro += `hue-rotate(${hue.value}deg) `;
}
    if (saturado.value !== '100'){
        filtro += `saturate(${saturado.value}%) `;
}
    if (negativo.value !== '0'){
        filtro += `invert(${negativo.value})`;
}
    imagen_div.style.filter = filtro.trim();
};

// REESTABLECER FILTROS
const btn_restablecer_filtros = document.getElementById("btn_restablecer_filtros")

btn_restablecer_filtros.addEventListener('click', ()=> {

    brillo.value = '1';
    opacidad.value = '1';
    contraste.value = '100';
    desenfoque.value = '0';
    escala_de_grises.value = '0';
    sepia.value = '0';
    hue.value = '0';
    saturado.value = '100';
    negativo.value = '0';
    modificarFiltros();
});


