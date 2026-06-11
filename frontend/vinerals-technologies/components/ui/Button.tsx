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
      // Forest ink block — the editorial CTA.
      primary:
        'bg-primary-700 text-[var(--cream)] border border-primary-800 ' +
        'hover:bg-primary-800 hover:shadow-[4px_4px_0_var(--secondary-500)] hover:-translate-x-[2px] hover:-translate-y-[2px] ' +
        'active:translate-x-0 active:translate-y-0 active:shadow-none ' +
        'focus:ring-primary-500/30',
      // Hairline outline — magazine secondary action.
      secondary:
        'bg-transparent text-primary-700 border border-primary-700 ' +
        'hover:bg-primary-700 hover:text-[var(--cream)] ' +
        'focus:ring-primary-500/30',
      // Pure text — the "read more" link button.
      ghost:
        'bg-transparent text-primary-700 border border-transparent ' +
        'hover:text-secondary-500 ' +
        'focus:ring-secondary-500/30',
      // Ochre block — high-attention accent (rare use).
      accent:
        'bg-accent-400 text-primary-900 border border-accent-500 ' +
        'hover:bg-accent-300 hover:shadow-[4px_4px_0_var(--primary-800)] hover:-translate-x-[2px] hover:-translate-y-[2px] ' +
        'active:translate-x-0 active:translate-y-0 active:shadow-none ' +
        'font-medium focus:ring-accent-500/30',
    };

    const sizes = {
      sm: 'px-4 py-2 text-[0.78rem]',
      md: 'px-6 py-3 text-[0.86rem]',
      lg: 'px-8 py-4 text-[0.95rem]',
    };

    const baseStyles =
      'inline-flex items-center justify-center gap-2.5 rounded-none ' +
      'font-mono uppercase tracking-[0.18em] ' +
      'transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ' +
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--cream)] ' +
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-none';

    const buttonClasses = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    const content = (
      <>
        {icon && iconPosition === 'left' && <span className="inline-flex">{icon}</span>}
        {loading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
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
                strokeWidth="3"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            En cours…
          </span>
        ) : (
          children
        )}
        {icon && iconPosition === 'right' && !loading && (
          <span className="inline-flex transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </>
    );

    if (href && !disabled) {
      return (
        <Link href={href} className={cn('group', buttonClasses)} ref={ref as never}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as never}
        type={type}
        onClick={onClick}
        disabled={disabled || loading}
        className={cn('group', buttonClasses)}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
