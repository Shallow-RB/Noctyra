'use client';
import { AnimatedNumber } from '~/components/ui/animated-number';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';


export function AnimatedNumberInView({ getal }: { getal: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);


  if (isInView && value === 0) {
    setValue(getal);
  }



  return (
    <div className='flex w-full items-center justify-center' ref={ref}>
      <AnimatedNumber
        className='inline-flex items-center font-mono text-2xl font-light text-zinc-800 dark:text-zinc-50'
        springOptions={{
          bounce: 0,
          duration: 5000,
        }}
        value={value}
      />
    </div>
  );
}
