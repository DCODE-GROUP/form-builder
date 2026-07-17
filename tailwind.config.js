const brand = {
  25: 'var(--fb-brand-25, #F5EFF3)',
  50: 'var(--fb-brand-50, #EDDEE7)',
  100: 'var(--fb-brand-100, #E6CBDB)',
  200: 'var(--fb-brand-200, #D9B0C8)',
  300: 'var(--fb-brand-300, #C78AAD)',
  400: 'var(--fb-brand-400, #BA6E9A)',
  500: 'var(--fb-brand-500, #A94981)',
  600: 'var(--fb-brand-600, #9E3371)',
  700: 'var(--fb-brand-700, #931C61)',
  800: 'var(--fb-brand-800, #76164E)',
  900: 'var(--fb-brand-900, #58113A)',
  950: 'var(--fb-brand-950, #3B0B27)',
};

module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/js/**/*.{vue,js,ts,jsx,tsx}',
    './example/src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'success-700': 'rgba(6, 118, 71, 1)',
        'success-50': 'rgba(236, 253, 243, 1)',
        'success-200': 'rgba(171, 239, 198, 1)',
        brand,
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
