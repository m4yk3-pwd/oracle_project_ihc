import {useState} from 'react';
import {motion} from 'framer-motion';

export const ParticleBackground = () => {
  const [particles] = useState(() => {
    return [...Array(20)].map(() => ({
      size: 2 + Math.random() * 4,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 5
    }));
  });

  return (
    <>
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: '50%',
            backgroundColor: '#c8a96a',
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            opacity: 0.2,
            filter: 'blur(1px)',
            boxShadow: '0 0 10px rgba(200,169,106,0.5)'
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.5, 0.1]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut'
          }}
        />
      ))}
    </>
  );
};
