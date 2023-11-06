// Variables
const caja = document.querySelector(".textarea");

const contador = document.getElementById("contador");

// Evento

caja.addEventListener("input", (e) => {
  const target = e.target;
  const longitudMaxima = target.getAttribute("maxlength");
  const logitudActualizada = target.value.length;
  contador.innerHTML = `${logitudActualizada}/${longitudMaxima}`;
});
