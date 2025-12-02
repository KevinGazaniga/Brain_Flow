import { Router } from "express";
import { db } from "../dbs.js";
const rotaUsuario = Router();

rotaUsuario.get("/usuarios", async (req, res) => {
  const usuarios = await db.usuario.findMany();
  res.json(usuarios);
});

rotaUsuario.post("/usuarios", async (req, res) => {
  const { nome, senha } = req.body;
  await db.usuario.create({
    data: {
      nome,
      senha,
    },
  });

  res.json({ mensagem: "ok" });
});

rotaUsuario.delete("/usuarios/:id", async (req, res) => {
  const id = Number(req.params.id);
  await db.usuario.delete({
    where: { id },
  });
  res.json({ mensagem: "ok" });
});

rotaUsuario.put("/usuarios/:id", async (req, res) => {
  const id = Number(req.params.id);
  const data = {};

  if (req.body.nome) data.nome = req.body.nome;
  if (req.body.senha) data.senha = req.body.senha;

  await db.usuario.update({
    where: { id },
    data,
  });

  res.send({ mensagem: "ok" });
});

export { rotaUsuario };
