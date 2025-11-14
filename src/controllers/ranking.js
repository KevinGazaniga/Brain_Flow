const { Router } = require("express");
// Assumindo que 'db' é seu cliente Prisma ou ORM para acessar o banco de dados.
const { db } = require("../dbs");
const rotaRanking = Router();

// Rota GET - Carregar Ranking
// Ordem: Tempo Mais Rápido (menor valor de 'pontos') fica em primeiro (ASC)
rotaRanking.get("/ranking/:jogo", async (req, res) => {
  try {
    const ranking = await db.pontuacao.findMany({
      where: {
        jogo: req.params.jogo,
      }, // CORREÇÃO: Para tempo, a ordenação é ASC (Ascendente - menor tempo é o melhor)
      orderBy: {
        pontos: "asc",
      },
      take: 10,
    });
    res.json(ranking);
  } catch (error) {
    console.error("Erro ao buscar o ranking:", error);
    res.status(500).json({ erro: "Erro interno do servidor" });
  }
});

// Rota POST - Salvar Nova Pontuação
rotaRanking.post("/ranking/:jogo", async (req, res) => {
  // Assumindo que o corpo da requisição (req.body) contém { usuario: "nome", pontos: 12.345 }
  const { usuario, pontos } = req.body;
  const jogo = req.params.jogo; // Validação básica

  if (!usuario || typeof pontos !== "number" || pontos <= 0) {
    return res
      .status(400)
      .json({
        erro: "Dados inválidos: 'usuario' e 'pontos' (tempo em segundos) são obrigatórios e válidos.",
      });
  }
  try {
    // Lógica para salvar a nova pontuação
    const novoScore = await db.pontuacao.create({
      data: {
        jogo: jogo,
        usuario: usuario,
        pontos: pontos, // Pontos é o tempo em segundos // Você pode adicionar um campo 'data' ou 'dataCriacao' aqui, se o seu schema tiver.
      },
    });

    res.status(201).json({
      mensagem: "Pontuação registrada com sucesso!",
      score: novoScore,
    });
  } catch (error) {
    console.error("Erro ao salvar a pontuação:", error);
    res.status(500).json({ erro: "Erro ao registrar a pontuação." });
  }
});

module.exports = { rotaRanking };
