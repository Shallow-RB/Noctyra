"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import React from "react";
import "./ZoomParallax.scss";

export default function ZoomParallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: "https://db6v27veh0.ufs.sh/f/9qjypOe04JBHxXxOLV5c9JSiRTPpHOIu5ytfakXLs61eElhv",
      scale: scale4,
    },
    {
      src: "https://db6v27veh0.ufs.sh/f/9qjypOe04JBHvg2Im1YF79Vzl1sIPk2WRjgxZECceG58bB4J",
      scale: scale4,
    },
    {
      src: "https://db6v27veh0.ufs.sh/f/9qjypOe04JBHpP3snWRxZcGVh43KvCJ091ySznEOusW6a7tj",
      scale: scale5,
    },
    {
      src: "https://db6v27veh0.ufs.sh/f/9qjypOe04JBHewEwOZCsh4fPE3ANl1kuLF5j2qdvoKBxVmI6",
      scale: scale6,
    },
    {
      src: "https://db6v27veh0.ufs.sh/f/9qjypOe04JBHxXxOLV5c9JSiRTPpHOIu5ytfakXLs61eElhv",
      scale: scale8,
    },
    {
      src: "https://db6v27veh0.ufs.sh/f/9qjypOe04JBHxXxOLV5c9JSiRTPpHOIu5ytfakXLs61eElhv",
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className="zoom-container">
      <div className="sticky">
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div style={{ scale: scale }} key={index} className="el">
              <div className="imageContainer">
                <Image className="img" src={src} alt="image" fill />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
