
const boton = document.querySelector("#boton");
const texto = document.querySelector("#texto");
const raton = document.querySelector("#raton");
const hamburguesa = document.querySelector(".btn-hamburguesa");
const nav = document.querySelector("nav");

boton.addEventListener("click", cambiarTexto);
raton.addEventListener("mouseover", cambiarColor);

function cambiarTexto() {
  texto.textContent = "Texto cambiado";
}

function cambiarColor() {
  raton.style.color = "red";
}

hamburguesa.addEventListener("click", () => {
  nav.classList.toggle("abierto");
});

document.querySelectorAll("details").forEach(pregunta => {
  pregunta.addEventListener("toggle", () => {
    if (pregunta.open) {
      document.querySelectorAll("details").forEach(otra => {
        if (otra !== pregunta) otra.open = false;
      });
    }
  });
});
