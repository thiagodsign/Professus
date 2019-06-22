var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
let cleanCSS = require('gulp-clean-css');

gulp.task('minificar-css', () => {
  return gulp.src('estilo.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./'));
});

sass.compiler = require('node-sass');

gulp.task('sass', () => {
  return gulp.src('sass/estilo.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./estilo/'))
});

gulp.task('default', ['sass', 'minificar-css'], function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  return gulp.watch(['./sass/**/*.scss', 'index.html'], ['sass', 'minificar-css']).on('change', reload);
});
