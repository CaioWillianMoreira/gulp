var gulp = require('gulp');
var html = require('gulp-htmlmin');
var sass = require('gulp-sass');
var notify = require('gulp-notify');

// sass
gulp.task('sass', function() {
  return gulp.src('./src/scss/style.scss')
  .pipe(sass({outputStyle: 'compressed'}))
  .on('error', notify.onError('Error: <%= error.message %>'))
  .pipe(gulp.dest('./css/'));
});

// html
gulp.task('html', function() {
  return gulp.src('./src/index.html')
  .pipe(html({collapseWhitespace: true}))
  .on('error', notify.onError('Error: <%= error.message %>'))
  .pipe(gulp.dest('./dest/'));
});

gulp.task('default', ['html', 'sass'], function() {
  gulp.watch('./src/index.html', ['html']);
  gulp.watch('./src/scss/style.scss', ['sass']);
});
