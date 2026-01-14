import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className, variant = 'default', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const colorClasses = {
    default: 'text-primary-900',
    light: 'text-white',
    dark: 'text-gray-900',
  };

  return (
    <Link
      href="/"
      className={cn(
        'font-bold tracking-tight transition-opacity hover:opacity-80',
        sizeClasses[size],
        colorClasses[variant],
        className
      )}
    >
      <span className="inline-flex items-center gap-2">
        <svg
          className="w-8 h-8"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* V shape for Vinerals */}
          <path
            d="M4 4 L16 28 L28 4"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Tech circuit accent */}
          <circle cx="16" cy="20" r="2" fill="currentColor" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.6" />
          <circle cx="20" cy="12" r="1.5" fill="currentColor" opacity="0.6" />
        </svg>
        <span>Vinerals</span>
        <span className="font-normal text-secondary-600">Technologies</span>
      </span>
    </Link>
  );
}

// Alternative minimal logo (just text)
export function LogoText({ className, variant = 'default' }: Omit<LogoProps, 'size'>) {
  const colorClasses = {
    default: 'text-primary-900',
    light: 'text-white',
    dark: 'text-gray-900',
  };

  return (
    <Link
      href="/"
      className={cn(
        'font-bold text-2xl tracking-tight transition-opacity hover:opacity-80',
        colorClasses[variant],
        className
      )}
    >
      Vinerals <span className="font-normal text-secondary-600">Tech</span>
    </Link>
  );
}

// Logo icon only (for mobile or compact spaces)
export function LogoIcon({ className, size = 'md' }: Pick<LogoProps, 'className' | 'size'>) {
  const sizeMap = {
    sm: 24,
    md: 32,
    lg: 40,
  };

  const dimension = sizeMap[size];

  return (
    <Link href="/" className={cn('transition-opacity hover:opacity-80', className)}>
      <svg
        width={dimension}
        height={dimension}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4 L16 28 L28 4"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="20" r="2" fill="currentColor" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="20" cy="12" r="1.5" fill="currentColor" opacity="0.6" />
      </svg>
    </Link>
  );
}
