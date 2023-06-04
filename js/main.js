/* Menu Responsive */
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});

window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    var distanceFromTop = navbar.offsetTop;

    if (window.pageYOffset > distanceFromTop) {
        navbar.classList.remove('static');
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
        navbar.classList.add('static');
    }
});

/* Titulo desplazable */
function toggleContent() {
    var content = document.getElementById("content");
    content.classList.toggle("expand");
}

/* Formulario principal */