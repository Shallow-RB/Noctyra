"use client";
import { motion, type MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Paragraph = ({ text, textColor }: { text: string, textColor: string }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.45"],
  });

  const words = text.split(" ");
  const totalWords = words.length;

  return (
    <p
      ref={element}
      className={`flex w-[90%] flex-wrap text-left text-2xl font-normal leading-6 tracking-wider text-${textColor}`}
      style={{ color: textColor }}
    >


      {words.map((word, i) => {
        const start = i / totalWords;
        const end = (i + 1) / totalWords;

        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress} textColor={textColor}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const Word = ({ children, range, progress, textColor }: { children: string, range: [number, number], progress: MotionValue<number>, textColor: string }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <motion.span className="mr-1 mt-6" style={{ opacity }}>
      {children}
    </motion.span>
  );
};

