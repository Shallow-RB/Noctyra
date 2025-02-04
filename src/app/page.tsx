"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { SmoothScrollHero } from "~/components/SmoothScrollHero/SmoothScrollHero";
import Landing from "~/components/Landing/Landing";
import HorizontalCarousel from "~/components/Carousel/HorizontalCarousel";

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
      <Landing title="NOCTYRA" />
      <SmoothScrollHero />
      <HorizontalCarousel />
    </div>
  );
}
