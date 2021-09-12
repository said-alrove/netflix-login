function css() {
  // PLUGINS
  const { src, dest } = require('gulp');
  const 
    sass = require('gulp-sass')(require('sass')),
    plumber = require('gulp-plumber'),
    purgecss = require('gulp-purgecss');
  // POSTCSS PLUGINS
  const 
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano');
  var postcssPlugins = [
    autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }),
    cssnano()
  ]
  // CONFIG
  const sassConfig = {
    outputStyle: 'compressed',
    precision: 3,
    sourceMap: true
  }

  return src('./src/scss/app.scss')
    .pipe(plumber())
    .pipe(sass(sassConfig).on("error", sass.logError))
    .pipe(postcss(postcssPlugins))
    .pipe(purgecss({
      content: ['./src/*.html']
    }))
    .pipe(plumber.stop())
    .pipe(dest('./public/styles'))
}

// This is mandatory
exports.css = css;