console.log("Script carregado!");
document.addEventListener("DOMContentLoaded", () => {
  // Load character data and attributes if on the respective pages
  if (document.getElementById("name")) {
    loadCharacterData();
  }
  if (document.getElementById("strength")) {
    loadAttributes();
  }

  // Save character data
  const saveButton = document.getElementById("save-btn");
  if (saveButton) {
    saveButton.addEventListener("click", () => {
      saveCharacterData();
    });
  }

  // Save attributes
  const saveAttributesButton = document.getElementById("save-attributes-btn");
  if (saveAttributesButton) {
    saveAttributesButton.addEventListener("click", () => {
      saveAttributes();
    });
  }

  // Combine and save all data
  const saveAllButton = document.getElementById("save-all-btn");
  if (saveAllButton) {
    saveAllButton.addEventListener("click", () => {
      combineAndSaveAllData();
    });
  }

  // Print all data to console
  const printButton = document.getElementById("print-btn");
  if (printButton) {
    printButton.addEventListener("click", () => {
      printAllData();
    });
  }

  // Add event listener to update sub-race options based on race selection
  const raceSelect = document.getElementById("race");
  if (raceSelect) {
    raceSelect.addEventListener("change", updateSubRaceOptions);
    updateSubRaceOptions(); // Initialize options based on the default or saved race
  }

  /* // Update class options based on level
  const levelInput = document.getElementById("level");
  if (levelInput) {
    levelInput.addEventListener("input", updateClassOptions);
    updateClassOptions(); // Initialize options based on default level
  } */
});

// Update sub-race options based on selected race
function updateSubRaceOptions() {
  const raceSelect = document.getElementById("race");
  const subRaceSelect = document.getElementById("sub-race");

  // Clear existing options
  subRaceSelect.innerHTML = "";

  // Get the selected race
  const selectedRace = raceSelect.value;

  // Show/hide sub-race field based on selected race
  if (selectedRace === "anão") {
    // Add options for "anão"
    const option1 = document.createElement("option");
    option1.value = "1";
    option1.textContent = "Anão de Montanha";

    const option2 = document.createElement("option");
    option2.value = "2";
    option2.textContent = "Anão de Morro";

    subRaceSelect.appendChild(option1);
    subRaceSelect.appendChild(option2);
    subRaceSelect.parentElement.style.display = "block"; // Show sub-race field
  } else if (selectedRace === "elfo") {
    // Add options for "elfo"
    const option1 = document.createElement("option");
    option1.value = "4";
    option1.textContent = "Elfo da Floresta";

    const option2 = document.createElement("option");
    option2.value = "3";
    option2.textContent = "Alto Elfo";

    const option3 = document.createElement("option");
    option3.value = "5";
    option3.textContent = "Drow";

    subRaceSelect.appendChild(option1);
    subRaceSelect.appendChild(option2);
    subRaceSelect.appendChild(option3);
    subRaceSelect.parentElement.style.display = "block"; // Show sub-race field
  } else if (selectedRace === "gnomo") {
    const option1 = document.createElement("option");
    option1.value = "6";
    option1.textContent = "Gnomo da Floresta";

    const option2 = document.createElement("option");
    option2.value = "7";
    option2.textContent = "Gnomo da rocha";

    subRaceSelect.appendChild(option1);
    subRaceSelect.appendChild(option2);
    subRaceSelect.parentElement.style.display = "block"; // Show sub-race field
  } else if (selectedRace === "halfling") {
    const option1 = document.createElement("option");
    option1.value = "10";
    option1.textContent = "Pés Leves";

    const option2 = document.createElement("option");
    option2.value = "11";
    option2.textContent = "Robusto";

    subRaceSelect.appendChild(option1);
    subRaceSelect.appendChild(option2);
    subRaceSelect.parentElement.style.display = "block"; // Show sub-race field
  } else {
    // No options for other races
    const defaultOption = document.createElement("option");
    defaultOption.value = "none";
    defaultOption.textContent = "Selecione uma sub-raça";

    subRaceSelect.appendChild(defaultOption);
    subRaceSelect.parentElement.style.display = "none"; // Hide sub-race field
  }
  console.log(selectedRace);
}

