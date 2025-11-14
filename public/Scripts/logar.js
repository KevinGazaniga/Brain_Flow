document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const nome = document.querySelector("#nome").value;
  const senha = document.querySelector("#senha").value;
  login(nome, senha);
});

async function login(nome, senha) {
  console.log({ nome, senha });
  const resposta = await fetch("/login", {
    method: "POST",
    body: JSON.stringify({
      nome,
      senha,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await resposta.json();
  localStorage.setItem("token", json.token);
  alert("Login feito com sucesso");
  window.location.href = "https://xd6mrv-3000.csb.app/menu";
}
