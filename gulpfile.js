var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', () => {
  return gulp.src('sass/estilo.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'))
});

gulp.task('sass:watch', () => {
  gulp.watch('./sass/**/*.scss', ['sass'])
});