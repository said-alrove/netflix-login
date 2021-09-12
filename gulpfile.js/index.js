function dev() {
  // TASKS
  const 
    { watch, src } = require('gulp'),
    { html } = require('./html.js'),
    { css } = require('./styles.js'),
    { images } = require('./images.js');
  // CONFIG
  const gulpConfig = {
    delay: 1000, 
    ignoreInitial: false
  }
  watch("./src/*.html", gulpConfig, html);
  watch("./src/scss/*.scss", gulpConfig, css);
  watch('./src/img/*', gulpConfig, images)
}

const 
 { series } = require('gulp'),
 { html } = require('./html.js'),
 { css } = require('./styles.js'),
 { images } = require('./images.js');
exports.build = series(html, css, images);
exports.default = dev;
