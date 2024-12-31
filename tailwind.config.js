/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 2s linear infinite',
        'particle1': 'particle 8s ease-in-out infinite',
        'particle2': 'particle 12s ease-in-out infinite',
        'particle3': 'particle 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        particle: {
          '0%, 100%': { 
            transform: 'translate(0px, 0px) scale(1)',
            opacity: '0',
          },
          '50%': { 
            transform: 'translate(100px, -100px) scale(2)',
            opacity: '0.8',
          },
        },
      },
    },
  },
  plugins: [],
}
