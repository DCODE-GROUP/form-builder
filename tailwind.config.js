module.exports = {
  content: [
    './resources/**/*.js',
    './public/index.php',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        'success-700': 'rgba(6, 118, 71, 1)',
        'success-50': 'rgba(236, 253, 243, 1)',
        'success-200': 'rgba(171, 239, 198, 1)',
        brand: {
          25: "#FAFAFA",
          50: "#E6EBF0",
          100: "#C1D1DE",
          200: "#809BB3",
          300: "#608CB1",
          400: "#335F85",
          500: "#003767",
          600: "#002c52",
          700: "#002748",
          800: "#00213e",
          900: "#001c34",
          950: "#001629",
        },
        'error-700': 'rgba(180, 35, 24, 1)',
        'error-500': 'rgb(206,87,78)',
        'warning-50': 'rgba(255, 250, 235, 1)',
        'warning-200': 'rgba(254, 223, 137, 1)',
        'warning-500': 'rgba(247, 144, 9, 1)',
        'warning-700': 'rgba(181, 71, 8, 1)',
      },
      width: {
        'fill': '-webkit-fill-available',
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};