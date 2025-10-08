const express = require("express");
const { PrismaClient } = require("./generated/prisma");

const server = express();
const db = new PrismaClient();
server.use(express.json());

server.get("/usuarios", async (req, res) => {
  const usuarios = await db.usuario.findMany();
  res.json(usuarios);
});

server.post("/usuario", async (req, res) => {
  const { nome, nacionalidade } = req.body;

  await db.usuario.create({
    data: {
      nome,
      nacionalidade,
    },
  });
  res.json({ sucesso: "ok" });
});

server.delete("/usuarios/:id", async (req, res) => {
  await db.usuario.delete({
    where: jj,
  });
});

server.listen(3000, () => console.log("Ro---jjj---"));
