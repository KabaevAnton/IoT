/// <binding />
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var _ = require('lodash');

var src = ['./client/**/*.{js,html}', './common/**/*.{js,html}', './node_modules/**/*', './server/**/*.{js,html}', './static/**/*'];
 

gulp.task('afterBuild', function () {
    del.sync(_.map(src, function (path) {
        return '../RasberryPi' + path.substring(1);
    }),
    {
        force: true
    });

    //del.sync('../RasberryPi/server.js', { force: true });

    gulp.src(src, { base: '.' })
        .pipe(gulp.dest('../RasberryPi/'));

    gulp.src(['server.js', 'package.json']).pipe(gulp.dest('../RasberryPi/'));


    
});



gulp.task('default', function () {
    
});