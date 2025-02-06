"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import React from "react";
import "./ZoomParallax.scss";

interface ZoomParallaxProps {
  imageUrls: string[];
}

export function ZoomParallax({ imageUrls }: ZoomParallaxProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scales = [4, 5, 6, 8, 9]; // Default scale values

  return (
    <div ref={container} className="zoom-container">
      <div className="sticky">
        {imageUrls.map((src, index) => {
          const scale = useTransform(scrollYProgress, [0, 1], [1, scales[index] ?? 4]);
          return (
            <motion.div style={{ scale }} key={index} className="el">
              <div className="imageContainer">
                <Image className="img" src={src} alt={`image-${index}`} fill />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
