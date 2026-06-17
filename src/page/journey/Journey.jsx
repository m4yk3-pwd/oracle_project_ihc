import {useState, useCallback} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {ParticleBackground} from '../../components/ParticleBackground';
import {ButtonChoice} from '../../components/ButtonChoice';
import {useLocation, useNavigate} from 'react-router-dom';
import {JourneyProgress} from '../../components/JourneyProgress';
import {TypewriterText} from '../../components/TypewriterText';
import {stories} from '../../data';
import './Journey.css';

export const Journey = () => {
  const [currentScene, setCurrentScene] = useState('intro');
  const navigate = useNavigate();
  const [memory, setMemory] = useState([]);
  const [depth, setDepth] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const location = useLocation();
  const story = location.state?.story || stories[Math.floor(Math.random() * stories.length)];
  const scene = story[currentScene];

  const handleChoice = (choice) => {
    setIsTransitioning(true);

    setTimeout(() => {
      setMemory((prev) => [...prev, scene.text]);
      setDepth((prev) => prev + 1);
      setCurrentScene(choice.next);
      setIsTransitioning(false);
    }, 1500);
  };

  const getStoryDepth = (story, sceneId = 'intro') => {
    const scene = story[sceneId];

    if (!scene) return 0;

    if (!scene.choices.length) {
      return 1;
    }

    const depths = scene.choices.map((choice) => getStoryDepth(story, choice.next));

    return 1 + Math.max(...depths);
  };

  const handleTypewriterComplete = useCallback(() => {
    setShowChoices(true);
  }, []);

  const totalSteps = getStoryDepth(story);
  const isEnding = scene.choices.length === 0;

  return (
    <motion.div
      className={`journey-container ${isEnding ? 'ending' : ''}`}
      animate={{
        background: isEnding
          ? 'radial-gradient(circle at center, #090909, #000000)'
          : 'radial-gradient(circle at center, #1a1a22, #0f0f14)'
      }}
      transition={{
        duration: 3
      }}
    >
      <ParticleBackground />
      <motion.div className="journey-fog"></motion.div>
      <div className="journey-content">
        {!isEnding && <JourneyProgress current={depth} total={totalSteps - 1} />}
        <AnimatePresence mode="wait">
          <motion.div
            key={scene.id}
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.95,
              filter: 'blur(20px)'
            }}
            animate={{
              opacity: isTransitioning ? 0 : 1,
              y: isTransitioning ? -40 : 0,
              scale: isTransitioning ? 1.08 : 1,
              filter: isTransitioning ? 'blur(20px)' : 'blur(0px)'
            }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut'
            }}
          >
            <p className="journey-title">{scene.title}</p>

            <motion.p
              className="journey-text"
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                delay: 0.4,
                duration: 1.2
              }}
            >
              <TypewriterText
                key={scene.id}
                text={scene.text}
                speed={70}
                onComplete={handleTypewriterComplete}
              />
            </motion.p>

            {scene.choices.length > 0 ? (
              <div className="journey-choices">
                {scene.choices.map((choice, index) => (
                  <ButtonChoice
                    disabled={!showChoices || isTransitioning}
                    key={index}
                    onClick={() => handleChoice(choice)}
                  >
                    {choice.text}
                  </ButtonChoice>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1}}
                className="journey-final-text"
              >
                {memory.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </motion.div>
            )}
            {isEnding && (
              <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 2}}
                className="journey-restart"
              >
                <ButtonChoice onClick={() => navigate('/')}>Iniciar Nova Jornada</ButtonChoice>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <footer className="app-footer">Desenvolvido por Mayke Anselmo</footer>
    </motion.div>
  );
};
