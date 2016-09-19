var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('bacon', function(){
  console.log('fak kok je dobra slanina, sick!');
});

gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});
