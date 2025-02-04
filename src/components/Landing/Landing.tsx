"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import EncryptButton from "../ui/encrypt-button";

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection(props: { title: string; url: string }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/medias/ducati.mp4"
        className="absolute h-full w-full scale-150 object-fill opacity-50"
      ></video>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000000] opacity-100"></div>
      <div className="relative z-10 space-y-6 text-center">
        <motion.h1 className="text-6xl font-extralight tracking-widest text-white md:text-8xl">
          {props.title.split("").map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={letterVariants}
              initial="hidden"
              animate={loaded ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-xl font-light tracking-wide text-gray-300 md:text-2xl"
        >
          Unleash the Power of Luxury
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 1, delay: 2.0 }}
          className="text-lg font-light tracking-wide text-gray-400 md:text-xl"
        >
          Explore our collection and find your perfect ride today.
        </motion.p>
        <EncryptButton initialText="DISCOVER"  />
        <i className="c-scroll-indicator">
          <i></i>
        </i>
      </div>
    </section>
  );
}
