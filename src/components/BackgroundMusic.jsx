import {useEffect, useRef} from 'react';

export const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.3;

    const playAudio = async () => {
      try {
        await audio.play();
      } catch {
        console.log('Autoplay bloqueado pelo navegador');
      }
    };

    playAudio();

    return () => {
      audio.pause();
    };
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/audio/theme.mp3" type="audio/mpeg" />
    </audio>
  );
};
