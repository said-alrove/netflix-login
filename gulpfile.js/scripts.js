function scripts() {
    const { src, dest } = require('gulp');
    const 
        plumber = require('gulp-plumber'),
        concat = require('gulp-concat'),
        terser = require('gulp-terser');
    return src([
        './src/scripts/modernizr.js', 
        './src/scripts/validation.js'
    ])
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(terser())
    .pipe(plumber.stop())
    .pipe(dest('./public/scripts'))
}

exports.scripts = scripts;