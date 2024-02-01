let nomeDoPerfil1 = "";


function personalizarPerfil() {
    window.location.href = "personalizar.html";
}

function mudarNome() {
    nomeDoPerfil1 = document.getElementById("novoNomeDoPerfil");
}

function salvarPerfil() {
    window.location.href = "index.html";
    mudarNome();
}

function nomeDoPerfil () {
document.getElementById("per1").innerHTML  = nomeDoPerfil1;
}

