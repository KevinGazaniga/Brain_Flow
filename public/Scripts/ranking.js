// ranking.js (ou em outro arquivo de script do jogo)

// ... suas funções formatarTempo e carregarRanking ...

/**
 * Envia a pontuação de um jogador para o servidor.
 * @param {string} nomeDoUsuario - Nome do jogador.
 * @param {number} tempoEmSegundos - Tempo do jogo em segundos (ex: 12.345).
 * @param {string} nomeDoJogo - Identificador do jogo (padrão: "meu_jogo_principal").
 */
async function enviarPontuacao(
  nomeDoUsuario,
  tempoEmSegundos,
  nomeDoJogo = "meu_jogo_principal"
) {
  if (
    !nomeDoUsuario ||
    typeof tempoEmSegundos !== "number" ||
    tempoEmSegundos <= 0
  ) {
    console.error("Dados de pontuação inválidos.");
    return;
  }
  try {
    const response = await fetch(
      `http://localhost:3000/ranking/${nomeDoJogo}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario: nomeDoUsuario,
          pontos: tempoEmSegundos,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Erro HTTP ao salvar pontuação! Status: ${response.status}`
      );
    }

    const resultado = await response.json();
    console.log("Pontuação salva:", resultado); // Opcional: Recarrega o ranking após salvar um novo score

    carregarRanking(nomeDoJogo);
  } catch (error) {
    console.error("Não foi possível enviar a pontuação:", error);
    alert("Erro ao salvar a pontuação no ranking. Verifique o console.");
  }
}

// Exemplo de como usar quando o jogo terminar:
// enviarPontuacao("Fulano", 15.789, "meu_jogo_principal");
