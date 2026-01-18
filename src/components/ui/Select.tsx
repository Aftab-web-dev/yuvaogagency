import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helperText?: string
  options: SelectOption[]
  placeholder?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helperText, options, placeholder, id, ...props }, ref) => {
    const selectId = id || label?.toLowerCase().replace(/\s/g, '-')

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-white/80 mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              'w-full px-4 py-3.5 rounded-xl border text-white',
              'transition-all duration-300 appearance-none cursor-pointer',
              'focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50',
              'bg-white/5 backdrop-blur-sm',
              error
                ? 'border-red-500/50 focus:ring-red-500/50'
                : 'border-white/10 hover:border-white/20 hover:bg-white/10',
              className
            )}
            style={{
              colorScheme: 'dark'
            }}
            {...props}
          >
            {placeholder && (
              <option value="" disabled className="bg-[#1a2744] text-white/60">
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="bg-[#1a2744] text-white py-2"
              >
                {option.label}
              </option>
            ))}
          </select>
          {/* Custom dropdown arrow */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/50"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
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

Select.displayName = 'Select'

export { Select }
