addEventListener("DOMContentLoaded", () => {
    const tabuleiro = document.querySelector("#tabuleiro")
    const mapa = [
        1, 0, 0, 1, 1, 1, 1, 1, 0, 0,
        1, 1, 0, 1, 0, 0, 0, 1, 1, 1,
        0, 1, 0, 1, 1, 1, 0, 1, 0, 1,
        0, 1, 0, 0, 0, 1, 0, 1, 0, 0,
        0, 1, 1, 1, 0, 1, 0, 1, 1, 1,
        1, 1, 0, 1, 0, 1, 0, 1, 0, 1,
        0, 1, 0, 1, 0, 1, 1, 0, 0, 1,
        0, 1, 0, 0, 0, 1, 0, 1, 1, 1,
        0, 1, 1, 0, 0, 1, 0, 1, 0, 0,
        0, 0, 1, 1, 1, 1, 0, 1, 1, 1,
    ]

    for (let i = 0; i < 100; i++) {

        tabuleiro.innerHTML += `<input id="${i}" type="button" class="${mapa[i] == 0 ? "parede" : "chão"
            }">`
    }
    document.querySelectorAll("input")[0].classList.add("jogador")
    document.querySelectorAll("input")[99].classList.add("venceu")

})

var player = 0;

function andar() {
    var prevCampo = document.querySelector(".jogador");
    if (prevCampo) {
        prevCampo.classList.remove("jogador");
    }
    
    if ( player == 99)
    alert("Você conseguiu avançar na caverna escura!")
    window.location.href = '../Códigos/labírinto_fases/lab2.html';
    var campo = document.getElementById(player);
    campo.classList.add("jogador");
    
}

function podeMover(proximaPosicao) {
    if (proximaPosicao < 0 || proximaPosicao > 99) {
        return false; 
    }
    
    var campo = document.getElementById(proximaPosicao);
    return !campo.classList.contains("parede"); 
}


document.body.addEventListener('keydown', function (event) {
    const key = event.key;
    var novaPosicao = player;
    console.log("Movendo: ", key)
    
    switch (key) {
        case "ArrowLeft":
            novaPosicao = player - 1;
            break;
        case "ArrowRight":
            novaPosicao = player + 1;
            break;
        case "ArrowUp":
            novaPosicao = player - 10;
            break;
        case "ArrowDown":
            novaPosicao = player + 10;
            break;
    }

    
    if (podeMover(novaPosicao)) {
        console.log("Pode mover")
        player = novaPosicao;
        andar();
    }
});
