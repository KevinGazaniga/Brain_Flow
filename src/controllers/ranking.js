const { Router } = require("express");
const { db } = require("../dbs");
const rotaRanking = Router();

rotaRanking.get("/ranking/:jogo", async (req, res) => {
  const ranking = await db.pontuacao.findMany({
    where: {
      jogo: req.params.jogo,
    },
    orderBy: {
      pontos: "desc",
    },
    take: 10,
  });
  res.json(ranking);
});

module.exports = { rotaRanking };
