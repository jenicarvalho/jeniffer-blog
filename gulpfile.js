'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./app/sass/style.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./app/sass/style.scss', ['sass']);
});

gulp.task('default', ['sass:watch']);
