'use client';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function StaticTextInView({
  prefix,
  suffix,
  text,
}: {
  prefix?: string;
  suffix?: string;
  text: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="flex w-full items-center justify-center" ref={ref}>
      <p className="text-align-center px-2 text-center text-3xl font-light text-white">
        {prefix}
      </p>
      <p className="inline-flex items-center text-3xl font-light text-white">
        {isInView ? text : ''}
      </p>
      <p className="text-align-center px-2 text-center text-3xl font-light text-white">
        {suffix}
      </p>
    </div>
  );
} 