const saibaMais = document.getElementById("saibaMais");
const modalFechar = document.getElementById("modal-fechar");
const modalMain = document.getElementById("modal-main");

saibaMais.addEventListener("click", abrirModal);

function abrirModal() {
  if (!modalMain.classList.contains("abrirModal")) {
    modalMain.classList.add("abrirModal");
  }
}

modalFechar.addEventListener("click", fecharModal);

function fecharModal() {
  if (modalMain.classList.contains("abrirModal")) {
    modalMain.classList.remove("abrirModal");
  }
}

const imgBackground = document.getElementById("imgBackground");
let imgsBackground = [
  "url(img/img-main.webp)",
  "url(img/img-main2.webp)",
  "url(img/img-main3.webp)",
  "url(img/img-main4.webp)",
  "url(img/img-main5.webp)",
];

function percorrerImgs() {
  let numAleatorio = Math.floor(Math.random() * imgsBackground.length);
  imgBackground.style.backgroundImage = imgsBackground[numAleatorio];
  imgBackground.style.transition = "2s ease";
}

window.onload = setInterval(percorrerImgs, 2000);

