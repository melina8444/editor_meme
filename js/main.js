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

// FONDO
