function html() {
  // PLUGINS
  const { src, dest } = require('gulp');
  const 
    htmlmin = require('gulp-htmlmin'),
    cacheBust = require('gulp-cache-bust'),
    plumber = require('gulp-plumber');
  // CONFIG
  const htmlConfig = {
    collapseWhitespace: true,
    removeComments: true
  }
  return src('./src/*.html')
    .pipe(plumber())
    .pipe(htmlmin(htmlConfig))
    .pipe(cacheBust({
        type: 'timestamp'
    }))
    .pipe(dest('./public'))
}

// This is mandatory
exports.html = html;