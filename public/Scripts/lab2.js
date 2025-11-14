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
  0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0,
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
    tabuleiro.innerHTML += `<input id="${i}" type="button" class="${
      mapa[i] == 0 ? "parede" : "chão"
    }">`;
  }
  document.querySelectorAll("input")[135].classList.add("jogador");
  // document.querySelectorAll("input")[""].classList.add("bordas_arredondadas")
  // document.querySelectorAll("input")[""].classList.add("bordas_arredondadas2")
  // document.querySelectorAll("input")[""].classList.add("bordas_arredondadas3")
  // document.querySelectorAll("input")[""].classList.add("bordas_arredondadas4")
  document.querySelectorAll("input")[164].classList.add("venceu");
});

var player = 135;

function andar() {
  var prevCampo = document.querySelector(".jogador");
  if (prevCampo) {
    prevCampo.classList.remove("jogador");
    var campo = document.getElementById(player);
    campo.classList.add("jogador");
  }

  if (player == 164) {
    pauseStopwatch();
    finishMaze();

    alert("Você conseguiu achar o pergaminho do raciocínio");
    window.location.href = "https://xd6mrv-3000.csb.app/Labirinto_Fase_Facil";
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
    case ("ArrowLeft", "a"):
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
    case ("ArrowRight", "d"):
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
    case ("ArrowUp", "w"):
      novaPosicao = player - 15;
      break;
    case ("ArrowDown", "s"):
      novaPosicao = player + 15;
      break;
  }

  if (podeMover(novaPosicao)) {
    console.log("Pode mover");
    player = novaPosicao;
    andar();
  }
});

// Variáveis Globais do Cronômetro
let isRunning = false; // Indica se o cronômetro está ativo
let isStarted = false; // Indica se o cronômetro já foi iniciado pelo menos uma vez
let startTime; // Hora em que o cronômetro começou (ou foi resumido)
let elapsedTime = 0; // Tempo decorrido (em milissegundos)
let intervalId; // ID para limpar o setInterval
const display = document.getElementById("timer-display");

// =======================================================
// 1. Função de Formatação do Tempo (MM:SS:MsMs)
// =======================================================
function formatTime(ms) {
  // Converte milissegundos para Minutos, Segundos e Milissegundos

  // Milissegundos (últimos 3 dígitos)
  let milliseconds = String(Math.floor(ms)).slice(-3).padStart(3, "0");

  // Segundos
  let totalSeconds = Math.floor(ms / 1000);
  let seconds = String(totalSeconds % 60).padStart(2, "0");

  // Minutos
  let minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");

  // Retorna no formato MM:SS:MsMs
  return `${minutes}:${seconds}:${milliseconds.substring(0, 2)}`; // Usando 2 dígitos para Ms
}

// =======================================================
// 2. Função de Atualização do Display
// =======================================================
function updateDisplay() {
  // Calcula o tempo decorrido desde o início
  elapsedTime = Date.now() - startTime;

  // Atualiza o display
  display.textContent = formatTime(elapsedTime);
}

// =======================================================
// 3. Funções de Controle do Cronômetro
// =======================================================

/** Inicia o cronômetro. */
function startStopwatch() {
  if (isRunning) return;

  isRunning = true;

  // Define a hora de início ajustando pelo tempo já decorrido
  startTime = Date.now() - elapsedTime;

  // Chama a função de atualização a cada 10 milissegundos
  intervalId = setInterval(updateDisplay, 10);
  console.log("Cronômetro Iniciado!");
}

/** Pausa o cronômetro (útil para menus ou pausas). */
function pauseStopwatch() {
  if (player == 74) return;

  clearInterval(intervalId);
  isRunning = false;
  console.log("Cronômetro Pausado.");
}

/** Zera e para o cronômetro. */
function resetStopwatch() {
  pauseStopwatch();
  elapsedTime = 0;
  isStarted = false;
  display.textContent = "00:00:00";
  console.log("Cronômetro Resetado.");
}

/**
 * Funções que você pode chamar no final do labirinto.
 * @returns {string} O tempo final formatado.
 */
function finishMaze() {
  pauseStopwatch(); // Para o tempo
  const finalTime = formatTime(elapsedTime);
  console.log(`Labirinto concluído em: ${finalTime}`);

  // Você pode desabilitar os controles aqui para evitar que o jogador continue a andar
  document.removeEventListener("keydown", handleKeyPress);

  return finalTime;
}

// =======================================================
// 4. Lógica de Início Automático (O Ponto Principal)
// =======================================================

/** Manipulador de Eventos de Tecla */
function handleKeyPress(event) {
  // Lista de teclas que devem iniciar o cronômetro (setas e WASD)
  const movementKeys = ["w", "a", "s", "d"];

  // Converte a tecla para minúsculo para facilitar a comparação
  const key = event.key.toLowerCase();

  // Verifica se a tecla é uma das teclas de movimento
  if (movementKeys.includes(key)) {
    // Se ainda não foi iniciado, comece o cronômetro!
    if (!isStarted) {
      startStopwatch();
      isStarted = true;

      // Opcional: Remova a instrução visual
      document.querySelector(".instrucao").style.display = "none";
    }

    // Aqui você adicionaria a lógica de "movimentar o jogador"
    // ex: movePlayer(key);
  }
}

// Adiciona o listener de teclado que irá chamar a função acima
document.addEventListener("keydown", handleKeyPress);
