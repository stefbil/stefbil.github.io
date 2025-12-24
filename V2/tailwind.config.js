/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#050505',
        'surface-color': '#0f0f0f',
        'surface-hover': '#1a1a1a',
        'text-primary': '#ffffff',
        'text-secondary': '#a1a1aa',
        'accent-primary': '#14b8a6', // Teal-500
        'accent-secondary': '#06b6d4', // Cyan-500
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Outcome', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'md': '12px',
        'lg': '24px',
      },
      animation: {
        'in': 'fadeIn 0.5s ease-out',
        'slide-in-from-bottom': 'slideUp 0.5s ease-out forwards',
        'slide-in-from-top': 'slideDown 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
