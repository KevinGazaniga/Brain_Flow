-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "nacionalidade" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);

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