// Save character data to localStorage
function saveCharacterData() {
  // Obter informações do personagem
  const characterData = {
    name: document.getElementById("name").value,
    race: document.getElementById("race").value,
    subRace: document.getElementById("sub-race").value,
    class: document.getElementById("class").value,
    subclass: document.getElementById("subclass").value, // Salvando a subclasse
    background: document.getElementById("background").value,
  };

  // Obter todas as seleções de classe
  const level = parseInt(document.getElementById("level").value, 10);
  const classesByLevel = {};

  for (let i = 1; i <= level; i++) {
    const select = document.getElementById(`class${i}`);
    if (select) {
      classesByLevel[`Level ${i}`] = select.value;
    }
  }

  // Adicionar as seleções de classe ao objeto de dados
  const completeData = {
    ...characterData,
    classesByLevel,
  };

  // Salvar no localStorage
  localStorage.setItem("characterData", JSON.stringify(characterData));
  console.log("Character data saved:", characterData);
}

// Load character data from localStorage
function loadCharacterData() {
  const characterData = JSON.parse(localStorage.getItem("characterData"));
  if (characterData) {
    document.getElementById("name").value = characterData.name || "";
    document.getElementById("race").value = characterData.race || "";
    document.getElementById("sub-race").value = characterData.subRace || "";
    document.getElementById("background").value =
      characterData.background || "";

    // Atualizar opções de sub-raça com base na raça
    updateSubRaceOptions();

    // Carregar classes por nível
    const classesByLevel = characterData.classesByLevel || {};
    const level = Object.keys(classesByLevel).length;
    document.getElementById("level").value = level;

    // Atualizar as opções de classe com base no nível
    updateClassOptions();

    for (let i = 1; i <= level; i++) {
      const select = document.getElementById(`class${i}`);
      if (select) {
        select.value = classesByLevel[`Level ${i}`] || "";
      }
    }
  }
}

// Save attributes to localStorage
function saveAttributes() {
  const attributes = {
    strength: document.getElementById("strength").value,
    dexterity: document.getElementById("dexterity").value,
    constitution: document.getElementById("constitution").value,
    intelligence: document.getElementById("intelligence").value,
    wisdom: document.getElementById("wisdom").value,
    charisma: document.getElementById("charisma").value,
  };
  localStorage.setItem("attributes", JSON.stringify(attributes));
  console.log("Attributes saved:", attributes);
}

// Load attributes from localStorage
function loadAttributes() {
  const attributes = JSON.parse(localStorage.getItem("attributes"));
  if (attributes) {
    document.getElementById("strength").value = attributes.strength || "";
    document.getElementById("dexterity").value = attributes.dexterity || "";
    document.getElementById("constitution").value =
      attributes.constitution || "";
    document.getElementById("intelligence").value =
      attributes.intelligence || "";
    document.getElementById("wisdom").value = attributes.wisdom || "";
    document.getElementById("charisma").value = attributes.charisma || "";
  }
}

// Combine and save all data
function combineAndSaveAllData() {
  const characterData = JSON.parse(localStorage.getItem("characterData"));
  const attributes = JSON.parse(localStorage.getItem("attributes"));

  const allData = {
    characterData: characterData || {},
    attributes: attributes || {},
  };

  localStorage.setItem("allCharacterData", JSON.stringify(allData));
  console.log("All data saved:", allData);
}

