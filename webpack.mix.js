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

//Jquery
mix.babel([
    'resources/js/plugins/jquery/jquery.js',
], 'public/js/plugins/jquery/jquery.js').version();

//SweetAlert
mix.babel([
    'resources/js/plugins/sweetalert/sweetalert.js',
], 'public/js/plugins/sweetalert/sweetalert.js').version();

mix.styles([
    'resources/js/plugins/sweetalert/sweetalert.css',
], 'public/js/plugins/sweetalert/sweetalert.css').version();

//Scripts
mix.babel([
    'resources/js/home/index.js',
], 'public/js/home/index.js').version();
