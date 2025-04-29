export default {
    prefix: 'tw-',
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}', // include if using Next.js 13+ app directory
    ],
    theme: {
      extend: {},
    },
    plugins: [],
};