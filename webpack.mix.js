let mix = require('laravel-mix');

mix.sass('src/scss/master.scss', 'dist/css')

mix.options({
    // Don't perform any css url rewriting by default
    processCssUrls: false,
})