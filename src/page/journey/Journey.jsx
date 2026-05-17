import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {ParticleBackground} from '../../components/ParticleBackground';
import {ButtonChoice} from '../../components/ButtonChoice';
import {useLocation} from 'react-router-dom';
import {stories} from '../../data';

export const Journey = () => {
  const [currentScene, setCurrentScene] = useState('intro');

  const [memory, setMemory] = useState([]);
  const location = useLocation();
  const story = location.state?.story || stories[Math.floor(Math.random() * stories.length)];
  const scene = story[currentScene];

  const handleChoice = (choice) => {
    setMemory((prev) => [...prev, scene.text]);

    setCurrentScene(choice.next);
  };

  const styles = {
    container: {
      height: '100vh',
      background: 'radial-gradient(circle at center, #1a1a22, #0f0f14)',
      color: '#eaeaf0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '32px',
      overflow: 'hidden',
      position: 'relative',
      fontFamily: 'serif'
    },

    content: {
      width: '100%',
      maxWidth: '700px',
      position: 'relative',
      zIndex: 1,
      textAlign: 'center'
    },

    title: {
      color: '#c8a96a',
      marginBottom: '24px',
      letterSpacing: '2px',
      fontSize: '1rem',
      textTransform: 'uppercase'
    },

    text: {
      fontSize: '1.5rem',
      lineHeight: 1.8,
      marginBottom: '48px',
      opacity: 0.9
    },

    choices: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },

    finalText: {
      marginTop: '40px',
      fontStyle: 'italic',
      opacity: 0.7,
      lineHeight: 1.8
    }
  };

  return (
    <div style={styles.container}>
      <ParticleBackground />
      <div style={styles.content}>
        <AnimatePresence mode="wait">
          <motion.div
            key={scene.id}
            initial={{
              opacity: 0,
              y: 20,
              filter: 'blur(10px)'
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)'
            }}
            exit={{
              opacity: 0,
              y: -20,
              filter: 'blur(10px)'
            }}
            transition={{
              duration: 0.8
            }}
          >
            <p style={styles.title}>{scene.title}</p>

            <p style={styles.text}>{scene.text}</p>

            {scene.choices.length > 0 ? (
              <div style={styles.choices}>
                {scene.choices.map((choice, index) => (
                  <ButtonChoice key={index} onClick={() => handleChoice(choice)}>
                    {choice.text}
                  </ButtonChoice>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1}}
                style={styles.finalText}
              >
                {memory.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
