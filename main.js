let nomeP1 = document.getElementById("per1");

function personalizarPerfil() {
    window.location.href = "personalizar.html";
}

function personalizarPerfil() {
    const nomeP1 = document.getElementById("per1").innerText;
    localStorage.setItem("nomePerfil", nomeP1);
    window.location.href = "segunda.html";
}
