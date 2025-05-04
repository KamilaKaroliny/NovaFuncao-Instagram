function localFoto1(){
    window.location.href="localFoto1.html";
}

function localFoto2(){
    window.location.href="localFoto2.html";
}

function Menu() {
    const menu = document.getElementById('menuOpcoes');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

function Tempo() {
    const submenu = document.getElementById('submenuTempo');
    submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
}

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function iniciarContador() {
    const tempo = localStorage.getItem("tempoStory");

    if (tempo) {
        await esperar(tempo * 1000);
        localStorage.setItem("storyExpirado", "true");
        window.location.href = "telaInicial.html";
    }
}

if (window.location.href.includes("telaInicial2.html")) {
    iniciarContador();
}

if (window.location.href.includes("telaInicial.html")) {
    const expirou = localStorage.getItem("storyExpirado");
    if (expirou === "true") {
        alert("⏰ O tempo do story expirou!");
        localStorage.removeItem("storyExpirado");
    }
}

function definirTempo(tempoEmSegundos) {
    localStorage.setItem("tempoStory", tempoEmSegundos);
    window.location.href = "telaInicial2.html";
}