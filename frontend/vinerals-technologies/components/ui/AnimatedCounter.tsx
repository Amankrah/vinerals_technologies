'use client';

import { useEffect, useRef } from 'react';
import { useInView, useSpring, useMotionValue, motion } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

/**
 * Animated counter that counts up from 0 to the target value when it comes into view
 * Used for stats and metrics sections
 */
export default function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2000,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration,
    bounce: 0,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        // Round the value for whole numbers
        const rounded = Math.round(latest);
        ref.current.textContent = `${prefix}${rounded}${suffix}`;
      }
    });

    return () => unsubscribe();
  }, [springValue, prefix, suffix]);

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}

// Alternative component for percentage or decimal values
export function AnimatedDecimalCounter({
  value,
  suffix = '',
  prefix = '',
  decimals = 1,
  duration = 2000,
  className = '',
}: AnimatedCounterProps & { decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration,
    bounce: 0,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        const fixed = latest.toFixed(decimals);
        ref.current.textContent = `${prefix}${fixed}${suffix}`;
      }
    });

    return () => unsubscribe();
  }, [springValue, prefix, suffix, decimals]);

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}

// Component for stats with label
interface StatCardProps {
  value: number;
  label: string;
  description?: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  icon?: React.ReactNode;
}

export function AnimatedStatCard({
  value,
  label,
  description,
  suffix = '',
  prefix = '',
  decimals,
  icon,
}: StatCardProps) {
  const CounterComponent = decimals !== undefined ? AnimatedDecimalCounter : AnimatedCounter;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      {icon && (
        <div className="flex justify-center mb-4">
          <div className="text-secondary-600">{icon}</div>
        </div>
      )}
      <div className="text-4xl md:text-5xl font-bold text-primary-900 mb-2">
        <CounterComponent
          value={value}
          suffix={suffix}
          prefix={prefix}
          decimals={decimals}
          duration={2000}
        />
      </div>
      <div className="text-lg font-semibold text-gray-800 mb-1">{label}</div>
      {description && (
        <div className="text-sm text-gray-600">{description}</div>
      )}
    </motion.div>
  );
}
