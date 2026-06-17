import {motion} from 'framer-motion';

export const ButtonChoice = ({children, onClick, disabled = false}) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={{
        scale: 1.03,
        backgroundColor: '#c8a96a',
        color: '#111'
      }}
      whileTap={{
        scale: 0.98
      }}
      style={{
        width: '100%',
        padding: '16px',
        background: 'transparent',
        border: '1px solid rgba(200,169,106,0.4)',
        color: '#eaeaf0',
        cursor: 'pointer',
        borderRadius: '8px',
        fontSize: '1rem',
        transition: '0.3s',
        backdropFilter: 'blur(4px)'
      }}
    >
      {children}
    </motion.button>
  );
};
