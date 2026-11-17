document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeToggleBtn) themeToggleBtn.setAttribute('aria-pressed', 'true');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark-mode');
            themeToggleBtn.setAttribute('aria-pressed', String(isDark));
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
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
