const { Router } = require("express");
const { db } = require("../dbs");
const rotaRanking = Router();

// GET ranking
rotaRanking.get("/ranking/:jogo", async (req, res) => {
  try {
    const ranking = await db.pontuacao.findMany({
      where: { jogo: req.params.jogo },
      orderBy: { pontos: "asc" },
      take: 10,
    });

    res.json(ranking);
  } catch (error) {
    console.error("Erro ao buscar ranking:", error);
    res.status(500).json({ erro: "Erro interno do servidor" });
  }
});

// POST pontuação
rotaRanking.post("/ranking/:jogo", async (req, res) => {
  const { usuario, pontos } = req.body;
  const jogo = req.params.jogo;

  console.log("POST recebido:", req.body);

  if (!usuario || typeof pontos !== "number") {
    return res.status(400).json({
      erro: "Envie: usuario (string) e pontos (number)",
    });
  }

  try {
    const novo = await db.pontuacao.create({
      data: {
        jogo,
        usuario, // <-- SALVA DIRETO AQUI
        pontos,
      },
    });

    res.status(201).json(novo);
  } catch (error) {
    console.error("Erro ao salvar pontuação:", error);
    res.status(500).json({ erro: "Erro ao registrar a pontuação." });
  }
});

module.exports = { rotaRanking };
