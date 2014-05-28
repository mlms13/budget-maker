var gulp = require('gulp'),
    source = require('vinyl-source-stream');

gulp.task('js', function () {
    var browserify = require('browserify');

    return browserify('./js/app.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    gulp.watch('./js/**/*.js', ['js']);
});

gulp.task('default', ['js', 'watch']);