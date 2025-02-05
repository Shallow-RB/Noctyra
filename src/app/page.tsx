"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { SmoothScrollHero } from "~/components/SmoothScrollHero/SmoothScrollHero";
import Landing from "~/components/Landing/Landing";
import HorizontalCarousel from "~/components/Carousel/HorizontalCarousel";
import { TextReveal } from "~/components/TextReveal/TextReveal";

export default function HomePage() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <Landing
        title="NOCTYRA"
        url="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHEDeqYy0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
      />

      <SmoothScrollHero />
      <HorizontalCarousel />
      <div className="bg-white">
        <div className="mx-auto w-[80%]">
          <TextReveal
            headerText="The Pinnacle of Two-Wheeled Luxury"
            text="Experience the fusion of cutting-edge performance and refined elegance with our handpicked selection of Yamaha, Kawasaki, and BMW motorcycles."
            imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHvg2Im1YF79Vzl1sIPk2WRjgxZECceG58bB4J"
          />
          <TextReveal
            headerText="Crafted for the Bold and Elite"
            text="Every ride is a statement—our motorcycles embody precision engineering, power, and unmatched sophistication. "
            imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHvg2Im1YF79Vzl1sIPk2WRjgxZECceG58bB4J"
            inverted={true}
          />
          <TextReveal
            headerText="Iconic Machines, Legendary Performance"
            text="Our motorcycles are more than just machines; they are a celebration of design, power, and precision. Ride the world’s most revered motorcycles, built for those who demand power, prestige, and perfection."
            imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHvg2Im1YF79Vzl1sIPk2WRjgxZECceG58bB4J"
          />
          <TextReveal
            headerText="Elevate Your Ride, Redefine Your Journey"
            text="From exhilarating speed to timeless design, discover motorcycles that transcend the ordinary and embrace the extraordinary."
            imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHvg2Im1YF79Vzl1sIPk2WRjgxZECceG58bB4J"
            inverted={true}
          />
        </div>
      </div>
    </div>
  );
}
