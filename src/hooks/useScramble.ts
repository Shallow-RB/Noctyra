import { useState, useRef } from "react";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 35;
const CHARS = "!@#$%^&*():{};|,.<>/?";

export function useScramble(initialText: string) {
  const [text, setText] = useState<string>(initialText);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = initialText
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= initialText.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current ?? undefined);
    setText(initialText);
  };

  return { text, scramble, stopScramble };
} 