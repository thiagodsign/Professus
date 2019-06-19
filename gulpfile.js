var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

sass.compiler = require('node-sass');

gulp.task('sass', () => {
  return gulp.src('sass/estilo.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'))
});

gulp.task('default', ['sass'], function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  return gulp.watch(['./sass/**/*.scss', 'index.html'], ['sass']).on('change', reload);
});
