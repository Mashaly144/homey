module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
    fontFamily: {
      primary: 'cairo',
    },
    extend: {
      colors: {
        primary: '#3671E9',
        secondary: '#316AB175',
        hover: '#2766E6',
        // blue: {
        //   DEFAULT: '#3671E9',
        //   hover: '#2766E6',
        // },
      },
      boxShadow: {
        primary: '0px 20px 200px rgba(57, 23, 119, 0.05)',
      },
      backgroundImage: {},
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
    },
  },
  plugins: [],
};
