import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Eco-themed color palette
        forest: {
          50: '#f0f9f4',
          100: '#dcf2e3',
          200: '#bce4ca',
          300: '#8fcea5',
          400: '#5ab078',
          500: '#369459', // Primary forest green
          600: '#2a7a4a',
          700: '#24623d',
          800: '#204e33',
          900: '#1c412b',
        },
        leaf: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e', // Leaf green
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        earth: {
          50: '#faf7f2',
          100: '#f4ede0',
          200: '#e8d9c0',
          300: '#d9bf9a',
          400: '#c9a073',
          500: '#b8865a', // Earth brown
          600: '#a6734d',
          700: '#8a5d42',
          800: '#714d3a',
          900: '#5d4032',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'eco': '1rem',
        'eco-lg': '1.5rem',
      },
      boxShadow: {
        'eco': '0 4px 20px rgba(34, 197, 94, 0.1)',
        'eco-lg': '0 10px 40px rgba(34, 197, 94, 0.15)',
      },
    },
  },
  plugins: [],
}
export default config
