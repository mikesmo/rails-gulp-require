require("coffee-script/register");
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var amdOptimize = require("amd-optimize");
var es = require('event-stream');

var dest = 'public/';
var vendor = '/public/vendor/';


var options = {
    umd: false
};

gulp.task('configToJs', function () {
    gulp.src('./app/assets/javascripts/main.coffee')
        .pipe(coffee())
        .pipe(gulp.dest('./'));
});

gulp.task('configEval', function () {
    var configCoffee = require('./config.coffee');
    var config = configCoffee.requireConfig();
    console.log(JSON.stringify(config));
    console.log(config.paths.jquery);
});

gulp.task('scripts', function () {
    var main = require('./app/assets/javascripts/main.coffee');
    var amdConfig = main.amdConfig();
    amdConfig.baseUrl = 'app/assets/javascripts';
    amdConfig.findNestedDependencies = true;

    var javaScriptFromCoffeeScript = gulp.src('app/assets/javascripts/**/*.coffee')
       .pipe(coffee());

    var requirejs = gulp.src('app/assets/javascripts/vendor/requirejs/require.js')
        .pipe(concat('require.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dest + 'javascripts'));

    return es.merge(javaScriptFromCoffeeScript)
        .pipe(amdOptimize('main', amdConfig))
        .pipe(concat('application.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dest + 'javascripts'));
});