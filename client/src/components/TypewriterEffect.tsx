import { useEffect, useState } from "react";

interface TypewriterEffectProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

export default function TypewriterEffect({ 
  words, 
  speed = 100, 
  deleteSpeed = 50, 
  delayBetweenWords = 2000 
}: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Guard against empty or undefined words array
  if (!words || words.length === 0) {
    return <span className="gradient-text">Loading...</span>;
  }

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    // Additional safety check
    if (!currentWord) {
      return;
    }
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Start deleting after delay
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, speed, deleteSpeed, delayBetweenWords]);

  return (
    <span className="gradient-text">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}