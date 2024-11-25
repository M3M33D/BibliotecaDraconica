// Objeto contendo os content blocks para cada nível
const magicData = {
    0:[
        {
            title: "Amizade",
            description: "Você estabelece uma conexão amigável com uma criatura.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Ataque Certeiro",
            description: "Você torna seu próximo ataque certeiro, ignorando a cobertura.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Consertar",
            description: "Você faz reparos rápidos em objetos quebrados.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Globos de Luz",
            description: "Você cria até três globos de luz que iluminam uma área.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Ilusão Menor",
            description: "Você cria uma pequena ilusão visual ou sonora.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Luz",
            description: "Você cria uma luz brilhante que ilumina uma área.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Mãos Mágicas",
            description: "Você cria uma mão mágica que pode mover objetos leves.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Mensagem",
            description: "Você envia uma mensagem curta para uma criatura que possa ouvir você.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Prestidigitação",
            description: "Você cria efeitos mágicos menores, como limpar, acender ou apagar coisas.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Proteção contra Lâminas",
            description: "Você cria uma barreira mágica que impede que lâminas causam dano.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Zombaria Viciosa",
            description: "Você zombaria de uma criatura, causando dor mental.",
            dice: "1d4 de dano psíquico."
        },
        {
            title: "Rajada de Veneno",
            description: "Você dispara uma rajada de veneno que causa dano a inimigos.",
            dice: "1d12 de dano venenoso."
        },
        {
            title: "Rajada Mística",
            description: "Você lança uma rajada mágica que causa dano a uma criatura.",
            dice: "1d6 de dano mágico."
        },
        {
            title: "Toque Arrepiante",
            description: "Você toca uma criatura e a assusta, causando dano necrótico.",
            dice: "1d6 de dano necrótico."
        },
        {
            title: "Chama Sagrada",
            description: "Você invoca uma chama que causa dano radiante.",
            dice: "1d8 de dano radiante."
        },
        {
            title: "Estabilizar",
            description: "Você estabiliza uma criatura morrendo, impedindo-a de cair inconsciente.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Orientação",
            description: "Você concede vantagem em um teste de habilidade para uma criatura.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Resistência",
            description: "Você concede resistência contra um tipo de dano a uma criatura.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Taumaturgia",
            description: "Você cria efeitos sobrenaturais menores, como fazer som ou mudar a aparência.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Bordão Místico",
            description: "Você cria um bastão mágico que causa dano ao inimigo.",
            dice: "1d8 de dano mágico."
        },
        {
            title: "Chicote de Espinhos",
            description: "Você invoca um chicote de espinhos que causa dano e restringe a movimentação.",
            dice: "1d6 de dano perfurante."
        },
        {
            title: "Criar Chamas",
            description: "Você cria uma chama que pode ser usada como arma.",
            dice: "1d8 de dano de fogo."
        },
        {
            title: "Druidismo",
            description: "Você transforma matéria em algo que a natureza possa usar.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Espirro Ácido",
            description: "Você dispara um jato de ácido que causa dano em um inimigo.",
            dice: "1d6 de dano ácido."
        },
        {
            title: "Raio de Fogo",
            description: "Você dispara um raio de fogo que causa dano em uma criatura.",
            dice: "1d10 de dano de fogo."
        },
        {
            title: "Raio de Gelo",
            description: "Você dispara um raio de gelo que causa dano e reduz a velocidade.",
            dice: "1d8 de dano de gelo."
        },
        {
            title: "Toque Chocante",
            description: "Você dá um toque elétrico que causa dano a uma criatura.",
            dice: "1d8 de dano elétrico."
        }
    ],
    1: [
        {
            title: "Cura Leve",
            description: "Restaura 1d8 pontos de vida de um aliado.",
            dice: "1d8 de dano de cura."
        },
        {
            title: "Raio de Fogo",
            description: "Lança um feixe de fogo que causa 1d10 de dano.",
            dice: "1d10 de dano de fogo."
        },
        {
            title: "Escudo Arcano",
            description: "Adiciona +5 à Classe de Armadura como uma reação.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Amizade Animal",
            description: "Você pode comunicar-se com animais e pedir-lhes simples instruções.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Compreender Idiomas",
            description: "Você consegue entender e se comunicar com qualquer idioma falado ou escrito.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Curar Ferimentos",
            description: "Você restaura uma quantidade de pontos de vida igual a 1d8 + seu modificador de habilidade de conjuração.",
            dice: "1d8 + modificador de habilidade de conjuração."
        },
        {
            title: "Detectar Magia",
            description: "Você pode perceber a presença de magia em uma área ou objeto.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Disfarçar-se",
            description: "Você cria uma ilusão visual que faz você ou outra criatura se disfarçar.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Enfeitiçar Pessoa",
            description: "Você influencia uma pessoa em sua linha de visão, fazendo-a se tornar amigável.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Escrita Ilusória",
            description: "Você cria uma ilusão de texto ou símbolos que parecem escritos, mas não são reais.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Falar com Animais",
            description: "Você pode conversar com animais, permitindo-lhes compartilhar informações simples.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Fogo das Fadas",
            description: "Você cria luzes mágicas que iluminam uma área ou causam dano.",
            dice: "1d4 de dano de fogo."
        },
        {
            title: "Heroísmo",
            description: "Você concede uma sensação de coragem a uma criatura, fazendo com que ela fique imune a medo e ganhe pontos de vida temporários.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Identificação",
            description: "Você identifica as propriedades mágicas de um objeto.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Imagem Silenciosa",
            description: "Você cria uma imagem ilusória que não faz som, mas pode enganar os sentidos.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Onda Trovejante",
            description: "Você gera uma onda de som trovejante que causa dano a inimigos ao seu redor.",
            dice: "2d6 de dano de trovoada."
        },
        {
            title: "Palavra Curativa",
            description: "Você cura uma criatura à sua escolha, restaurando uma quantidade de pontos de vida igual a 1d4 + seu modificador de habilidade de conjuração.",
            dice: "1d4 + modificador de habilidade de conjuração."
        },
        {
            title: "Passos Longos",
            description: "Você aumenta a velocidade de movimento de uma criatura, fazendo-a andar mais rápido.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Perdição",
            description: "Você coloca um feitiço de azar em uma criatura, fazendo com que ela tenha desvantagem em testes de ataque ou resistência.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Riso Histérico de Tasha",
            description: "Você faz uma criatura rir incontrolavelmente, incapacitando-a temporariamente.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Servo Invisível",
            description: "Você cria uma força invisível que pode realizar tarefas simples por você, como carregar ou abrir portas.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Sono",
            description: "Você coloca um grupo de criaturas em um estado de sono mágico, fazendo com que fiquem inconscientes por um tempo.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Sussurros Dissonantes",
            description: "Você causa uma dor mental em uma criatura, forçando-a a sofrer dano psíquico.",
            dice: "3d6 de dano psíquico."
        }
    ],
    2: [
        {
            title: "Acalmar Emoções",
            description: "Você acalma uma criatura, removendo medos ou hostilidade.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Aprimorar Habilidade",
            description: "Aumenta temporariamente a habilidade de uma criatura.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Arrombar",
            description: "Você força a abertura de uma fechadura ou destrói um objeto.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Boca Encantada",
            description: "Você cria uma boca mágica que pode falar ou fazer ruídos.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Cativar",
            description: "Você atrai a atenção de uma criatura para realizar um comando simples.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Cegueira/Surdez",
            description: "Você cega ou surda uma criatura, tornando-a incapaz de perceber certos estímulos.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Coroa da Loucura",
            description: "Você impõe um feitiço de confusão mental em uma criatura.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Esquentar Metal",
            description: "Você aquece metal até ele ficar incandescente, causando dano.",
            dice: "2d8 de dano de fogo."
        },
        {
            title: "Despedaçar",
            description: "Você cria uma força mágica que destrói ou danifica um objeto.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Escuridão",
            description: "Você cria uma esfera de escuridão que obscurece a visão.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Imobilizar Pessoa",
            description: "Você paralisa uma criatura, impedindo-a de se mover.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Invisibilidade",
            description: "Você torna uma criatura invisível por um período limitado.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Nuvem de Adagas",
            description: "Você cria uma nuvem de adagas que causa dano e pode ferir os inimigos.",
            dice: "4d4 de dano cortante."
        },
        {
            title: "Passo Nebuloso",
            description: "Você cria uma névoa que permite mover-se silenciosamente.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Patas de Aranha",
            description: "Você concede habilidades de escalada a uma criatura.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Raio do Enfraquecimento",
            description: "Você enfraquece uma criatura, fazendo com que tenha desvantagem em ataques.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Reflexos",
            description: "Você melhora os reflexos de uma criatura, aumentando sua agilidade.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Sugestão",
            description: "Você faz uma sugestão mágica para uma criatura seguir.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Teia",
            description: "Você cria uma teia mágica que restringe os movimentos de uma criatura.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Tranca Arcana",
            description: "Você cria uma tranca mágica que impede a abertura de portas ou cofres.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Ver o Invisível",
            description: "Você pode ver criaturas e objetos invisíveis.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Ajuda",
            description: "Você fornece assistência a uma criatura, conferindo-lhe vantagem em suas ações.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Arma Espiritual",
            description: "Você cria uma arma espiritual que pode atacar inimigos à distância.",
            dice: "1d8 de dano mágico."
        },
        {
            title: "Augúrio",
            description: "Você recebe uma resposta divina para perguntas sobre o futuro (ritual).",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Chama Continua",
            description: "Você cria uma chama que não se apaga, iluminando a área.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Encontrar Armadilhas",
            description: "Você detecta armadilhas, magia ou elementos perigosos em uma área.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Localizar Objeto",
            description: "Você encontra a localização de um objeto específico.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Oração Curativa",
            description: "Você cura uma criatura, restaurando uma quantidade de pontos de vida.",
            dice: "2d8 + seu modificador de habilidade de conjuração."
        },
        {
            title: "Proteção contra Veneno",
            description: "Você concede resistência a venenos para uma criatura.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Repouso Tranquilo",
            description: "Você permite que uma criatura recupere pontos de vida mais eficientemente (ritual).",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Restauração Menor",
            description: "Você cura uma condição como cegueira ou paralisia.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Silêncio",
            description: "Você cria uma área onde nenhum som pode ser ouvido (ritual).",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Vínculo Protetor",
            description: "Você conecta-se a uma criatura para protegê-la de danos.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Zona da Verdade",
            description: "Você cria uma área onde as mentiras não podem ser ditas.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Crescer Espinhos",
            description: "Você faz com que espinhos cresçam de um objeto ou do solo.",
            dice: "2d6 de dano perfurante."
        },
        {
            title: "Esfera Flamejante",
            description: "Você cria uma esfera de fogo que causa dano em inimigos próximos.",
            dice: "2d6 de dano de fogo."
        },
        {
            title: "Lâmina Flamejante",
            description: "Você cria uma lâmina de fogo que pode ser usada como arma.",
            dice: "3d6 de dano de fogo."
        },
        {
            title: "Localizar Animais ou Plantas",
            description: "Você encontra animais ou plantas específicos em um determinado raio (ritual).",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Lufada de Vento",
            description: "Você cria uma rajada de vento que empurra objetos ou criaturas.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Mensageiro Animal",
            description: "Você envia uma mensagem por meio de um animal (ritual).",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Passos sem Pegadas",
            description: "Você cria uma magia que torna os passos de uma criatura inaudíveis.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Pele de Árvore",
            description: "Você torna uma criatura com a pele parecida com a de uma árvore, aumentando sua resistência.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Raio Lunar",
            description: "Você dispara um raio de energia lunar que causa dano a inimigos.",
            dice: "3d10 de dano radiante."
        },
        {
            title: "Sentido Bestial",
            description: "Você confere à criatura sentidos aprimorados, como visão ou audição.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Visão no Escuro",
            description: "Você concede a uma criatura a habilidade de enxergar no escuro por um tempo limitado.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Alterar-se",
            description: "Você altera sua aparência física temporariamente.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Arma Mágica",
            description: "Você cria uma arma mágica que pode ser usada para ataques.",
            dice: "1d6 de dano mágico."
        },
        {
            title: "Levitação",
            description: "Você levita uma criatura ou objeto para cima ou para baixo.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Nublar",
            description: "Você cria uma névoa que obscurece a visão.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Raio Ardente",
            description: "Você dispara um raio que causa dano de fogo a inimigos.",
            dice: "3d10 de dano de fogo."
        },
        {
            title: "Teia",
            description: "Você cria uma teia que restringe o movimento de uma criatura.",
            dice: null // Não há rolagem de dados necessária.
        }
    ],
    3: [
        {
            title: "Ampliar Plantas",
            description: "Faz as plantas ao redor crescerem rapidamente, criando obstáculos ou cobrindo áreas.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Andar na Água",
            description: "Permite que uma criatura caminhe sobre a água como se fosse terreno sólido (ritual).",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Animar Mortos",
            description: "Levanta cadáveres para servir como seus lacaios mortos-vivos.",
            dice: null // Não há rolagem direta de dados necessária.
        },
        {
            title: "Arma Elemental",
            description: "Encanta uma arma, permitindo que cause dano elemental adicional.",
            dice: "Dano adicional varia dependendo do elemento (ex: 1d4 para certos elementos)."
        },
        {
            title: "Aura de Vitalidade",
            description: "Emite uma aura curativa que restaura pontos de vida de aliados próximos.",
            dice: "2d6 pontos de vida restaurados por turno."
        },
        {
            title: "Bola de Fogo",
            description: "Explode em uma área, causando dano de fogo massivo.",
            dice: "8d6 de dano de fogo."
        },
        {
            title: "Clarividência",
            description: "Permite que você veja ou ouça em um local distante.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Conjurar Animais",
            description: "Invoca animais para ajudá-lo em combate ou tarefas.",
            dice: null // Não há rolagem de dados, os animais têm seus próprios ataques.
        },
        {
            title: "Conjurar Rajada",
            description: "Conjura uma explosão de energia que atinge inimigos em área.",
            dice: "Dano variável dependendo do nível (exemplo típico: 4d8 de dano)."
        },
        {
            title: "Contramágica",
            description: "Interrompe a conjuração de uma magia inimiga.",
            dice: "Teste de habilidade (10 + o nível da magia interrompida)."
        },
        {
            title: "Criar Alimentos",
            description: "Gera comida suficiente para alimentar várias criaturas por um dia.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Dificultar Detecção",
            description: "Torna uma criatura ou objeto mais difícil de ser detectado magicamente.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Destruição Cegante",
            description: "Emite uma explosão de luz sagrada que causa dano radiante.",
            dice: "6d8 de dano radiante."
        },
        {
            title: "Dissipar Magia",
            description: "Remove efeitos mágicos de uma criatura, objeto ou área.",
            dice: "Teste de habilidade (10 + o nível da magia dissipado, se for maior que 3)."
        },
        {
            title: "Enviar Mensagem",
            description: "Permite que você envie uma mensagem a qualquer distância, recebendo uma resposta.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Espíritos Guardiões",
            description: "Conjura espíritos que protegem aliados e causam dano a inimigos.",
            dice: "3d8 de dano radiante ou necrótico (dependendo da escolha do conjurador)."
        },
        {
            title: "Falar com os Mortos",
            description: "Permite que um cadáver responda a perguntas limitadas.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Falar com Plantas",
            description: "Permite que você se comunique com plantas e entenda informações simples.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Flecha Relampejante",
            description: "Dispara uma flecha mágica que causa dano elétrico adicional.",
            dice: "4d8 de dano elétrico no impacto e 2d8 a criaturas próximas."
        },
        {
            title: "Forma Gasosa",
            description: "Transforma uma criatura em uma forma gasosa, permitindo movimentação livre.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Forjar Morte",
            description: "Faz uma criatura parecer morta para evitar detecção ou ataques (ritual).",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Glifo de Vigilância",
            description: "Conjura um glifo que dispara um efeito mágico quando ativado.",
            dice: "Dano típico: 5d8 de dano explosivo, mas varia com o efeito escolhido."
        },
        {
            title: "Idiomas",
            description: "Permite que você entenda todas as línguas faladas ou escritas.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Imagem Maior",
            description: "Cria uma ilusão tridimensional realista que pode enganar os sentidos.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Lentidão",
            description: "Reduz a velocidade e as ações de várias criaturas em uma área.",
            dice: "As criaturas afetadas fazem testes de resistência de Sabedoria."
        },
        {
            title: "Luz do Dia",
            description: "Emite luz brilhante que pode dissipar escuridão mágica.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Manto do Cruzado",
            description: "Concede bônus de ataque e dano radiante a aliados próximos.",
            dice: "1d4 de dano radiante adicional."
        },
        {
            title: "Medo",
            description: "Causa medo em criaturas, forçando-as a fugir.",
            dice: "Teste de resistência de Sabedoria para evitar o efeito."
        },
        {
            title: "Montaria Fantasmagórica",
            description: "Conjura uma montaria mágica que pode atravessar terrenos difíceis (ritual).",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Muralha de Vento",
            description: "Cria uma barreira de vento que protege contra projéteis e gases.",
            dice: "3d8 de dano de concussão a quem atravessa a barreira."
        },
        {
            title: "Padrão Hipnótico",
            description: "Conjura um padrão de luzes coloridas que hipnotiza criaturas em uma área.",
            dice: "Teste de resistência de Sabedoria para evitar o efeito."
        },
        {
            title: "Revivificar",
            description: "Ressuscita uma criatura morta recentemente com um número limitado de pontos de vida.",
            dice: "Restaura pontos de vida, dependendo do DM."
        },
        {
            title: "Voo",
            description: "Permite que uma criatura voe por um período limitado.",
            dice: null // Não há rolagem de dados necessária.
        }
    ],
    4: [
        {
            title: "Confusão",
            description: "Você embaralha as mentes das criaturas, fazendo com que ajam de maneira errática.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Compulsão",
            description: "Você obriga criaturas a se moverem em uma direção específica.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Movimentação Livre",
            description: "Concede liberdade de movimento a uma criatura, ignorando efeitos que a restringiriam.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Invisibilidade Maior",
            description: "Permite que uma criatura permaneça invisível enquanto realiza ações.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Localizar Criatura",
            description: "Permite localizar uma criatura específica dentro de uma área extensa.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Metamorfose",
            description: "Transforma uma criatura ou objeto em outra forma.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Porta Dimensional",
            description: "Você se teletransporta instantaneamente para outro local dentro do alcance.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Terreno Alucinógeno",
            description: "Você transforma a aparência do terreno em uma área para enganar os sentidos.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Banimento",
            description: "Você expulsa uma criatura extraplanar para seu plano de origem.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Malogro",
            description: "Você reduz a vitalidade de uma criatura, causando penalidades em suas ações.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Adivinhação",
            description: "Receba uma resposta sobre eventos futuros ou informações importantes (ritual).",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Controlar a Água",
            description: "Você manipula a água em uma área, criando redemoinhos ou enchentes.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Guardião da Fé",
            description: "Conjura um guardião que causa dano a inimigos que se aproximam.",
            dice: "10d8 de dano radiante."
        },
        {
            title: "Moldar Rochas",
            description: "Permite moldar ou alterar a estrutura de rochas em uma área.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Proteção contra a Morte",
            description: "Concede resistência contra efeitos que causariam morte instantânea.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Conjurar Elementais Menores",
            description: "Invoca pequenos elementais para ajudar em combate ou tarefas.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Conjurar Seres da Floresta",
            description: "Invoca criaturas da floresta para auxiliá-lo.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Dominar Besta",
            description: "Permite controlar mentalmente uma besta.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Inseto Gigante",
            description: "Transforma insetos comuns em versões gigantes e controláveis.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Muralha de Fogo",
            description: "Você cria uma barreira de fogo que causa dano aos que a atravessam.",
            dice: "5d8 de dano de fogo por rodada."
        },
        {
            title: "Pele de Pedra",
            description: "Concede resistência contra danos físicos à criatura alvo.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Tempestade de Gelo",
            description: "Cria uma tempestade de gelo que causa dano e dificulta o movimento.",
            dice: "8d6 de dano de frio."
        },
        {
            title: "Vinha Esmagadora",
            description: "Invoca uma videira mágica que imobiliza e causa dano a uma criatura.",
            dice: "4d6 de dano de constrição."
        },
        {
            title: "Arca Secreta de Leomund",
            description: "Cria um espaço extradimensional para armazenar itens em segurança.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Assassino Fantasmagórico",
            description: "Cria uma entidade fantasmagórica que ataca a mente de uma criatura.",
            dice: "8d6 de dano psíquico."
        },
        {
            title: "Cão Fiel de Mordenkainen",
            description: "Conjura um cão mágico invisível que guarda uma área.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Escudo de Fogo",
            description: "Conjura uma barreira de calor que protege você e causa dano a inimigos.",
            dice: "5d8 de dano de fogo."
        },
        {
            title: "Esfera Resiliente de Otiluke",
            description: "Cria uma esfera mágica que protege a criatura dentro dela contra ataques.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Fabricar",
            description: "Transforma materiais crus em objetos ou estruturas úteis.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Olho Arcano",
            description: "Conjura um olho invisível que você pode mover para explorar o ambiente.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Santuário Particular de Mordenkainen",
            description: "Cria um local seguro protegido por magia.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Tentáculos Negros de Evard",
            description: "Invoca tentáculos sombrios que prendem e causam dano em uma área.",
            dice: "5d10 de dano necrótico."
        },
        {
            title: "Aura de Pureza",
            description: "Protege aliados contra efeitos negativos e doenças.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Aura de Vida",
            description: "Concede resistência a dano necrótico e impede que criaturas caiam inconscientes.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Destruição Estonteante",
            description: "Emite uma onda de energia que causa dano radiante em inimigos próximos.",
            dice: "10d6 de dano radiante."
        }
    ],
    5: [
        {
            title: "Âncora Planar",
            description: "Você fixa uma âncora mágica que impede a viagem planar em uma área.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Animar Objetos",
            description: "Você dá vida a objetos inanimados, permitindo que eles lutem por você.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Círculo de Teletransporte",
            description: "Você cria um círculo mágico que permite viagens instantâneas entre locais conhecidos.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Conhecimento Lendário",
            description: "Você ganha informações sobre eventos ou objetos lendários.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Curar Ferimentos em Massa",
            description: "Você cura um grupo de aliados, restaurando seus pontos de vida.",
            dice: "5d8 + modificador de habilidade de conjuração."
        },
        {
            title: "Despertar",
            description: "Você concede inteligência a uma criatura ou planta sem inteligência.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Despistar",
            description: "Você cria uma ilusão que oculta a identidade de uma criatura.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Dominar Pessoa",
            description: "Você toma controle mental de uma criatura inteligente.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Imobilizar Monstro",
            description: "Você paralisa uma criatura, impedindo-a de se mover.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Missão",
            description: "Você obriga uma criatura a realizar uma tarefa específica sob pena de punição mágica.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Modificar Memória",
            description: "Você altera as memórias de uma criatura, mudando a percepção dela sobre eventos passados.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Restauração Maior",
            description: "Você remove condições debilitantes, como maldições ou reduções de habilidade.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Reviver os Mortos",
            description: "Você traz uma criatura de volta à vida, desde que tenha morrido recentemente.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Similaridade",
            description: "Você assume a aparência de outra criatura ou pessoa.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Sonho",
            description: "Você envia uma mensagem para uma criatura enquanto ela dorme, podendo influenciar seus sonhos.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Vidência",
            description: "Você espia um local ou criatura específica à distância.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Coluna de Chamas",
            description: "Você invoca uma coluna de fogo sagrado que causa dano aos inimigos.",
            dice: "10d6 de dano de fogo."
        },
        {
            title: "Comunhão",
            description: "Você consulta uma divindade para obter informações importantes (ritual).",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Consagrar",
            description: "Você purifica uma área, protegendo-a contra energias malignas.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Dissipar o Bem e Mal",
            description: "Você dissipa efeitos mágicos que envolvem criaturas extraplanares ou malignas.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Praga",
            description: "Você causa uma doença mágica que enfraquece as criaturas afetadas.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Praga de Insetos",
            description: "Você invoca um enxame de insetos que causa dano e perturba os inimigos.",
            dice: "6d10 de dano de perfuração."
        },
        {
            title: "Caminhar em Árvores",
            description: "Você usa árvores como portais para teletransporte rápido.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Conjurar Elemental",
            description: "Você invoca um elemental para ajudá-lo em combate.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Comunhão com a Natureza",
            description: "Você se conecta com a natureza para obter informações sobre o ambiente (ritual).",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Cúpula Antivida",
            description: "Você cria uma barreira mágica que impede que criaturas se aproximem.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Muralha de Pedra",
            description: "Você cria uma parede de pedra para defesa ou bloqueio de caminhos.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Reencarnação",
            description: "Você traz uma criatura morta de volta à vida em uma nova forma física.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Cone de Frio",
            description: "Você dispara uma rajada de ar congelante que causa dano aos inimigos.",
            dice: "8d8 de dano de frio."
        },
        {
            title: "Criação",
            description: "Você cria um objeto de matéria orgânica ou inorgânica temporário.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Névoa Mortal",
            description: "Você conjura uma névoa venenosa que causa dano em uma área.",
            dice: "6d6 de dano venenoso."
        },
        {
            title: "Telecinésia",
            description: "Você move objetos ou criaturas com sua mente.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Criar Passagem",
            description: "Você cria uma passagem mágica em uma superfície sólida.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Ligação Telepática de Rary",
            description: "Você conecta mentes de criaturas, permitindo comunicação telepática (ritual).",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Mão de Bigby",
            description: "Você cria uma mão mágica que pode atacar, empurrar ou proteger.",
            dice: "4d10 de dano de força ou outro efeito dependendo da forma da mão."
        },
        {
            title: "Muralha de Energia",
            description: "Você cria uma barreira mágica de energia que bloqueia ataques e movimento.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Círculo de Poder",
            description: "Você cria um círculo que fortalece aliados e enfraquece inimigos.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Destruição Banidora",
            description: "Você causa dano massivo em criaturas extraplanares, banindo-as em seguida.",
            dice: "10d10 de dano e banimento."
        },
        {
            title: "Onda Destrutiva",
            description: "Você cria uma onda de energia que causa dano e derruba inimigos.",
            dice: "6d10 de dano de concussão."
        },
        {
            title: "Aljava Veloz",
            description: "Você acelera o uso de armas de longo alcance para ataques rápidos.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Conjurar Saraivada",
            description: "Você invoca uma chuva de flechas mágicas que atinge múltiplos alvos.",
            dice: "5d10 de dano de flechas."
        }
    ],
    6: [
        {
            title: "Ataque Visual",
            description: "Você inflige dano psíquico em uma criatura ao encará-la, causando medo ou dor intensa.",
            dice: "5d10 de dano psíquico."
        },
        {
            title: "Dança Irresistível de Otto",
            description: "Força uma criatura a dançar incontrolavelmente, incapacitando-a.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Encontrar o Caminho",
            description: "Você descobre a rota mais curta e segura para um destino específico.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Ilusão Programada",
            description: "Cria uma ilusão que é ativada por uma condição pré-determinada.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Proteger Fortaleza",
            description: "Defende uma área contra intrusos com barreiras mágicas.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Sugestão em Massa",
            description: "Afeta várias criaturas simultaneamente com uma sugestão mágica.",
            dice: "Teste de resistência para criaturas afetadas para resistir à sugestão."
        },
        {
            title: "Visão da Verdade",
            description: "Permite ver através de ilusões, magia invisível e metamorfoses.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Círculo da Morte",
            description: "Cria uma explosão de energia sombria que causa dano em criaturas em uma área.",
            dice: "8d6 de dano necrótico."
        },
        {
            title: "Conjurar Fada",
            description: "Você invoca uma fada mágica que pode ajudá-lo em combate ou outras tarefas.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Criar Mortos-Vivos",
            description: "Transforma cadáveres em servos mortos-vivos que obedecem aos seus comandos.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Carne para Pedra",
            description: "Transforma uma criatura em pedra, petrificando-a.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Portal Arcano",
            description: "Cria um portal mágico que conecta dois locais dentro do alcance.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Aliado Planar",
            description: "Você convoca uma entidade extraplanar para ajudá-lo, negociando seu serviço.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Barreira de Lâminas",
            description: "Cria uma parede de lâminas giratórias que causam dano a quem as atravessa.",
            dice: "6d6 de dano cortante."
        },
        {
            title: "Cura Completa",
            description: "Restaura completamente os pontos de vida de uma criatura.",
            dice: "Restaura todos os pontos de vida da criatura."
        },
        {
            title: "Doença Plena",
            description: "Inflige uma doença mágica em uma criatura, causando penalidades em suas ações.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Banquete dos Heróis",
            description: "Conjura uma refeição mágica que concede resistência e vantagens a aliados.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Palavra de Recordação",
            description: "Marca um local seguro que você pode teleportar de volta instantaneamente.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Proibição",
            description: "Cria uma barreira mágica que impede viagens planares e entradas indesejadas (ritual).",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Caminhar no Vento",
            description: "Transforma você e aliados em nuvens de vapor, permitindo viajar rapidamente.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Mover Terra",
            description: "Você remodela terrenos, movendo grandes quantidades de terra ou pedra.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Muralha de Espinhos",
            description: "Cria uma barreira de espinhos que causa dano às criaturas que tentam atravessá-la.",
            dice: "6d10 de dano perfurante."
        },
        {
            title: "Raio Solar",
            description: "Dispara um feixe de energia solar que causa dano radiante em uma área.",
            dice: "10d6 de dano radiante."
        },
        {
            title: "Teletransporte por Árvores",
            description: "Permite que você e aliados se teleportem usando árvores como portais.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Corrente de Relâmpagos",
            description: "Cria uma corrente elétrica que salta entre criaturas, causando dano.",
            dice: "8d6 de dano elétrico."
        },
        {
            title: "Desintegrar",
            description: "Transforma um objeto ou criatura em pó com um poderoso feixe de energia.",
            dice: "10d10 de dano necrótico."
        },
        {
            title: "Globo de Invulnerabilidade",
            description: "Cria uma barreira mágica que bloqueia magias de nível inferior a 5.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Esfera Congelante de Otiluke",
            description: "Cria uma esfera de gelo que pode causar dano em área e congelar inimigos.",
            dice: "6d6 de dano de frio."
        },
        {
            title: "Invocação Instantânea de Drawmij",
            description: "Conjura rapidamente um objeto ou item específico (ritual).",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Muralha de Gelo",
            description: "Cria uma parede de gelo que bloqueia movimento e causa dano a inimigos próximos.",
            dice: "8d6 de dano de frio."
        },
        {
            title: "Recipiente Arcano",
            description: "Cria um receptáculo mágico para aprisionar ou guardar criaturas ou energia.",
            dice: null // Não há rolagem de dados necessária.
        }
    ],
    7: [
        {
            title: "Espada de Mordenkainen",
            description: "Conjura uma espada mágica que ataca inimigos à distância com força poderosa.",
            dice: "6d10 de dano de força."
        },
        {
            title: "Forma Etérea",
            description: "Permite que você e aliados se movam pelo Plano Etéreo, ignorando barreiras físicas.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Miragem",
            description: "Cria uma ilusão grandiosa que afeta a visão e engana os sentidos.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Mansão Magnífica de Mordenkainen",
            description: "Conjura uma mansão mágica que serve como abrigo seguro para você e aliados.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Prisão de Energia",
            description: "Aprisiona uma criatura em uma gaiola mágica, impedindo sua movimentação.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Projetar Imagem",
            description: "Cria uma duplicata ilusória de você que pode se mover e interagir como se fosse real.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Regeneração",
            description: "Cura uma criatura, restaurando seus pontos de vida ao longo do tempo.",
            dice: "1d12 + modificador de habilidade de conjuração por rodada."
        },
        {
            title: "Ressurreição",
            description: "Traz uma criatura de volta à vida, mesmo que tenha morrido há muito tempo.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Símbolo",
            description: "Cria um símbolo mágico que desencadeia um efeito devastador ao ser ativado.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Teletransporte",
            description: "Transporta você e aliados instantaneamente para um local conhecido.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Dedo da Morte",
            description: "Conjura uma onda de energia mortal que causa dano necrótico massivo.",
            dice: "7d10 de dano necrótico."
        },
        {
            title: "Viagem Planar",
            description: "Permite que você e aliados viajem para outros planos de existência.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Conjurar Celestial",
            description: "Invoca uma criatura celestial para ajudá-lo em combate ou outras tarefas.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Palavra Divina",
            description: "Emite uma palavra mágica que afasta ou destrói criaturas extraplanares.",
            dice: "6d10 de dano radiante."
        },
        {
            title: "Tempestade de Fogo",
            description: "Cria uma tempestade de chamas que incendeia uma área extensa.",
            dice: "10d6 de dano de fogo em área."
        },
        {
            title: "Inverter a Gravidade",
            description: "Reverte a gravidade em uma área, lançando criaturas e objetos para cima.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Bola de Fogo Controlável",
            description: "Conjura uma bola de fogo que pode ser movida para atingir múltiplos alvos.",
            dice: "8d6 de dano de fogo."
        },
        {
            title: "Rajada Prismática",
            description: "Dispara um feixe de luz prismática que causa efeitos variados em inimigos.",
            dice: "10d6 de dano (efeitos variados conforme a cor do feixe)."
        },
        {
            title: "Isolamento",
            description: "Isola uma criatura em um espaço mágico, impedindo interação com o mundo exterior.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Simulacro",
            description: "Cria uma cópia mágica de uma criatura que obedece às suas ordens.",
            dice: null // Não há rolagem de dados necessária.
        }
    ],
    8: [
        {
            title: "Dominar Monstro",
            description: "Permite controlar mentalmente um monstro, forçando-o a obedecer aos seus comandos.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Enfraquecer Intelecto",
            description: "Reduz drasticamente a inteligência de uma criatura, dificultando ações mentais.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Limpar a Mente",
            description: "Remove encantamentos, maldições e efeitos mágicos que afetam a mente.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Loquacidade",
            description: "Melhora as habilidades verbais de uma criatura, tornando-a mais persuasiva e eloquente.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Palavra de Poder Atordoar",
            description: "Atordoa uma criatura instantaneamente com uma palavra mágica.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Semiplano",
            description: "Cria ou acessa um semiplano mágico onde você pode armazenar objetos ou criaturas.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Aura Sagrada",
            description: "Concede proteção divina a aliados, reduzindo dano e afastando inimigos.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Campo Antimagia",
            description: "Cria uma área onde nenhuma magia pode ser conjurada ou funcionar.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Controlar o Clima",
            description: "Altera o clima em uma grande área, permitindo criar tempestades, nevascas ou céu claro.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Terremoto",
            description: "Gera tremores massivos que danificam estruturas e derrubam criaturas em uma área.",
            dice: "10d6 de dano de concussão."
        },
        {
            title: "Antipatia/Simpatia",
            description: "Atraí ou repele criaturas de uma área ou objeto específico.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Explosão Solar",
            description: "Emite uma onda de luz solar que causa dano radiante e cega os inimigos.",
            dice: "8d10 de dano radiante."
        },
        {
            title: "Formas Animais",
            description: "Transforma aliados em animais para melhorar sua mobilidade ou habilidades.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Tsunami",
            description: "Cria uma onda massiva que causa dano e empurra inimigos.",
            dice: "12d10 de dano de água."
        },
        {
            title: "Nuvem Incendiária",
            description: "Invoca uma nuvem de fumaça e fogo que causa dano contínuo em uma área.",
            dice: "6d10 de dano de fogo por rodada."
        },
        {
            title: "Clone",
            description: "Cria uma cópia exata do seu corpo que pode ser usada para voltar à vida em caso de morte.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Labirinto",
            description: "Aprisiona uma criatura em um labirinto extradimensional, dificultando sua fuga.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Telepatia",
            description: "Permite comunicação mental clara entre você e outras criaturas.",
            dice: null // Não há rolagem de dados necessária.
        }
    ],
    9: [
        {
            title: "Alterar Forma",
            description: "Permite transformar-se ou transformar outra criatura em qualquer forma desejada.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Aprisionamento",
            description: "Prende uma criatura em um estado de suspensão ou em outro local.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Chuva de Meteoros",
            description: "Invoca meteoros que causam dano massivo em uma área extensa.",
            dice: "10d6 de dano de fogo e 6d6 de dano de concussão."
        },
        {
            title: "Desejo",
            description: "Permite alterar a realidade de forma drástica, realizando quase qualquer efeito.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Encarnação Fantasmagórica",
            description: "Cria uma ilusão tão poderosa que se torna parcialmente real, causando efeitos reais.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Metamorfose Verdadeira",
            description: "Transforma uma criatura ou objeto permanentemente em outra forma.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Muralha Prismática",
            description: "Cria uma parede de luzes multicoloridas com efeitos devastadores.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Palavra de Poder Matar",
            description: "Mata instantaneamente uma criatura com pontos de vida abaixo de um limite.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Parar o Tempo",
            description: "Suspende o tempo, permitindo que você atue enquanto os outros estão parados.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Portal",
            description: "Abre um portal para outro plano ou local de existência.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Projeção Astral",
            description: "Separa sua alma do corpo, permitindo viajar pelo plano astral.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Sexto Sentido",
            description: "Permite prever eventos e perceber coisas além dos sentidos normais.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Ressurreição Verdadeira",
            description: "Traz uma criatura de volta à vida, mesmo que seu corpo tenha sido completamente destruído.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Tempestade da Vingança",
            description: "Cria uma tempestade mágica devastadora que combina vários efeitos.",
            dice: "10d10 de dano de energia variada (dano de fogo, gelo, relâmpagos, etc.)."
        },
        {
            title: "Cura Completa em Massa",
            description: "Restaura completamente os pontos de vida de várias criaturas.",
            dice: null // Não há rolagem de dados necessária.
        },
        {
            title: "Palavra de Poder Curar",
            description: "Cura instantaneamente uma criatura, restaurando todos os seus pontos de vida.",
            dice: null // Não há rolagem de dados necessária.
        }
    ] 
};

function showLevel(level) {
    const contentDiv = document.getElementById('dynamic-content');
    contentDiv.innerHTML = ""; // Limpa o conteúdo anterior

    // Gera os content blocks para o nível selecionado
    magicData[level].forEach(magic => {
        const block = document.createElement('div');
        block.classList.add('content-block');

        // Título da magia
        const title = document.createElement('h2');
        title.textContent = magic.title;

        // Descrição da magia
        const description = document.createElement('p');
        description.textContent = magic.description;

        // Adiciona título e descrição ao bloco
        block.appendChild(title);
        block.appendChild(description);

        // Rolagem de dados (se houver)
        if (magic.dice) {
            const dice = document.createElement('p');
            dice.textContent = `Rolagem: ${magic.dice}`;
            block.appendChild(dice);
        }

        // Adiciona o bloco ao conteúdo dinâmico
        contentDiv.appendChild(block);
    });
}