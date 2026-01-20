import { forwardRef, ReactElement, cloneElement, isValidElement } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, asChild = false, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-ring disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-accent hover:bg-accent-hover text-black shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5',
      secondary: 'bg-[var(--card-bg)] hover:bg-[var(--card-bg)] text-[var(--foreground)] border border-[var(--border)] hover:border-accent',
      outline: 'bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-black',
      ghost: 'bg-transparent hover:bg-[var(--card-bg)] text-[var(--foreground-muted)] hover:text-[var(--foreground)]',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    const buttonClasses = cn(baseStyles, variants[variant], sizes[size], className)

    // If asChild is true, render the child element with button styles
    if (asChild && isValidElement(children)) {
      return cloneElement(children as ReactElement, {
        className: cn(buttonClasses, (children as ReactElement).props.className),
        ref,
        ...props,
      })
    }

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
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
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
