import { useEffect, useState } from 'react';

export const TypewriterText = ({
  text,
  speed = 25,
  onComplete
}) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('');

    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex++;

      setDisplayedText(
        text.slice(0, currentIndex)
      );

      if (currentIndex >= text.length) {
        clearInterval(interval);

        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayedText;
};