import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {ParticleBackground} from '../../components/ParticleBackground';
import {useNavigate} from 'react-router-dom';
import {stories} from '../../data/index';

const frases = [
  'Nem todo caminho se revela antes do primeiro passo.',
  'Há escolhas que sussurram antes de acontecer.',
  'O destino não aponta — ele sugere.',
  'Cada decisão carrega ecos do que poderia ser.',
  'O desconhecido não é vazio — é possibilidade.',
  'Entre o medo e a curiosidade, nasce o caminho.',
  'Nem toda resposta vem em forma de certeza.',
  'O que se escolhe também escolhe de volta.',
  'Há caminhos que só existem depois da decisão.',
  'O silêncio também orienta.',
  'O que parece acaso pode ser apenas um caminho não compreendido.',
  'Algumas portas só existem para quem decide abrir.',
  'A escolha não muda apenas o caminho — muda quem escolhe.'
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return isMobile;
};

export const Home = () => {
  const isMobile = useIsMobile();
  const [isLeaving, setIsLeaving] = useState(false);
  const navigate = useNavigate();

  const [frase] = useState(() => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    return frases[randomIndex];
  });

  const styles = {
    container: {
      height: '100vh',
      padding: '20px',
      background: 'radial-gradient(circle at center, #1a1a22, #0f0f14)',
      color: '#eaeaf0',
      display: 'flex',
      gap: isMobile ? '24px' : '64px',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontFamily: 'serif',

      position: 'relative',
      overflow: 'hidden'
    },
    image: {
      width: isMobile ? '180px' : '320px',
      height: 'auto'
    },
    title: {
      fontSize: isMobile ? '2rem' : '3rem',
      color: '#c8a96a',
      marginBottom: '10px'
    },
    frase: {
      fontStyle: 'italic',
      opacity: 0.8,
      marginBottom: '30px',
      fontSize: isMobile ? '0.85rem' : '1rem'
    },
    button: {
      padding: '12px 30px',
      border: '1px solid #c8a96a',
      background: 'transparent',
      color: '#eaeaf0',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: '0.3s',
      marginBottom: '30px'
    },
    description: {
      maxWidth: '400px',
      fontSize: '0.9rem',
      opacity: 0.6
    }
  };

  const onStart = () => {
    const randomIndex = Math.floor(Math.random() * stories.length);

    const selectedStory = stories[randomIndex];

    setIsLeaving(true);

    setTimeout(() => {
      navigate('/journey', {
        state: {
          story: selectedStory
        }
      });
    }, 2500);
  };

  return (
    <motion.div
      style={styles.container}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1.5}}
    >
      <ParticleBackground />

      <motion.img
        src="/crystal-ball.png"
        style={styles.image}
        animate={{
          scale: isLeaving ? 1.4 : 1,
          opacity: isLeaving ? 0 : 1,
          filter: isLeaving ? 'blur(12px)' : 'blur(0px)'
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <motion.div
        initial={{opacity: 0, x: 40}}
        animate={{opacity: 1, x: 0}}
        transition={{delay: 0.4, duration: 1}}
      >
        <motion.h1
          style={styles.title}
          animate={{
            opacity: isLeaving ? 0 : 1,
            y: isLeaving ? -20 : 0
          }}
          initial={{opacity: 0, y: 20}}
          transition={{delay: 0.6}}
        >
          Ecos da Escolha
        </motion.h1>

        <motion.p
          style={styles.frase}
          animate={{
            opacity: isLeaving ? 0 : 1,
            y: isLeaving ? -20 : 0
          }}
          initial={{opacity: 0}}
          transition={{delay: 1}}
        >
          "{frase}"
        </motion.p>

        <motion.button
          style={styles.button}
          animate={{
            opacity: isLeaving ? 0 : 1
          }}
          onClick={onStart}
          whileHover={{
            scale: 1.04,
            backgroundColor: '#c8a96a',
            color: '#111'
          }}
          whileTap={{
            scale: 0.97
          }}
        >
          Iniciar Jornada
        </motion.button>

        <motion.p
          style={styles.description}
          initial={{opacity: 0}}
          animate={{opacity: 0.6}}
          transition={{delay: 1.3}}
        >
          Uma experiência narrativa onde cada escolha constrói uma história — e revela algo além do
          caminho.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};
