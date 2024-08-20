function checkAnswer() {
    const options = document.querySelectorAll('input[name="answer"]');
    let correctAnswerSelected = false;
    options.forEach(option => {
        if (option.checked && option.value === "1") {
            correctAnswerSelected = true;
        }
    });

    const container = document.getElementById('quiz-container');
    const result = document.getElementById('result');

    if (correctAnswerSelected) {
        container.classList.add('correct');
        container.classList.remove('incorrect');
        result.textContent = 'Resposta correta!';
        result.style.color = 'black';
    } else {
        container.classList.add('incorrect');
        container.classList.remove('correct');
        result.textContent = 'Resposta incorreta!';
        result.style.color = 'black';
    }
}

document.getElementById('menu-toggle').addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
});
