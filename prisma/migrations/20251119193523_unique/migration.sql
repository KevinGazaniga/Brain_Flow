/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Pontuacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pontos" INTEGER NOT NULL,
    "jogo" TEXT NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    CONSTRAINT "Pontuacao_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Pontuacao_id_usuario_key" ON "Pontuacao"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_nome_key" ON "Usuario"("nome");
