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
  brandName: string;
  backgroundImage: string;
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
  brandName,
  backgroundImage,
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
        src={backgroundImage}
        alt={text}
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
          className="text-xl font-bold text-center"
        >
          {text}
        </motion.div>

        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            className="text-md w-96 py-4 text-center"
          >
            {description}
          </motion.div>
        )}
        <EncryptButton
          visible={isActive}
          initialText="Explore"
          delay={0.5}
          navigateTo={navigateTo}
          brandName={brandName}
        />
      </div>
    </div>
  );
}

interface AccordionProps {
  texts: string[];
  descriptions?: string[];
  headerImageSrcs?: string[];
  navigateTo: string[];
  brandName?: string;
  backgroundColor?: string;
  backgroundImages?: string[];
}


export default function Accordion({
  texts,
  descriptions,
  headerImageSrcs,
  navigateTo,
  brandName = "default",
  backgroundColor,
  backgroundImages,
}: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => setActiveIndex(index);
  const handleMouseLeave = () => setActiveIndex(null);

  return (
    <div style={{ clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)" }} className={`mx-auto border border-white w-10/12 bg-${backgroundColor}`}>
      <div className="flex h-[70vmin]">
        {texts.map((text, index) => (
          <Card
            key={index}
            index={index}
            isActive={activeIndex === index}
            text={text.split("-")[0]?.toUpperCase() ?? ""}
            description={descriptions?.[index]}
            headerImageSrc={
              headerImageSrcs ? headerImageSrcs[index] : undefined
            }
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            navigateTo={`/brand/${brandName}/${navigateTo[index]?.split(" ")?.join("-") ?? ""}`}
            brandName={brandName}
            backgroundImage={backgroundImages?.[index] ?? ""}
          />
        ))}
      </div>
    </div>
  );
}
