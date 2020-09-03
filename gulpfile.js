var gulp = require('gulp');
var html = require('gulp-htmlmin');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();

// browser sync
gulp.task('BS', ['html', 'sass'],function() {
  browserSync.init({
    server: {
      baseDir: './dest/'
    }
  })
  gulp.watch('./src/index.html', ['html']);
  gulp.watch('./src/scss/style.scss', ['sass']);
});

// sass
gulp.task('sass', function() {
  return gulp.src('./src/scss/style.scss')
  .pipe(sass({outputStyle: 'compressed'}))
  .on('error', notify.onError('Error: <%= error.message %>'))
  .pipe(gulp.dest('./css/'))
  .pipe(browserSync.stream());
});

// html
gulp.task('html', function() {
  return gulp.src('./src/index.html')
  .pipe(html({collapseWhitespace: true}))
  .on('error', notify.onError('Error: <%= error.message %>'))
  .pipe(gulp.dest('./dest/'))
  .pipe(browserSync.stream());
});

gulp.task('default', ['BS']);
