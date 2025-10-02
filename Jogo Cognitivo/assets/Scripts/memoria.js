addEventListener("DOMContentLoaded", () => {
    const tabuleiro = document.querySelector("#cartas")
    const mapa = [
        0,0,0,
        0,0,0,
        0,0,0
    ]

    for (let i = 0; i < 12; i++) {

        tabuleiro.innerHTML += `<input id="${i}" type="button" class="${mapa[i] == 0 ? "parede" : "parede"
            }">`
    }
  
})

