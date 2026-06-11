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
  const springValue = useSpring(motionValue, { duration, bounce: 0 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
      }
    });
    return () => unsubscribe();
  }, [springValue, prefix, suffix]);

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}

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
  const springValue = useSpring(motionValue, { duration, bounce: 0 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`;
      }
    });
    return () => unsubscribe();
  }, [springValue, prefix, suffix, decimals]);

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}

interface StatCardProps {
  value: number;
  label: string;
  description?: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  icon?: React.ReactNode;
  index?: number;
}

/**
 * AnimatedStatCard — magazine stat block. Oversized italic numeral
 * with mono label and rule above.
 */
export function AnimatedStatCard({
  value,
  label,
  description,
  suffix = '',
  prefix = '',
  decimals,
  icon,
  index,
}: StatCardProps) {
  const CounterComponent = decimals !== undefined ? AnimatedDecimalCounter : AnimatedCounter;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="text-left"
    >
      {index !== undefined && (
        <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-secondary-500 mb-4">
          N°{String(index + 1).padStart(2, '0')}
        </div>
      )}
      {icon && (
        <div className="mb-4 text-secondary-500 [&_svg]:w-6 [&_svg]:h-6">{icon}</div>
      )}
      <div className="font-display italic text-6xl md:text-7xl text-primary-700 leading-[0.95] mb-3 tracking-tight">
        <CounterComponent
          value={value}
          suffix={suffix}
          prefix={prefix}
          decimals={decimals}
          duration={2000}
        />
      </div>
      <hr className="rule-soft mb-3 w-12" />
      <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--ink-muted)] mb-2">
        {label}
      </div>
      {description && (
        <p className="text-sm text-[var(--ink-faint)] leading-relaxed max-w-[28ch]">
          {description}
        </p>
      )}
    </motion.div>
  );
}
