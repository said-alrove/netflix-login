function minify() {
  // PLUGINS
  const { src, dest } = require('gulp');
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

  return src('./src/assets/**/*')
    .pipe(imagemin([
        imageminMozjpeg(jpegConfig),
        imageminOptipng(pngConfig)
    ]))
    .pipe(dest('./public/assets'))
}

function convertWebp() {
  // PLUGINS
  const { src, dest } = require('gulp');
  const 
    webp = require('gulp-webp'),
    imageminWebp = require('imagemin-webp');
  // CONFIG
  const webpConfig = {
    quality: 75
  }

  return src('./src/assets/img/*')
    .pipe(webp([
      imageminWebp(webpConfig)
    ]))
    .pipe(dest('./public/assets/img'))
}

const { parallel } = require('gulp');
// This is mandatory
exports.images = parallel(minify, convertWebp)