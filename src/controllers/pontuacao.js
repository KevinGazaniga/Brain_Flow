const { Router } = require("express");
const { db } = require("../dbs");
const rotaPontuacao = Router();

rotaPontuacao.get("/pontuacao", async (req, res) => {
  const pontuacao = await db.pontuacao.findMany();
  res.json(pontuacao);
});

rotaPontuacao.post("/pontuacao", async (req, res) => {
  const { jogo, pontos, id_usuario } = req.body;
  await db.pontuacao.create({
    data: {
      jogo,
      pontos,
      usuario: {
        connect: {
          id: id_usuario,
        },
      },
    },
  });

  res.json({ mensagem: "ok" });
});

rotaPontuacao.put("/pontuacao/:id", async (req, res) => {
  const id = Number(req.params.id);
  const data = {};

  if (req.body.jogo) data.jogo = req.body.jogo;
  if (req.body.pontos) data.pontos = req.body.pontos;

  await db.pontuacao.update({
    where: { id },
    data,
  });

  res.send({ mensagem: "ok" });
});

module.exports = { rotaPontuacao };
