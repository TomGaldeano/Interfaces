
console.log("app.js conectado");

const cabecera = document.querySelector("header");
console.log("Cabecera:", cabecera);

const tarjetas = document.querySelectorAll(".tarjeta");

console.log("Número de tarjetas:", tarjetas.length);

const titulo = document.querySelector("#titulo-inicio");
const botonTexto = document.querySelector("#cambiar-texto");

botonTexto.addEventListener("click", () => {
if(titulo.innerHTML==="¡Hola Mundo!"){
    titulo.innerHTML = "Hello World"
}else{
    titulo.textContent = "¡Título cambiado con JavaScript!";
}
});

if (tarjetas.length > 0) {
  tarjetas[0].classList.add("destacado");
}
const botonDestacado =
  document.querySelector("#alternar-destacado");

botonDestacado.addEventListener("click",() => {
  tarjetas.forEach((tarjeta) => {
    tarjeta.classList.toggle("destacado");
  });
});
