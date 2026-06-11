import React, { useId } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helpText?: string;
  containerClassName?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      helpText,
      className,
      containerClassName,
      id,
      required,
      disabled,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const reactId = useId();
    const textareaId = id || `textarea-${reactId}`;

    return (
      <div className={cn('w-full', containerClassName)}>
        {label && (
          <label
            htmlFor={textareaId}
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

        <textarea
          ref={ref}
          id={textareaId}
          disabled={disabled}
          rows={rows}
          className={cn(
            'w-full bg-transparent border-0 border-b py-3 px-0 font-display text-lg text-[var(--ink)] leading-relaxed',
            'transition-all duration-200 resize-y',
            'placeholder:text-[var(--ink-faint)] placeholder:italic placeholder:font-display',
            'focus:outline-none focus:ring-0',
            error
              ? 'border-secondary-500 focus:border-secondary-600'
              : 'border-[var(--ink-hairline)] focus:border-primary-700',
            disabled && 'opacity-60 cursor-not-allowed',
            className
          )}
          {...props}
        />

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

Textarea.displayName = 'Textarea';

export default Textarea;
