'use strict';

var gulp = require('gulp');
var rename = require("gulp-rename");
var ngConstant = require('gulp-ng-constant');

module.exports = function(options) {
  gulp.task('config:dev', function () {
    gulp.src('./config/dev.json')
      .pipe(rename("config.js")) // important rename dev to config
      .pipe(ngConstant({
        name: 'Twenty20App.config',
      }))
      // Writes config.js to src/app/config.json folder
      .pipe(gulp.dest('src/app'));
  });

  gulp.task('config:staging', function () {
    gulp.src('./config/staging.json')
      .pipe(rename("config.js")) // important rename prod to config
      .pipe(ngConstant({
        name: 'Twenty20App.config',
      }))
      // Writes config.js to src/app/config.json folder
      .pipe(gulp.dest('src/app'));
  });


  gulp.task('config:production', function () {
    gulp.src('./config/production.json')
      .pipe(rename("config.js")) // important rename prod to config
      .pipe(ngConstant({
        name: 'Twenty20App.config',
      }))
      // Writes config.js to src/app/config.json folder
      .pipe(gulp.dest('src/app'));
  });
};