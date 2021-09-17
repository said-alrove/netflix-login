function dev() {
  // TASKS
  const 
    { watch } = require('gulp'),
    { html } = require('./html.js'),
    { css } = require('./styles.js'),
    { images } = require('./images.js'),
    { scripts } = require('./scripts.js');
  // CONFIG
  const gulpConfig = {
    delay: 1000, 
    ignoreInitial: false
  }
  watch("./src/*.html", gulpConfig, html);
  watch("./src/scss/**/*.scss", gulpConfig, css);
  watch('./src/assets/**/*', gulpConfig, images)
  watch('./src/scripts/*.js', gulpConfig, scripts);
}

const 
 { series } = require('gulp'),
 { html } = require('./html.js'),
 { css } = require('./styles.js'),
 { images } = require('./images.js'),
 { scripts } = require('./scripts');
exports.build = series(html, css, images, scripts);
exports.default = dev;
