import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      href,
      onClick,
      disabled = false,
      loading = false,
      icon,
      iconPosition = 'right',
      className,
      type = 'button',
    },
    ref
  ) => {
    const variants = {
      primary: 'bg-primary-700 text-white hover:bg-primary-800 focus:ring-primary-500',
      secondary: 'bg-white text-primary-700 border-2 border-primary-700 hover:bg-primary-50',
      ghost: 'bg-transparent text-primary-700 hover:bg-primary-50',
      accent: 'bg-accent-500 text-gray-900 hover:bg-accent-400 font-semibold',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const baseStyles =
      'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const buttonClasses = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    const content = (
      <>
        {icon && iconPosition === 'left' && <span>{icon}</span>}
        {loading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </span>
        ) : (
          children
        )}
        {icon && iconPosition === 'right' && !loading && <span>{icon}</span>}
      </>
    );

    if (href && !disabled) {
      return (
        <Link href={href} className={buttonClasses} ref={ref as any}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as any}
        type={type}
        onClick={onClick}
        disabled={disabled || loading}
        className={buttonClasses}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
