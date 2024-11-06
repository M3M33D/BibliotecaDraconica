const diceElement = document.getElementById('dice');
const rollButton = document.getElementById('rollButton');
const resultElement = document.getElementById('result');
const diceCountElement = document.getElementById('diceCount');
const diceTypeElement = document.getElementById('diceType');
const showIndividualResultsCheckbox = document.getElementById('showIndividualResults');

function rollDice() {
    const diceCount = parseInt(diceCountElement.value) || 1; // Número de dados
    const diceType = parseInt(diceTypeElement.value); // Tipo de dado (D4, D6, D8, etc.)
    const showIndividualResults = showIndividualResultsCheckbox.checked; // Mostrar resultados individuais ou não
    let totalResult = 0;
    let individualResults = [];

    // Rolar os dados
    for (let i = 0; i < diceCount; i++) {
        const randomNumber = Math.floor(Math.random() * diceType) + 1; // Gera número baseado no tipo de dado
        individualResults.push(randomNumber);
        totalResult += randomNumber;
    }

    // Ordenar os resultados em ordem crescente
    individualResults.sort((a, b) => a - b);

    if (showIndividualResults) {
        resultElement.textContent = 'Resultados (em ordem crescente): ' + individualResults.join(', ');
    } else {
        resultElement.textContent = 'Resultado total: ' + totalResult;
    }

    // Exibir o primeiro número no dado visual
    diceElement.textContent = individualResults[0];

    // Animação de rotação simples para o dado visual
    diceElement.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        diceElement.style.transform = 'rotate(0deg)';
    }, 300);
}

// Evento para o botão rolar o dado
rollButton.addEventListener('click', rollDice);
