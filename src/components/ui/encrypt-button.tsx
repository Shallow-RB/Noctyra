"use client";

import { motion } from "framer-motion";
import { useScramble } from "../../hooks/useScramble";

interface EncryptButtonProps {
  initialText?: string;
}

function EncryptButton({ initialText = "Encrypt data" }: EncryptButtonProps) {
  const { text, scramble, stopScramble } = useScramble(initialText);

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
