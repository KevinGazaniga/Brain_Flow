function cadastrar() {
    nome = document.getElementById(0).value;
    senha = document.getElementById(1).value;
    senha2 = document.getElementById(2).value;

    if (senha != senha2) {
        alert("As senhas não coincidem!");
        return false;
    }

    else if (senha == senha2) {
        window.location.href = '../Códigos/Tela2.html';
        alert("Cadastro realizado com sucesso!");
    }
}