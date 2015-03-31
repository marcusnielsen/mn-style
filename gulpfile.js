var gulp = require('gulp');

var config = {
  css: {
    lessSource: './styles/main.less',
    cssSource: './client/**/*.css',
    dest: './dist/client',
    sourcemaps: './maps'
  }
};

require('mn-gulp')(gulp, config);
