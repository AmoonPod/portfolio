import React, { useState, useEffect } from 'react';

// Function to generate a random character
function getRandomChar() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return chars.charAt(Math.floor(Math.random() * chars.length));
}

// Function to generate a random index
function getRandomIndex(length: number, excludedIndexes: Set<number>) {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * length);
  } while (excludedIndexes.has(randomIndex));
  return randomIndex;
}

const scrambleEffect = (text: string, callback: (scrambledText: string) => void): void => {
  let scrambledText = Array.from({ length: text.length }, () => getRandomChar()).join('');
  const revealedIndexes = new Set<number>();

  const intervalId = setInterval(() => {
    if (revealedIndexes.size < text.length) {
      let index = getRandomIndex(text.length, revealedIndexes);
      scrambledText = scrambledText.substr(0, index) + text[index] + scrambledText.substr(index + 1);
      revealedIndexes.add(index);
      callback(scrambledText);
    } else {
      clearInterval(intervalId);
    }
  }, 15); // Speed of scrambling effect
};

interface ScrambleTextProps {
  text: string;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ text }) => {
  const [scrambledText, setScrambledText] = useState<string | null>(null);

  useEffect(() => {
    setScrambledText(Array.from({ length: text.length }, () => getRandomChar()).join(''));
    scrambleEffect(text, setScrambledText);
  }, [text]);

  return (
    <span className='text-gray-500 dark:text-gray-400 mb-16 font-light lg:w-[450px] md:w-[450px] h-12'>{scrambledText}</span>
  );
};

export default ScrambleText;
