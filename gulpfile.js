var version = '0.0.0'

require("coffee-script/register");
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var amdOptimize = require("amd-optimize");
var es = require('event-stream');
var htmlreplace = require('gulp-html-replace');

var package = require("./package.json");

var src = 'app/assets/javascripts/';
var dest = 'public/' + package.version;
var javascriptDest = dest + '/javascripts';

gulp.task('scripts', function () {

    var main = require('./' + src + 'main.coffee');
    var amdConfig = main.amdConfig();
    amdConfig.baseUrl = src;
    amdConfig.findNestedDependencies = true;

    var javaScriptFromCoffeeScript = gulp.src(src + '/**/*.coffee')
        .pipe(coffee())
        .pipe(amdOptimize('main', amdConfig))
        .pipe(concat('application.min.js'));


    var requirejs = gulp.src(src + 'vendor/requirejs/require.js')
        .pipe(concat('require.min.js'));


    return es.merge(requirejs, javaScriptFromCoffeeScript)
        .pipe(uglify())
        .pipe(gulp.dest(javascriptDest));
});

gulp.task('html', function() {
    var dest = 'app/views/layouts/';
    gulp.src(dest + 'application.html.erb')
        .pipe(htmlreplace({
            js: {
                src: [['1.0.0/javascripts/application.min', '1.0.0/javascripts/require.min.js']],
                tpl: '<script data-main="%s" src="%s"></script>'
            }
        }))
        .pipe(gulp.dest(dest));
});