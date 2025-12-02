import { join } from "node:path";
import { Router } from "express";
const rotaPaginas = Router();

rotaPaginas.get("/cadastrar", async (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "pages", "cadastro.html"));
});

rotaPaginas.get("/logar", async (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "pages", "logar.html"));
});

rotaPaginas.get("/Comecar", async (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "pages", "Tela1.html"));
});

rotaPaginas.get("/Menu", async (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "pages", "Tela2.html"));
});

rotaPaginas.get("/Jogo_da_Velha", async (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "pages", "jogodavelha.html"));
});

rotaPaginas.get("/Jogo_da_memoria_Fase_Facil", async (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "pages", "memoria.html"));
});

rotaPaginas.get("/Jogo_da_memoria_Fase_Medio", async (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "pages", "memoria2.html"));
});

rotaPaginas.get("/Jogo_da_memoria_Fase_Dificil", async (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "pages", "memoria3.html"));
});

rotaPaginas.get("/Labirinto_Fase_Facil", async (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "pages", "lab_fases", "lab.html"));
});

rotaPaginas.get("/Labirinto_Fase_Medio", async (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "pages", "lab_fases", "lab2.html"));
});

rotaPaginas.get("/Labirinto_Fase_DIficil", async (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "pages", "lab_fases", "lab3.html"));
});

rotaPaginas.get("/Usuario", async (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "pages", "usuario.html"));
});

export { rotaPaginas };