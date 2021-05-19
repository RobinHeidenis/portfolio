module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '0.5rem'
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
