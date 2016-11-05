/// <binding />
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var _ = require('lodash');

var src = [
    '../HomeAutomation/client/**/*.{js,html}', '../HomeAutomation/common/**/*.{js,html}', '../HomeAutomation/node_modules/**/*',
    '../HomeAutomation/server/**/*.{js,html}', '../HomeAutomation/static/**/*'
];


gulp.task('getNewBuild', function () {
    gulp.src(['../HomeAutomation/client/**/*.{js,html}'])
        .pipe(gulp.dest('./client'));

    gulp.src(['../HomeAutomation/common/**/*.{js,html}'])
        .pipe(gulp.dest('./common'));

    gulp.src(['../HomeAutomation/node_modules/**/*'])
        .pipe(gulp.dest('./node_modules'));


    gulp.src(['../HomeAutomation/server/**/*.{js,html}'])
        .pipe(gulp.dest('./server'));

    gulp.src(['../HomeAutomation/static/**/*'])
        .pipe(gulp.dest('./static'));

    gulp.src(['../HomeAutomation/server.js', '../HomeAutomation/package.json'])
        .pipe(gulp.dest('./'));

});


gulp.task('default', function () {

});