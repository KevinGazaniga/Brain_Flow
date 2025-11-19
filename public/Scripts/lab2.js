const mapa = [
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1,
  1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0,
  1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0,
  1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1,
  1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1,
  0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0,
  1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0,
  0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1,
  0, 1, 0, 0, 1, 2, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0,
  1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0,
  1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1,
  0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1,
  0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1,
  1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1,
  1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1,
  1, 0, 1, 0,
];
addEventListener("DOMContentLoaded", () => {
  const tabuleiro = document.querySelector("#tabuleiro");

  for (let i = 0; i < mapa.length; i++) {
    let classe = "";
    if (mapa[i] == 0) classe = "parede";
    if (mapa[i] == 1) classe = "chao";
    if (mapa[i] == 2) classe = "pergaminho";

    tabuleiro.innerHTML += `<input id="${i}" type="button" class="${classe}">`;
  }
  document.querySelectorAll("input")[30].classList.add("jogador");

  document.querySelectorAll("input")[239].classList.add("chao");
});

var player = 30;

function andar() {
  var prevCampo = document.querySelector(".jogador");
  if (prevCampo) {
    prevCampo.classList.remove("jogador");
    var campo = document.getElementById(player);
    campo.classList.add("jogador");
  }

  if (player == 239) {
    alert("Você conseguiu achar o pergaminho do intelecto");
    window.location.href = "https://xd6mrv-3000.csb.app/Labirinto_Fase_DIficil";
  }
}

function podeMover(proximaPosicao) {
  if (proximaPosicao < 0 || proximaPosicao > mapa.length - 1) {
    return false;
  }

  var campo = document.getElementById(proximaPosicao);
  return !campo.classList.contains("parede");
}

document.body.addEventListener("keydown", function (event) {
  const key = event.key;
  var novaPosicao = player;
  console.log("Movendo: ", key);

  switch (key) {
    case "ArrowLeft":
      if (
        player == 30 ||
        player == 90 ||
        player == 120 ||
        player == 150 ||
        player == 180 ||
        player == 210 ||
        player == 270 ||
        player == 300 ||
        player == 330 ||
        player == 390
      ) {
      } else {
        novaPosicao = player - 1;
        break;
      }
    case "ArrowRight":
      if (
        player == 89 ||
        player == 119 ||
        player == 149 ||
        player == 179 ||
        player == 239 ||
        player == 329 ||
        player == 389
      ) {
      } else {
        novaPosicao = player + 1;
        break;
      }
    case "ArrowUp":
      novaPosicao = player - 30;
      break;
    case "ArrowDown":
      novaPosicao = player + 30;
      break;
  }

  if (podeMover(novaPosicao)) {
    console.log("Pode mover");
    player = novaPosicao;
    andar();
  }
});
