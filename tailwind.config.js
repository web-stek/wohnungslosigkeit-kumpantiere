const colors = require('tailwindcss/colors')


module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        'th-background': 'var(--background)',
        'th-background-secondary': 'var(--background-secondary)',
        'th-foreground': 'var(--foreground)',
        'th-primary-dark': 'var(--primary-dark)',
        'th-primary-medium': 'var(--primary-medium)',
        'th-primary-light': 'var(--primary-light)',
        'th-accent-dark': 'var(--accent-dark)',
        'th-accent-medium': 'var(--accent-medium)',
        'th-accent-light': 'var(--accent-light)',
        ocean: {
          100: '#8df3e2',
          200: '#54eed4',
          300: '#1be8c5',
          400: '#12b297',
          500: '#10A678',
          600: '#0b6b5b',
          700: '#07473c',
          800: '#04241e',
          900: '#000000',
        }
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

