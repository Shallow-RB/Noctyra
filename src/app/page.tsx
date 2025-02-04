"use client";

import Lenis from "lenis";
import { useEffect, useState } from "react";
import { SmoothScrollHero } from "~/components/SmoothScrollHero/SmoothScrollHero";
import Landing from "~/components/Landing/Landing";
import HorizontalCarousel from "~/components/Carousel/HorizontalCarousel";
import Preloader from "~/components/Preloader/Preloader";

export default function HomePage() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {
        isLoading && <Preloader />
      }
      <Landing
        title="NOCTYRA"
        url="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHvlxqzZYF79Vzl1sIPk2WRjgxZECceG58bB4J"
      />

      <SmoothScrollHero />
      <HorizontalCarousel />
    </div>
  );
}
