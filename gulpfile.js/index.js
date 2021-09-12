function dev() {
  // TASKS
  const 
    { watch } = require('gulp'),
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

exports.default = dev;