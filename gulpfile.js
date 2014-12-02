var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var amdOptimize = require("amd-optimize");
var es = require('event-stream');

var dest = 'public/';
var vendor = 'public/vendor/';

var requireConfig = {
    baseUrl: 'app/assets/javascripts',
    paths: {
        app: '/assets/app'
    }
};
var options = {
    umd: false
};

gulp.task('scripts', function () {
    var javaScriptFromCoffeeScript = gulp.src('app/assets/javascripts/*.coffee')
       .pipe(coffee());

    var js = gulp.src('app/assets/javascripts/*.js');
    var jquery = gulp.src(vendor + 'jquery/dist/jquery.min.js');

    //return es.merge(javaScriptFromCoffeeScript, js, jquery)
    return gulp.src('app/assets/javascripts/*.js')
        .pipe(amdOptimize('index', requireConfig))
        .pipe(concat('application.min.js'))
        //.pipe(uglify())
        .pipe(gulp.dest(dest + 'javascripts'));
});