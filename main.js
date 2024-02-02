
let nomeDoPerfil1;

function personalizarPerfil() {
    window.location.href = "personalizar.html";
}

function mudarNome() {
    nomeDoPerfil1 = document.getElementById("novoNomeDoPerfil");
}

function salvarPerfil() {
    window.location.href = "index.html";
    document.getElementById("per1").innerHTML = nomeDoPerfil(nomeDoPerfil1);
}

function nomeDoPerfil () {
let teste = document.getElementById("per1").value = nomeDoPerfil1;
}

