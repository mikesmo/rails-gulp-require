var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var es = require('event-stream');

gulp.task('scripts', function () {
    var javaScriptFromCoffeeScript = gulp.src('app/assets/javascripts/*.coffee')
       .pipe(coffee());

    var js = gulp.src('app/assets/javascripts/*.js');

    return es.merge(javaScriptFromCoffeeScript, js)
        .pipe(concat('application.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/javascripts'));
});