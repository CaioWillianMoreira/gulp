var gulp = require('gulp');
var html = require('gulp-htmlmin');
var sass = require('gulp-sass');

// sass
gulp.task('sass', function() {
  return gulp.src('./src/scss/style.scss')
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(gulp.dest('./css/'));
});

// html
gulp.task('html', function() {
  return gulp.src('./src/index.html')
  .pipe(html({collapseWhitespace: true}))
  .pipe(gulp.dest('./dest/'));
});

gulp.task('default', ['html', 'sass'], function() {
  gulp.watch('./src/index.html', ['html']);
  gulp.watch('./src/scss/style.scss', ['sass']);
});
