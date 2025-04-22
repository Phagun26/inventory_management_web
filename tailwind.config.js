/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-background',
    'text-foreground',
    'bg-primary',
    'bg-primary-hover',
    'bg-secondary',
    'bg-secondary-hover',
    'border-border',
    'bg-input-background',
    'text-error'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--primary-hover)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          hover: 'var(--secondary-hover)',
        },
        border: 'var(--border)',
        'input-background': 'var(--input-background)',
        error: 'var(--error)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 