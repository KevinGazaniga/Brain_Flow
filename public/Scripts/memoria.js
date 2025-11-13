let pode_jogar = true;
let cartas_viradas = 0;
let carta_anterior = null;
let cartas_certas = 0;
addEventListener("DOMContentLoaded", () => {
  const tabuleiro = document.querySelector("#cartas");
  const mapa = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const imagens = [
    "",
    `<img src="../fotos/arvore.svg">`,
    `<img src="../fotos/aviao.svg">`,
    `<img src="../fotos/bicicleta.svg">`,
    `<img src="../fotos/cafe.svg">`,
    `<img src="../fotos/carro.svg">`,
    `<img src="../fotos/estrela.svg">`,
    `<img src="../fotos/fantasma.svg">`,
  ];

  for (let i = 0; i < 12; i++) {
    tabuleiro.innerHTML += `<div id="${i}" type="button" class="virada ${
      mapa[i] == 0 ? "carta_img no-select" : "carta_img no-select"
    }">`;
  }

  for (let i = 0; i < 12; i++) {
    const valor = atribuir_imagem();
    console.log("Atribuindo o valor: ", valor);
    const carta = document.getElementById(i);
    carta.innerHTML = imagens[valor];
    carta.addEventListener("click", () => {
      if (pode_jogar == false) return;
      if (!carta.classList.contains("virada")) return;
      console.log("Clicou na carta", i);
      cartas_viradas++;
      carta.classList.toggle("virada");
      if (cartas_viradas == 2) {
        pode_jogar = false;
        cartas_viradas = 0;
        let a = setTimeout(() => {
          if (carta.innerHTML == carta_anterior.innerHTML) {
            cartas_certas = cartas_certas + 2;
            console.log(cartas_certas);
            if (cartas_certas == 12) {
              alert(
                "Parabéns, modo fácil concluido. Quando estiver pronto(a) clique em 'Próximo' para a próxima dificuldade"
              );
              window.location.href = "memoria.html";
            }
          } else {
            carta.classList.toggle("virada");
            carta_anterior.classList.toggle("virada");
          }
          carta_anterior = carta;
          pode_jogar = true;
          clearTimeout(a);
        }, 1000);
      } else {
        carta_anterior = carta;
        pode_jogar = true;
      }
    });
  }
  console.log("resultado:");
  console.log({ numeros });
});

const numeros = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function atribuir_imagem() {
  const min = 1;
  const max = 6;
  const numeroInteiroAleatorio =
    Math.floor(Math.random() * (max - min + 1)) + min;
  console.log("numero gerado:", numeroInteiroAleatorio);

  console.log(
    "o número apareceu essas vezes:",
    numeros[numeroInteiroAleatorio]
  );
  if (numeros[numeroInteiroAleatorio] !== 2) {
    numeros[numeroInteiroAleatorio] += 1;
    return numeroInteiroAleatorio;
  } else {
    console.log("Apareceu de mais");
    return atribuir_imagem();
  }
}
