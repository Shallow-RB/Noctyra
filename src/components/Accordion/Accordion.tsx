"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import EncryptButton from "../ui/encrypt-button";


interface CardProps {
  index: number;
  isActive: boolean;
  text: string;
  description?: string;
  headerImageSrc?: string;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
  navigateTo: string;
  backgroundImages?: string[];
}


function Card({
  index,
  isActive,
  text,
  description,
  headerImageSrc,
  onMouseEnter,
  onMouseLeave,
  navigateTo,
  backgroundImages
}: CardProps) {
  return (
    <div
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
      className={`relative h-full flex-1 cursor-pointer overflow-hidden transition-all duration-700 ease-in-out ${
        isActive ? "flex-[5]" : "flex-[1]"
      }`}
    >
      <Image
        className="h-full w-full object-cover"
        width={500}
        height={500}
        src={backgroundImages?.[index] ?? "https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"}
        alt="kawasaki"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
        {headerImageSrc && (
          <div className="mb-8 h-[150px] w-[150px]">
            <Image
              src={headerImageSrc}
              alt="Header Image"
              width={150}
              height={150}
              className="h-[150px] w-[150px]"
            />

          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold"
        >
          {text}
        </motion.div>

        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            className="py-4 w-96 text-center text-md"
          >
            {description}
          </motion.div>
        )}
        <EncryptButton visible={isActive} initialText="Explore" delay={0.5} navigateTo={navigateTo} />
      </div>
    </div>
  );
}

interface AccordionProps {
  texts: string[];
  descriptions?: string[];
  headerImageSrcs?: string[];
  navigateTo: string[];
  backgroundImages?: string[];
}


export default function Accordion({ texts, descriptions, headerImageSrcs, navigateTo, backgroundImages }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => setActiveIndex(index);
  const handleMouseLeave = () => setActiveIndex(null);

  

  return (
    <div className="mx-auto w-4/5">
      <div className="flex h-[70vmin]">
        {texts.map((text, index) => (
          <Card
            key={index}
            index={index}
            isActive={activeIndex === index}
            text={text.split('-')[0]?.toUpperCase() ?? ""}
            description={descriptions?.[index]}
            headerImageSrc={headerImageSrcs ? headerImageSrcs[index] : undefined}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            navigateTo={`/brand/${navigateTo[index]?.split("-")[0]?.toLowerCase()}`}
            backgroundImages={backgroundImages}
          />
        ))}
      </div>
    </div>
  );
}
