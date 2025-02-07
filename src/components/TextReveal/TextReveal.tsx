"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Paragraph } from "./Word";
import Image from "next/image";

interface TextRevealProps {
  headerText: string;
  text: string;
  imageUrl: string;
  inverted?: boolean;
  textColor?: string;
  clipPath?: string;
}

export const TextReveal = ({
  headerText,
  text,
  imageUrl,
  inverted = false,
  textColor,
  clipPath,
}: TextRevealProps) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.90", "start 0.25"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  console.log(textColor)
  // Adjust translateX based on inverted
  const translateX = useTransform(
    scrollYProgress,
    [0, 0.7],
    inverted ? ["30%", "0%"] : ["-30%", "0%"],
  );

  useEffect(() => {
    scrollYProgress.on("change", (_value) => {
      // console.log(value); // This line is intentionally left empty
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
              className={`mb-4 w-full text-3xl font-normal uppercase text-${textColor}`}
              style={{ color: textColor }}
            >
              {headerText}
            </motion.div>
            <Paragraph text={text} textColor={textColor!} />
          </div>
          <motion.div className="w-full" style={{ opacity, translateX, clipPath }}>
            <Image
              src={imageUrl}
              ref={element}
              width={400}
              height={400}
              alt="Revealing Image"
              className="w-full"
            />
          </motion.div>
        </>
      ) : (
        <>
          <motion.img
            src={imageUrl}
            ref={element}
            alt="Revealing Image"
            style={{ opacity, translateX, clipPath }}
            className="w-full pr-12"
          />
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`mb-4 w-full text-3xl font-normal uppercase text-${textColor}`}
              style={{ color: textColor }}
            >
              {headerText}
            </motion.div>
            <Paragraph text={text} textColor={textColor!} />
          </div>
        </>
      )}
    </div>
  );
};
