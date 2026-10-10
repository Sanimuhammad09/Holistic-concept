import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  cursor?: boolean;
}

export function TypewriterText({ text, delay = 0, speed = 50, className = '', cursor = true }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    
    // Reset when text changes
    setDisplayedText('');
    
    // Initial delay before typing starts
    timeoutId = setTimeout(() => {
      let currentIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          currentIndex++;
          setDisplayedText(text.slice(0, currentIndex));
        } else {
          clearInterval(typeInterval);
        }
      }, speed);
      
      return () => clearInterval(typeInterval);
    }, delay);
    
    return () => clearTimeout(timeoutId);
  }, [text, delay, speed]);

  return (
    <span className={`inline-block ${className}`}>
      {displayedText}
      {cursor && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block ml-1 w-1 bg-current"
          style={{ height: '0.8em', verticalAlign: 'baseline' }}
        />
      )}
    </span>
  );
}
