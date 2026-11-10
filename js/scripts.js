document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }

    const form = document.querySelector('form');
    const feedbackDiv = document.getElementById('form-feedback');

    if (form && feedbackDiv) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const nome = document.getElementById('nome')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const mensagem = document.getElementById('mensagem')?.value.trim();

            if (!nome || !email || !mensagem) {
                feedbackDiv.className = 'feedback-message error';
                feedbackDiv.textContent = 'Por favor, preencha todos os campos obrigatórios!';
                feedbackDiv.style.display = 'block';
                return;
            }

            feedbackDiv.className = 'feedback-message success';
            feedbackDiv.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
            feedbackDiv.style.display = 'block';

            form.reset();
        });
    }
});