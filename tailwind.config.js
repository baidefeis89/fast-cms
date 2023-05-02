/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        aq: {
          50: '#f3f4fb',
          100: '#e3e5f6',
          200: '#ced3ef',
          300: '#acb6e4',
          400: '#8592d5',
          500: '#6871c9',
          600: '#5557bb',
          700: '#4d4aab',
          800: '#413d84',
          900: '#3a3870',
          950: '#282645'
        }
      }
    }
  },
  plugins: []
};
