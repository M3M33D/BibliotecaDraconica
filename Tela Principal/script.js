document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const autocompleteResults = document.getElementById('autocomplete-results');
    const searchForm = document.getElementById('search-form');
    const menuToggle = document.querySelector('.menu-toggle'); // Botão do menu
    const navigation = document.querySelector('.navigation ul'); // Lista de navegação

    // Dados simulados para autocomplete e URLs de redirecionamento
    const data = [
        { label: 'Fichas D&D', url: '/Criacao de personagem/criacao.html' },
        { label: 'Fichas Tormenta20', url: '/Criacao de personagem/tormenta20.html' },
        { label: 'Fichas Ordem Paranormal', url: '/Criacao de personagem/ordem_paranormal.html' },
        { label: 'Fichas Vampiro: A Máscara', url: '/Criacao de personagem/vampiro_mascara.html' },
        { label: 'Descubra Mais D&D', url: '/Descubra Mais/dnd.html' },
        { label: 'Descubra Mais Tormenta20', url: '/Descubra Mais/tormenta20.html' },
        { label: 'Descubra Mais Ordem Paranormal', url: '/Descubra Mais/ordem_paranormal.html' },
        { label: 'Descubra Mais Vampiro: A Máscara', url: '/Descubra Mais/vampiro_mascara.html' }
    ];

    function showAutocompleteResults(results) {
        autocompleteResults.innerHTML = '';
        results.forEach(result => {
            const div = document.createElement('div');
            div.classList.add('autocomplete-result');
            div.textContent = result.label;
            div.addEventListener('click', () => {
                window.location.href = result.url; // Redireciona para a URL correspondente
            });
            autocompleteResults.appendChild(div);
        });
        autocompleteResults.style.display = results.length ? 'block' : 'none';
    }

    function filterData(query) {
        if (!query) {
            return [];
        }
        return data.filter(item => item.label.toLowerCase().includes(query.toLowerCase()));
    }

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        const results = filterData(query);
        showAutocompleteResults(results);
    });

    document.addEventListener('click', (e) => {
        if (!autocompleteResults.contains(e.target) && e.target !== searchInput) {
            autocompleteResults.style.display = 'none';
        }
    });

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value;
        const result = data.find(item => item.label === query);
        if (result) {
            window.location.href = result.url;
        } else {
            alert('Nenhum resultado encontrado.');
        }
    });

    // Menu hamburger
    menuToggle.addEventListener('click', () => {
        navigation.classList.toggle('active'); // Alterna a classe para mostrar/ocultar o menu
    });
});
