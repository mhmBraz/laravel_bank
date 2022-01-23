const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

//Scripts
mix.babel([
    'resources/js/common/util.js',
], 'public/js/common/util.js').version();

//Plugins
mix.babel([
    'resources/js/plugins/jquery.js',
], 'public/js/plugins/jquery.js').version();

//Scripts
mix.babel([
    'resources/js/home/index.js',
], 'public/js/home/index.js').version();
