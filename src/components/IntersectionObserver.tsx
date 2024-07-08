import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';

type Props = {
  animation: string;
  children: React.ReactNode;
  thresholdVal?: number;
  styles?: string;
};

const IntersectionObserverComponent: React.FC<Props> = ({
  children,
  animation,
  styles,
  thresholdVal = 0.05,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animation);
          entry.target.classList.remove('opacity-0');
        }
      },
      {
        threshold: thresholdVal,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={cn('opacity-0', styles)}>
      {children}
    </div>
  );
};

export default IntersectionObserverComponent;
