const mix = require('laravel-mix');
require('palette-webpack-plugin/src/mix');

mix
  .setPublicPath('./assets');

mix
  .sass('resources/styles/style.scss', 'css')
  .options({ processCssUrls: false });

mix
  .js('resources/scripts/script.js', 'js');

mix
  .copyDirectory('resources/images', 'assets/images');

// mix
//   .copyDirectory('node_modules/@fortawesome/fontawesome-free/webfonts', 'assets/fonts/fontawesome')

// mix
//   .copyDirectory('resources/fonts', 'assets/fonts');
