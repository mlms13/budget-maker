var gulp      = require('gulp'),
    streamify = require('gulp-streamify'),
    source    = require('vinyl-source-stream');

gulp.task('js', function () {
    var browserify = require('browserify'),
        uglify     = require('gulp-uglify');

    return browserify('./js/app.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    gulp.watch('./js/**/*.js', ['js']);
});

gulp.task('default', ['js', 'watch']);