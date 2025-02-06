'use client';
import { AnimatedNumber } from '~/components/ui/animated-number';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';


export function AnimatedNumberInView({ prefix, getal }: { prefix: string, getal: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);


  if (isInView && value === 0) {
    setValue(getal);
  }



  return (
    <div className='flex w-full items-center justify-center' ref={ref}>
      <p className='text-white text-2xl text-center text-align-center px-2'>{prefix}</p>
      <AnimatedNumber
        className='inline-flex items-center text-3xl  font-light text-white'
        springOptions={{
          bounce: 0,
          duration: 5000,
        }}
        value={value}
      />
    </div>
  );
}
