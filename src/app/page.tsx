"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { SmoothScrollHero } from "~/components/SmoothScrollHero/SmoothScrollHero";
import Landing from "~/components/Landing/Landing";
import HorizontalCarousel from "~/components/Carousel/HorizontalCarousel";
import { TextReveal } from "~/components/TextReveal/TextReveal";
import { ZoomParallax } from "~/components/ZoomParallax/ZoomParallax";
import InfiniteText from "~/components/InfiniteText/InfiniteText";
import { TracingBeam } from "~/components/ui/tracing-beam";


export const dynamic = "force-dynamic";

export default function HomePage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Increase duration for smoother scrolling
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      smoothWheel: true,
      wheelMultiplier: 1, // Adjust wheel sensitivity
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const zoomParallaxImages = [
    "https://db6v27veh0.ufs.sh/f/9qjypOe04JBHxXxOLV5c9JSiRTPpHOIu5ytfakXLs61eElhv",

    "https://db6v27veh0.ufs.sh/f/9qjypOe04JBHRazZFimVqaOFeZoQhNm06wMW2Eszv8UrKiB3",
  ];

  return (
    <div>
      <Landing
        title="NOCTYRA"
        videoUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHNREupfSx3jQlcImBgbU8X2eZYupWnSTtAwD7"
        preloadImgUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
        header="Unleash the Power of Luxury"
        logoUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBH7U73qvfOmCi1GFTqYsZKy8IW6pBQuJrgS95w"
      />

      <SmoothScrollHero />
      <HorizontalCarousel />
      <TracingBeam beamColor="#000000">
        <div className="bg-white">
          <div className="mx-auto w-[80%]">
            <TextReveal
              headerText="The Pinnacle of Two-Wheeled Luxury"
              text="Experience the fusion of cutting-edge performance and refined elegance with our handpicked selection of Yamaha, Kawasaki, and BMW motorcycles."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHT6Net4d3kOFJLXUylKgYxAPunqd7r8zDebCH"
              textColor="black"
            />
            <TextReveal
              headerText="Crafted for the Bold and Elite"
              text="Every ride is a statement—our motorcycles embody precision engineering, power, and unmatched sophistication. "
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHmNeQG84ZU37XDiQBO8v2JYV9Kduz1GhrPIMq"
              inverted={true}
              textColor="black"
            />
            <TextReveal
              headerText="Iconic Machines, Legendary Performance"
              text="Our motorcycles are more than just machines; they are a celebration of design, power, and precision. Ride the world's most revered motorcycles, built for those who demand power, prestige, and perfection."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHvUUFH1jYF79Vzl1sIPk2WRjgxZECceG58bB4"
              textColor="black"
            />
            <TextReveal
              headerText="Elevate Your Ride, Redefine Your Journey"
              text="From exhilarating speed to timeless design, discover motorcycles that transcend the ordinary and embrace the extraordinary."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHRazZFimVqaOFeZoQhNm06wMW2Eszv8UrKiB3"
              inverted={true}
              textColor="black"
            />
          </div>
        </div>
      </TracingBeam>
      <InfiniteText inputText="GALLERY" textColor="black" backgroundColor="white" slashColor="black" />
      <ZoomParallax imageUrls={zoomParallaxImages} />
    </div>



  );
}
