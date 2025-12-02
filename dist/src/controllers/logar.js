import { Router } from "express";
import jwt from "jsonwebtoken";
import { db } from "../dbs.js";

const rotaLogin = Router();
rotaLogin.post("/login", async (req, res) => {
  const { nome, senha } = req.body;

  const usuario = await db.usuario.findFirst({
    where: { nome },
  });

  console.log(usuario);
  console.log({ nome, senha });

  if (senha !== usuario.senha) {
    res.status(401).json({ mensagem: "usuario ou senha invalido" });
  }

  const token = jwt.sign(
    { id: usuario.id, tipo: "usuario" },
    "Chave-secreta-123456789"
  );

  res.json({
    token,
    nome: usuario.nome,
  });
});

export { rotaLogin };
