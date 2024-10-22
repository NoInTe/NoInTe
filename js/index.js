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
});

/* contenido LINEA DE TIEMPO  */
const zoomInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'scale(1)';
            entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        } else {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'scale(0.8)';
        }
    });
  }, {
    threshold: 0.8 // Umbral al 80%
  });
  
  const zoomInContents = document.querySelectorAll('.contenido_lt');
  zoomInContents.forEach(content => {
    content.style.opacity = '0';
    content.style.transform = 'scale(0.8)';
    zoomInObserver.observe(content);
  });
  