"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Paragraph } from "./Word";

interface TextRevealProps {
  headerText: string;
  text: string;
  imageUrl: string;
  inverted?: boolean;
}

export const TextReveal = ({
  headerText,
  text,
  imageUrl,
  inverted = false,
}: TextRevealProps) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.90", "start 0.25"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);

  // Adjust translateX based on inverted
  const translateX = useTransform(
    scrollYProgress,
    [0, 0.7],
    inverted ? ["30%", "0%"] : ["-30%", "0%"],
  );

  useEffect(() => {
    scrollYProgress.on("change", (value) => {
      console.log(value);
    });
  }, [scrollYProgress]);

  return (
    <div className="flex h-screen w-full flex-row items-center justify-center space-y-8">
      {inverted ? (
        <>
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-4 w-full text-3xl font-normal uppercase text-black"
            >
              {headerText}
            </motion.div>
            <Paragraph text={text} />
          </div>
          <motion.img
            src={imageUrl}
            ref={element}
            alt="Revealing Image"
            style={{ opacity, translateX }}
            className="w-full"
          />
        </>
      ) : (
        <>
          <motion.img
            src={imageUrl}
            ref={element}
            alt="Revealing Image"
            style={{ opacity, translateX }}
            className="w-full pr-12"
          />
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-4 w-full text-3xl font-normal uppercase text-black"
            >
              {headerText}
            </motion.div>
            <Paragraph text={text} />
          </div>
        </>
      )}
    </div>
  );
};