// Print all data to the console
function printAllData() {
  const characterData = JSON.parse(localStorage.getItem("characterData"));
  const attributes = JSON.parse(localStorage.getItem("attributes"));
  const allCharacterData = JSON.parse(localStorage.getItem("allCharacterData"));

  console.log("Character Data:", characterData || "No character data found.");
  console.log("Attributes:", attributes || "No attributes found.");
  console.log("All Data:", allCharacterData || "No combined data found.");
}

function updateClassOptions() {
  const level = parseInt(document.getElementById("level").value, 10);
  const classSelectionDiv = document.getElementById("class-selection");

  // Verifique se classSelectionDiv existe
  if (!classSelectionDiv) {
    /* console.error("Element with ID 'class-selection' not found."); */
    return; // Sai da função se o elemento não existir
  }

  classSelectionDiv.innerHTML = ""; // Limpa opções existentes

  for (let i = 1; i <= level; i++) {
    const label = document.createElement("label");
    label.textContent = `Classe para o Nível ${i}:`;
    label.setAttribute("for", `class${i}`);

    const select = document.createElement("select");
    select.id = `class${i}`;
    select.name = `class${i}`;
    select.autocomplete = "off";

    // Adiciona opções de classe
    const classes = [
      { value: "guerreiro", text: "Guerreiro" },
      { value: "mago", text: "Mago" },
      { value: "ladrão", text: "Ladrão" },
      { value: "clérigo", text: "Clérigo" },
      { value: "bárbaro", text: "Bárbaro" },
      { value: "feiticeiro", text: "Feiticeiro" },
      { value: "paladino", text: "Paladino" },
      { value: "druida", text: "Druida" },
      { value: "monge", text: "Monge" },
      { value: "caçador", text: "Caçador" },
      { value: "bardo", text: "Bardo" },
      { value: "bruxo", text: "Bruxo" },
    ];

    classes.forEach((cls) => {
      const option = document.createElement("option");
      option.value = cls.value;
      option.textContent = cls.text;
      select.appendChild(option);
    });

    classSelectionDiv.appendChild(label);
    classSelectionDiv.appendChild(select);
    classSelectionDiv.appendChild(document.createElement("br"));
  }

  // Log class options
  console.log("Class options updated based on level:", level);
}

