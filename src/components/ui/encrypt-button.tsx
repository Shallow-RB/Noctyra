"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface EncryptButtonProps {
  initialText?: string;
}

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

function EncryptButton({ initialText = "Encrypt data" }: EncryptButtonProps) {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [text, setText] = useState<string>(initialText);

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

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2.5 }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="group relative w-[150px] overflow-hidden border-[1px] border-neutral-400 bg-transparent px-4 py-2 font-mono font-medium uppercase text-neutral-300 transition-colors hover:bg-neutral-800"
    >
      <span>{text}</span>
    </motion.button>
  );
}

export default EncryptButton;
