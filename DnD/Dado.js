document.addEventListener('DOMContentLoaded', function () {
    // Seleção dos elementos de dados (D4, D6, D8, D10, D12, D20) e botões
    const diceElements = {
        D4: document.getElementById('diceD4'),
        D6: document.getElementById('diceD6'),
        D8: document.getElementById('diceD8'),
        D10: document.getElementById('diceD10'),
        D12: document.getElementById('diceD12'),
        D20: document.getElementById('diceD20')
    };

    const rollButtons = {
        D4: document.getElementById('rollD4Button'),
        D6: document.getElementById('rollD6Button'),
        D8: document.getElementById('rollD8Button'),
        D10: document.getElementById('rollD10Button'),
        D12: document.getElementById('rollD12Button'),
        D20: document.getElementById('rollD20Button')
    };

    const resultElements = {
        D4: document.getElementById('resultD4'),
        D6: document.getElementById('resultD6'),
        D8: document.getElementById('resultD8'),
        D10: document.getElementById('resultD10'),
        D12: document.getElementById('resultD12'),
        D20: document.getElementById('resultD20')
    };

    const diceCountElement = document.getElementById('diceCount');
    const showIndividualResultsCheckbox = document.getElementById('showIndividualResults');

    // Função para rolar um dado
    function rollDice(diceType) {
        const diceCount = parseInt(diceCountElement.value, 10) || 1; // Número de dados (com default de 1)
        const showIndividualResults = showIndividualResultsCheckbox.checked; // Verifica se a opção de resultados individuais está ativa

        // Tipo de dado (exemplo: D4, D6, D8, etc.)
        const diceTypeInt = parseInt(diceType.slice(1), 10);

        if (isNaN(diceCount) || diceCount <= 0) {
            alert("Por favor, insira um número válido de dados.");
            return;
        }

        if (isNaN(diceTypeInt) || diceTypeInt <= 0) {
            alert("Por favor, insira um tipo de dado válido.");
            return;
        }

        let totalResult = 0;
        let individualResults = [];

        // Rolar os dados
        for (let i = 0; i < diceCount; i++) {
            const randomNumber = Math.floor(Math.random() * diceTypeInt) + 1; // Gera número aleatório de 1 até o valor do dado
            individualResults.push(randomNumber);
            totalResult += randomNumber;
        }

        // Exibir resultados individuais ou total
        if (showIndividualResults) {
            // Exibe resultados individuais na área de resultados
            resultElements[diceType].innerHTML = 'Resultados: ' + individualResults.join(', ');
        } else {
            // Caso o checkbox não esteja marcado, limpa os resultados e exibe apenas o total
            resultElements[diceType].textContent = '';
        }

        // Exibir o total ou o primeiro número dentro do dado
        if (diceCount === 1 || !showIndividualResults) {
            // Se for um único dado ou o checkbox não estiver marcado, exibe o total no dado
            diceElements[diceType].textContent = totalResult;
        } else {
            // Caso contrário, exibe apenas o primeiro número dentro do dado
            diceElements[diceType].textContent = individualResults[0];
        }

        // Animação de rotação para o dado
        diceElements[diceType].style.transform = 'rotate(360deg)';
        setTimeout(() => {
            diceElements[diceType].style.transform = 'rotate(0deg)';
        }, 300);
    }

    // Adiciona os ouvintes de evento para cada botão
    Object.keys(rollButtons).forEach(diceType => {
        rollButtons[diceType].addEventListener('click', () => rollDice(diceType));
    });
});
