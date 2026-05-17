export const seaStory = {
  intro: {
    id: 'intro',

    title: 'Fragmento I',

    text: 'O mar respirava lentamente sob a noite, como se escondesse nomes que jamais voltariam à superfície.',

    choices: [
      {
        text: 'Seguir o som das águas',
        next: 'tide'
      },

      {
        text: 'Observar o horizonte imóvel',
        next: 'horizon'
      },

      {
        text: 'Entrar na névoa salgada',
        next: 'mist'
      },

      {
        text: 'Permanecer distante da maré',
        next: 'shore'
      }
    ]
  },

  tide: {
    id: 'tide',

    title: 'Fragmento II',

    text: 'As ondas pareciam repetir algo antigo demais para ainda possuir significado.',

    choices: [
      {
        text: 'Escutar até o fim',
        next: 'endingSea'
      },

      {
        text: 'Seguir além das águas',
        next: 'endingVoid'
      },

      {
        text: 'Permitir que o silêncio respondesse',
        next: 'endingEcho'
      },

      {
        text: 'Fechar os olhos diante do oceano',
        next: 'endingNight'
      }
    ]
  },

  horizon: {
    id: 'horizon',

    title: 'Fragmento II',

    text: 'O horizonte dissolvia a distância, como se o céu e o oceano tentassem esquecer suas fronteiras.',

    choices: [
      {
        text: 'Continuar observando',
        next: 'endingSea'
      },

      {
        text: 'Desviar o olhar',
        next: 'endingNight'
      },

      {
        text: 'Seguir em direção ao vazio',
        next: 'endingVoid'
      },

      {
        text: 'Escutar o vento distante',
        next: 'endingEcho'
      }
    ]
  },

  mist: {
    id: 'mist',

    title: 'Fragmento II',

    text: 'A névoa escondia contornos antigos, como memórias tentando sobreviver ao tempo.',

    choices: [
      {
        text: 'Atravessar sem hesitar',
        next: 'endingVoid'
      },

      {
        text: 'Esperar que a névoa se abrisse',
        next: 'endingSea'
      },

      {
        text: 'Escutar o silêncio da maré',
        next: 'endingEcho'
      },

      {
        text: 'Retornar para a margem',
        next: 'endingNight'
      }
    ]
  },

  shore: {
    id: 'shore',

    title: 'Fragmento II',

    text: 'Mesmo distante, o mar permanecia observando através da escuridão.',

    choices: [
      {
        text: 'Aceitar a distância',
        next: 'endingNight'
      },

      {
        text: 'Aproximar-se lentamente',
        next: 'endingSea'
      },

      {
        text: 'Seguir sem olhar para trás',
        next: 'endingVoid'
      },

      {
        text: 'Escutar as ondas ao longe',
        next: 'endingEcho'
      }
    ]
  },

  endingSea: {
    id: 'endingSea',

    title: 'Memória Final',

    text: 'O oceano continuou respirando na escuridão, como se toda ausência ainda carregasse alguma forma de retorno.',

    choices: []
  },

  endingVoid: {
    id: 'endingVoid',

    title: 'Memória Final',

    text: 'Alguns caminhos não conduzem a lugar algum. Ainda assim, continuam sendo atravessados.',

    choices: []
  },

  endingEcho: {
    id: 'endingEcho',

    title: 'Memória Final',

    text: 'O eco permaneceu dissolvido entre as águas, incapaz de desaparecer completamente.',

    choices: []
  },

  endingNight: {
    id: 'endingNight',

    title: 'Memória Final',

    text: 'A noite fechou lentamente tudo aquilo que o mar jamais conseguiu dizer.',

    choices: []
  }
};
