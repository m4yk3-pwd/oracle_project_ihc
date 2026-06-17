export const story1 = {
  intro: {
    id: 'intro',
    title: 'Fragmento I',
    text: 'Havia um lugar onde o vento parava — não por obstáculo, mas por esquecimento. A noite ali não era escura: era apenas a ausência de tudo que havia sido luz.',
    choices: [
      {text: 'Seguir o brilho distante', next: 'f2a'},
      {text: 'Escutar o silêncio', next: 'f2b'}
    ]
  },

  f2a: {
    id: 'f2a',
    title: 'Fragmento II',
    text: 'A névoa atravessava as árvores lentamente, apagando caminhos que nunca existiram. O brilho à frente não iluminava — apenas lembrava.',
    choices: [
      {text: 'Tocar a água imóvel', next: 'f3a'},
      {text: 'Permanecer onde está', next: 'f3b'}
    ]
  },

  f2b: {
    id: 'f2b',
    title: 'Fragmento II',
    text: 'O silêncio tinha textura — como páginas de um livro que ninguém abriu, guardando palavras que talvez nunca tenham existido.',
    choices: [
      {text: 'Descer em direção às ruínas', next: 'f3c'},
      {text: 'Olhar para as estrelas', next: 'f3d'}
    ]
  },

  f3a: {
    id: 'f3a',
    title: 'Fragmento III',
    text: 'O lago permanecia imóvel, como se guardasse um reflexo que ainda não havia acontecido. Ao tocar a superfície, nada se quebrou — apenas o tempo hesitou.',
    choices: [
      {text: 'Afundar suavemente', next: 'f4a'},
      {text: 'Recuar para a floresta', next: 'f4b'}
    ]
  },

  f3b: {
    id: 'f3b',
    title: 'Fragmento III',
    text: 'Permanecer era também uma forma de partir. As árvores ao redor cresciam em direção a algo que não havia no céu — apenas a memória de uma luz.',
    choices: [
      {text: 'Esperar pela chuva', next: 'f4c'},
      {text: 'Caminhar entre as sombras', next: 'f4b'}
    ]
  },

  f3c: {
    id: 'f3c',
    title: 'Fragmento III',
    text: 'As ruínas não eram de pedra — eram de gestos. Cada vão era o espaço onde alguém havia ficado de pé, antes de se tornar ausência.',
    choices: [
      {text: 'Sentar entre os escombros', next: 'f4d'},
      {text: 'Procurar uma saída', next: 'f4b'}
    ]
  },

  f3d: {
    id: 'f3d',
    title: 'Fragmento III',
    text: 'As estrelas não eram pontos — eram perguntas que o universo havia esquecido de responder. A noite parecia lembrar de algo que ninguém mais conseguia nomear.',
    choices: [
      {text: 'Deitar sobre a terra fria', next: 'f4d'},
      {text: 'Caminhar até o horizonte', next: 'f4a'}
    ]
  },

  f4a: {
    id: 'f4a',
    title: 'Fragmento IV',
    text: 'Abaixo da superfície, o silêncio tinha outra voz — mais antiga, como uma frase dita antes de qualquer língua existir.',
    choices: [
      {text: 'Deixar a corrente decidir', next: 'f5a'},
      {text: 'Voltar à superfície', next: 'f5b'}
    ]
  },

  f4b: {
    id: 'f4b',
    title: 'Fragmento IV',
    text: 'Entre as árvores, a chuva chegava tarde — como uma memória que insiste em voltar depois de não ser mais necessária.',
    choices: [
      {text: 'Seguir o som da água', next: 'f5c'},
      {text: 'Fechar os olhos e ouvir', next: 'f5b'}
    ]
  },

  f4c: {
    id: 'f4c',
    title: 'Fragmento IV',
    text: 'A chuva não chegou. Mas o ar ficou diferente — como se o céu houvesse pensado em algo e depois desistido.',
    choices: [
      {text: 'Aceitar o que não veio', next: 'f5d'},
      {text: 'Procurar abrigo nas ruínas', next: 'f5c'}
    ]
  },

  f4d: {
    id: 'f4d',
    title: 'Fragmento IV',
    text: 'A terra era fria, mas não hostil. Era apenas honesta — indiferente da forma que só o que é eterno pode ser.',
    choices: [
      {text: 'Fundir-se com o chão', next: 'f5d'},
      {text: 'Levantar antes do amanhecer', next: 'f5a'}
    ]
  },

  f5a: {
    id: 'f5a',
    title: 'Fragmento V',
    text: 'Havia algo adiante que não era lugar — era apenas a sensação de que o espaço havia mudado de ideia sobre si mesmo.',
    choices: [
      {text: 'Atravessar sem olhar', next: 'end1'},
      {text: 'Parar e deixar passar', next: 'end2'}
    ]
  },

  f5b: {
    id: 'f5b',
    title: 'Fragmento V',
    text: 'Com os olhos fechados, o mundo ficava mais verdadeiro — não porque existisse menos, mas porque não precisava ser visto para ser real.',
    choices: [
      {text: 'Permanecer no escuro interior', next: 'end3'},
      {text: 'Abrir os olhos devagar', next: 'end4'}
    ]
  },

  f5c: {
    id: 'f5c',
    title: 'Fragmento V',
    text: 'A água soava como alguém que havia desistido de ter nome. Seguir esse som era também uma forma de esquecer o próprio.',
    choices: [
      {text: 'Ir até a fonte', next: 'end5'},
      {text: 'Sentar e deixar o som passar', next: 'end6'}
    ]
  },

  f5d: {
    id: 'f5d',
    title: 'Fragmento V',
    text: 'Havia uma paz nisso que não era alegria — era o que sobra quando todas as perguntas param de exigir resposta.',
    choices: [
      {text: 'Dissolver-se no silêncio', next: 'end7'},
      {text: 'Carregar o silêncio consigo', next: 'end8'}
    ]
  },

  end1: {
    id: 'end1',
    title: 'Memória Final',
    text: 'Do outro lado não havia chegada — apenas o reconhecimento de que sempre se esteve aqui. O limiar permaneceu atrás, indiferente, como tudo que já cumpriu sua função.',
    choices: []
  },

  end2: {
    id: 'end2',
    title: 'Memória Final',
    text: 'Deixar passar era a travessia mais longa. Tudo que não se atravessa permanece como possibilidade — e a possibilidade é a única eternidade que o tempo não devora.',
    choices: []
  },

  end3: {
    id: 'end3',
    title: 'Memória Final',
    text: 'No escuro de si mesmo, havia um espaço maior do que qualquer floresta. Não era solidão — era a descoberta de que a ausência de outro pode ser uma forma de presença.',
    choices: []
  },

  end4: {
    id: 'end4',
    title: 'Memória Final',
    text: 'Abrir os olhos devagar era como ler uma frase muito antiga — entendida não pela mente, mas por algo anterior a ela. O mundo estava lá, sem julgamento, esperando ser visto outra vez.',
    choices: []
  },

  end5: {
    id: 'end5',
    title: 'Memória Final',
    text: 'Na fonte, a água não nascia — chegava, como se viesse de um lugar que não existe em nenhum mapa. Chegar até ali não foi uma conquista; foi um esquecimento completo do porquê se havia partido.',
    choices: []
  },

  end6: {
    id: 'end6',
    title: 'Memória Final',
    text: 'O som da água continuou depois que o silêncio voltou. Ou talvez o silêncio fosse o som, e a diferença entre eles nunca tivesse importado tanto quanto se supunha.',
    choices: []
  },

  end7: {
    id: 'end7',
    title: 'Memória Final',
    text: 'Dissolver-se não era desaparecer — era reconhecer que os contornos sempre foram suposição. O silêncio que ficou era indistinguível do que havia antes de qualquer coisa ter forma.',
    choices: []
  },

  end8: {
    id: 'end8',
    title: 'Memória Final',
    text: 'Carregar o silêncio não tornava o passo mais pesado. Era mais como levar o vento: impossível de segurar, impossível de abandonar, presente em cada respiração que ainda havia de vir.',
    choices: []
  }
};
