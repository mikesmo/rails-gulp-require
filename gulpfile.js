var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('scripts', function () {
    gulp.src('app/assets/javascripts/*.js')
        .pipe(concat('application.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/javascripts'));

});