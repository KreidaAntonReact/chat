/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    '../../apps/frontend/sidebar/src**/*.{vue,js,ts,jsx,tsx}',
    '../../apps/frontend/host/src**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
