function formatarTempo(ms) {
  const s = Math.floor(ms / 1000);
  return `${s}s`;
}

async function salvarRanking(jogo, total) {
  const id_usuario = localStorage.getItem("id_usuario");
  const usuario = localStorage.getItem("usuario");

  if (!id_usuario || !usuario) {
    console.error("Usuário não está logado!");
    return;
  }

  try {
    const resposta = await fetch(`http://localhost:3000/ranking/${jogo}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        usuario,
        pontos: total,
        id_usuario
      }),
    });

    const dados = await resposta.json();
    console.log("Ranking salvo:", dados);
  } catch (erro) {
    console.error("Erro ao salvar ranking:", erro);
  }
}
async function carregarRanking(jogo) {
  try {
    const resposta = await fetch(`http://localhost:3000/ranking/${jogo}`);
    const ranking = await resposta.json();

    const lista = document.getElementById("ranking");
    lista.innerHTML = "";

    ranking.forEach((item, index) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <strong>${index + 1}º</strong> — ${item.usuario}<br>
        Total: ${formatarTempo(item.pontos)}
      `;
      lista.appendChild(div);
    });
  } catch (erro) {
    console.error("Erro ao carregar ranking:", erro);
  }
}
