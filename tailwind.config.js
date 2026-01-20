/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // MadeByShape-inspired color scheme
        // Background colors
        background: {
          dark: '#0D0D0D',
          DEFAULT: '#0D0D0D',
          light: '#FFFFFF',
          muted: '#F5F5F5',
        },
        // Accent - Yellow (user selected)
        accent: {
          DEFAULT: '#faff01',
          hover: '#e0e500',
          light: '#fdffa1',
          dark: '#c9ce00',
        },
        // Text colors
        foreground: {
          DEFAULT: '#FFFFFF',
          dark: '#0D0D0D',
          muted: 'rgba(255, 255, 255, 0.6)',
          'muted-dark': 'rgba(0, 0, 0, 0.6)',
        },
        // Border colors
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.1)',
          light: 'rgba(0, 0, 0, 0.1)',
        },
        // Legacy colors (for compatibility)
        primary: {
          50: '#feffd9',
          100: '#fdffa1',
          200: '#fcff69',
          300: '#faff01',
          400: '#e0e500',
          500: '#faff01',
          600: '#c9ce00',
          700: '#a3a700',
          800: '#7d8000',
          900: '#575900',
          950: '#313200',
        },
        navy: {
          50: '#f0f4ff',
          100: '#e0e8ff',
          200: '#c7d4fe',
          300: '#a4b8fc',
          400: '#8093f8',
          500: '#5c6bf2',
          600: '#4a4de6',
          700: '#3d3bcb',
          800: '#1e2756',
          900: '#141a42',
          950: '#0D0D0D',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#0D0D0D',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-dark': 'linear-gradient(135deg, #0D0D0D 0%, #1a1a1a 50%, #0D0D0D 100%)',
        'hero-light': 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 50%, #FFFFFF 100%)',
        'accent-gradient': 'linear-gradient(135deg, #faff01 0%, #e0e500 100%)',
        'card-dark': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
        'card-light': 'linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.05) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'cursor-blink': 'cursorBlink 1s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(250, 255, 1, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(250, 255, 1, 0.6)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(250, 255, 1, 0.5)',
        'glow-lg': '0 0 60px -15px rgba(250, 255, 1, 0.6)',
        'glow-accent': '0 0 40px -10px rgba(250, 255, 1, 0.5)',
        'card': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 35px 60px -12px rgba(0, 0, 0, 0.6)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
