'use strict';

var config = require('./gulp-config.json');

var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('default', function () {
    gulp.src('.')
        .pipe(webserver({
            host: 'localhost',
            port: '8021',
            livereload: false,
            directoryListing: false
        }));
});