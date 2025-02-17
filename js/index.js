// ------------------AJUSTE DINAMICO DE LOS CONTENEDORES ABSOLUTOS-----------------------//
const servicios = document.querySelector(".servicios");
const nosotros = document.querySelector(".nosotros");
const footer = document.querySelector(".footer");
// ------------------------------HEADER------------------------------------------------//
//NAV
const hamburger = document.querySelector(".hamburger");
const cabeceraTitulo = document.querySelector(".cabecera-titulo");
const cabeceraSubtitulo = document.querySelector(".cabecera-subtitulo");
const navMenu = document.querySelector(".nav-links");

// ------------------------------SERVICIOS--------------------------------------------//
// Obtiene todos los botones de "Leer más"
const leerMasBtns = document.querySelectorAll('.leer-mas-btn');
// Elementos del popup
const popup = document.getElementById('popup');
const popupDetails = document.getElementById('popup-details');
const closeBtn = document.querySelector('.close-btn');
// Datos adicionales para cada card
const contenidoExtra = {
  1: `
    <h2>Landing Express</h2><br><br>
              <p>
                <b>Para quién:</b> Negocios o emprendedores que necesitan una
                presencia rápida y efectiva en internet.<br /><br />

                <b>Incluye:</b><br /><br />

                <b>Landing page moderna y optimizada:</b> diseño único adaptado
                a tu marca.<br />
                <b>Diseño responsivo:</b> totalmente optimizado para móviles,
                tablets y PC.<br />
                <b>Integraciones:</b> vinculos a redes sociales y contacto
                directo (WhatsApp, correo).<br />
                <b>SEO básico</b> (meta títulos, descripciones y palabras
                clave).<br />
                <b>Soporte post-entrega:</b> 15 días para correcciones menores.<br>
                <b>Entrega rápida:</b> 5 días hábiles (sujeto a contenido).<br>
                El precio incluye reunión virtual para plantear detalles y ajustes del desarrollo dentro de los 5 días hábiles de la entrega.
              </p>
              <br />
              <h3 class="precio">Precio: $99.999 ARS</h3> <br><br>
              <p><b>Opciones con costo adicional:</b><br><br>
              Reunión presencial si fuera necesaria o si el cliente lo requiere.<br>
              Hosting y dominio: asesoramiento y configuración de hosting básico.
              </p>
  `,
  2: `
    <h2>Sitio Web Profesional</h2><br><br>
              <p>
                <b>Para quién:</b> Negocios, emprendedores y profesionales que
                necesitan una presencia digital más robusta, con múltiples
                secciones y funcionalidades personalizadas para destacar en su
                rubro.<br /><br />

                <b>Incluye:</b><br /><br />

                <b>Diseño personalizado de 4 a 5 secciones, como:</b> inicio,
                nosotros, servicios, portafolio, contacto y otras (según
                necesidad).<br />
                <b>Opcional:</b> galería interactiva (perfecta para mostrar
                productos, servicios o proyectos con un diseño visual
                atractivo).<br />
                <b>Diseño responsivo:</b> totalmente optimizado para móviles,
                tablets y PC.<br />
                <b>Integraciones:</b> redes sociales y contacto directo (WhatsApp, correo).<br>
                <b>SEO intermedio:</b> optimización más detallada que incluye meta etiquetas, estructura de contenido
                 y mejores prácticas para buscadores. Google Analytics básico: configuración inicial para monitoreo de tráfico y 
                 rendimiento.<br />
                <b>Soporte post-entrega:</b> 20 días para correcciones menores.<br />
                <b>Entrega estimada:</b> 15 a 22 días hábiles (según requerimientos y contenido proporcionado por el cliente).<br />
                El precio incluye reunión virtual para plantear detalles y ajustes del desarrollo dentro de los 10 días hábiles de la entrega.
              </p>
              <br />
              <h3 class="precio">Precio: $299.999 ARS</h3><br><br>
              <p><b>Opciones con costo adicional:</b><br><br>
              Reunión presencial si fuera necesaria o si el cliente lo requiere.<br>
              Hosting y dominio: asesoramiento y configuración de hosting básico, certificado SSL: seguridad para los usuarios..
              </p>
  `,
  3: `
    <h2>Personalizado a Medida</h2><br><br>
              <p>
                <b
                  >Si no encuentras lo que buscas en nuestros planes estándar,
                  este plan es ideal para ti.</b
                >
              </p>
              <br />
              <p>
                <b>Para quién:</b> Negocios, emprendedores o empresas con
                necesidades específicas que requieren soluciones totalmente
                personalizadas en su desarrollo.<br /><br />

                <b>Incluye según necesidad:</b><br><br>

                <b>Desarrollo personalizado de aplicaciones web o sistemas de
                  automatización:</b> Proyectos a medida según lo solicitado, como sistemas
                internos, plataformas de ventas, integraciones con APIs de
                herramientas según sean necesarias, etc.<br>

                <b>Integración de inteligencia artificial:</b> Posibilidad de
                incorporar funcionalidades como chatbots, asistentes virtuales o
                recomendaciones personalizadas.<br>
                <b>Asesoramiento técnico y estratégico:</b> Definición y planificación junto a nuestro equipo para crear la solución 
                perfecta para tu negocio. Nos aseguramos que estén satisfechos con la solución final con reuniones virtuales 
                (las que sean necesarias según los requerimientos del proyecto)<br>
                <b>Tiempo de entrega:</b> Dependiendo de la complejidad del proyecto (plazo estimado por definir tras una evaluación inicial).<br><br>
              </p>
              
              <h3 class="precio">Precio desde: $449.999 ARS</h3>
              <p>(precio personalizado según el alcance del proyecto). Se definirá un presupuesto detallado luego de la evaluación y reunión inicial con el cliente.<br><br>
              <b>¿Cómo solicitar este servicio?</b><br>
              Contáctenos directamente para agendar una reunión y evaluar su proyecto en detalle. Te proporcionaremos una propuesta ajustada a 
              tus necesidades específicas.<br><br>
              <b>Opciones con costo adicional:</b><br>
              Reunión presencial si fuera necesaria o si el cliente lo requiere.<br>
              <b>Hosting y dominio:</b> asesoram﻿iento y configuración de hosting básico, certificado SSL: seguridad para los usuarios.<br>
              <b>Mantenimiento y soporte mensual (opcional):</b> Actualizaciones periódicas, optimización del rendimiento y soporte para asegurar el funcionamiento continuo del proyecto. Desde $15.000 ARS mensuales (según el alcance de las funcionalidades y el tiempo dedicado).
              </p>
  `,
};
// ---------------------------------NOSOTROS----------------------------------------------//
/* contenido LINEA DE TIEMPO  */
const zoomInContents = document.querySelectorAll('.nosotros_lt');

