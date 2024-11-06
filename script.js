document.addEventListener('DOMContentLoaded', () => {
    const visitCounter = document.querySelector('.visit-counter');

    function animateVisitCounter() {
        visitCounter.classList.remove('bounce-animation');
        void visitCounter.offsetWidth; // Forzar reflow para reiniciar la animación
        visitCounter.classList.add('bounce-animation');
    }

    // Llama a la función para activar la animación al cargar
    animateVisitCounter();
});
