export const story2 = {
  intro: {
    id: 'intro',
    title: 'Fragmento I',
    text: 'A biblioteca não tinha paredes. Apenas prateleiras que se perdiam onde a luz esquecia de alcançar.',
    choices: [
      {text: 'Caminhar entre as sombras das letras', next: 'sombras'},
      {text: 'Esperar que um livro caia por si só', next: 'espera'},
      {text: 'Tocar a espinha de um volume sem título', next: 'semtitulo'},
      {text: 'Sentar no chão de mármore frio', next: 'marmore'}
    ]
  },

  sombras: {
    id: 'sombras',
    title: 'Fragmento II',
    text: 'As palavras projetavam formas no piso. Cada sombra era um pensamento que ninguém havia terminado de pensar.',
    choices: [
      {text: 'Seguir a sombra mais longa', next: 'sombra_longa'},
      {text: 'Deixar que a sombra tome sua forma', next: 'sombra_forma'},
      {text: 'Olhar para onde não há sombra alguma', next: 'claridade'}
    ]
  },

  espera: {
    id: 'espera',
    title: 'Fragmento II',
    text: 'O silêncio acumulava poeira sobre as horas. Havia algo de sagrado nessa imobilidade — como uma oração esquecida no meio.',
    choices: [
      {text: 'Continuar esperando', next: 'espera_longa'},
      {text: 'Erguer os olhos para o teto', next: 'teto'},
      {text: 'Perceber que algo mudou', next: 'mudanca'}
    ]
  },

  semtitulo: {
    id: 'semtitulo',
    title: 'Fragmento II',
    text: 'O couro do livro era frio como pedra de rio. Dentro, as páginas não tinham palavras. Apenas o espaço entre elas.',
    choices: [
      {text: 'Virar uma página em branco', next: 'pagina_branca'},
      {text: 'Fechar o livro devagar', next: 'fechamento'},
      {text: 'Levar o livro consigo', next: 'livro_consigo'}
    ]
  },

  marmore: {
    id: 'marmore',
    title: 'Fragmento II',
    text: 'O chão guardava o eco de passos que não pertenciam a ninguém. A frieza subia pelos ossos como uma memória involuntária.',
    choices: [
      {text: 'Deitar e olhar para o infinito acima', next: 'teto'},
      {text: 'Pressionar a palma contra o mármore', next: 'palma'},
      {text: 'Fechar os olhos', next: 'escuridao'}
    ]
  },

  sombra_longa: {
    id: 'sombra_longa',
    title: 'Fragmento III',
    text: 'A sombra conduzia até uma janela que não existia no mapa da biblioteca. Do outro lado, neve caía sobre algo que já tinha sido.',
    choices: [
      {text: 'Atravessar a janela', next: 'neve'},
      {text: 'Permanecer do lado de cá', next: 'permanecer'},
      {text: 'Tocar o vidro', next: 'vidro'}
    ]
  },

  sombra_forma: {
    id: 'sombra_forma',
    title: 'Fragmento III',
    text: 'A sombra tomou a forma de alguém que você ainda não esqueceu. Ficou parada ali como uma pergunta sem voz.',
    choices: [
      {text: 'Reconhecer o que não pode ser nomeado', next: 'reconhecer'},
      {text: 'Afastar-se devagar', next: 'afastar'},
      {text: 'Estender a mão', next: 'mao_sombra'}
    ]
  },

  claridade: {
    id: 'claridade',
    title: 'Fragmento III',
    text: 'O lugar iluminado era apenas um círculo de luz no chão. Não havia fonte visível. A luz simplesmente era — como certas tristezas.',
    choices: [
      {text: 'Entrar no círculo de luz', next: 'circulo'},
      {text: 'Observar de longe', next: 'observar'},
      {text: 'Seguir em direção à escuridão além', next: 'escuridao'}
    ]
  },

  espera_longa: {
    id: 'espera_longa',
    title: 'Fragmento III',
    text: 'O tempo dentro da biblioteca não passava em linha reta. Ele dobrava sobre si mesmo como um papel velho guardado numa gaveta.',
    choices: [
      {text: 'Deixar o tempo dobrar', next: 'tempo_dobrado'},
      {text: 'Lembrar de algo sem querer', next: 'lembranca'},
      {text: 'Perceber que a espera era o destino', next: 'palma'}
    ]
  },

  teto: {
    id: 'teto',
    title: 'Fragmento III',
    text: 'O teto subia até onde o olho não alcançava mais. Nas alturas, letras em língua desconhecida tremiam levemente — como se respirassem.',
    choices: [
      {text: 'Tentar decifrar as letras', next: 'decifrar'},
      {text: 'Fechar os olhos e escutar', next: 'escutar'},
      {text: 'Sentir vertigem e permanecer', next: 'vertigem'}
    ]
  },

  mudanca: {
    id: 'mudanca',
    title: 'Fragmento III',
    text: 'Algo havia se deslocado — não no espaço, mas no ar. A biblioteca parecia lembrar de uma estação diferente.',
    choices: [
      {text: 'Seguir o cheiro de página antiga', next: 'pagina_velha'},
      {text: 'Sentar novamente no mármore', next: 'palma'},
      {text: 'Buscar a origem da mudança', next: 'origem'}
    ]
  },

  pagina_branca: {
    id: 'pagina_branca',
    title: 'Fragmento III',
    text: 'No centro da página havia um ponto minúsculo de tinta. Talvez fosse o começo. Talvez fosse tudo que restou.',
    choices: [
      {text: 'Observar o ponto em silêncio', next: 'observar'},
      {text: 'Virar mais uma página', next: 'mais_pagina'},
      {text: 'Fechar o livro', next: 'fechamento'}
    ]
  },

  fechamento: {
    id: 'fechamento',
    title: 'Fragmento III',
    text: 'O som do livro fechando ecoou como um século que acaba. O silêncio depois era de outro tipo — mais cheio, mais antigo.',
    choices: [
      {text: 'Devolver o livro à prateleira', next: 'devolucao'},
      {text: 'Guardar o livro contra o peito', next: 'livro_consigo'},
      {text: 'Deixar o livro no chão', next: 'chao'}
    ]
  },

  livro_consigo: {
    id: 'livro_consigo',
    title: 'Fragmento III',
    text: 'O peso do livro sem palavras era diferente de qualquer peso. Não era físico. Era a gravidade de uma ausência.',
    choices: [
      {text: 'Caminhar sem direção', next: 'caminhar'},
      {text: 'Parar e sentir o peso', next: 'palma'},
      {text: 'Procurar uma janela', next: 'neve'}
    ]
  },

  palma: {
    id: 'palma',
    title: 'Fragmento IV',
    text: 'A mão contra o frio revelou as linhas da vida como rios vistos de muito longe. Cada linha era uma história que não foi contada.',
    choices: [
      {text: 'Seguir as linhas com os olhos', next: 'linhas'},
      {text: 'Afastar a mão devagar', next: 'afastar'},
      {text: 'Permanecer imóvel', next: 'permanecer'}
    ]
  },

  escuridao: {
    id: 'escuridao',
    title: 'Fragmento IV',
    text: 'Havia uma qualidade na escuridão daquela biblioteca que não era ausência. Era presença de outra natureza — densa e viva como luto.',
    choices: [
      {text: 'Habitar a escuridão', next: 'habitar'},
      {text: 'Buscar um ponto de luz', next: 'claridade'},
      {text: 'Fechar os olhos dentro da escuridão', next: 'dentro_escuro'}
    ]
  },

  neve: {
    id: 'neve',
    title: 'Fragmento IV',
    text: 'Do outro lado, a neve caía em direção ao alto. O mundo havia invertido a lógica para acomodar algo que não tinha nome.',
    choices: [
      {text: 'Deixar a neve tocar o rosto', next: 'neve_rosto'},
      {text: 'Observar a neve cair para cima', next: 'observar_neve'},
      {text: 'Voltar para a biblioteca', next: 'devolucao'}
    ]
  },

  permanecer: {
    id: 'permanecer',
    title: 'Fragmento IV',
    text: 'Permanecer era também uma forma de ir. A biblioteca entendia isso. As prateleiras esperavam pacientemente por aqueles que ficavam.',
    choices: [
      {text: 'Respirar devagar', next: 'respirar'},
      {text: 'Escutar o silêncio mudar', next: 'escutar'},
      {text: 'Lembrar por que veio', next: 'lembranca'}
    ]
  },

  vidro: {
    id: 'vidro',
    title: 'Fragmento IV',
    text: 'O vidro estava quente. Do lado de lá, a neve era fria. Entre os dois havia uma memória de temperatura que pertencia a outro inverno.',
    choices: [
      {text: 'Atravessar para o frio', next: 'neve_rosto'},
      {text: 'Manter a mão no vidro quente', next: 'habitar'},
      {text: 'Afastar-se da janela', next: 'devolucao'}
    ]
  },

  reconhecer: {
    id: 'reconhecer',
    title: 'Fragmento IV',
    text: 'Reconhecer não é o mesmo que entender. A forma de sombra existia num espaço entre os dois — onde residem as coisas que importam.',
    choices: [
      {text: 'Nomear em silêncio', next: 'habitar'},
      {text: 'Deixar que desapareça', next: 'afastar'},
      {text: 'Permanecer com ela', next: 'permanecer'}
    ]
  },

  afastar: {
    id: 'afastar',
    title: 'Fragmento IV',
    text: 'Cada passo para trás revelava uma distância que já existia antes. O espaço entre as coisas é sempre mais honesto que as coisas.',
    choices: [
      {text: 'Continuar afastando', next: 'caminhar'},
      {text: 'Parar no meio do afastamento', next: 'permanecer'},
      {text: 'Olhar para trás uma vez', next: 'olhar_tras'}
    ]
  },

  mao_sombra: {
    id: 'mao_sombra',
    title: 'Fragmento IV',
    text: 'A mão atravessou a sombra sem tocar nada. O ar no outro lado era apenas ar — mas diferente, como o ar depois de uma despedida.',
    choices: [
      {text: 'Recolher a mão', next: 'afastar'},
      {text: 'Deixar a mão no ar por um momento', next: 'habitar'},
      {text: 'Fechar os dedos', next: 'linhas'}
    ]
  },

  circulo: {
    id: 'circulo',
    title: 'Fragmento IV',
    text: 'Dentro do círculo, o tempo tinha outra textura. Nem passado, nem futuro. Apenas a duração de uma respiração infinitamente longa.',
    choices: [
      {text: 'Sentar no centro', next: 'respirar'},
      {text: 'Girar lentamente', next: 'vertigem'},
      {text: 'Sair do círculo', next: 'observar'}
    ]
  },

  observar: {
    id: 'observar',
    title: 'Fragmento IV',
    text: 'Observar de longe era uma forma de amor. A distância não diminuía o que era visto. Apenas o tornava mais inteiro.',
    choices: [
      {text: 'Aproximar-se devagar', next: 'circulo'},
      {text: 'Fechar os olhos e guardar a imagem', next: 'dentro_escuro'},
      {text: 'Virar as costas e caminhar', next: 'caminhar'}
    ]
  },

  tempo_dobrado: {
    id: 'tempo_dobrado',
    title: 'Fragmento IV',
    text: 'Onde o tempo dobrava, havia um cheiro de papel e chuva. De algo que foi lido uma vez e nunca mais encontrado.',
    choices: [
      {text: 'Desdobrar o tempo com cuidado', next: 'lembranca'},
      {text: 'Deixar o tempo dobrado como está', next: 'habitar'},
      {text: 'Perguntar quanto falta', next: 'permanecer'}
    ]
  },

  lembranca: {
    id: 'lembranca',
    title: 'Fragmento IV',
    text: 'A memória chegou sem ser convocada. Como sempre chegam as que realmente importam — pelo flanco, enquanto você olhava para outro lado.',
    choices: [
      {text: 'Deixar a memória se expandir', next: 'dentro_escuro'},
      {text: 'Resistir gentilmente', next: 'afastar'},
      {text: 'Guardar para depois', next: 'devolucao'}
    ]
  },

  decifrar: {
    id: 'decifrar',
    title: 'Fragmento IV',
    text: 'As letras no teto se rearranjariam cada vez que o olho tentava fixá-las. Havia uma sabedoria nessa evasão — como a lua que se move quando se aponta.',
    choices: [
      {text: 'Desistir de decifrar', next: 'escutar'},
      {text: 'Rir da própria tentativa', next: 'vertigem'},
      {text: 'Escolher uma letra e ficar nela', next: 'linhas'}
    ]
  },

  escutar: {
    id: 'escutar',
    title: 'Fragmento IV',
    text: 'O silêncio da biblioteca não era vazio. Era um silêncio habitado — cheio de livros respirando, de histórias esquecidas exalando.',
    choices: [
      {text: 'Ir mais fundo no silêncio', next: 'dentro_escuro'},
      {text: 'Deixar que o silêncio diga o que tem a dizer', next: 'habitar'},
      {text: 'Levantar e caminhar', next: 'caminhar'}
    ]
  },

  vertigem: {
    id: 'vertigem',
    title: 'Fragmento IV',
    text: 'A vertigem era vertical e também temporal. Como cair em direção ao teto de uma memória que não era completamente sua.',
    choices: [
      {text: 'Deixar-se cair', next: 'dentro_escuro'},
      {text: 'Encontrar chão com os pés', next: 'palma'},
      {text: 'Fechar os olhos até passar', next: 'respirar'}
    ]
  },

  pagina_velha: {
    id: 'pagina_velha',
    title: 'Fragmento IV',
    text: 'O cheiro conduzia a uma seção onde os livros eram mais altos que dois homens. Cada volume guardava o perfume de uma outra estação.',
    choices: [
      {text: 'Escolher o livro mais antigo', next: 'mais_pagina'},
      {text: 'Sentar entre as prateleiras', next: 'habitar'},
      {text: 'Seguir o cheiro até seu fim', next: 'origem'}
    ]
  },

  origem: {
    id: 'origem',
    title: 'Fragmento IV',
    text: 'No centro da biblioteca, onde os corredores convergiam, havia um espaço vazio. A origem de tudo era uma ausência perfeitamente circular.',
    choices: [
      {text: 'Entrar na ausência', next: 'dentro_escuro'},
      {text: 'Caminhar em volta dela', next: 'caminhar'},
      {text: 'Sentar à beira do vazio', next: 'respirar'}
    ]
  },

  mais_pagina: {
    id: 'mais_pagina',
    title: 'Fragmento IV',
    text: 'A próxima página também estava em branco. E a seguinte. Cada branco era ligeiramente diferente — como silêncios que têm distintas tonalidades.',
    choices: [
      {text: 'Chegar ao fim do livro', next: 'linhas'},
      {text: 'Deixar o livro em aberto', next: 'habitar'},
      {text: 'Perceber que o livro não tem fim', next: 'vertigem'}
    ]
  },

  devolucao: {
    id: 'devolucao',
    title: 'Fragmento IV',
    text: 'Devolver o livro à prateleira era um gesto de despedida. O espaço onde ele se encaixava parecia esperar por isso desde sempre.',
    choices: [
      {text: 'Olhar para a prateleira por um instante', next: 'linhas'},
      {text: 'Caminhar sem olhar para trás', next: 'caminhar'},
      {text: 'Escolher outro livro', next: 'mais_pagina'}
    ]
  },

  chao: {
    id: 'chao',
    title: 'Fragmento IV',
    text: 'O livro no chão parecia mais livre. Como certas coisas que só encontram seu lugar quando são deixadas sem destino.',
    choices: [
      {text: 'Deixá-lo ali', next: 'caminhar'},
      {text: 'Sentar ao lado dele', next: 'habitar'},
      {text: 'Olhá-lo de longe', next: 'observar'}
    ]
  },

  linhas: {
    id: 'linhas',
    title: 'Fragmento V',
    text: 'As linhas convergiram para um ponto que não era o início nem o fim. Eram a dobra onde o tempo guarda o que não cabe em nenhum dos dois.',
    choices: [
      {text: 'Seguir para a névoa da saída', next: 'final_nevoa'},
      {text: 'Permanecer na dobra do tempo', next: 'final_dobra'},
      {text: 'Voltar ao começo com o que aprendeu', next: 'final_retorno'}
    ]
  },

  habitar: {
    id: 'habitar',
    title: 'Fragmento V',
    text: 'Havia aprendido o que a biblioteca ensinava a quem ficava tempo suficiente: que habitar completamente um lugar é a única forma de partir sem perda.',
    choices: [
      {text: 'Partir em paz', next: 'final_paz'},
      {text: 'Ficar mais um instante', next: 'final_instante'},
      {text: 'Levar o silêncio consigo', next: 'final_silencio'}
    ]
  },

  caminhar: {
    id: 'caminhar',
    title: 'Fragmento V',
    text: 'Caminhar sem destino na biblioteca era uma forma de leitura. Os corredores eram frases. O passo era a pontuação.',
    choices: [
      {text: 'Deixar o corpo escolher o caminho', next: 'final_corpo'},
      {text: 'Chegar a um corredor que termina em luz', next: 'final_luz'},
      {text: 'Parar quando o cansaço vier', next: 'final_paz'}
    ]
  },

  dentro_escuro: {
    id: 'dentro_escuro',
    title: 'Fragmento V',
    text: 'No interior da escuridão completa, cada sentido tornava-se mais preciso. A biblioteca existia de outra forma no escuro — mais honesta, mais antiga.',
    choices: [
      {text: 'Deixar que o escuro complete sua obra', next: 'final_escuro'},
      {text: 'Procurar uma saída sem abrir os olhos', next: 'final_retorno'},
      {text: 'Dormir ali, se possível', next: 'final_sonho'}
    ]
  },

  respirar: {
    id: 'respirar',
    title: 'Fragmento V',
    text: 'A respiração era o único relógio que ainda funcionava ali dentro. Cada expiração apagava um pouco da urgência. Cada inspiração trazia cheiro de papel e eternidade.',
    choices: [
      {text: 'Deixar a respiração conduzir', next: 'final_paz'},
      {text: 'Segurar o ar por um momento', next: 'final_instante'},
      {text: 'Expirar e não resistir mais', next: 'final_soltura'}
    ]
  },

  olhar_tras: {
    id: 'olhar_tras',
    title: 'Fragmento V',
    text: 'O que estava atrás era o mesmo que estava à frente — mas visto de um ângulo onde a saudade ainda não havia chegado.',
    choices: [
      {text: 'Retornar ao que estava atrás', next: 'final_retorno'},
      {text: 'Continuar em frente com a imagem', next: 'final_luz'},
      {text: 'Ficar entre os dois lados', next: 'final_dobra'}
    ]
  },

  neve_rosto: {
    id: 'neve_rosto',
    title: 'Fragmento V',
    text: 'A neve que caía para cima tocou o rosto como uma pergunta. Fria. Passageira. Deixando apenas a sensação de ter existido.',
    choices: [
      {text: 'Fechar os olhos e receber mais', next: 'final_neve'},
      {text: 'Voltar para dentro', next: 'final_retorno'},
      {text: 'Permanecer no limiar entre os mundos', next: 'final_dobra'}
    ]
  },

  observar_neve: {
    id: 'observar_neve',
    title: 'Fragmento V',
    text: 'A neve subindo era a física da saudade — pesada para baixo e leve para cima ao mesmo tempo, obedecendo a leis que nenhum livro havia escrito ainda.',
    choices: [
      {text: 'Seguir a neve para cima', next: 'final_escuro'},
      {text: 'Deixar que a cena se complete', next: 'final_neve'},
      {text: 'Guardar a imagem e partir', next: 'final_silencio'}
    ]
  },

  final_nevoa: {
    id: 'final_nevoa',
    title: 'Memória Final',
    text: 'A saída era uma névoa que se abria devagar. Do outro lado, o mesmo mundo — mas visto pelos olhos de quem passou algum tempo dentro de um silêncio maior que si mesmo. A névoa fechou-se atrás, guardando o que não precisava mais ser carregado.',
    choices: []
  },

  final_dobra: {
    id: 'final_dobra',
    title: 'Memória Final',
    text: 'Existir na dobra do tempo é a condição dos que não precisam de conclusão. A biblioteca continuou existindo dentro — não como memória, mas como um espaço onde certas perguntas ainda circulam, sem pressa de se tornarem respostas.',
    choices: []
  },

  final_retorno: {
    id: 'final_retorno',
    title: 'Memória Final',
    text: 'Retornar não era derrota. Era o reconhecimento de que o caminho de volta e o caminho de ida são a mesma estrada vista de ângulos diferentes. A biblioteca permaneceu onde sempre esteve — no lugar onde a memória e o esquecimento se encontram.',
    choices: []
  },

  final_paz: {
    id: 'final_paz',
    title: 'Memória Final',
    text: 'A paz não veio como uma chegada. Veio como o reconhecimento de que nunca havia saído — estava ali, depositada entre as prateleiras, esperando ser encontrada por quem tivesse paciência suficiente para procurar no silêncio.',
    choices: []
  },

  final_instante: {
    id: 'final_instante',
    title: 'Memória Final',
    text: 'Ficar mais um instante era a única decisão que importava. O instante durou o tempo necessário. E depois, como tudo que tem a duração certa, acabou sem deixar falta — apenas a presença do que havia sido.',
    choices: []
  },

  final_silencio: {
    id: 'final_silencio',
    title: 'Memória Final',
    text: 'O silêncio carregado para fora transformou-se em algo que não tinha nome na língua cotidiana. Nas semanas seguintes, certas pausas nas conversas ganharam uma qualidade diferente — como se a biblioteca houvesse habitado os espaços entre as palavras.',
    choices: []
  },

  final_escuro: {
    id: 'final_escuro',
    title: 'Memória Final',
    text: 'A escuridão não foi derrota. Foi aprendizado de outra modalidade de ver. De volta à luz, os contornos das coisas pareciam mais precisos — como se a ausência de luz tivesse ensinado ao olho o que a abundância dela nunca havia conseguido.',
    choices: []
  },

  final_sonho: {
    id: 'final_sonho',
    title: 'Memória Final',
    text: 'No sono dentro da biblioteca, foi possível ler os livros que não existiam de outra forma. Ao acordar, a memória dos textos havia evaporado — mas algo de sua essência permaneceu, como o cheiro de chuva após a chuva já ter passado.',
    choices: []
  },

  final_luz: {
    id: 'final_luz',
    title: 'Memória Final',
    text: 'O corredor terminou numa luz que não encandeia — a mesma luz dos entardeceres de certos dias de outono, quando o sol decide ser gentil com o mundo antes de se despedir. A biblioteca havia ensinado que toda clareza tem um custo, e que o custo vale.',
    choices: []
  },

  final_neve: {
    id: 'final_neve',
    title: 'Memória Final',
    text: 'A neve que subia era a última imagem guardada. Nos anos seguintes, em dias de muito frio, seria impossível não lembrar — não com saudade, mas com a sensação de ter testemunhado algo que a física ordinária havia esquecido de proibir.',
    choices: []
  },

  final_corpo: {
    id: 'final_corpo',
    title: 'Memória Final',
    text: 'O corpo encontrou o caminho que a mente não teria encontrado. Ele conhecia a biblioteca de outra forma — pela temperatura dos corredores, pelo som do piso, pela direção em que a luz mudava. A saída existia apenas para quem havia parado de procurar.',
    choices: []
  },

  final_soltura: {
    id: 'final_soltura',
    title: 'Memória Final',
    text: 'Expirar e não resistir era o ato mais corajoso disponível. O que foi solto não foi perdido — transformou-se numa leveza que não tem nome, que sobe como névoa de rio frio num amanhecer de inverno, e pertence agora ao ar.',
    choices: []
  }
};