// ------------------------------------EVENTOS-------------------------------------------//
document.addEventListener("DOMContentLoaded", function () {
  // Ocultar preloader después de 1000ms
  setTimeout(() => {
    document.querySelector('.preloader').classList.add("hidden");
    document.querySelector('main').style.display = "flex"; // Mostrar contenido
  }, 1000);
});

window.addEventListener("load", function () {
  ajusteContenedorVertical();
});

window.addEventListener("resize", function () {
  ajusteContenedorVertical();
});

// ----------------------AJUSTE DINAMICO DE LOS CONTENEDORES ABSOLUTOS---------------------------//
function ajusteContenedorVertical() {
  let bordeInferiorServicios = servicios.offsetTop + servicios.offsetHeight;
  document.documentElement.style.setProperty('--nosotros-top', bordeInferiorServicios + "px");

  //le aplica un padding del tamaño del footer +140px para que entre al final
  document.documentElement.style.setProperty('--nosotros-paddingBotton', (footer.offsetHeight + 140) + "px");

  let bordeInferiorNosotros = nosotros.offsetTop + nosotros.offsetHeight;
  let posicionTopFooter = bordeInferiorNosotros - footer.offsetHeight;
  document.documentElement.style.setProperty('--footer-top', posicionTopFooter + "px");

  document.documentElement.style.setProperty('--main-height', bordeInferiorNosotros + "px");
};

// ----------------------ACCION CLIK SOBRE ICONO WHATSAPP---------------------------//
document.querySelector('.whatsapp-icono').addEventListener('click', function () {
  window.location.href = 'https://wa.me/+5491139243159';
});

// ----------------------TODO LO RELACIONADO AL NAV---------------------------//
// Toggle para abrir y cerrar el menú con el icono de la hamburguesa
hamburger.addEventListener("click", () => {
  popup.style.display = 'none';
  hamburger.classList.toggle("active");
  cabeceraTitulo.classList.toggle("desactivado");
  cabeceraSubtitulo.classList.toggle("desactivado");
  navMenu.classList.toggle("active");
  let menuOpen = navMenu.classList.contains("active");
  let newMenuOpenStatus = menuOpen;
  hamburger.setAttribute("aria-expanded", newMenuOpenStatus);
});

// Cerrar el menú cuando se haga clic en un enlace dentro del menú
document.querySelectorAll(".nav-links a").forEach(n =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    cabeceraTitulo.classList.remove("desactivado");
    cabeceraSubtitulo.classList.remove("desactivado");
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  })
);

// Cerrar el menú si se hace clic fuera de él
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove("active");
    cabeceraTitulo.classList.remove("desactivado");
    cabeceraSubtitulo.classList.remove("desactivado");
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }
});

// Cerrar el menú al hacer scroll
window.addEventListener("scroll", () => {
  hamburger.classList.remove("active");
  cabeceraTitulo.classList.remove("desactivado");
  cabeceraSubtitulo.classList.remove("desactivado");
  navMenu.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");
});

// Desplazamiento con efecto al hacer click en los enlaces
document.querySelectorAll('.nav-links a').forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    e.preventDefault(); // Evita el salto instantáneo
    const seccion = document.querySelector(this.getAttribute('href'));
    if (seccion) {
      // Desplazamiento suave
      window.scrollTo({
        top: seccion.offsetTop,
        behavior: "smooth"
      });
    }
  });
});

// ----------------------TODO LO RELACIONADO CON SERVICIOS---------------------------//
// Abre el popup con el contenido correspondiente
leerMasBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const cardId = btn.getAttribute('data-id');
    popupDetails.innerHTML = contenidoExtra[cardId];
    popup.style.display = 'flex';
  });
});

// Cierra el popup
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Cierra el popup si se hace clic fuera de él
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});


// ----------------------TODO LO RELACIONADO CON NOSOTROS---------------------------//
/* contenido LINEA DE TIEMPO  */
const zoomInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'scale(1)';
      entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      ajusteContenedorVertical();
    } 
  });
}, {
  threshold: 0.4 // Umbral al 80%
});


zoomInContents.forEach(content => {
  content.style.opacity = '0';
  content.style.transform = 'scale(0.8)';
  ajusteContenedorVertical();
  zoomInObserver.observe(content);
});