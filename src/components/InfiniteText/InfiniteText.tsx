"use client";
import { motion } from "framer-motion";

export default function InfiniteText({
  inputText,
  textColor,
  backgroundColor,
  slashColor,
}: {
  inputText: string;
  textColor: string;
  backgroundColor: string;
  slashColor: string;
}) {
  return (
    <div
      className={`mx-auto flex h-auto w-full flex-row overflow-hidden bg-${backgroundColor}`}
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <motion.div
          key={`left-${index}`}
          className={`flex flex-shrink-0 text-8xl pr-6 font-normal uppercase tracking-widest text-${textColor}`}
          style={{ color: textColor }}
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 5, ease: "linear", repeat: Infinity }}

        >
          {inputText}&nbsp; 
          <span style={{ color: slashColor }}>{"//"}</span>
        </motion.div>
      ))}
    </div>
  );
}
