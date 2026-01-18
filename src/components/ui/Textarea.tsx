import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s/g, '-')

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-white/80 mb-2"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            'w-full px-4 py-3.5 rounded-xl border text-white placeholder-white/40',
            'transition-all duration-300 resize-none',
            'focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50',
            'bg-white/5 backdrop-blur-sm',
            error
              ? 'border-red-500/50 focus:ring-red-500/50'
              : 'border-white/10 hover:border-white/20 hover:bg-white/10',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-red-400">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-2 text-sm text-white/50">{helperText}</p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea }
