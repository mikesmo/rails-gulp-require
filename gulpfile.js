var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var amdOptimize = require("amd-optimize");
var es = require('event-stream');

var dest = 'public/';
var vendor = '/public/vendor/';

var requireConfig = {
    findNestedDependencies : true,
    baseUrl: 'app/assets/javascripts',
    paths: {
        jquery: 'vendor/jquery/dist/jquery.min',
        angular: 'vendor/angular/angular.min',
        domReady: 'vendor/domReady/domReady'
    },
    shim: {
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        }
    }
};

var options = {
    umd: false
};

gulp.task('scripts', function () {
    var javaScriptFromCoffeeScript = gulp.src('app/assets/javascripts/*.coffee')
       .pipe(coffee());

    var js = gulp.src('app/assets/javascripts/**/*.js');
    var jquery = gulp.src(vendor + 'jquery/dist/jquery.min.js');
    var vendor = gulp.src('public/vendor/**/*.js');

    return es.merge(javaScriptFromCoffeeScript, vendor)
        .pipe(amdOptimize('main', requireConfig))
        .pipe(concat('application.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dest + 'javascripts'));
});