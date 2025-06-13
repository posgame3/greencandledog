/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#121212',
        'neon-green': '#00FF00',
        'dark-gray': '#1E1E1E',
      },
      fontFamily: {
        'impact': ['Impact', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
      },
      animation: {
        'flicker': 'flicker 2s infinite',
        'glow': 'glow 2s infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
        glow: {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.2)' },
        },
      },
    },
  },
  plugins: [],
} 