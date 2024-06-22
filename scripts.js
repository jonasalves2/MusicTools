// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);
        
        // Você pode adicionar lógica para enviar os dados para um servidor aqui
        form.reset();
        // Adicione no seu arquivo scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselSlide = document.querySelector('.carousel-slide');
    const artistCards = document.querySelectorAll('.artist-card');
    
    let currentIndex = 0;
    const totalCards = artistCards.length;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalCards - 1;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < totalCards - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
});
