"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import EncryptButton from "../ui/encrypt-button";
import Image from "next/image";

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection(props: {
  title: string;
  videoUrl?: string;
  preloadImgUrl?: string;
  logoUrl: string;
  header?: string;
  description?: string;
}) {
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
          src="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
          alt="motorbike"
          fill
          blurDataURL="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
          placeholder="blur"
        />
      )}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src={props.videoUrl}
        className={`absolute h-full w-full object-cover transition-opacity duration-1000 ${videoLoaded ? "opacity-50" : "opacity-0"}`}
        onLoadedData={() => setVideoLoaded(true)}
        onError={() => setVideoError(true)}
      ></video>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000000] opacity-100"></div>

      <div className="relative z-10 space-y-6 text-center">
        <motion.div className="flex items-center justify-center">
          <Image src={props.logoUrl} alt="logo" width={150} height={150} />
        </motion.div>
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
          {props.header}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 1, delay: 2.0 }}
          className="mx-auto w-4/5 text-lg font-normal tracking-wide text-neutral-300 md:text-xl"
        >
          {props.description}
        </motion.p>
      </div>
      <div className="absolute top-[90%] z-20 w-full text-center">
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
