// Variables
const rojo = document.querySelector(".rojo");
const azul = document.querySelector(".azul");
const amarillo = document.querySelector(".amarillo");
const body = document.querySelector("body");
const btn = document.getElementById("boton");

// Eventos
rojo.addEventListener("click", () => {
  body.style.backgroundColor = "#f00";
});

azul.addEventListener("click", () => {
  body.style.backgroundColor = "#00f";
});

amarillo.addEventListener("click", () => {
  body.style.backgroundColor = "#ff0";
});

boton.addEventListener("click", () => {
  body.style.backgroundColor = "#66bb6a";
});
