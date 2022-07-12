const toggleMovil = document.getElementById("toggleMovil");
const navegador = document.getElementById("navegador");
const hamburger = document.getElementById("hamburger");

toggleMovil.addEventListener("click", () => {
  navegador.classList.toggle("navegadorShow");
  hamburger.classList.toggle("hamburgerX");
});
