document.addEventListener("DOMContentLoaded", function () {

    document.querySelector('.whatsapp-icono').addEventListener('click', function () {
        window.location.href = 'https://wa.me/';
    });

    document.querySelector('.scroll-down-indicator').addEventListener('click', function () {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
        document.querySelector('.scroll-down-indicator').classList.add('ocultar');
    });
}