// Atualiza as opções de subclasses
function updateSubClassOptions() {
  const levelSelect = document.getElementById("level");
  const classSelect = document.getElementById("class");
  const subClassSelect = document.getElementById("subclass");
  const subclassGroup = document.getElementById("subclass-group");

  // Limpa as opções existentes
  subClassSelect.innerHTML = "";

  // Obtém o nível e a classe selecionados
  const selectedLevel = Number(levelSelect.value);
  const selectedClass = classSelect.value;
  const selectedSubClass = subClassSelect.value;
  // Mostra/esconde o campo de subclasse com base no nível e na classe
  if (selectedLevel > 0) {
    if (selectedLevel >= 3 && selectedClass === "guerreiro") {
      subclassGroup.style.display = "block";
      const option1 = document.createElement("option");
      option1.value = "1";
      option1.textContent = "Campeão";

      const option2 = document.createElement("option");
      option2.value = "2";
      option2.textContent = "Cavaleiro Arcano";

      const option3 = document.createElement("option");
      option3.value = "3";
      option3.textContent = "Mestre de Batalha";

      subClassSelect.appendChild(option1);
      subClassSelect.appendChild(option2);
      subClassSelect.appendChild(option3);
    } else if (selectedLevel >= 3 && selectedClass === "mago") {
      subclassGroup.style.display = "block";
      const option1 = document.createElement("option");
      option1.value = "4";
      option1.textContent = "Escola de Abjuração";

      const option2 = document.createElement("option");
      option2.value = "5";
      option2.textContent = "Escola de Adivinhação";

      const option3 = document.createElement("option");
      option3.value = "6";
      option3.textContent = "Escola de Conjuração";

      const option4 = document.createElement("option");
      option4.value = "7";
      option4.textContent = "Escola de Encantamento";

      const option5 = document.createElement("option");
      option5.value = "8";
      option5.textContent = "Escola de Evocação";

      const option6 = document.createElement("option");
      option6.value = "9";
      option6.textContent = "Escola de Ilusão";

      const option7 = document.createElement("option");
      option7.value = "10";
      option7.textContent = "Escola de Necromancia";

      const option8 = document.createElement("option");
      option8.value = "11";
      option8.textContent = "Escola de Transmutação";

      subClassSelect.appendChild(option1);
      subClassSelect.appendChild(option2);
      subClassSelect.appendChild(option3);
      subClassSelect.appendChild(option4);
      subClassSelect.appendChild(option5);
      subClassSelect.appendChild(option6);
      subClassSelect.appendChild(option7);
      subClassSelect.appendChild(option8);
    } else if (selectedLevel >= 1 && selectedClass === "clérigo") {
      subclassGroup.style.display = "block";
      const option1 = document.createElement("option");
      option1.value = "12";
      option1.textContent = "Domínio do Conhecimento";

      const option2 = document.createElement("option");
      option2.value = "13";
      option2.textContent = "Domínio do Enganação";

      const option3 = document.createElement("option");
      option3.value = "14";
      option3.textContent = "Domínio da Guerra";

      const option4 = document.createElement("option");
      option4.value = "15";
      option4.textContent = "Domínio da Luz";

      const option5 = document.createElement("option");
      option5.value = "16";
      option5.textContent = "Domínio da Natureza";

      const option6 = document.createElement("option");
      option6.value = "17";
      option6.textContent = "Domínio da Tempestade";

      const option7 = document.createElement("option");
      option7.value = "18";
      option7.textContent = "Domínio da Vida";

      subClassSelect.appendChild(option1);
      subClassSelect.appendChild(option2);
      subClassSelect.appendChild(option3);
      subClassSelect.appendChild(option4);
      subClassSelect.appendChild(option5);
      subClassSelect.appendChild(option6);
      subClassSelect.appendChild(option7);
    } else if (selectedLevel >= 3 && selectedClass === "paladino") {
      subclassGroup.style.display = "block";
      const option1 = document.createElement("option");
      option1.value = "19";
      option1.textContent = "Juramento de Devoção";

      const option2 = document.createElement("option");
      option2.value = "20";
      option2.textContent = "Juramento dos Anciões";

      const option3 = document.createElement("option");
      option3.value = "21";
      option3.textContent = "Juramento de Vingança";

      subClassSelect.appendChild(option1);
      subClassSelect.appendChild(option2);
      subClassSelect.appendChild(option3);
    } else if (selectedLevel >= 3 && selectedClass === "bárbaro") {
      subclassGroup.style.display = "block";
      const option1 = document.createElement("option");
      option1.value = "22"; // Mudado para valor único
      option1.textContent = "Caminho do Furioso";

      const option2 = document.createElement("option");
      option2.value = "23"; // Mudado para valor único
      option2.textContent = "Caminho do Guerreiro Totêmico";

      subClassSelect.appendChild(option1);
      subClassSelect.appendChild(option2);
    } else if (selectedLevel >= 3 && selectedClass === "ladrão") {
      subclassGroup.style.display = "block";
      const option1 = document.createElement("option");
      option1.value = "24"; // Mudado para valor único
      option1.textContent = "Assassino";

      const option2 = document.createElement("option");
      option2.value = "25"; // Mudado para valor único
      option2.textContent = "Ladrão";

      const option3 = document.createElement("option");
      option3.value = "26"; // Mudado para valor único
      option3.textContent = "Trapaceiro Arcano";

      subClassSelect.appendChild(option1);
      subClassSelect.appendChild(option2);
      subClassSelect.appendChild(option3);
    } else if (selectedLevel >= 3 && selectedClass === "cacador") {
      subclassGroup.style.display = "block";
      const option1 = document.createElement("option");
      option1.value = "27"; // Mudado para valor único
      option1.textContent = "Conclave da Besta";

      const option2 = document.createElement("option");
      option2.value = "28"; // Mudado para valor único
      option2.textContent = "Conclave do Caçador";

      const option3 = document.createElement("option");
      option3.value = "29"; // Mudado para valor único
      option3.textContent = "Conclave do Rastreador Subterrâneo";

      subClassSelect.appendChild(option1);
      subClassSelect.appendChild(option2);
      subClassSelect.appendChild(option3);
    } else if (selectedLevel >= 3 && selectedClass === "monge") {
      subclassGroup.style.display = "block";
      const option1 = document.createElement("option");
      option1.value = "30"; // Mudado para valor único
      option1.textContent = "Caminho da Mão Aberta";

      const option2 = document.createElement("option");
      option2.value = "31"; // Mudado para valor único
      option2.textContent = "Caminho da Sombra";

      const option3 = document.createElement("option");
      option3.value = "32"; // Mudado para valor único
      option3.textContent = "Caminho dos Quatro Elementos";

      subClassSelect.appendChild(option1);
      subClassSelect.appendChild(option2);
      subClassSelect.appendChild(option3);
    } else if (selectedLevel >= 3 && selectedClass === "druida") {
      subclassGroup.style.display = "block";
      const option1 = document.createElement("option");
      option1.value = "33"; // Mudado para valor único
      option1.textContent = "Círculo da Terra";

      const option2 = document.createElement("option");
      option2.value = "34"; // Mudado para valor único
      option2.textContent = "Círculo da Lua";

      subClassSelect.appendChild(option1);
      subClassSelect.appendChild(option2);
    } else if (selectedLevel >= 3 && selectedClass === "feiticeiro") {
      subclassGroup.style.display = "block";
      const option1 = document.createElement("option");
      option1.value = "35"; // Mudado para valor único
      option1.textContent = "Linhagem Dracônica";

      const option2 = document.createElement("option");
      option2.value = "36"; // Mudado para valor único
      option2.textContent = "Magia Selvagem";

      subClassSelect.appendChild(option1);
      subClassSelect.appendChild(option2);
    }

    // Mostra o grupo de subclasses
  } else {
    subclassGroup.style.display = "none"; // Esconde o grupo de subclasses
  }
}
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM carregado!"); // Confirme que o DOM foi carregado

  const button = document.getElementById("save-pericias-btn");
  console.log("Button encontrado:", button); // Verifique se o botão foi encontrado

  if (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Previne o envio do formulário
      console.log("Botão clicado!"); // Verifique se o evento de clique é disparado
      saveCheckboxes(); // Salva as checkboxes no localStorage
      // window.location.href = "finalizacao.html"; // Navegação para a próxima página
    });
  } else {
    console.log("Botão não encontrado!");
  }
});

