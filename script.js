function toggleMenu() {
    alert("Menu sanduíche clicado!");
}

function compartilharFacebook() {
    const noticia = document.querySelector(".news h1").innerText; // Corrigido para selecionar <h1>
    const descricao = document.querySelector(".news p").innerText;
    const url = window.location.href;

    const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(noticia + " - " + descricao)}`;
    
    window.open(facebookURL, '_blank');
}

function compartilharWhatsApp() {
    const noticia = document.querySelector(".news h1").innerText; // Corrigido para selecionar <h1>
    const descricao = document.querySelector(".news p").innerText;
    const url = window.location.href;

    const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(noticia + " - " + descricao + " " + url)}`;

    window.open(whatsappURL, '_blank');
}






