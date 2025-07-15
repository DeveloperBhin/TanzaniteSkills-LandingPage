/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        keyframes: {
          'flow-up': {
            '0%': { transform: 'translateY(100%)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
        },
        animation: {
          'flow-up': 'flow-up 2s ease-in-out forwards',
        },
      },
    },
    plugins: [],
  }
  