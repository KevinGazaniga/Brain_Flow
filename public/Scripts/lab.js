const mapa = [
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0,
  1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1,
  0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0,
  1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0,
  0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1,
  1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 2, 1, 0, 1, 1, 1, 1,
  0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1,
  1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1,
  1, 1,
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
  document.querySelectorAll("input")[135].classList.add("jogador");

  document.querySelectorAll("input")[149].classList.add("chao");
});

var player = 135;

function andar() {
  var prevCampo = document.querySelector(".jogador");
  if (prevCampo) {
    prevCampo.classList.remove("jogador");
    var campo = document.getElementById(player);
    campo.classList.add("jogador");
  }

  if (player == 149) {
    alert("Você conseguiu achar o pergaminho do raciocínio");
    window.location.href = " /Labirinto_Fase_Medio";
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
        player == 15 ||
        player == 45 ||
        player == 60 ||
        player == 75 ||
        player == 90 ||
        player == 105 ||
        player == 135 ||
        player == 150 ||
        player == 165 ||
        player == 195
      ) {
      } else {
        novaPosicao = player - 1;
        break;
      }
    case "ArrowRight":
      if (
        player == 14 ||
        player == 59 ||
        player == 74 ||
        player == 119 ||
        player == 134 ||
        player == 149 ||
        player == 164 ||
        player == 194 ||
        player == 209
      ) {
      } else {
        novaPosicao = player + 1;
        break;
      }
    case "ArrowUp":
      novaPosicao = player - 15;
      break;
    case "ArrowDown":
      novaPosicao = player + 15;
      break;
  }

  if (podeMover(novaPosicao)) {
    console.log("Pode mover");
    player = novaPosicao;
    andar();
  }
});
