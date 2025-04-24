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
        brand: 'rgba(158, 51, 113, 1)',
        'brand-700': 'rgba(147, 28, 97, 1)',
        'brand-400': 'rgb(192,94,148)',
        'brand-300': 'rgba(199, 138, 173, 1)',
        'brand-200': 'rgb(250,234,240)',
        'error-700': 'rgba(180, 35, 24, 1)',
        'error-500': 'rgb(206,87,78)',
      },
      width: {
        'fill': '-webkit-fill-available',
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};