// Função para carregar o estado das checkboxes do localStorage
function loadCheckboxes() {
  const skills = document.querySelectorAll('input[name="skills"]');
  const savedSkills = JSON.parse(localStorage.getItem("selectedSkills")) || [];

  skills.forEach((skill) => {
    skill.checked = savedSkills.includes(skill.id);
  });
}

// Função para salvar os IDs das checkboxes selecionadas em uma string JSON
function saveCheckboxes() {
  const skills = document.querySelectorAll('input[name="skills"]');
  const selectedSkills = [];

  skills.forEach((skill) => {
    if (skill.checked) {
      selectedSkills.push(skill.id); // Armazena o ID das perícias selecionadas
    }
  });

  // Converte o array de IDs para uma string JSON e salva no localStorage
  const selectedSkillsJSON = JSON.stringify(selectedSkills);
  localStorage.setItem("selectedSkills", selectedSkillsJSON);

  // Log das perícias salvas
  console.log("Perícias salvas:", selectedSkillsJSON);
}

// Carrega o estado das checkboxes quando a página é carregada
document.addEventListener("DOMContentLoaded", loadCheckboxes);

document
  .getElementById("class")
  .addEventListener("change", updateSubClassOptions);

// Adicione event listeners para atualizar as opções de classe e subclasse
document.getElementById("level").addEventListener("input", () => {
  updateClassOptions();
  updateSubClassOptions(); // Atualiza subclasses quando o nível muda
});

