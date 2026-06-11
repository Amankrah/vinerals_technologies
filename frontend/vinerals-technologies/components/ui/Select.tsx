import React, { useId } from 'react';
import { cn } from '@/lib/utils';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helpText?: string;
  options: SelectOption[];
  placeholder?: string;
  containerClassName?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      helpText,
      options,
      placeholder,
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
    const selectId = id || `select-${reactId}`;

    return (
      <div className={cn('w-full', containerClassName)}>
        {label && (
          <label
            htmlFor={selectId}
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
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            className={cn(
              'w-full bg-transparent border-0 border-b py-3 pl-0 pr-8 font-display text-lg text-[var(--ink)]',
              'transition-all duration-200 appearance-none cursor-pointer',
              'focus:outline-none focus:ring-0',
              error
                ? 'border-secondary-500 focus:border-secondary-600'
                : 'border-[var(--ink-hairline)] focus:border-primary-700',
              disabled && 'opacity-60 cursor-not-allowed',
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Caret — italic display chevron, not a slick icon. */}
          <span
            aria-hidden
            className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none font-display italic text-xl text-[var(--ink-faint)]"
          >
            ⌄
          </span>
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

Select.displayName = 'Select';

export default Select;
