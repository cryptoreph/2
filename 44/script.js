// Простая анимация для демонстрации "живых" данных
document.addEventListener('DOMContentLoaded', () => {
    // Обновление индекса страха и жадности (имитация)
    const fearGreedEl = document.getElementById('fear-greed-value');
    if (fearGreedEl) {
        const values = ['65 (Жадность)', '71 (Жадность)', '58 (Нейтрально)', '73 (Жадность)'];
        let index = 0;
        setInterval(() => {
            index = (index + 1) % values.length;
            fearGreedEl.textContent = values[index];
        }, 5000);
    }

    // Эффект при наведении на карточки
    const cards = document.querySelectorAll('.coin-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.background = 'rgba(255, 255, 255, 0.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.background = 'rgba(255, 255, 255, 0.02)';
        });
    });
});
