"use client";

import { useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function StickyCursor() {
  const cursorSize = 15;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 1000, mass: 0.1 };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = useCallback(
    (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    },
    [cursorSize, mouse.x, mouse.y],
  );

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [manageMouseMove]);

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] h-8 w-8 rounded-full bg-white"
      style={{
        translateX: smoothMouse.x,
        translateY: smoothMouse.y,
        mixBlendMode: "exclusion",
      }}
    />
  );
}
