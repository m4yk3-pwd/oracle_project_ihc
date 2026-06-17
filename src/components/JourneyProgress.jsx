import {motion} from 'framer-motion';

export const JourneyProgress = ({current, total}) => {
  return (
    <div
      style={{
        width: '100%',
        marginBottom: '40px'
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center'
        }}
      >
        {Array.from({
          length: total
        }).map((_, index) => (
          <motion.div
            key={index}
            animate={{
              scale: index < current ? 1 : 0.8,
              opacity: index < current ? 1 : 0.3
            }}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#c8a96a'
            }}
          />
        ))}
      </div>

      <p
        style={{
          marginTop: '12px',
          textAlign: 'center',
          fontSize: '.8rem',
          opacity: 0.6
        }}
      >
        Fragmento {current} de {total}
      </p>
    </div>
  );
};
