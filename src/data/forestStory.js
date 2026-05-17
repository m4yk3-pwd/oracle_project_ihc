export const forestStory = {
  intro: {
    id: 'intro',

    title: 'Fragmento I',

    text:
      'A floresta respirava em silêncio, como se escondesse pensamentos antigos sob as raízes.',

    choices: [
      {
        text: 'Seguir entre as árvores',
        next: 'roots'
      },

      {
        text: 'Escutar o vento imóvel',
        next: 'wind'
      },

      {
        text: 'Tocar os troncos antigos',
        next: 'bark'
      },

      {
        text: 'Permanecer diante da escuridão',
        next: 'shadow'
      }
    ]
  },

  roots: {
    id: 'roots',

    title: 'Fragmento II',

    text:
      'As raízes atravessavam a terra como memórias incapazes de desaparecer.',

    choices: [
      {
        text: 'Seguir mais profundamente',
        next: 'endingForest'
      },

      {
        text: 'Retornar lentamente',
        next: 'endingAsh'
      },

      {
        text: 'Escutar o solo respirar',
        next: 'endingEcho'
      },

      {
        text: 'Fechar os olhos',
        next: 'endingDream'
      }
    ]
  },

  wind: {
    id: 'wind',

    title: 'Fragmento II',

    text:
      'O vento parecia atravessar nomes esquecidos antes de alcançar as folhas.',

    choices: [
      {
        text: 'Seguir o som distante',
        next: 'endingEcho'
      },

      {
        text: 'Esperar o silêncio retornar',
        next: 'endingDream'
      },

      {
        text: 'Atravessar a mata',
        next: 'endingForest'
      },

      {
        text: 'Desviar o olhar',
        next: 'endingAsh'
      }
    ]
  },

  bark: {
    id: 'bark',

    title: 'Fragmento II',

    text:
      'Sob a superfície áspera da madeira, algo ainda parecia pulsar lentamente.',

    choices: [
      {
        text: 'Permanecer imóvel',
        next: 'endingDream'
      },

      {
        text: 'Escutar o interior da floresta',
        next: 'endingEcho'
      },

      {
        text: 'Continuar caminhando',
        next: 'endingForest'
      },

      {
        text: 'Deixar tudo para trás',
        next: 'endingAsh'
      }
    ]
  },

  shadow: {
    id: 'shadow',

    title: 'Fragmento II',

    text:
      'As sombras não escondiam a floresta. Elas pareciam ser a própria floresta.',

    choices: [
      {
        text: 'Entrar na escuridão',
        next: 'endingForest'
      },

      {
        text: 'Esperar o amanhecer',
        next: 'endingDream'
      },

      {
        text: 'Escutar a noite respirar',
        next: 'endingEcho'
      },

      {
        text: 'Voltar para o início',
        next: 'endingAsh'
      }
    ]
  },

  endingForest: {
    id: 'endingForest',

    title: 'Memória Final',

    text:
      'Entre raízes e sombras, algo permaneceu vivo mesmo depois do fim do caminho.',

    choices: []
  },

  endingAsh: {
    id: 'endingAsh',

    title: 'Memória Final',

    text:
      'Nem toda partida produz ausência. Algumas apenas mudam de forma.',

    choices: []
  },

  endingEcho: {
    id: 'endingEcho',

    title: 'Memória Final',

    text:
      'A floresta continuou repetindo silenciosamente aquilo que ninguém permaneceu para ouvir.',

    choices: []
  },

  endingDream: {
    id: 'endingDream',

    title: 'Memória Final',

    text:
      'Havia algo adormecido sob as árvores — e talvez sempre tenha estado ali.',

    choices: []
  }
};