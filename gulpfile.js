var gulp = require("gulp");
var html = require("gulp-htmlmin");

// html
gulp.task("html", function() {
  return gulp.src("./src/index.html")
  .pipe(html({collapseWhitespace: true}))
  .pipe(gulp.dest("./dist/"));
});

gulp.task("default", function() {
  return;
});