document
  .getElementById("class")
  .addEventListener("change", updateSubClassOptions);

// Assegure-se de chamar loadCharacterData após o DOM estar carregado
document.addEventListener("DOMContentLoaded", loadCharacterData);

// Log selected class for each level
function logClassSelections() {
  const level = parseInt(document.getElementById("level").value, 10);
  const classSelections = {};

  for (let i = 1; i <= level; i++) {
    const select = document.getElementById(`class${i}`);
    if (select) {
      classSelections[`Level ${i}`] = select.value;
    }
  }

  console.log("Current class selections by level:", classSelections);
}

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("save-btn");
  if (button) {
    button.addEventListener("click", function () {
      const name = document.getElementById("name").value;
      const level = document.getElementById("level").value;
      const characterClass = document.getElementById("class").value;
      const subclass = document.getElementById("subclass").value;
      const race = document.getElementById("race").value;
      const subRace = document.getElementById("sub-race").value;
      const background = document.getElementById("background").value;

      // Armazenar dados no localStorage
      localStorage.setItem("characterName", name);
      localStorage.setItem("characterLevel", level);
      localStorage.setItem("characterClass", characterClass);
      localStorage.setItem("subclass", subclass);
      localStorage.setItem("characterRace", race);
      localStorage.setItem("characterSubRace", subRace);
      localStorage.setItem("characterBackground", background);

      // Navegar para a próxima página
      /* window.location.href = "attributes.html"; */
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("save-attributes-btn");
  if (button) {
    button.addEventListener("click", function () {
      const strength = document.getElementById("strength").value;
      const constitution = document.getElementById("constitution").value;
      const dexterity = document.getElementById("dexterity").value;
      const intelligence = document.getElementById("intelligence").value;
      const wisdom = document.getElementById("wisdom").value;
      const charisma = document.getElementById("charisma").value;

      // Armazenar atributos no localStorage
      localStorage.setItem("characterStrength", strength);
      localStorage.setItem("characterConstitution", constitution);
      localStorage.setItem("characterDexterity", dexterity);
      localStorage.setItem("characterIntelligence", intelligence);
      localStorage.setItem("characterWisdom", wisdom);
      localStorage.setItem("characterCharisma", charisma);

      // Navegar para a próxima página
      window.location.href = "pericias.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("save-btn");
  if (button) {
    button.addEventListener("click", function () {
      // Coletar dados do localStorage
      const name = localStorage.getItem("characterName");
      const level = localStorage.getItem("characterLevel");
      const characterClass = localStorage.getItem("characterClass");
      const subclass = localStorage.getItem("subclass");
      const race = localStorage.getItem("characterRace");
      const background = localStorage.getItem("characterBackground");
      const strength = localStorage.getItem("characterStrength");
      const constitution = localStorage.getItem("characterConstitution");
      const dexterity = localStorage.getItem("characterDexterity");
      const intelligence = localStorage.getItem("characterIntelligence");
      const wisdom = localStorage.getItem("characterWisdom");
      const charisma = localStorage.getItem("characterCharisma");

      // Montar o conteúdo do arquivo
      const content = `Nome: ${name}\nNível: ${level}\nClasse: ${characterClass}\nSubclasse: ${subclass}\nRaça: ${race}\nAntecedente: ${background}\nForça: ${strength}\nConstituição: ${constitution}\nDestreza: ${dexterity}\nInteligencia: ${intelligence}\nSabedoria: ${wisdom}\nCarisma ${charisma}\n`;
    });
  }
});
