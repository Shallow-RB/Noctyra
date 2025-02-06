"use client";
import { AnimatedNumber } from "~/components/ui/animated-number";
import { useInView } from "motion/react";
import { useRef, useState } from "react";

export function AnimatedNumberInView({
  prefix,
  suffix,
  getal,
}: {
  prefix: string;
  suffix: string;
  getal: string | number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  if (isInView && value === 0) {
    if (typeof getal === "number") {
      setValue(Number(getal));
    } else {
    }
  }

  return (
    <div className="flex w-full items-center justify-center" ref={ref}>
      <p className="text-align-center px-2 text-center text-2xl text-white">
        {prefix}
      </p>
      <AnimatedNumber
        className="inline-flex items-center text-3xl font-light text-white"
        springOptions={{
          bounce: 0,
          duration: 3000,
        }}
        value={value}
      />
      <p className="text-align-center px-2 text-center text-3xl font-light text-white">
        {suffix}
      </p>
    </div>
  );
}
