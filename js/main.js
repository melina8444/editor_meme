const boton_imagen = document.getElementById("boton_imagen");
const boton_texto = document.getElementById("boton_texto");
const boton_modo = document.getElementById("boton_modo");
const header = document.getElementById("mi_header");
let aside_texto = document.getElementById("aside_texto");
let aside_imagen = document.getElementById("aside_imagen");
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
    document.body.style.color = "white";
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
    header.style.backgroundColor = "#7b6d99";
    aside_texto.style.backgroundColor = "rgb(40, 41, 53)";
    aside_imagen.style.backgroundColor = "rgb(40, 41, 53)";
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
    console.log("tocaste btn izq")
  h2_texto_superior.style.textAlign = "left";
  h2_texto_inferior.style.textAlign = "left";
});


btn_alinear_derecha.addEventListener("click", () => {
    console.log("tocaste btn der")
  h2_texto_superior.style.textAlign = "right";
  h2_texto_inferior.style.textAlign = "right";
});


btn_alinear_center.addEventListener("click", () => {
    console.log("tocaste btn centro")
  h2_texto_superior.style.textAlign = "center";
  h2_texto_inferior.style.textAlign = "center";
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
const fondo_principal = document.getElementById("fondo_principal");
fondo_transparente.addEventListener("input", () => {
  if (fondo_transparente.checked) {
    console.log("entro al if");
    fondo_principal.style.backgroundColor = "transparent";
    h2_texto_superior.style.backgroundColor = "transparent";
    h2_texto_inferior.style.backgroundColor = "transparent";
  } else {
    console.log("entro al 2 if");

    fondo_principal.style.backgroundColor = "white";
    h2_texto_superior.style.backgroundColor = fondo_principal;
    h2_texto_inferior.style.backgroundColor = fondo_principal;
  }
});

// CONTORNO
const btn_sin_contorno = document.getElementById("btn_sin_contorno");
btn_sin_contorno.addEventListener("click", () => {
  h2_texto_superior.style.textShadow = "0 0 transparent";
  h2_texto_inferior.style.textShadow = "0 0 transparent";
});
