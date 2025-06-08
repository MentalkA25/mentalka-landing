/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d4ff',
          300: '#a5b8ff',
          400: '#7d94ff',
          500: '#4d6bff',
          600: '#1e2d4c',
          700: '#1a2640',
          800: '#151f33',
          900: '#0f172a',
        },
        blur: {
          blue: 'rgba(77, 107, 255, 0.2)',
          purple: 'rgba(147, 51, 234, 0.2)',
          pink: 'rgba(236, 72, 153, 0.2)',
          teal: 'rgba(20, 184, 166, 0.2)',
          yellow: 'rgba(234, 179, 8, 0.2)',
          orange: 'rgba(249, 115, 22, 0.2)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

