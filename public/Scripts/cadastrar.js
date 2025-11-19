async function cadastrar() {
  let nome_usuario = document.getElementById(0).value;
  let senha = document.getElementById(1).value;
  let Confirmar_senha = document.getElementById(2).value;

  if (nome_usuario == "" || senha == "" || Confirmar_senha == "") {
    alert("Preencha todos os campos!");
  } else if (senha != Confirmar_senha) {
    alert("As senhas não coincidem");
    senha = "";
    Confirmar_senha = "";
  } else if (senha.length < 5 || Confirmar_senha.length < 5) {
    alert("Senha muito curta, escreva uma maior");
  } else if (nome_usuario.length < 3) {
    alert("Nome de usuario muito curto");
  } else {
    await fetch("/usuarios", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: nome_usuario,
        senha: senha,
      }),
    });
    alert("Conta criada com sucesso");
    window.location.assign("https://xd6mrv-3000.csb.app/logar");
  }
}
