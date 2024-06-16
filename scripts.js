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
    });
});
