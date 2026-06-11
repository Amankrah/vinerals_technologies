import React, { useId } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helpText,
      leftIcon,
      rightIcon,
      className,
      containerClassName,
      id,
      required,
      disabled,
      ...props
    },
    ref
  ) => {
    const reactId = useId();
    const inputId = id || `input-${reactId}`;

    return (
      <div className={cn('w-full', containerClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'block font-mono text-[0.7rem] uppercase tracking-[0.22em] mb-2.5',
              error ? 'text-secondary-600' : 'text-[var(--ink-muted)]',
              disabled && 'opacity-50'
            )}
          >
            {label}
            {required && <span className="text-secondary-500 ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[var(--ink-faint)]">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={cn(
              'w-full bg-transparent border-0 border-b py-3 px-0 font-display text-lg text-[var(--ink)]',
              'transition-all duration-200',
              'placeholder:text-[var(--ink-faint)] placeholder:italic placeholder:font-display',
              'focus:outline-none focus:ring-0',
              error
                ? 'border-secondary-500 focus:border-secondary-600'
                : 'border-[var(--ink-hairline)] focus:border-primary-700',
              disabled && 'opacity-60 cursor-not-allowed',
              leftIcon && 'pl-7',
              rightIcon && 'pr-7',
              className
            )}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[var(--ink-faint)]">
              {rightIcon}
            </div>
          )}
        </div>

        {error && (
          <p className="mt-2 text-sm text-secondary-600 italic font-display flex items-center gap-1.5">
            <span aria-hidden className="text-secondary-500">·</span>
            {error}
          </p>
        )}

        {helpText && !error && (
          <p className="mt-2 text-sm text-[var(--ink-faint)] italic font-display">
            {helpText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
