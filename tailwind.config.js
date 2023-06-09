/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '344px', // => @media (min-width: 344px) { ... }
      sm: '640px', // => @media (min-width: 640px) { ... }
      md: '768px', // => @media (min-width: 768px) { ... }
      lg: '1024px', // => @media (min-width: 1024px) { ... }
      xl: '1170px', // => @media (min-width: 1170px) { ... }
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
          accent: '#BE4E4E',
          'primary-content': '#FFFFFF',
          '--rounded-btn': '80px',
          '--border-btn': '1px',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
