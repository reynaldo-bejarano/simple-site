const toggleMovil = document.getElementById("toggleMovil");
const navegador = document.getElementById("navegador");
const hamburger = document.getElementById("hamburger");
const navItem = document.querySelectorAll(".nav__item");

toggleMovil.addEventListener("click", () => {
  navegador.classList.toggle("navegadorShow");
  hamburger.classList.toggle("hamburgerX");
});

navItem.forEach((item) =>
  item.addEventListener("click", () => {
    navegador.classList.toggle("navegadorShow");
    hamburger.classList.toggle("hamburgerX");
  })
);
