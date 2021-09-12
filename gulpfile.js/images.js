function minify() {
  // PLUGINS
  const { src, dest, parallel } = require('gulp');
  const 
    imagemin = require('gulp-imagemin'),
    imageminMozjpeg = require('imagemin-mozjpeg'),
    imageminOptipng = require('imagemin-optipng');
  // CONFIG
  const jpegConfig = {
    quality: 75
  }
  const pngConfig = {
    optimizationLevel: 5
  }

  return src('./src/img/*')
    .pipe(imagemin([
        imageminMozjpeg(jpegConfig),
        imageminOptipng(pngConfig)
    ]))
    .pipe(dest('./public/img'))
}

function convertWebp() {
  // PLUGINS
  const { src, dest, parallel } = require('gulp');
  const 
    webp = require('gulp-webp'),
    imageminWebp = require('imagemin-webp');
  // CONFIG
  const webpConfig = {
    quality: 75
  }

  return src('./src/img/*')
    .pipe(webp([
      imageminWebp(webpConfig)
    ]))
    .pipe(dest('./public/img/webp'))
}

const { parallel } = require('gulp');
// This is mandatory
exports.images = parallel(minify, convertWebp)