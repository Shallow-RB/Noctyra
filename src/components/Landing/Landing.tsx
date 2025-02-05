"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import EncryptButton from "../ui/encrypt-button";
import Image from "next/image";

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection(props: { title: string; url?: string }) {
  const [loaded, setLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {!videoLoaded && !videoError && (
        <Image
          src="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHxXxOLV5c9JSiRTPpHOIu5ytfakXLs61eElhv"
          alt="motorbike"
          fill
          blurDataURL="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHxXxOLV5c9JSiRTPpHOIu5ytfakXLs61eElhv"
          placeholder="blur"
        />
      )}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src={props.url}
        className={`absolute h-full w-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-50' : 'opacity-0'}`}
        onLoadedData={() => setVideoLoaded(true)}
        onError={() => setVideoError(true)}
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
          className="text-xl font-normal tracking-wide text-gray-300 md:text-2xl"
        >
          Unleash the Power of Luxury
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 1, delay: 2.0 }}
          className="text-lg font-normal tracking-wide text-neutral-300 md:text-xl"
        >
          Explore our collection and find your perfect ride today.
        </motion.p>
        <EncryptButton initialText="DISCOVER" />
      </div>
      <div className="absolute top-[90%] z-20 text-center w-full">
        <Image
          src="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHKB4EqqgYqsOARCblfHXPUk09yzTEgadiQGhF"
          className="mx-auto"
          unoptimized
          alt="scroll"
          width={35}
          height={70}
        />
      </div>
    </section>
  );
}
