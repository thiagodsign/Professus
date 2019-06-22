var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
let cleanCSS = require('gulp-clean-css');

gulp.task('css', ['sass'], () => {
  return gulp.src('./ativos/css/estilo.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./ativos/css/'));
});

sass.compiler = require('node-sass');

gulp.task('sass', () => {
  return gulp.src('sass/estilo.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./ativos/css/'))
});

gulp.task('default', ['css'], function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  return gulp.watch(['./sass/**/*.scss', 'index.html'], ['css']).on('change', reload);
});
