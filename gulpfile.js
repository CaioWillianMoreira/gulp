var gulp = require('gulp');
var html = require('gulp-htmlmin');

// html
gulp.task('html', function() {
  return gulp.src('./src/index.html')
  .pipe(html({collapseWhitespace: true}))
  .pipe(gulp.dest('./dest/'));
});

gulp.task('default', ['html'], function() {
  gulp.watch('./src/index.html', ['html']);
});
