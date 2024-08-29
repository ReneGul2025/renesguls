// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Obtén todos los enlaces de navegación
    const links = document.querySelectorAll('.navbar a');
    // Obtén todas las secciones
    const sections = document.querySelectorAll('.section');

    // Función para mostrar la sección correspondiente
    function showSection(id) {
        sections.forEach(section => {
            if (section.id === id) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    // Agregar evento de clic a cada enlace
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    // Mostrar la primera sección por defecto
    if (sections.length > 0) {
        sections[0].classList.add('active');
    }
});
