const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
  processCssUrls: false,
  terser: {
    extractComments: false,
  },
  cssNano: {
    minify: false,
  },
})
  .setPublicPath('public')
  .js('resources/js/index.js', 'public')
  .postCss('resources/css/index.css', 'public', [
    require('tailwindcss'),
    require('postcss-nested')
  ])
  .vue()
  .webpackConfig({
    resolve: {
      symlinks: false,
      alias: {
        '@': path.resolve(__dirname, 'resources/'),
      },
    },
    optimization: {
      minimize: false
    },
  });