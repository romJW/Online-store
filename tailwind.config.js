/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      xs: '344px', // => @media (min-width: 344px) { ... }
      sm: '640px', // => @media (min-width: 640px) { ... }
      md: '768px', // => @media (min-width: 768px) { ... }
      lg: '1024px', // => @media (min-width: 1024px) { ... }
      xl: '1170px', // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      days: ['Days', 'serif'],
      mont:['Montserrat', 'serif'],
    },
  },
  daisyui: {
    themes: [
      {
        berry: {
          primary: '#E41D24',
          secondary: '#AC9B9C',
          neutral: '#ffffff',
          accent: '#37cdbe',
          'primary-content': '#FFFFFF',
          '--rounded-btn': '80px',
          '--border-btn': '1px',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
