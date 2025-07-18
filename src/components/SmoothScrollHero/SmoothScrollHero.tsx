import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef, useState, useEffect } from "react";

export const SmoothScrollHero = () => {
  return (
    <div>
      <Hero />
      {/* <Schedule /> */}
    </div>
  );
};

const SECTION_HEIGHT = 2000;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterVideo />
      <ParallaxImages />
    </div>
  );
};

const CenterVideo = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 2500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 2500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 1000],
    [1, 0],
  );

  return (
    <motion.video
      className="sticky top-0 h-screen w-full object-cover"
      style={{
        clipPath,
        opacity,
      }}
      autoPlay
      loop
      muted
      onError={() => {
        console.error(
          "Video kon niet geladen worden. Controleer CORS, bestandsformaat of server settings.",
        );
      }}
    >
      <source
        src="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHxnVnu3H5c9JSiRTPpHOIu5ytfakXLs61eElh"
        type="video/mp4"
      />
      Je browser ondersteunt deze video niet.
    </motion.video>
  );
};

const AnimatedText = ({ text }: { text: string }) => {
  const words = text.split(" ");

  return (
    <div className="inline-block">
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="mr-1 inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: index * 0.15 }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

const ParallaxImages = () => {
  return (
    <div className="relative mx-auto max-w-[90rem] px-4 pt-[200px]">
      <div className="relative z-10 w-full p-4 text-center text-white">
        <ParallaxImg
          src="https://w0.peakpx.com/wallpaper/239/418/HD-wallpaper-black-honda-cbr600rr-motorcycle-honda.jpg"
          alt="bike1"
          start={-200}
          end={200}
          className="w-3/5"
        />
        <motion.div className="relative z-20 text-end text-3xl font-light uppercase tracking-widest">
          <AnimatedText text="Experience the Thrill of the Ride" />
        </motion.div>
        <ParallaxImg
          src="https://wallpapersok.com/images/hd/ultra-hd-matte-black-motorcycle-fv1506u417lapcak.jpg"
          alt="bike2"
          start={200}
          end={-250}
          className="mx-auto w-2/3"
        />
        <motion.div className="relative z-20 text-start text-3xl uppercase text-white">
          <AnimatedText text="Discover our exclusive range of motorcycles" />
        </motion.div>
        <ParallaxImg
          src="https://wallpapercat.com/w/full/5/9/9/1739947-2999x1996-desktop-hd-kawasaki-ninja-h2-wallpaper-photo.jpg"
          alt="bike3"
          start={-200}
          end={200}
          className="ml-auto w-1/3"
        />
        <motion.div className="relative z-20 text-end text-3xl uppercase text-white">
          <AnimatedText text="designed for the ultimate adventure." />
        </motion.div>
        <ParallaxImg
          src="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHkt8PwJRbLnpQB0UXfrMvZtulxaO6hJomP9Fb"
          alt="bike4"
          start={0}
          end={-500}
          className="ml-24 w-5/12"
        />
      </div>
    </div>
  );
};

const ParallaxImg = ({
  className,
  alt,
  src,
  start,
  end,
}: {
  className?: string;
  alt: string;
  src: string;
  start: number;
  end: number;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.3, 1], [1, 0.65]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      loading="lazy"
    />
  );
};
